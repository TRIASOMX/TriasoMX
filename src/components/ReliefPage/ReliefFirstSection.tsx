import { useRef } from "react";
import heroImg from "../../assets/images/Relief/ReliefHero.webp";
import { useGsapReveal } from "./reliefMotion";

export default function ReliefFirstSection() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGsapReveal(scopeRef);

  return (
    <div ref={scopeRef} className="bg-[#111111] text-white">
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-bgMain pt-24 pb-16 text-grisT lg:max-h-screen lg:pb-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Columna texto */}
            <div className="flex flex-col gap-5 md:gap-6">
              <span
                data-reveal="up"
                data-reveal-delay="0.05"
                className="text-base font-bold text-blueMain sm:text-lg md:text-xl"
              >
                Triaso Relief
              </span>
              <h1
                data-reveal="up"
                data-reveal-delay="0.05"
                className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                Control, automatización y supervisión de plantas de asfalto
              </h1>
              <div className="mt-2 mb-2 flex self-start md:mt-4 md:mb-4">
                <div className="h-0.5 w-24 bg-red-500 sm:w-36"></div>
                <div className="h-0.5 w-24 bg-[#393939]/25 sm:w-36"></div>
              </div>
              <p
                data-reveal="up"
                data-reveal-delay="0.1"
                className="max-w-xl text-base leading-relaxed text-grisP md:text-lg"
              >
                El sistema de control y supervisión que le da el control total
                de la operación de su planta de asfalto —producción, consumos y
                seguridad— desde cualquier lugar y en cualquier dispositivo.
              </p>

              <div
                data-reveal="up"
                data-reveal-delay="0.15"
                className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="/Contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-redBg bg-redBg px-7 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-transparent hover:text-redBg hover:shadow-lg sm:w-auto"
                >
                  Solicitar demostración
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#modulos"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-blueMain bg-blueMain px-7 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-transparent hover:text-blueMain hover:shadow-lg sm:w-auto"
                >
                  Ver los módulos
                </a>
              </div>
            </div>

            {/* Columna mockup */}
            <div
              data-reveal="scale"
              className="flex justify-center lg:justify-end"
            >
              <img
                src={heroImg.src}
                alt="App Triaso Relief mostrando la vista rápida de una planta de asfalto con producción, temperatura de mezcla y presión de planta en tiempo real"
                className="block h-auto w-auto max-h-[46vh] max-w-[240px] sm:max-h-[58vh] sm:max-w-[300px] lg:max-h-[78vh] lg:max-w-none"
                width={heroImg.width}
                height={heroImg.height}
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
