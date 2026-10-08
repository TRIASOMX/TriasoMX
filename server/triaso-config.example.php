<?php
// Plantilla de configuración del formulario de contacto (public/contacto.php).
//
// 1. Copia este archivo como `triaso-config.php`.
// 2. Llena los valores (están en hPanel / en el accesoDB.php y contacto.php del sitio legacy).
// 3. Súbelo UN nivel arriba de public_html (la carpeta que contiene a public_html),
//    para que no se pueda descargar por URL. contacto.php lo busca en dirname(__DIR__).
//
// Nunca lo pongas dentro de public/ ni lo commitees (está en .gitignore).

return [
	'db_host' => '127.0.0.1',
	'db_name' => '',
	'db_user' => '',
	'db_pass' => '',
	// Clave SECRETA de reCAPTCHA v2 (casilla). La clave de sitio va en PUBLIC_RECAPTCHA_SITE_KEY.
	'recaptcha_secret' => '',
];
