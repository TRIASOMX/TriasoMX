import { useEffect, useRef, useState, type ReactNode } from "react";
import img2 from "../../assets/images/Relief/TriasoOS4.webp";
import img3 from "../../assets/images/Relief/TriasoOS3.webp";
import {
  CountUp,
  refreshTriggers,
  useGsapReveal,
  useMagnetic,
} from "./reliefMotion";

/* ------------------------------------------------------------------ *
 *  Acordeón tech con revelado por clip-path                           *
 * ------------------------------------------------------------------ */
interface PanelProps {
  index: number;
  open: number | null;
  setOpen: (i: number | null) => void;
  gradient: string;
  header: ReactNode;
  children: ReactNode;
}

function Panel({
  index,
  open,
  setOpen,
  gradient,
  header,
  children,
}: PanelProps) {
  const isOpen = open === index;
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.style.maxHeight = isOpen
      ? bodyRef.current.scrollHeight + "px"
      : "0px";
  }, [isOpen]);

  return (
    <div className="overflow-hidden" style={{ background: gradient }}>
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <button
          onClick={() => setOpen(isOpen ? null : index)}
          aria-expanded={isOpen}
          className="flex w-full items-start gap-5 text-left text-white"
        >
          <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-md border border-white/40 text-xl font-light leading-none">
            <span
              className={`transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              +
            </span>
          </span>
          <span className="flex-1">{header}</span>
        </button>

        <div
          ref={bodyRef}
          className="overflow-hidden transition-[max-height] duration-700"
          style={{
            maxHeight: "0px",
            transitionTimingFunction: "cubic-bezier(0.83,0,0.17,1)",
          }}
        >
          <div className="pt-6 pl-14">{children}</div>
        </div>
      </div>
    </div>
  );
}

const IA_CAPABILITIES = [
  "Identifica de inmediato la ubicación de las fallas en los equipos.",
  "Identifica automáticamente el sistema o componente afectado.",
  "Explique la causa de las alarmas y las condiciones de funcionamiento.",
  "Guíe a los operadores paso a paso a través de las medidas correctivas.",
  "Proporcionar recomendaciones operativas basadas en el estado de la planta.",
  "Colaborar en la ejecución del diseño de la mezcla y la puesta a punto de la producción.",
  "Ayuda a tomar decisiones sobre el funcionamiento manual y automático.",
  "Ayude a reducir el tiempo de inactividad agilizando la resolución de problemas.",
  "Proporcione explicaciones claras sobre el funcionamiento de la planta y las alertas.",
  "Ayudar a los operadores sin necesidad de tener un profundo conocimiento del sistema.",
];

const STEPS = [
  {
    n: 1,
    title: "Primera acción",
    text: "El operador es alertado cuando un parámetro comienza a salir del rango ideal.",
  },
  {
    n: 2,
    title: "Segunda acción",
    text: "El operador puede corregirlo manualmente o permitir que la Inteligencia Artificial lo ajuste automáticamente.",
  },
  {
    n: 3,
    title: "Tercera acción",
    text: "Si el problema no se resuelve y los valores permanecen fuera de rango, el sistema apaga automáticamente los componentes necesarios para proteger el equipo.",
  },
];

export default function ReliefFourthSection() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const iaMagnet = useMagnetic<HTMLDivElement>(0.06);

  useGsapReveal(scopeRef);

  // Al abrir/cerrar un acordeón el layout cambia: recolocamos los ScrollTrigger
  // una sola vez tras la transición (700ms) en vez de reconstruirlos todos.
  useEffect(() => {
    refreshTriggers(800);
  }, [open]);

  return (
    <div ref={scopeRef} className="bg-[#111111] text-white">
      {/* ===================== ACORDEONES ===================== */}
      <div className="border-y border-white/10">
        <Panel
          index={0}
          open={open}
          setOpen={setOpen}
          gradient="linear-gradient(90deg, #010106 0%, #2f2db7 100%)"
          header={
            <>
              <h2 className="text-xl font-bold md:text-3xl">
                Ejecución sencilla de diseños de mezcla
              </h2>
              <p className="mt-2 max-w-3xl text-base font-bold text-[#d9d9d9] md:text-lg">
                Nuestros sistemas de control están diseñados para simplificar la
                producción de mezcla asfáltica para pavimentación, desde mezclas
                tibias hasta mezclas en caliente, sin sacrificar el control ni
                la precisión.
              </p>
            </>
          }
        >
          <div className="space-y-2 text-base text-[#d9d9d9] md:text-lg">
            <h3>El operador solo necesita definir la receta de la mezcla:</h3>
            <ul className="list-disc pl-5">
              <li>Temperatura objetivo de la mezcla</li>
              <li>Capacidad de producción (Tph)</li>
              <li>Parámetros del diseño de mezcla:</li>
            </ul>
            <ul className="list-disc pl-8">
              <li>Porcentaje de RAP</li>
              <li>Porcentaje de agregados vírgenes</li>
              <li>Contenido de asfalto</li>
              <li>Aditivos</li>
            </ul>
            <p>
              Una vez ingresados, el sistema administra y coordina
              automáticamente todo el proceso, produciendo la mezcla asfáltica
              exactamente como se especificó mediante la adaptación en tiempo
              real de la velocidad de rotación del secador-mezclador, la
              intensidad del quemador y la dosificación de materiales.
            </p>
            <p className="pb-2">
              Reducimos la intervención manual, minimizamos la dependencia del
              operador y garantizamos resultados consistentes y repetibles en
              una amplia variedad de diseños de mezcla, incluidas aplicaciones
              con alto contenido de RAP.
            </p>
          </div>
        </Panel>

        <Panel
          index={1}
          open={open}
          setOpen={setOpen}
          gradient="linear-gradient(90deg, #040404 0%, #707070 100%)"
          header={
            <>
              <h2 className="text-xl font-bold md:text-3xl">
                Almacenamiento de diseño de mezcla
              </h2>
              <h3 className="mt-1 text-lg font-bold md:text-2xl">
                Almacenamiento de diseños de mezcla para más de 10,000 recetas.
              </h3>
              <div className="mt-2 space-y-1 text-sm font-bold text-[#d9d9d9] md:text-base">
                <p>
                  No dependemos de métodos primitivos para la aplicación de
                  diseños de mezcla.
                </p>
                <p>
                  En cambio, nos enfocamos en una ejecución moderna, rápida y
                  sencilla para la producción de mezcla asfáltica.
                </p>
                <p>
                  Los diseños de mezcla son fáciles de ejecutar y administrar
                  para cada uno de sus clientes.
                </p>
              </div>
            </>
          }
        >
          <ul className="list-disc space-y-1 pl-5 text-base text-[#d9d9d9] md:text-lg">
            <li>
              Los diseños de mezcla pueden duplicarse, editarse o versionarse.
            </li>
            <li>
              Cada diseño de mezcla incluye límites automáticos o reglas de
              validación.
            </li>
            <li>
              Los diseños de mezcla pueden asignarse a clientes o proyectos
              específicos.
            </li>
            <li>
              El sistema garantiza resultados consistentes y repetibles entre
              distintos operadores y turnos.
            </li>
            <li>
              La ejecución de la mezcla es asistida por el operador o
              completamente automática.
            </li>
            <li>
              El sistema almacena historial de producción y datos de desempeño
              por diseño de mezcla.
            </li>
          </ul>
        </Panel>

        <Panel
          index={2}
          open={open}
          setOpen={setOpen}
          gradient="linear-gradient(180deg, #751919 0%, #e02a2a 100%)"
          header={
            <>
              <h2 className="text-xl font-bold md:text-3xl">
                Operación manual
              </h2>
              <p className="mt-2 max-w-3xl text-base font-bold text-white md:text-lg">
                Nuestras plantas de asfalto permiten operación manual en
                cualquier momento, asegurando la continuidad de producción
                cuando las condiciones de operación lo requieran.
              </p>
            </>
          }
        >
          <div className="space-y-4 text-base text-white md:text-lg">
            <p>
              A diferencia de los sistemas que restringen la intervención
              manual, nuestras plantas de asfalto están diseñadas para ofrecer
              control manual total además de automatización avanzada.
            </p>
            <p className="font-bold">
              Mantenga produciendo mezcla asfáltica
              <span>
                {" "}
                , incluso si algún componente electrónico necesita reemplazo.
              </span>
            </p>
            <ul className="list-disc pl-5">
              <li>
                Diseñadas para mantener la continuidad de producción bajo
                condiciones de operación cambiantes.
              </li>
            </ul>
            <p className="font-bold">
              Cambio fluido entre operación automática y manual.
            </p>
          </div>
        </Panel>
      </div>

      {/* ============ Bloque "menos operarios" ============ */}
      <div className="bg-[#1e1e1e] py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 text-center lg:px-8">
          <h2 data-reveal="up" className="text-2xl font-bold md:text-4xl">
            El funcionamiento de la planta depende de un número menor de
            operarios, sin que ello afecte al control ni a la calidad de la
            producción.
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="0.08"
            className="max-w-4xl text-base font-semibold text-[#d9d9d9] md:text-xl"
          >
            No dependa tanto de operadores especializados que se consideran
            indispensables; ahora cualquier operador no especializado puede
            aprender rápidamente a manejar su planta y será supervisado.
          </p>
        </div>
      </div>

      {/* ============ Asistencia IA (transición clip-path) ============ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: "linear-gradient(180deg, #111111 0%, #14427c 100%)",
          clipPath: "polygon(0 3vw, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/4 h-[460px] w-[460px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(134,170,255,0.35), rgba(134,170,255,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span
              data-reveal="up"
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-[#86aaff]"
            >
              Asistencia Triaso® Relief
            </span>
            <h2
              data-reveal="up"
              className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl"
            >
              La asistencia de inteligencia artificial más moderna
            </h2>
            <h3
              data-reveal="up"
              data-reveal-delay="0.08"
              className="mt-2 text-xl font-semibold text-[#d9d9d9]"
            >
              para la operación de plantas de asfalto.
            </h3>
          </div>

          {/* Mockup del asistente */}
          <div
            ref={iaMagnet}
            data-reveal="scale"
            className="mx-auto mt-12 max-w-4xl"
          >
            <img
              src={img3.src}
              alt="Asistente de inteligencia artificial de Triaso Relief respondiendo consultas de operación"
              width={img3.width}
              height={img3.height}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* ============ Haga cualquier pregunta + capacidades ============ */}
      <section className="bg-[#111111] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            data-reveal="left"
            className="text-4xl font-bold uppercase md:text-5xl"
          >
            Haga cualquier pregunta
          </h2>
          <p
            data-reveal="left"
            data-reveal-delay="0.08"
            className="mt-3 max-w-4xl"
          >
            <span className="text-3xl font-semibold text-[#89adff] md:text-4xl">
              sobre la operación de su planta de asfalto y{" "}
            </span>
            <span className="text-4xl font-bold text-white md:text-5xl">
              reciba asistencia práctica inmediata.
            </span>
          </p>

          <p
            data-reveal="up"
            className="mt-8 max-w-4xl text-base font-semibold text-[#d9d9d9] md:text-xl"
          >
            Incluido en todas nuestras plantas de asfalto, este sistema
            proporciona asistencia rápida y moderna para la operación de la
            planta, permitiendo a los operadores obtener orientación clara con
            solo escribir sus preguntas.
          </p>

          {/* Mobile: slider horizontal con snap · sm+: grid */}
          <div
            className="mt-10 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
            role="list"
          >
            {IA_CAPABILITIES.map((cap, i) => (
              <div
                key={cap}
                role="listitem"
                data-reveal="scale-rot"
                data-reveal-delay={(i % 3) * 0.06}
                className="w-[78%] flex-none snap-start rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:w-auto sm:flex-auto"
              >
                <span className="text-xs font-bold tabular-nums tracking-[0.15em] text-[#ca1c1c]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium leading-snug text-white">
                  {cap}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-white/40 sm:hidden">
            Desliza →
          </p>
        </div>
      </section>

      {/* ============ Tres pasos de protección ============ */}
      <section className="bg-[#1e1e1e] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div data-reveal="up">
            <h2 className="max-w-3xl text-xl font-bold text-white md:text-3xl">
              El sistema de control utiliza tres pasos para alertar al operador
              y proteger el equipo:
            </h2>
            <div className="mt-3 flex flex-row">
              <div className="h-0.5 w-40 bg-[#DE3B21]" />
              <div className="h-0.5 w-40 bg-[#D9D9D9]" />
            </div>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div
              data-reveal="left"
              className="rlf-hud overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={img2.src}
                alt="Interfaz del sistema de control mostrando alertas de parámetros fuera de rango"
                width={img2.width}
                height={img2.height}
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>

            <ol className="relative space-y-6 border-l border-white/15 pl-8">
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  data-reveal="right"
                  data-reveal-delay={step.n * 0.06}
                  className="relative"
                >
                  <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-[#ca1c1c] bg-[#111111] text-sm font-bold tabular-nums text-[#ca1c1c]">
                    <CountUp to={step.n} duration={1200} />
                  </span>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#d9d9d9] md:text-lg">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
