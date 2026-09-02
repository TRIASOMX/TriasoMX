import { useRef } from "react";
import img1 from "../../assets/images/Relief/TriasoOS7.webp";
import img2 from "../../assets/images/Relief/5.webp";
import { useGsapReveal } from "./reliefMotion";

export default function ReliefLastSection() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGsapReveal(scopeRef);

  return (
    <div ref={scopeRef} className="w-full bg-[#111111] text-white">
      {/* Encabezado */}
      <div className="border-y border-white/10 bg-[#393939] py-10">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#ca1c1c]">
            // Módulo de seguridad
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Seguridad y acceso</h2>
        </div>
      </div>

      {/* Dos sistemas — paneles diagonales */}
      <div className="grid md:grid-cols-2">
        <div
          data-reveal="left"
          className="flex flex-col items-center justify-center p-10 md:p-14"
          style={{
            background: "#14427c",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="max-w-md text-center">
            <h3 className="text-lg font-bold md:text-2xl">Sistema de operación</h3>
            <p className="mt-1 text-xl font-semibold">Inicio de sesión único</p>
            <p className="text-xl font-semibold">para cada operador en turno</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-start text-white/90">
              <li>Conexión sin necesidad de internet, con acceso a respaldos automáticos.</li>
              <li>Operación manual siempre disponible, con almacenamiento de datos de operación.</li>
            </ul>
          </div>
        </div>

        <div
          data-reveal="right"
          className="flex flex-col items-center justify-center p-10 md:p-14"
          style={{ background: "#ca1c1c" }}
        >
          <div className="max-w-md text-center">
            <h3 className="text-lg font-bold md:text-2xl">Sistema de visualización</h3>
            <p className="mt-1 text-xl font-semibold">Acceso ilimitado para visualización</p>
            <p className="text-xl font-semibold">de la planta de asfalto</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-start text-white/90">
              <li>Conexión a través de internet</li>
              <li>Visualización a todo dato rastreable de su planta de asfalto.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cierre — modernización */}
      <section
        className="relative overflow-hidden py-24"
        style={{ clipPath: "polygon(0 2vw, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${img2.src})` }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#111111]/85" />

        <div className="relative mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
          <div data-reveal="up" className="text-center">
            <h2 className="text-2xl font-bold md:text-4xl">
              Modernización de sistemas de control
            </h2>
          </div>

          <div className="space-y-5 text-center md:text-left">
            <p data-reveal="up" className="text-base font-semibold text-[#89adff] md:text-xl">
              Transformamos sistemas de operación obsoletos en plataformas modernas y
              claras, llevando su planta a los estándares actuales con mayor
              eficiencia, confiabilidad y control.
            </p>
            <p data-reveal="up" data-reveal-delay="0.08" className="text-base font-semibold text-[#d9d9d9] md:text-xl">
              Sabemos que cada cliente tiene necesidades únicas; adaptamos cada
              sistema de control —desde los puntos de acceso hasta la integración de
              funciones— alineándolo con sus requerimientos específicos.
            </p>
          </div>

          <div data-reveal="scale" className="flex items-center justify-center">
            <h3 className="w-full text-center text-3xl font-bold leading-tight text-white md:w-3/4 md:text-4xl">
              Disponible para monitoreo de todos los equipos Triaso®
            </h3>
          </div>

          <div data-reveal="scale" className="mx-auto max-w-4xl">
            <img
              src={img1.src}
              alt="Sistema Triaso Relief funcionando en consola, computadora, tablet y teléfono"
              className="w-full rounded-xl shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
              loading="lazy"
              decoding="async"
              width={img1.width}
              height={img1.height}
            />
          </div>

          <p data-reveal="up" className="text-center text-lg font-semibold text-[#d9d9d9] md:text-left md:text-2xl">
            Brindamos la libertad de acceder a análisis detallados en tiempo real
            desde cualquier lugar y en cualquier dispositivo. La toma de decisiones se
            vuelve más rápida, mejor fundamentada y completamente independiente de la
            ubicación física.
          </p>
        </div>
      </section>
    </div>
  );
}
