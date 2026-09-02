import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// El registro toca APIs del navegador: solo en cliente (evita fallo en SSR).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Menos trabajo por frame durante el scroll en móvil.
  ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
}

/** Media query: se considera "móvil/tablet" por debajo de 1024px. */
export function isSmallScreen(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 1023px)").matches
  );
}

/** Recalcula posiciones de todos los ScrollTrigger, con debounce. */
let refreshTimer: ReturnType<typeof setTimeout> | undefined;
export function refreshTriggers(delay = 150) {
  if (typeof window === "undefined") return;
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => ScrollTrigger.refresh(), delay);
}

/* ------------------------------------------------------------------ *
 *  Easings tech-industrial (cubic-bezier propios, no defaults)        *
 * ------------------------------------------------------------------ */
export const RLF_EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)"; // salida muy pronunciada
export const RLF_EASE_BACK = "cubic-bezier(0.34, 1.56, 0.64, 1)"; // rebote sutil
export const RLF_EASE_IO = "cubic-bezier(0.83, 0, 0.17, 1)"; // in-out marcado

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function isTouch(): boolean {
  return (
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches
  );
}

/* ------------------------------------------------------------------ *
 *  Contador numérico (count-up) al entrar al viewport                 *
 * ------------------------------------------------------------------ */
interface CountUpProps {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  className?: string;
}

export function CountUp({
  to,
  duration = 2200,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = true,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const fmt = (n: number) => {
    const fixed = n.toFixed(decimals);
    const body = separator
      ? (() => {
          const [int, dec] = fixed.split(".");
          const grouped = Number(int).toLocaleString("en-US");
          return dec ? `${grouped}.${dec}` : grouped;
        })()
      : fixed;
    return `${prefix}${body}${suffix}`;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return; // SSR ya pintó el valor final

    el.textContent = fmt(0);
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
          el.textContent = fmt(p < 1 ? to * eased : to);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, duration]);

  // El render inicial (y SSR) muestra ya el número final formateado.
  return (
    <span ref={ref} className={className}>
      {fmt(to)}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 *  Magnetic hover: el elemento sigue ligeramente al cursor            *
 * ------------------------------------------------------------------ */
export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || isTouch()) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "translate3d(0,0,0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}

/* ------------------------------------------------------------------ *
 *  Glow que sigue al cursor dentro de una tarjeta                     *
 * ------------------------------------------------------------------ */
export function usePointerGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || isTouch()) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--gx", `${e.clientX - r.left}px`);
      el.style.setProperty("--gy", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return ref;
}

/* ------------------------------------------------------------------ *
 *  Reveal con movimiento real (escala / rotación / ejes) al scrollear *
 *  Se aplica a los hijos con [data-reveal] dentro del scope.          *
 * ------------------------------------------------------------------ */
type RevealKind = "up" | "down" | "left" | "right" | "scale" | "scale-rot" | "clip";

const REVEAL_FROM: Record<RevealKind, gsap.TweenVars> = {
  up: { y: 70, opacity: 0 },
  down: { y: -70, opacity: 0 },
  left: { x: -90, opacity: 0, rotate: -2.5 },
  right: { x: 90, opacity: 0, rotate: 2.5 },
  scale: { scale: 0.78, opacity: 0 },
  "scale-rot": { scale: 0.82, rotate: -5, y: 50, opacity: 0 },
  clip: { clipPath: "inset(0 0 100% 0)", y: 40, opacity: 0 },
};

export function useGsapReveal(
  scopeRef: React.RefObject<HTMLElement | null>,
  deps: unknown[] = []
) {
  useEffect(() => {
    // Sin animaciones de scroll en móvil/tablet ni con reduced-motion:
    // los elementos [data-reveal] quedan visibles tal cual (no hay CSS que los oculte).
    if (prefersReducedMotion() || isSmallScreen()) return;
    if (!scopeRef.current) return;

    const ctx = gsap.context((self) => {
      const els = (self.selector?.("[data-reveal]") ?? []) as HTMLElement[];
      els.forEach((el) => {
        const kind = (el.dataset.reveal || "up") as RevealKind;
        const delay = parseFloat(el.dataset.revealDelay || "0");
        gsap.fromTo(
          el,
          REVEAL_FROM[kind] ?? REVEAL_FROM.up,
          {
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.15,
            delay,
            ease: kind === "scale-rot" ? "back.out(1.4)" : "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, scopeRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
