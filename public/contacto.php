<?php
// Endpoint del formulario de contacto (src/components/ContactPage/ContactForm.tsx).
// Replica el flujo del sitio legacy: valida → verifica reCAPTCHA v2 → guarda en la
// tabla `registro` → envía correo a ventas. Responde JSON (AJAX) o HTML simple.
//
// Los secretos (BD y clave secreta de reCAPTCHA) NO van aquí: se leen de
// triaso-config.php, un nivel ARRIBA de public_html (ver server/triaso-config.example.php).

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '0');

use PHPMailer\PHPMailer\PHPMailer;

const CORREO_REMITENTE = 'informes@triaso.com.mx';
const NOMBRE_REMITENTE = 'Formulario de contacto - Triaso';
const CORREO_DESTINATARIOS = [
	'informes@triaso.com.mx',
	'yesenia@triaso.com.mx',
	'alejandra@triaso.com.mx',
];
const ASUNTO = '------Información solicitada desde sitio web-------';

$isAjax = (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
	|| (isset($_SERVER['HTTP_ACCEPT']) && str_contains($_SERVER['HTTP_ACCEPT'], 'application/json'));

/**
 * Termina la petición. Con AJAX responde JSON; sin JS, una página HTML mínima (como el legacy).
 * @param array<string,string> $campos errores por campo (solo en 422)
 */
function responder(int $codigo, string $clave, string $mensaje, bool $isAjax, array $campos = []): never
{
	http_response_code($codigo);
	if ($isAjax) {
		header('Content-Type: application/json; charset=utf-8');
		$cuerpo = ['ok' => $codigo === 200, 'code' => $clave, 'message' => $mensaje];
		if ($campos) {
			$cuerpo['fields'] = $campos;
		}
		echo json_encode($cuerpo, JSON_UNESCAPED_UNICODE);
	} else {
		header('Content-Type: text/html; charset=utf-8');
		$m = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');
		echo '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Contacto TRIASO</title></head>'
			. '<body><p>' . $m . '</p><p><a href="/contacto">Volver</a></p></body></html>';
	}
	exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
	header('Allow: POST');
	responder(405, 'metodo_no_permitido', 'Método no permitido.', $isAjax);
}

// --- Configuración con secretos ---
$rutaConfig = dirname(__DIR__) . '/triaso-config.php';
if (!is_file($rutaConfig)) {
	error_log('contacto: no se encontró el archivo de configuración en ' . $rutaConfig);
	responder(500, 'error_servidor', 'No pudimos enviar tu mensaje. Inténtalo más tarde o escríbenos por correo.', $isAjax);
}
/** @var array{db_host:string,db_name:string,db_user:string,db_pass:string,recaptcha_secret:string} $config */
$config = require $rutaConfig;

// --- Datos del formulario ---
function campo(string $nombre): string
{
	$valor = $_POST[$nombre] ?? '';
	return is_string($valor) ? trim($valor) : '';
}

$empresa = campo('company');
$nombre = campo('name');
$telefono = preg_replace('/[^0-9]/', '', campo('tel')); // solo dígitos, igual que el legacy
$correo = campo('email');
$mensaje = campo('message');

// --- Validación (el legacy solo validaba en el navegador) ---
$errores = [];
if ($empresa === '') {
	$errores['company'] = 'Escribe el nombre de tu empresa.';
} elseif (mb_strlen($empresa) > 250) {
	$errores['company'] = 'Máximo 250 caracteres.';
}
if ($nombre === '') {
	$errores['name'] = 'Escribe tu nombre.';
} elseif (mb_strlen($nombre) > 250) {
	$errores['name'] = 'Máximo 250 caracteres.';
}
if ($telefono === '') {
	$errores['tel'] = 'Escribe tu teléfono.';
} elseif (strlen($telefono) < 7 || strlen($telefono) > 30) {
	$errores['tel'] = 'Escribe un teléfono válido.';
}
if ($correo === '') {
	$errores['email'] = 'Escribe tu correo electrónico.';
} elseif (mb_strlen($correo) > 120 || !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
	$errores['email'] = 'Escribe un correo electrónico válido.';
}
if ($mensaje === '') {
	$errores['message'] = 'Escribe tu mensaje.';
} elseif (mb_strlen($mensaje) > 5000) {
	$errores['message'] = 'Máximo 5000 caracteres.';
}
if ($errores) {
	responder(422, 'validacion', 'Revisa los campos marcados.', $isAjax, $errores);
}

// --- Verificación de reCAPTCHA v2 en el servidor ---
$tokenCaptcha = campo('g-recaptcha-response');
$captchaOk = false;

if ($tokenCaptcha !== '') {
	$datosVerificacion = [
		'secret' => $config['recaptcha_secret'],
		'response' => $tokenCaptcha,
		'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
	];
	$verificacion = false;

	if (function_exists('curl_init')) {
		$ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
		curl_setopt_array($ch, [
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => http_build_query($datosVerificacion),
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_TIMEOUT => 10,
			CURLOPT_SSL_VERIFYPEER => true,
		]);
		$verificacion = curl_exec($ch);
		if ($verificacion === false) {
			error_log('contacto: fallo cURL al verificar reCAPTCHA: ' . curl_error($ch));
		}
		curl_close($ch);
	} elseif (ini_get('allow_url_fopen')) {
		$verificacion = @file_get_contents('https://www.google.com/recaptcha/api/siteverify?' . http_build_query($datosVerificacion));
		if ($verificacion === false) {
			error_log('contacto: fallo file_get_contents al verificar reCAPTCHA');
		}
	} else {
		error_log('contacto: no hay forma de verificar reCAPTCHA (sin cURL ni allow_url_fopen)');
	}

	if (is_string($verificacion)) {
		$resultado = json_decode($verificacion, true);
		$captchaOk = !empty($resultado['success']);
		if (!$captchaOk) {
			error_log('contacto: reCAPTCHA rechazado por Google: ' . $verificacion);
		}
	}
}

if (!$captchaOk) {
	responder(400, 'captcha_invalido', 'No pudimos verificar el captcha. Márcalo de nuevo e inténtalo otra vez.', $isAjax);
}

// --- Guardar en BD (misma tabla y columnas que el legacy) ---
$guardado = false;
try {
	$conexion = new PDO(
		'mysql:host=' . $config['db_host'] . ';dbname=' . $config['db_name'] . ';charset=utf8mb4',
		$config['db_user'],
		$config['db_pass'],
		[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
	);
	// Las columnas lada1, lada2, telefono2, ladafax, fax y domicilio son de un formulario
	// anterior; el legacy les manda un espacio y se conserva igual.
	$consulta = $conexion->prepare(
		'INSERT INTO registro (`fecha`,`empresa`,`nombre`,`lada1`,`telefono1`,`lada2`,`telefono2`,`ladafax`,`fax`,`correo`,`domicilio`,`equipo`)'
		. ' VALUES (:fecha,:empresa,:nombre,:lada1,:telefono1,:lada2,:telefono2,:ladafax,:fax,:correo,:domicilio,:equipo)'
	);
	$consulta->execute([
		':fecha' => date('Y-m-d H:i:s'),
		':empresa' => $empresa,
		':nombre' => $nombre,
		':lada1' => ' ',
		':telefono1' => $telefono,
		':lada2' => ' ',
		':telefono2' => ' ',
		':ladafax' => ' ',
		':fax' => ' ',
		':correo' => $correo,
		':domicilio' => ' ',
		':equipo' => $mensaje,
	]);
	$guardado = true;
} catch (Throwable $e) {
	error_log('contacto: no se pudo guardar el registro: ' . $e->getMessage());
}

// --- Enviar correo (mail() local de Hostinger vía PHPMailer 6) ---
$enviado = false;
try {
	require_once __DIR__ . '/lib/phpmailer/Exception.php';
	require_once __DIR__ . '/lib/phpmailer/PHPMailer.php';

	$esc = static fn(string $v): string => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
	$cuerpo = '<html><body><table>'
		. '<tr><td>Empresa: </td><td>' . $esc($empresa) . '</td></tr>'
		. '<tr><td>Nombre: </td><td>' . $esc($nombre) . '</td></tr>'
		. '<tr><td>Teléfono: </td><td>' . $esc($telefono) . '</td></tr>'
		. '<tr><td>Correo Electrónico: </td><td><a href="mailto:' . $esc($correo) . '">' . $esc($correo) . '</a></td></tr>'
		. '<tr><td>Equipo que solicita: </td><td>' . nl2br($esc($mensaje)) . '</td></tr>'
		. '</table></body></html>';

	$mail = new PHPMailer(true);
	$mail->CharSet = PHPMailer::CHARSET_UTF8;
	$mail->isMail();
	$mail->setFrom(CORREO_REMITENTE, NOMBRE_REMITENTE, false);
	$mail->addReplyTo($correo, $nombre);
	foreach (CORREO_DESTINATARIOS as $destinatario) {
		$mail->addAddress($destinatario);
	}
	$mail->Subject = ASUNTO;
	$mail->msgHTML($cuerpo);
	$mail->send();
	$enviado = true;
} catch (Throwable $e) {
	error_log('contacto: no se pudo enviar el correo: ' . $e->getMessage());
}

// Si al menos se guardó o se envió, el contacto no se pierde.
if (!$guardado && !$enviado) {
	responder(500, 'error_envio', 'No pudimos enviar tu mensaje. Inténtalo más tarde o escríbenos por correo.', $isAjax);
}

responder(200, 'ok', 'Gracias, tu mensaje fue enviado. Te contactaremos a la brevedad.', $isAjax);
