import { useRef, type ReactNode } from "react";
import img2 from "../../assets/images/Relief/TriasoOS1.webp";
import {
  CountUp,
  useGsapReveal,
  useMagnetic,
  usePointerGlow,
} from "./reliefMotion";

/* ------------------------------------------------------------------ *
 *  KPIs derivados EXCLUSIVAMENTE del contenido de la página           *
 * ------------------------------------------------------------------ */
const KPIS = [
  { to: 10000, suffix: "+", label: "Recetas de mezcla almacenadas" },
  { to: 3, suffix: "", label: "Niveles de protección automática" },
  { to: 4, suffix: "", label: "Puntos de acceso simultáneos" },
  { to: 10, suffix: "", label: "Funciones de IA asistida" },
];

const FEATURES: { label: string; icon: ReactNode }[] = [
  {
    label: "Reportes históricos en la nube",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 18L11 21L16 16"
          stroke="#89adff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
          stroke="#89adff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Seguridad y confiabilidad",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z"
          stroke="#89adff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#89adff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Conversión automática de unidades",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#89adff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          d="M3 12c0-4.243 0-6.364 1.318-7.682C5.636 3 7.758 3 12 3c4.243 0 6.364 0 7.682 1.318C21 5.636 21 7.758 21 12c0 4.243 0 6.364-1.318 7.682C18.364 21 16.242 21 12 21c-4.243 0-6.364 0-7.682-1.318C3 18.364 3 16.242 3 12m4 3.625h3.5m3.25-5.5h3.5m-3.5-2.5h3.5m-10.5 1.25h2m0 0h2m-2 0v-2m0 2v2"
        />
      </svg>
    ),
  },
  {
    label: "Inteligencia artificial que protege su equipo",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35 20 7.69 19.94 8 19.83"
          stroke="#89adff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.24 5.57C7.09 5.24 7 4.88 7 4.5C7 3.12 8.12 2 9.5 2C10.88 2 12 3.12 12 4.5V20"
          stroke="#89adff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4.5C12 3.12 13.12 2 14.5 2C15.88 2 17 3.12 17 4.5C17 4.88 16.91 5.24 16.76 5.57"
          stroke="#89adff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 18.5C16 19.88 17.12 21 18.5 21C19.88 21 21 19.88 21 18.5C21 17.12 19.88 16 18.5 16C17.12 16 16 17.12 16 18.5Z"
          stroke="#89adff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Menos operadores, control total del sistema",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 512 512"
      >
        <path
          fill="#89adff"
          fillRule="evenodd"
          d="M213.333 42.667c41.238 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111c-41.237 0-74.666-33.429-74.666-74.667c0-39.862 31.238-72.43 70.57-74.556zM64 426.667h204.794A116.6 116.6 0 0 1 256.478 384H106.667v-34.133l.11-4.142c2.057-38.365 32.515-68.392 69.223-68.392h74.667l3.908.114c13.218.773 25.499 5.438 35.767 12.943a117.5 117.5 0 0 1 36.613-24.868c-19.998-19.144-46.814-30.855-76.288-30.855H176l-4.617.096C111.668 237.253 64 287.834 64 349.867zm117.333-309.334c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Inicio de sesión único para cada operador en turno",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 512 512"
      >
        <path
          fill="#89adff"
          fillRule="evenodd"
          d="M213.333 42.667c41.238 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111c-41.237 0-74.666-33.429-74.666-74.667c0-39.862 31.238-72.43 70.57-74.556zM373.333 271.333c-53.019 0-96 42.981-96 96s42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96m62.763 62.763l-84.095 84.094l-41.428-41.428l18.856-18.856l22.572 22.572l65.239-65.238z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Monitoreo remoto en la nube",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#89adff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        >
          <path d="M3.5 4v13.5a3 3 0 0 0 3 3H20" />
          <path d="m6.5 15l4.5-4.5l3.5 3.5L20 8.5" />
        </g>
      </svg>
    ),
  },
];

function FeatureCard({ label, icon }: { label: string; icon: ReactNode }) {
  const magnetRef = useMagnetic<HTMLDivElement>(0.18);
  const glowRef = usePointerGlow<HTMLDivElement>();
  return (
    <div
      ref={glowRef}
      data-reveal="scale-rot"
      className="rlf-glow rounded-xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div ref={magnetRef} className="flex flex-col gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#89adff]/30 bg-[#14427c]/25">
          {icon}
        </div>
        <p className="text-sm font-semibold leading-snug text-white">{label}</p>
      </div>
    </div>
  );
}

export default function ReliefFirstSection() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGsapReveal(scopeRef);

  return (
    <div ref={scopeRef} className="bg-[#111111] text-white">
      {/* ============================ HERO ============================ */}
      <section
        className="rlf-hud rlf-grid rlf-grid-dark relative overflow-hidden pt-28 pb-16 lg:min-h-screen lg:pt-32"
        style={{
          background: "linear-gradient(180deg, #111111 0%, #1e1e1e 100%)",
        }}
      >
        {/* Halos decorativos estáticos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle, rgba(20,66,124,0.45), rgba(20,66,124,0) 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px]"
          style={{
            background:
              "radial-gradient(circle, rgba(202,28,28,0.3), rgba(202,28,28,0) 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            {/* Columna texto */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold leading-[1.1] md:text-5xl">
                Control, automatización y supervisión de plantas de asfalto
              </h1>

              <div className="flex flex-row">
                <div className="h-0.5 w-40 bg-[#DE3B21]" />
                <div className="h-0.5 w-40 bg-[#D9D9D9]" />
              </div>

              <h2 className="text-lg font-semibold text-[#d9d9d9] md:text-2xl">
                El sistema definitivo de control y supervisión de automatización
              </h2>

              <p className="max-w-xl text-lg font-semibold text-[#89adff]">
                Una forma práctica y eficiente de mantener el control total de
                la operación de tu planta de asfalto
              </p>
            </div>

            {/* Columna mockup */}
            <div data-reveal="scale" className="mx-auto w-full max-w-xl">
              <img
                src={img2.src}
                alt="Consola de operación del sistema Triaso Relief mostrando variables de la planta de asfalto en tiempo real"
                className="block w-full rounded-xl shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
                width={img2.width}
                height={img2.height}
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* KPIs con count-up */}
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                data-reveal="up"
                className="bg-[#1e1e1e] p-5"
              >
                <div className="text-3xl font-bold tabular-nums tracking-tight text-[#89adff] md:text-4xl">
                  <CountUp to={kpi.to} suffix={kpi.suffix} />
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/55">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>

          {/* Indicador de scroll */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#89adff]">
              Scroll
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#89adff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ===================== BRIEFING + FEATURES ==================== */}
      <section className="relative border-t border-white/10 bg-[#1e1e1e] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            data-reveal="left"
            className="rlf-hud relative rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
          >
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ca1c1c]">
              // Resumen del sistema
            </span>
            <p className="text-sm font-medium leading-relaxed text-[#d9d9d9] md:text-lg">
              Ofrece una forma práctica y eficiente de gestionar el
              funcionamiento de los equipos industriales. Gracias a sus
              funciones avanzadas de monitoreo y automatización, simplifica el
              control de procesos clave como la temperatura, la dosificación de
              materiales y los ritmos de producción. Diseñado para adaptarse a
              diferentes configuraciones, garantiza un rendimiento confiable al
              tiempo que prioriza la seguridad y la facilidad de uso.
            </p>
          </div>

          <h2
            className="mt-16 mb-8 text-2xl font-bold text-white md:text-3xl"
            data-reveal="up"
          >
            Módulos del sistema
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <FeatureCard key={f.label} label={f.label} icon={f.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
