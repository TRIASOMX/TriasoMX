import { useRef } from "react";
import img1 from "../../assets/images/Relief/Iconos/1.webp";
import img2 from "../../assets/images/Relief/Iconos/2.webp";
import img3 from "../../assets/images/Relief/Iconos/3.webp";
import {
  useGsapReveal,
  useMagnetic,
  usePointerGlow,
} from "./reliefMotion";

const CARDS = [
  {
    icon: img1.src,
    title: "Visualización en tiempo real",
    text: "Todas las variables clave disponibles al instante, desde consumos hasta temperaturas.",
  },
  {
    icon: img2.src,
    title: "Control automatizado",
    text: "Acciones correctivas inmediatas para mantener la operación dentro de rangos seguros y eficientes.",
  },
  {
    icon: img3.src,
    title: "Monitoreo remoto en la nube",
    text: "Acceso desde cualquier dispositivo, con reportes y alertas siempre disponibles.",
  },
];

function Card({ icon, title, text }: (typeof CARDS)[number]) {
  const glowRef = usePointerGlow<HTMLDivElement>();
  const magnetRef = useMagnetic<HTMLDivElement>(0.12);

  return (
    <div
      ref={glowRef}
      data-reveal="scale-rot"
      className="rlf-glow group relative overflow-hidden rounded-2xl border border-white/10 p-8 text-white shadow-xl"
      style={{ background: "linear-gradient(140deg, #0a0a0a 0%, #14145a 55%, #14427c 100%)" }}
    >
      <img
        src={icon}
        width={144}
        height={144}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -right-2 bottom-0 h-36 w-36 opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        alt=""
        aria-hidden="true"
      />
      <div ref={magnetRef} className="relative">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#89adff]">
          Módulo
        </span>
        <h3 className="mt-2 text-lg font-bold md:text-2xl">{title}</h3>
        <p className="mt-3 max-w-[22ch] font-medium leading-relaxed text-[#fffaea]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  const scopeRef = useRef<HTMLElement>(null);
  useGsapReveal(scopeRef);

  return (
    <section ref={scopeRef} className="w-full bg-[#1e1e1e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
