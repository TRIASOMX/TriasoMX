import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

// Formulario de contacto. Envía a public/contacto.php (mismo flujo que el sitio legacy:
// reCAPTCHA v2 → tabla `registro` → correo a ventas).

const ENDPOINT = "/contacto.php";
const SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY as string | undefined;

type FieldName = "company" | "name" | "tel" | "email" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "sending" | "success" | "error";

type Grecaptcha = {
  render: (el: HTMLElement, opts: { sitekey: string; callback?: () => void; "expired-callback"?: () => void }) => number;
  getResponse: (id?: number) => string;
  reset: (id?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
    __triasoRecaptchaOnload?: () => void;
  }
}

const EMPTY: Values = { company: "", name: "", tel: "", email: "", message: "" };

const FIELDS: { name: FieldName; label: string; type: string; autoComplete: string; placeholder: string; inputMode?: "tel" | "email" }[] = [
  { name: "company", label: "Empresa", type: "text", autoComplete: "organization", placeholder: "Nombre de tu empresa" },
  { name: "name", label: "Contacto", type: "text", autoComplete: "name", placeholder: "Tu nombre" },
  { name: "tel", label: "Teléfono", type: "tel", autoComplete: "tel", placeholder: "618 170 3580", inputMode: "tel" },
  { name: "email", label: "Correo electrónico", type: "email", autoComplete: "email", placeholder: "tucorreo@empresa.com", inputMode: "email" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.company.trim()) e.company = "Escribe el nombre de tu empresa.";
  if (!v.name.trim()) e.name = "Escribe tu nombre.";
  const digits = v.tel.replace(/\D/g, "");
  if (!digits) e.tel = "Escribe tu teléfono.";
  else if (digits.length < 7 || digits.length > 30) e.tel = "Escribe un teléfono válido.";
  if (!v.email.trim()) e.email = "Escribe tu correo electrónico.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Escribe un correo electrónico válido.";
  if (!v.message.trim()) e.message = "Escribe tu mensaje.";
  return e;
}

// Carga el script de reCAPTCHA una sola vez (render explícito).
let recaptchaPromise: Promise<Grecaptcha> | null = null;
function loadRecaptcha(): Promise<Grecaptcha> {
  if (recaptchaPromise) return recaptchaPromise;
  recaptchaPromise = new Promise((resolve, reject) => {
    if (window.grecaptcha?.render) return resolve(window.grecaptcha);
    window.__triasoRecaptchaOnload = () => resolve(window.grecaptcha!);
    const s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js?render=explicit&hl=es&onload=__triasoRecaptchaOnload";
    s.async = true;
    s.defer = true;
    s.onerror = () => {
      recaptchaPromise = null;
      reject(new Error("No se pudo cargar reCAPTCHA"));
    };
    document.head.appendChild(s);
  });
  return recaptchaPromise;
}

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 shadow-sm text-[15px] text-grisT placeholder:text-gray-400 transition-colors duration-150 focus:outline-none focus:ring-4";
const inputOk = "border-gray-300 hover:border-gray-400 focus:border-blueMain focus:ring-[#14427c]/[0.12]";
const inputBad = "border-redBg focus:border-redBg focus:ring-[#ca1c1c]/[0.12]";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const showForm = status !== "success";

  useEffect(() => {
    if (!showForm || !SITE_KEY || !captchaRef.current || widgetId.current !== null) return;
    let cancelled = false;
    loadRecaptcha()
      .then((g) => {
        if (cancelled || !captchaRef.current || widgetId.current !== null) return;
        widgetId.current = g.render(captchaRef.current, {
          sitekey: SITE_KEY,
          callback: () => setCaptchaError(""),
          "expired-callback": () => setCaptchaError("El captcha expiró, márcalo de nuevo."),
        });
      })
      .catch(() => setCaptchaError("No se pudo cargar el captcha. Recarga la página."));
    return () => {
      cancelled = true;
    };
  }, [showForm]);

  const resetCaptcha = () => {
    if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    const next = { ...values, [name]: e.target.value };
    setValues(next);
    // Re-valida en vivo solo los campos que ya marcaron error.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setFeedback("");

    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    const token = widgetId.current !== null ? window.grecaptcha?.getResponse(widgetId.current) ?? "" : "";
    setCaptchaError(token ? "" : 'Marca la casilla "No soy un robot".');
    if (Object.keys(fieldErrors).length > 0 || !token) {
      const first = Object.keys(fieldErrors)[0];
      if (first) document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    const body = new FormData();
    (Object.keys(values) as FieldName[]).forEach((k) => body.append(k, values[k].trim()));
    body.append("g-recaptcha-response", token);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body,
        headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" },
      });
      const data: { ok?: boolean; code?: string; message?: string; fields?: Errors } = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("success");
        setValues(EMPTY);
        setErrors({});
        widgetId.current = null; // el widget se vuelve a montar al regresar al formulario
        return;
      }
      if (res.status === 422 && data.fields) setErrors(data.fields);
      if (data.code === "captcha_invalido") setCaptchaError("No pudimos verificar el captcha, márcalo de nuevo.");
      setStatus("error");
      setFeedback(data.message ?? "No pudimos enviar tu mensaje. Inténtalo de nuevo.");
    } catch {
      setStatus("error");
      setFeedback("No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo.");
    }
    resetCaptcha();
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center px-2 py-12 text-center" role="status" aria-live="polite">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#14427c]/[0.08] text-blueMain">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-bold text-blueMain md:text-2xl">¡Mensaje enviado!</h3>
        <p className="mt-2 max-w-sm text-grisP">
          Gracias por escribirnos. Un asesor de TRIASO te contactará a la brevedad.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-lg border border-blueMain px-6 py-2.5 text-sm font-semibold text-blueMain transition-colors hover:bg-blueMain hover:text-white"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6" aria-busy={sending}>
      <div>
        <h2 className="text-xl font-bold text-blueMain md:text-2xl">Envíanos un mensaje</h2>
        <p className="mt-1 text-sm text-grisP">
          Todos los campos son obligatorios. Te responderemos a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.name} className="flex flex-col gap-1.5">
            <label htmlFor={`cf-${f.name}`} className="text-sm font-semibold text-grisT">
              {f.label}
            </label>
            <input
              id={`cf-${f.name}`}
              name={f.name}
              type={f.type}
              inputMode={f.inputMode}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              value={values[f.name]}
              onChange={onChange}
              disabled={sending}
              required
              aria-invalid={!!errors[f.name]}
              aria-describedby={errors[f.name] ? `cf-${f.name}-error` : undefined}
              className={`${inputBase} ${errors[f.name] ? inputBad : inputOk}`}
            />
            {errors[f.name] && (
              <p id={`cf-${f.name}-error`} className="text-sm text-redBg">
                {errors[f.name]}
              </p>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="cf-message" className="text-sm font-semibold text-grisT">
            Mensaje
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder="Cuéntanos qué equipo te interesa: capacidad, tipo de planta, ubicación del proyecto…"
            value={values.message}
            onChange={onChange}
            disabled={sending}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "cf-message-error" : undefined}
            className={`${inputBase} resize-y min-h-[140px] ${errors.message ? inputBad : inputOk}`}
          />
          {errors.message && (
            <p id="cf-message-error" className="text-sm text-redBg">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t border-gray-300 pt-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-1.5">
          {SITE_KEY ? (
            // El widget mide 304×78 px fijo; se escala en pantallas angostas para que no se desborde.
            <div className="h-[64px] sm:h-[78px]">
              <div ref={captchaRef} className="origin-top-left scale-[0.82] sm:scale-100" />
            </div>
          ) : (
            <p className="text-sm text-redBg">Falta configurar PUBLIC_RECAPTCHA_SITE_KEY.</p>
          )}
          {captchaError && <p className="text-sm text-redBg">{captchaError}</p>}
        </div>

        <button
          type="submit"
          disabled={sending || !SITE_KEY}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-redBg px-8 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-redBgHover focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ca1c1c]/[0.25] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending && (
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
              <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )}
          {sending ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>

      {status === "error" && feedback && (
        <div role="alert" className="rounded-lg border border-[#ca1c1c]/[0.2] bg-[#ca1c1c]/[0.06] px-4 py-3 text-sm text-redBg">
          {feedback}
        </div>
      )}
    </form>
  );
}
