import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isSmallScreen, prefersReducedMotion } from "./reliefMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ *
 *  Contenido del informe — los 16 datos que ya vivían en la sección, *
 *  reordenados de lo general a lo específico. Valores de muestra.     *
 * ------------------------------------------------------------------ */
const TREND =
  "M0,132 L64,120 L128,126 L192,96 L256,104 L320,80 L384,116 L448,92 L512,100 L576,72 L640,86";
const DELTA_MARKS = [
  { x: 192, y: 96 },
  { x: 320, y: 80 },
  { x: 576, y: 72 },
];
const TICKS = Array.from({ length: 16 }, (_, i) => [4, 9, 13].includes(i));
const LEDGER = [
  ["07:14 – 07:31", "C-04", "J. Morales", "XAL-8823", "24.6 t"],
  ["09:02 – 09:19", "C-01", "R. Peña", "XBK-1190", "25.1 t"],
  ["10:40 – 10:58", "C-07", "L. Ibáñez", "XCP-4471", "23.8 t"],
  ["12:15 – 12:33", "C-04", "J. Morales", "XAL-8823", "24.9 t"],
  ["14:06 – 14:22", "C-02", "M. Ríos", "XDR-7052", "25.4 t"],
  ["15:48 – 16:05", "C-05", "A. Vega", "XET-3318", "24.2 t"],
];
const GRADATION = [
  { w: 22, c: "#14427c" },
  { w: 18, c: "#255491" },
  { w: 15, c: "#3c69a6" },
  { w: 14, c: "#5c82bb" },
  { w: 12, c: "#7f9ccc" },
  { w: 11, c: "#a5badd" },
  { w: 8, c: "#ccd7ec" },
];
const AREA = TREND + " L640,180 L0,180 Z";
const GRID_Y = [50, 100, 150];
const LEDGER_COLS = "md:grid md:grid-cols-[11rem_4rem_1fr_7rem_4rem] md:gap-4";

export default function ReliefReport() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const topFadeRef = useRef<HTMLDivElement>(null);
  const botFadeRef = useRef<HTMLDivElement>(null);
  const payoffRef = useRef<HTMLElement>(null);

  /* ---------- Cine anclado (solo desktop) ---------- */
  useEffect(() => {
    if (prefersReducedMotion() || isSmallScreen()) return;
    const section = sectionRef.current;
    const frame = frameRef.current;
    const viewport = viewportRef.current;
    const sheet = sheetRef.current;
    const payoff = payoffRef.current;
    const topFade = topFadeRef.current;
    const botFade = botFadeRef.current;
    if (
      !section ||
      !frame ||
      !viewport ||
      !sheet ||
      !payoff ||
      !topFade ||
      !botFade
    )
      return;

    const ctx = gsap.context(() => {
      const strata = gsap.utils.toArray<HTMLElement>(".rmr-stratum");
      const draws = gsap.utils.toArray<SVGPathElement>(".rmr-draw");
      const stratumAt: number[] = [];
      const done = new Set<number>();
      let travel = 0;
      let payoffStart = 0.85;
      let fitScale = 1;
      let yEnd = 0;
      let startY = 0;

      const setInitial = () => {
        draws.forEach((p) => {
          const len = p.getTotalLength();
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        });
        strata.forEach((s) =>
          gsap.set(s, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)", y: 26 }),
        );
        gsap.set(sheet, { transformOrigin: "top center", y: startY, scale: 1 });
        gsap.set(payoff, { autoAlpha: 0 });
        gsap.set([topFade, botFade], { autoAlpha: 1 });
      };

      const reveal = (i: number) => {
        if (done.has(i) || i < 0 || i >= strata.length) return;
        done.add(i);
        const s = strata[i];
        const q = <T extends Element>(sel: string) =>
          s.querySelectorAll<T>(sel);

        gsap.to(s, {
          autoAlpha: 1,
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 0.55,
          ease: "expo.out",
        });
        const marks = q<HTMLElement>(".rmr-mark");
        if (marks.length)
          gsap.fromTo(
            marks,
            { autoAlpha: 0, y: 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power3.out",
              delay: 0.05,
            },
          );
        q<SVGPathElement>(".rmr-draw").forEach((p) =>
          gsap.to(p, {
            strokeDashoffset: 0,
            duration: 0.95,
            ease: "power2.inOut",
            delay: 0.1,
          }),
        );
        const area = q(".rmr-area");
        if (area.length)
          gsap.fromTo(
            area,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.8, delay: 0.3, ease: "power2.out" },
          );
        const bars = q(".rmr-bar");
        if (bars.length)
          gsap.fromTo(
            bars,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.9,
              stagger: 0.08,
              ease: "power2.inOut",
              delay: 0.25,
            },
          );
        const ticks = q(".rmr-tick");
        if (ticks.length)
          gsap.fromTo(
            ticks,
            { scaleY: 0, autoAlpha: 0, transformOrigin: "bottom center" },
            {
              scaleY: 1,
              autoAlpha: 1,
              duration: 0.4,
              stagger: 0.03,
              ease: "power2.out",
              delay: 0.2,
            },
          );
        const delta = q<SVGPathElement>(".rmr-delta");
        if (delta.length)
          gsap.fromTo(
            delta,
            { scale: 0, transformOrigin: "center" },
            {
              scale: 1,
              duration: 0.45,
              stagger: 0.12,
              ease: "power3.out",
              delay: 0.7,
            },
          );
        const pulses = q(".rmr-pulse");
        if (pulses.length)
          gsap.fromTo(
            pulses,
            { attr: { r: 3 }, opacity: 0.85 },
            {
              attr: { r: 15 },
              opacity: 0,
              duration: 0.9,
              stagger: 0.14,
              ease: "power2.out",
              delay: 0.75,
            },
          );
      };

      const measure = () => {
        const vh = viewport.clientHeight;
        const sh = sheet.scrollHeight;
        startY = vh * 0.08;
        const readLine = vh * 0.7;
        travel = Math.max(vh * 1.4, sh - vh * 0.45 + startY);
        payoffStart = travel / (travel + vh * 0.75);
        fitScale = gsap.utils.clamp(0.3, 1, (vh * 0.92) / sh);
        yEnd = (vh - fitScale * sh) / 2;
        strata.forEach((s, i) => {
          stratumAt[i] = gsap.utils.clamp(
            0,
            payoffStart - 0.02,
            (s.offsetTop + startY - readLine) / travel,
          );
        });
      };

      setInitial();

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + (travel + viewport.clientHeight * 0.75),
        pin: frame,
        anticipatePin: 1,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onRefreshInit: measure,
        onEnter: () => reveal(0),
        onLeaveBack: () => {
          done.clear();
          setInitial();
        },
        onUpdate: (self) => {
          const p = self.progress;
          if (p < payoffStart) {
            gsap.set(sheet, {
              y: startY - travel * (p / payoffStart),
              scale: 1,
            });
            gsap.set([topFade, botFade], { autoAlpha: 1 });
            gsap.set(payoff, { autoAlpha: 0 });
            stratumAt.forEach((sp, i) => {
              if (p >= sp) reveal(i);
            });
          } else {
            const e = gsap.parseEase("power2.inOut")(
              gsap.utils.clamp(0, 1, (p - payoffStart) / (1 - payoffStart)),
            );
            strata.forEach((_, i) => reveal(i));
            gsap.set(sheet, {
              y: gsap.utils.interpolate(startY - travel, yEnd, e),
              scale: gsap.utils.interpolate(1, fitScale, e),
            });
            gsap.set([topFade, botFade], { autoAlpha: 1 - e });
            gsap.set(payoff, { autoAlpha: e });
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  /* ---------- Revelado ligero por estrato (móvil/tablet) ---------- */
  useEffect(() => {
    if (!isSmallScreen() || prefersReducedMotion()) return;
    const nodes =
      sectionRef.current?.querySelectorAll<HTMLElement>(".rmr-stratum");
    if (!nodes || nodes.length === 0) return;
    nodes.forEach((n) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(24px)";
      n.style.transition = "opacity .6s ease, transform .6s ease";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="rmr relative overflow-hidden bg-bgMain text-grisT"
    >
      <div
        className="rmr-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div
        ref={frameRef}
        className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-16 lg:h-screen lg:py-0"
      >
        <div className="shrink-0 lg:pt-[10vh]">
          <h2 className="text-4xl font-bold leading-[1.03] tracking-tight md:text-5xl lg:text-6xl">
            Un informe, toda la operación
          </h2>
          <p className="mt-4 max-w-lg text-base text-grisP md:text-xl">
            Un reporte histórico de Triaso Relief, jornada por jornada.
          </p>
        </div>

        <div
          ref={viewportRef}
          className="relative mt-10 flex-1 lg:mt-6 lg:overflow-hidden"
        >
          <div
            ref={topFadeRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-10 bg-gradient-to-b from-bgMain to-transparent lg:block"
          />
          <div
            ref={botFadeRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-16 bg-gradient-to-t from-bgMain to-transparent lg:block"
          />

          <article
            ref={sheetRef}
            className="relative bg-white px-6 py-8 shadow-[0_30px_70px_-24px_rgba(20,66,124,0.32)] md:px-14 md:py-12 lg:will-change-transform"
          >
            {/* Cabecera del informe */}
            <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[#e7e1d0] pb-5">
              <div>
                <p className="text-sm font-semibold text-blueMain">
                  Reporte histórico
                </p>
                <p className="mt-1 text-xl font-bold md:text-2xl">
                  Planta de asfalto 337
                </p>
              </div>
              <dl className="text-right text-sm tabular-nums text-grisPPP">
                <div className="flex justify-end gap-2">
                  <dt>Periodo</dt>
                  <dd className="text-grisT">25 – 29 ago 2025</dd>
                </div>
                <div className="mt-0.5 flex justify-end gap-2">
                  <dt>Folio</dt>
                  <dd className="text-grisT">R-0912 · muestra</dd>
                </div>
              </dl>
            </header>

            <div>
              {/* 1 · Totales de producción */}
              <section className="rmr-stratum border-t border-[#e7e1d0] py-8 first:border-t-0 md:py-10">
                <h3 className="text-base font-semibold text-blueMain md:text-lg">
                  Totales de producción
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
                  <div className="rmr-mark">
                    <p className="text-4xl font-bold tabular-nums md:text-5xl">
                      12 480 t
                    </p>
                    <p className="mt-1.5 text-sm text-grisPPP">
                      Producción acumulada
                    </p>
                  </div>
                  <div className="rmr-mark">
                    <p className="text-4xl font-bold tabular-nums md:text-5xl">
                      128.3
                      <span className="ml-1 text-lg font-semibold text-grisPPP">
                        TPH
                      </span>
                    </p>
                    <p className="mt-1.5 text-sm text-grisPPP">
                      Producción promedio · mín 74 / máx 151
                    </p>
                  </div>
                  <div className="rmr-mark">
                    <p className="text-4xl font-bold tabular-nums md:text-5xl">
                      192
                      <span className="ml-1 text-lg font-semibold text-grisPPP">
                        °C
                      </span>
                    </p>
                    <p className="mt-1.5 text-sm text-grisPPP">
                      Temperatura promedio · mín 178 / máx 201
                    </p>
                  </div>
                </div>
              </section>

              {/* 2 · Consumos y eficiencia */}
              <section className="rmr-stratum border-t border-[#e7e1d0] py-8 md:py-10">
                <h3 className="text-base font-semibold text-blueMain md:text-lg">
                  Consumos y eficiencia
                </h3>
                <p className="mt-2 max-w-2xl text-base text-grisPPP md:text-lg">
                  Combustible por tonelada, consumo de asfalto y de combustible,
                  y tiempo encendida frente a tiempo produciendo.
                </p>
                <div className="mt-6">
                  <svg
                    viewBox="0 0 640 180"
                    className="block aspect-[640/180] w-full"
                    aria-hidden="true"
                  >
                    <g stroke="#393939" strokeOpacity="0.08" strokeWidth="1">
                      {GRID_Y.map((y) => (
                        <line key={y} x1="0" y1={y} x2="640" y2={y} />
                      ))}
                    </g>
                    <path
                      className="rmr-area"
                      d={AREA}
                      fill="#14427c"
                      fillOpacity="0.12"
                    />
                    <path
                      className="rmr-draw"
                      d={TREND}
                      fill="none"
                      stroke="#14427c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle cx="640" cy="86" r="4.5" fill="#14427c" />
                  </svg>
                  <p className="rmr-mark mt-1.5 text-xs tabular-nums text-grisPPP">
                    Combustible por tonelada · últimos 5 días
                  </p>
                </div>
                <div className="rmr-mark mt-7">
                  <div className="flex items-end justify-between">
                    <span className="text-sm font-medium text-grisT md:text-base">
                      Planta en operación
                    </span>
                    <span className="text-sm tabular-nums text-grisPPP">
                      33 / 41 h · 80 %
                    </span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#e7e1d0]">
                    <div
                      className="rmr-bar h-full rounded-full bg-blueMain"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-xs tabular-nums text-grisPPP">
                    <span>Encendida 41 h</span>
                    <span>Produciendo 33 h</span>
                  </div>
                </div>
              </section>

              {/* 3 · Control y antirrobo */}
              <section className="rmr-stratum border-t border-[#e7e1d0] py-8 md:py-10">
                <h3 className="text-base font-semibold text-blueMain md:text-lg">
                  Control y antirrobo
                </h3>
                <p className="mt-2 max-w-2xl text-base text-grisPPP md:text-lg">
                  Velocidades de cambio en la producción y en los niveles de
                  asfalto y combustible: los desvíos bruscos quedan marcados.
                </p>
                <div className="mt-6">
                  <svg
                    viewBox="0 0 640 180"
                    className="block aspect-[640/180] w-full overflow-visible"
                    aria-hidden="true"
                  >
                    <line
                      x1="0"
                      y1="160"
                      x2="640"
                      y2="160"
                      stroke="#393939"
                      strokeOpacity="0.15"
                    />
                    <path
                      className="rmr-draw"
                      d={TREND}
                      fill="none"
                      stroke="#393939"
                      strokeOpacity="0.3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    {DELTA_MARKS.map((m, i) => (
                      <g key={i}>
                        <line
                          x1={m.x}
                          y1={m.y}
                          x2={m.x}
                          y2="160"
                          stroke="#ca1c1c"
                          strokeOpacity="0.4"
                          strokeWidth="1"
                          strokeDasharray="2 3"
                        />
                        <circle
                          className="rmr-pulse"
                          cx={m.x}
                          cy={m.y}
                          r="3"
                          fill="none"
                          stroke="#ca1c1c"
                          strokeWidth="1.5"
                        />
                        <path
                          className="rmr-delta"
                          d="M0,-7 L7,0 L0,7 L-7,0 Z"
                          transform={`translate(${m.x} ${m.y})`}
                          fill="#ca1c1c"
                        />
                      </g>
                    ))}
                  </svg>
                  <p className="rmr-mark mt-1.5 text-xs tabular-nums text-grisPPP">
                    3 desvíos bruscos marcados en la jornada
                  </p>
                </div>
              </section>

              {/* 4 · Alarmas y eventos */}
              <section className="rmr-stratum border-t border-[#e7e1d0] py-8 md:py-10">
                <h3 className="text-base font-semibold text-blueMain md:text-lg">
                  Alarmas y eventos
                </h3>
                <p className="mt-2 max-w-2xl text-base text-grisPPP md:text-lg">
                  Cada alarma y cada evento de la jornada, con su hora.
                </p>
                <div className="mt-6">
                  <div className="flex h-16 items-end justify-between">
                    {TICKS.map((alarm, i) => (
                      <span
                        key={i}
                        className="rmr-tick flex flex-col items-center"
                      >
                        {alarm && (
                          <span className="mb-1 h-1.5 w-1.5 rounded-full bg-redBg" />
                        )}
                        <span
                          className={
                            alarm ? "w-[3px] bg-redBg" : "w-px bg-[#8f8a78]"
                          }
                          style={{ height: alarm ? 42 : 12 }}
                        />
                      </span>
                    ))}
                  </div>
                  <div className="h-px w-full bg-[#b8b2a0]" />
                  <div className="mt-1.5 flex justify-between text-xs tabular-nums text-grisPPP">
                    <span>06:00</span>
                    <span>09:00</span>
                    <span>12:00</span>
                    <span>15:00</span>
                    <span>18:00</span>
                  </div>
                </div>
                <p className="rmr-mark mt-4 text-sm tabular-nums">
                  <span className="font-semibold text-redBg">3 alarmas</span>
                  <span className="text-grisPPP"> · 13 eventos</span>
                </p>
              </section>

              {/* 5 · Entregas */}
              <section className="rmr-stratum border-t border-[#e7e1d0] py-8 md:py-10">
                <h3 className="text-base font-semibold text-blueMain md:text-lg">
                  Entregas
                </h3>
                <p className="mt-2 max-w-2xl text-base text-grisPPP md:text-lg">
                  Cada carga del periodo: camión, operador, placas, horario y
                  tonelaje.
                </p>
                <div className="mt-5">
                  <div
                    className={
                      "hidden border-b border-[#e7e1d0] pb-2 text-sm font-semibold text-grisPPP " +
                      LEDGER_COLS
                    }
                  >
                    <span>Horario</span>
                    <span>Camión</span>
                    <span>Operador</span>
                    <span>Placas</span>
                    <span className="text-right">Ton.</span>
                  </div>
                  <ul>
                    {LEDGER.map((r) => (
                      <li
                        key={r[0] + r[4]}
                        className={
                          "rmr-mark border-t border-[#e7e1d0] py-3 text-sm tabular-nums md:items-baseline md:text-base " +
                          LEDGER_COLS
                        }
                      >
                        <span className="block font-medium md:font-normal">
                          {r[0]}
                        </span>
                        <span className="mt-0.5 block text-sm text-grisPPP md:mt-0 md:inline md:text-base md:text-grisT">
                          <span className="md:hidden">Camión </span>
                          {r[1]}
                          <span className="md:hidden">
                            {" · "}
                            {r[2]}
                            {" · "}
                            {r[3]}
                            {" · "}
                            {r[4]}
                          </span>
                        </span>
                        <span className="hidden md:block">{r[2]}</span>
                        <span className="hidden md:block">{r[3]}</span>
                        <span className="hidden text-right md:block">
                          {r[4]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="rmr-mark mt-4 text-base font-semibold tabular-nums md:text-lg">
                  Mezcla total entregada · 1 262 t
                </p>
              </section>

              {/* 6 · Calidad de la mezcla entregada */}
              <section className="rmr-stratum border-t border-[#e7e1d0] py-8 md:py-10">
                <h3 className="text-base font-semibold text-blueMain md:text-lg">
                  Calidad de la mezcla entregada
                </h3>
                <p className="mt-2 max-w-2xl text-base text-grisPPP md:text-lg">
                  Receta, temperatura y granulometría / humedad de la mezcla que
                  salió.
                </p>
                <div className="rmr-mark mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-1 text-base tabular-nums md:text-lg">
                  <span className="font-semibold">Receta OFAI-19</span>
                  <span className="text-grisPPP">Temperatura 152 °C</span>
                  <span className="text-grisPPP">Humedad 4.1 %</span>
                </div>
                <div className="mt-5 flex h-4 w-full overflow-hidden rounded-full">
                  {GRADATION.map((g, i) => (
                    <span
                      key={i}
                      style={{ width: `${g.w}%`, background: g.c }}
                      className="rmr-bar h-full shrink-0"
                    />
                  ))}
                </div>
                <p className="rmr-mark mt-2.5 text-sm text-grisPPP">
                  Distribución granulométrica de la carga
                </p>
              </section>
            </div>

            <footer
              ref={payoffRef}
              className="mt-2 border-t border-[#e7e1d0] pt-6"
            >
              <p className="max-w-3xl text-xl font-semibold leading-snug md:text-2xl">
                Cada tonelada, cada carga y cada alarma quedan registradas y
                listas para consultar desde cualquier equipo.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
