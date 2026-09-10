import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import boardImg from "../../assets/images/Relief/TriasoOS8.webp";
import {
  isSmallScreen,
  prefersReducedMotion,
  useGsapReveal,
  useSnapCarousel,
} from "./reliefMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Feature = { title: string; text: string; icon: ReactNode };

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
};

const FEATURES: Feature[] = [
  {
    title: "Decisión en tiempo real",
    text: "Toma decisiones más rápidas y mejor fundamentadas, sin depender de estar en sitio.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 19h16" />
        <path d="M4 15l4-4 3 3 6-7" />
        <path d="M17 7h3v3" />
      </svg>
    ),
  },
  {
    title: "Acceso para todo tu equipo",
    text: "Consola, computadoras remotas, tablets y teléfonos para operadores, supervisores y propietarios.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19.5c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M16 5.6a3 3 0 0 1 0 5.8" />
        <path d="M17.5 13.7c2.1.6 3.9 2.5 3.9 4.8" />
      </svg>
    ),
  },
  {
    title: "Visualización en tiempo real",
    text: "Todas las variables clave al instante, desde consumos hasta temperaturas.",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="4" width="19" height="13" rx="2" />
        <path d="M8.5 21h7M12 17v4" />
        <path d="M6 12.5l2.4-3 2 2L14 8l1.8 2.4" />
      </svg>
    ),
  },
  {
    title: "Control automatizado",
    text: "Acciones correctivas inmediatas para mantener la operación en rangos seguros y eficientes.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "Monitoreo remoto en la nube",
    text: "Acceso desde cualquier dispositivo, con reportes y alertas siempre disponibles.",
    icon: (
      <svg {...iconProps}>
        <path d="M7.5 18h9a3.75 3.75 0 0 0 .5-7.47A5.5 5.5 0 0 0 6.5 9.9 3.25 3.25 0 0 0 7.5 18Z" />
      </svg>
    ),
  },
];

export default function FeatureCards() {
  const scopeRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const slider = useSnapCarousel<HTMLDivElement>();

  useGsapReveal(scopeRef);

  useEffect(() => {
    if (prefersReducedMotion() || isSmallScreen()) return;
    const wrap = imgWrapRef.current;
    const card = cardRef.current;
    const section = scopeRef.current;
    if (!wrap || !card || !section) return;

    const ctx = gsap.context(() => {
      // La imagen entra grande y se reduce con el scroll hasta su tamaño final.
      gsap.fromTo(
        wrap,
        { scale: 1.16, transformOrigin: "50% 0%" },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 30%",
            scrub: 0.6,
          },
        },
      );

      // El recuadro con las tarjetas aparece después, montándose sobre la imagen.
      gsap.from(card, {
        y: 140,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="bg-bgMain py-16 md:py-24 lg:overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Imagen — completa al inicio, se reduce con el scroll */}
        <div
          ref={imgWrapRef}
          className="mx-auto w-full max-w-5xl will-change-transform"
        >
          <img
            src={boardImg.src}
            alt="Sistema Triaso Relief en operación, mostrando el tablero de control de la planta de asfalto"
            width={boardImg.width}
            height={boardImg.height}
            loading="lazy"
            decoding="async"
            className="block w-full rounded-2xl"
          />
        </div>

        {/* Recuadro blanco con las tarjetas — debajo de la imagen en móvil/tablet,
            montado sobre ella (con animación) en desktop */}
        <div
          ref={cardRef}
          className="relative z-10 mx-auto mt-8 max-w-4xl rounded-3xl bg-white p-6 shadow-[0_30px_80px_rgba(20,66,124,0.15)] md:mt-10 md:p-10 lg:-mt-24 lg:p-12"
        >
          <div
            ref={slider.ref}
            className="relative -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
          >
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                data-reveal="up"
                data-reveal-delay={(i % 3) * 0.06}
                className="flex w-[76%] shrink-0 snap-center flex-col items-center text-center sm:w-auto sm:shrink"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14427c]/[0.07] text-blueMain">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-grisT md:text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-grisP">
                  {f.text}
                </p>
              </div>
            ))}
          </div>

          {/* Puntos — solo móvil */}
          <div className="mt-6 flex justify-center gap-2 sm:hidden">
            {FEATURES.map((f, i) => (
              <button
                key={f.title}
                type="button"
                aria-label={`Ir a ${f.title}`}
                onClick={() => slider.goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === slider.index
                    ? "w-6 bg-blueMain"
                    : "w-1.5 bg-[#393939]/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
