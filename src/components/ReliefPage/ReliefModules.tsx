import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import modulesImg from "../../assets/images/Relief/TriasoOS9.webp";
import {
  isSmallScreen,
  prefersReducedMotion,
  useSnapCarousel,
} from "./reliefMotion";

// El registro toca APIs del navegador: solo en cliente (evita fallo en SSR).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

type Module = { name: string; title: string; text: string };

/* ------------------------------------------------------------------ *
 *  Índice de módulos — resumen; el detalle vive en las secciones      *
 *  siguientes de la página.                                           *
 * ------------------------------------------------------------------ */
const MODULES: Module[] = [
  {
    name: "Reportes históricos",
    title: "Toda la operación queda documentada",
    text: "Producción, consumos, tiempos y alarmas de cada jornada se registran de forma automática y quedan listos para consulta y descarga desde cualquier equipo.",
  },
  {
    name: "Seguridad y confiabilidad",
    title: "La planta no se detiene por una falla del sistema",
    text: "Respaldo continuo de la configuración, operación manual siempre disponible y sincronización automática de los datos al reconectar.",
  },
  {
    name: "Conversión de unidades",
    title: "Cada usuario trabaja en sus propias unidades",
    text: "El sistema convierte toneladas, galones, temperatura y presión según el perfil de cada quien, sin malentendidos entre turnos.",
  },
  {
    name: "Inteligencia artificial",
    title: "Un asistente que anticipa y explica",
    text: "Detecta desviaciones antes de que escalen y responde en lenguaje claro cualquier duda sobre la operación de tu planta.",
  },
  {
    name: "Control con menos personal",
    title: "Menos operadores especializados, el mismo control",
    text: "Una sola interfaz concentra todo el proceso y cualquier operador aprende a manejarla en poco tiempo.",
  },
  {
    name: "Acceso por rol",
    title: "Cada quien entra con su propia cuenta",
    text: "Inicio de sesión por operador y por turno: sabes quién hizo cada ajuste, con trazabilidad lista para auditoría.",
  },
  {
    name: "Monitoreo remoto",
    title: "Supervisa la planta sin estar en la planta",
    text: "Tú y tus supervisores ven la producción en vivo desde computadora, tablet o teléfono, con alertas cuando algo se sale de rango.",
  },
];

/** Fracción de viewport de scroll asignada a cada módulo mientras la sección está anclada. */
const STEP_VH = 0.72;

export default function ReliefModules() {
  const sectionRef = useRef<HTMLElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const slider = useSnapCarousel<HTMLOListElement>();

  useEffect(() => {
    // Móvil/tablet y reduced-motion: sin anclaje ni split; el contenido se apila y queda visible.
    if (prefersReducedMotion() || isSmallScreen()) return;
    const section = sectionRef.current;
    if (!section) return;

    const splitInstances: SplitText[] = [];

    const ctx = gsap.context(() => {
      const panels = Array.from(
        section.querySelectorAll<HTMLElement>(".rmod-panel"),
      );

      const splits = panels.map((panel) => {
        const title = panel.querySelector<HTMLElement>(".rmod-title")!;
        const text = panel.querySelector<HTMLElement>(".rmod-text")!;
        const tSplit = new SplitText(title, { type: "lines", mask: "lines" });
        const pSplit = new SplitText(text, { type: "lines", mask: "lines" });
        splitInstances.push(tSplit, pSplit);
        return { panel, lines: [...tSplit.lines, ...pSplit.lines] };
      });

      splits.forEach((s, i) => {
        gsap.set(s.panel, { autoAlpha: i === 0 ? 1 : 0 });
        if (i !== 0) gsap.set(s.lines, { yPercent: 120, opacity: 0 });
      });

      let current = 0;

      const playIn = (index: number, dir: number) => {
        const s = splits[index];
        gsap.set(s.panel, { autoAlpha: 1 });
        gsap.fromTo(
          s.lines,
          { yPercent: 120 * (dir >= 0 ? 1 : -1), opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.07,
            ease: "power3.out",
            overwrite: true,
          },
        );
      };

      const goToIndex = (index: number, dir: number) => {
        if (index === current) return;
        const prev = splits[current];
        current = index;
        setActive(index);
        gsap.to(prev.panel, { autoAlpha: 0, duration: 0.25, overwrite: true });
        gsap.to(prev.lines, { opacity: 0, duration: 0.2, overwrite: true });
        playIn(index, dir);
      };

      // Reveal del primer módulo al entrar a la sección.
      gsap.from(splits[0].lines, {
        yPercent: 120,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 70%" },
      });

      // Anclaje + cambio de módulo por scroll.
      stRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + window.innerHeight * STEP_VH * MODULES.length,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(
            MODULES.length - 1,
            Math.floor(self.progress * MODULES.length),
          );
          if (idx !== current) goToIndex(idx, self.direction);
        },
      });
    }, section);

    return () => {
      stRef.current = null;
      ctx.revert();
      splitInstances.forEach((s) => s.revert());
    };
  }, []);

  const jumpTo = (i: number) => {
    setActive(i);
    const st = stRef.current;
    if (!st) {
      document
        .querySelectorAll<HTMLElement>(".rmod-panel")
        [i]?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const p = (i + 0.5) / MODULES.length;
    window.scrollTo({
      top: st.start + (st.end - st.start) * p,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="modulos"
      className="relative scroll-mt-24 bg-[#111111] text-white"
    >
      <div className="overflow-hidden py-16 sm:py-20 lg:flex lg:min-h-screen lg:items-center lg:py-0">
        <div className="flex w-full flex-col gap-10 lg:grid lg:grid-cols-[240px_minmax(0,1fr)_42vw] lg:items-center lg:gap-x-14 lg:gap-y-0 xl:gap-x-16">
          {/* NAV de módulos — solo desktop */}
          <nav
            aria-label="Módulos del sistema"
            className="order-1 hidden lg:block lg:self-center lg:pl-12 xl:pl-20"
          >
            <p className="mb-6 text-base font-semibold text-[#89adff]">
              Módulos del sistema
            </p>
            <ul className="space-y-1.5">
              {MODULES.map((m, i) => (
                <li key={m.name}>
                  <button
                    type="button"
                    onClick={() => jumpTo(i)}
                    aria-current={i === active ? "true" : undefined}
                    className={`relative w-full py-2.5 pl-5 text-left text-lg transition-colors duration-300 ${
                      i === active
                        ? "font-semibold text-white"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded bg-[#89adff] transition-opacity duration-300 ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {m.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Encabezado — solo móvil */}
          <p className="order-1 px-6 text-2xl font-semibold text-[#89adff] lg:hidden">
            Módulos del sistema
          </p>

          {/* Imagen — arriba en móvil, pegada al borde derecho en desktop */}
          <div className="order-2 sm:mx-auto sm:max-w-[560px] lg:order-3 lg:mx-0 lg:max-w-none lg:px-0">
            <img
              src={modulesImg.src}
              width={modulesImg.width}
              height={modulesImg.height}
              alt="Interfaz del sistema Triaso Relief con los módulos de operación de la planta de asfalto"
              className="max-h-[62vh] w-full rounded-2xl object-cover object-top lg:max-h-[92vh] lg:rounded-r-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Contenido — carrusel en móvil/tablet, paneles superpuestos en desktop */}
          <div className="relative order-3 w-full min-w-0 lg:order-2 lg:min-h-[520px]">
            <ol
              ref={slider.ref}
              className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:static lg:block lg:w-auto lg:gap-0 lg:overflow-visible lg:px-0"
            >
              {MODULES.map((m, i) => (
                <li
                  key={m.name}
                  className="rmod-panel w-[84%] shrink-0 snap-center sm:w-[64%] lg:w-auto lg:shrink lg:snap-align-none lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center"
                >
                  <span className="mb-4 flex items-baseline gap-3 lg:mb-5">
                    <span className="text-xl font-bold tabular-nums text-white/25 lg:text-base lg:text-[#89adff]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-[#89adff] lg:text-lg">
                      {m.name}
                    </span>
                  </span>
                  <h3 className="rmod-title text-[1.6rem] font-bold leading-[1.12] sm:text-3xl md:text-4xl lg:text-6xl lg:leading-[1.03] xl:text-7xl">
                    {m.title}
                  </h3>
                  <p className="rmod-text mt-3 text-sm leading-relaxed text-[#d9d9d9] sm:text-base md:text-lg lg:mt-8 lg:max-w-2xl lg:text-2xl lg:leading-relaxed">
                    {m.text}
                  </p>
                </li>
              ))}
            </ol>

            {/* Puntos — solo móvil/tablet */}
            <div className="mt-6 flex justify-center gap-2 lg:hidden">
              {MODULES.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  aria-label={`Ir a ${m.name}`}
                  onClick={() => slider.goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slider.index
                      ? "w-6 bg-[#89adff]"
                      : "w-1.5 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
