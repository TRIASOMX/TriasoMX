import { useEffect, useRef, useState } from "react";
import FeatureCards from "./CardsComponent";
import img1 from "../../assets/images/Relief/TriasoOS6.webp";
import img2 from "../../assets/images/Relief/TriasoOS5.webp";
import { useGsapReveal } from "./reliefMotion";

const REPORT_A = [
  "Producción acumulada.",
  "Consumo de combustible por tonelada producida.",
  "Tiempos en que la planta está encendida y cuando la planta está produciendo.",
  "Promedios de producción y temperaturas.",
  "Valores mínimos y máximos de producción y temperaturas.",
  "Promedios de consumo de asfalto y combustible.",
  "Velocidades de cambio en la producción para detectar robos.",
  "Velocidades de cambio en niveles de asfalto y combustible para detectar robos.",
  "Alarmas y eventos ocurridos.",
];

const REPORT_B = [
  "Reportes históricos para un periodo seleccionado.",
  "Mezcla total entregada",
  "Número de camión, operador y placas.",
  "Operador en turno de salida de mezcla.",
  "Hora de inicio y fin de cada carga.",
  "Toneladas cargadas.",
  "Temperatura promedio de la mezcla asfáltica entregada.",
  "Receta de la mezcla asfáltica entregada.",
];

export default function RelifSecondSection() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useGsapReveal(scopeRef);

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.style.maxHeight = open
      ? contentRef.current.scrollHeight + "px"
      : "0px";
  }, [open]);

  return (
    <div
      ref={scopeRef}
      className="rlf-grid rlf-grid-dark space-y-16 overflow-hidden bg-[#1e1e1e] py-20 text-white"
    >
      {/* Bloques de datos */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-8">
        <div
          data-reveal="right"
          className="grid items-center gap-8 md:grid-cols-2"
        >
          <div className="rlf-hud overflow-hidden rounded-xl border border-white/10">
            <img
              src={img2.src}
              alt="Panel de decisiones del sistema Triaso Relief"
              width={img2.width}
              height={img2.height}
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </div>
          <div>
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#89adff]">
              // Decisión en tiempo real
            </span>
            <p className="text-lg font-bold md:text-2xl">
              Para una toma de decisiones más rápida, mejor fundamentada y
              completamente independiente de la ubicación física.
            </p>
          </div>
        </div>

        <div
          data-reveal="left"
          className="grid items-center gap-8 md:grid-cols-2"
        >
          <div className="order-2 md:order-1">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#89adff]">
              // Multi-acceso
            </span>
            <p className="text-lg font-bold md:text-2xl">
              Con múltiples puntos de acceso a través de la consola de operación,
              computadoras remotas, tablets y teléfonos.
            </p>
          </div>
          <div className="rlf-hud order-1 overflow-hidden rounded-xl border border-white/10 md:order-2">
            <img
              src={img1.src}
              alt="Puntos de acceso del sistema Triaso Relief"
              width={img1.width}
              height={img1.height}
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </div>
        </div>

        <p
          data-reveal="up"
          className="mx-auto max-w-2xl border-l-2 border-[#ca1c1c] pl-5 text-base font-medium text-[#d9d9d9]"
        >
          Toda la información también se almacena de forma segura en la nube,
          permitiendo un acceso rápido y multiusuario para operadores, supervisores
          y propietarios, desde computadoras remotas, tablets y teléfonos móviles.
        </p>
      </div>

      <FeatureCards />

      {/* Consola de reportes */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div data-reveal="scale-rot" className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-center text-xl font-bold text-transparent md:text-3xl">
              Reportes históricos
            </h3>
          </div>
          <div data-reveal="scale-rot" data-reveal-delay="0.1" className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center text-xl font-bold text-transparent md:text-3xl">
              Reportes de mezcla asfáltica producida.
            </h3>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="rlf-btn flex items-center gap-3 rounded-full border border-[#89adff]/40 bg-[#14427c]/30 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white"
          >
            {open ? "Ocultar detalle" : "Ver detalle del reporte"}
            <span className={`transition-transform duration-500 ${open ? "rotate-180" : ""}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          <div
            ref={contentRef}
            className="w-full overflow-hidden transition-[max-height] duration-700"
            style={{ maxHeight: "0px", transitionTimingFunction: "cubic-bezier(0.83,0,0.17,1)" }}
          >
            <div
              className="mt-6 rounded-xl border border-[#89adff]/20 p-6 md:p-10"
              style={{ background: "linear-gradient(180deg, #05256d 0%, #14427c 100%)" }}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <ul className="space-y-2 text-sm leading-relaxed text-white/90">
                  {REPORT_A.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#89adff]">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm leading-relaxed text-white/90">
                  {REPORT_B.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#89adff]">›</span>
                      {item}
                    </li>
                  ))}
                  <li className="flex gap-2 pl-5 text-white/70">
                    <span className="text-[#89adff]">–</span>
                    Porcentajes, granulometría y humedad
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
