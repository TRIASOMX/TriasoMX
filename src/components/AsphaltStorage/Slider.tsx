import { useEffect, useRef, useState, type CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Tipos                                                             */
/* ------------------------------------------------------------------ */

export interface Slide {
  image: string;
  title: string;
  text: string;
  alt?: string;
}

export interface SliderProps {
  slides: Slide[];
  /** Relación de aspecto de cada tarjeta (ancho / alto). Por defecto 1.42 */
  aspectRatio?: number;
  /** Ancho máximo de una tarjeta en px (desktop). Por defecto 720 */
  cardMaxWidth?: number;
}

/* ------------------------------------------------------------------ */
/*  Componente                                                        */
/* ------------------------------------------------------------------ */

export default function Slider({
  slides,
  aspectRatio = 1.42,
  cardMaxWidth = 720,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(1);
  const [sidePadding, setSidePadding] = useState(24);
  // --- texto expandido por tarjeta (solo mobile / md) -------------
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  // --- estado de arrastre (solo desktop / puntero) ----------------
  const drag = useRef({
    down: false,
    moved: false,
    startX: 0,
    startScroll: 0,
  });

  const toggleExpand = (i: number) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  /* ---- utilidades de scroll ------------------------------------- */
  const stepSize = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const first = el.children[0] as HTMLElement | undefined;
    const second = el.children[1] as HTMLElement | undefined;
    if (!first) return el.clientWidth;
    const gap = second
      ? second.offsetLeft - (first.offsetLeft + first.offsetWidth)
      : 0;
    return first.offsetWidth + gap;
  };

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;

    const clamped = Math.max(0, Math.min(i, pages - 1));

    el.scrollTo({
      left: clamped * stepSize(),
      behavior: "smooth",
    });
  };

  const next = () => scrollToIndex(active + 1);
  const prev = () => scrollToIndex(active - 1);

  /* ---- actualizar dot activo al hacer scroll -------------------- */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const step = stepSize();

      if (step > 0) {
        setActive(Math.round(el.scrollLeft / step));

        const maxScroll = el.scrollWidth - el.clientWidth;
        setPages(Math.round(maxScroll / step) + 1);
      }
    };

    update();

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("resize", update);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [slides.length]);
  useEffect(() => {
    const updatePadding = () => {
      const width = Math.min(window.innerWidth * 0.86, cardMaxWidth);

      setSidePadding(Math.max((window.innerWidth - width) / 2, 24));
    };

    updatePadding();

    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, [cardMaxWidth]);

  /* ---- arrastre con el ratón (desktop) -------------------------- */
  const onPointerDown = (e: React.PointerEvent) => {
    // solo arrastre con puntero fino (ratón / trackpad); el táctil usa scroll nativo
    if (e.pointerType === "touch") return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      down: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
    // desactiva el snap mientras arrastras para que el movimiento sea continuo
    el.style.scrollSnapType = "none";
    el.style.scrollBehavior = "auto";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!drag.current.down) return;
    drag.current.down = false;
    const el = trackRef.current;
    if (el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
      // reactiva el snap y acomoda suavemente a la tarjeta más cercana
      el.style.scrollBehavior = "";
      el.style.scrollSnapType = "";
      scrollToIndex(Math.round(el.scrollLeft / stepSize()));
    }
  };

  // evita que un arrastre dispare clicks dentro de la tarjeta
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  /* ---------------------------------------------------------------- */
  /*  Estilos                                                         */
  /* ---------------------------------------------------------------- */

  const trackStyle: CSSProperties = {
    display: "flex",
    gap: 24,
    overflowX: "auto",
    scrollSnapType: "x proximity",
    WebkitOverflowScrolling: "touch",
    cursor: "grab",
    scrollbarWidth: "none",
  };

  const cardStyle: CSSProperties = {
    position: "relative",
    flex: "0 0 auto",
    width: `min(86vw, ${cardMaxWidth}px)`,
    aspectRatio: `${aspectRatio}`,
    borderRadius: 12,
    overflow: "hidden",
    scrollSnapAlign: "start",
    userSelect: "none",
    background: "#111",
  };

  return (
    <section
      style={{
        width: "100%",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
        marginBlock: 30,
      }}
    >
      <style>{`.slider-track::-webkit-scrollbar{display:none}
        .slider-track:active{cursor:grabbing}
        .slider-arrow:hover{opacity:1}

        .card-text{
          overflow:hidden;
          max-height:320px;
          opacity:1;
          transition:max-height .4s ease, opacity .3s ease, margin-top .4s ease;
        }

        .see-more-btn{
          display:none;
          align-items:center;
          gap:6px;
          margin-top:10px;
          background:none;
          border:none;
          padding:0;
          color:#fff;
          font-size:13px;
          font-weight:500;
          letter-spacing:.01em;
          cursor:pointer;
          opacity:.92;
        }
        .see-more-btn svg{
          transition:transform .3s ease;
        }
        .see-more-btn[aria-expanded="true"] svg{
          transform:rotate(180deg);
        }

        @media (max-width: 1023px){
          .card-text{
            max-height:0;
            opacity:0;
            margin-top:0;
          }
          .card-text.is-expanded{
            max-height:420px;
            opacity:1;
            margin-top:12px;
          }
          .see-more-btn{
            display:inline-flex;
          }
        }
      `}</style>

      {/* Flechas */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 20,
          padding: "0 24px 16px",
        }}
      >
        <button
          aria-label="Anterior"
          className="slider-arrow"
          onClick={prev}
          style={arrowStyle}
        >
          <svg
            width="26"
            height="16"
            viewBox="0 0 26 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M8 1 L1 8 L8 15 M1 8 H25" />
          </svg>
        </button>
        <button
          aria-label="Siguiente"
          className="slider-arrow"
          onClick={next}
          style={arrowStyle}
        >
          <svg
            width="26"
            height="16"
            viewBox="0 0 26 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M18 1 L25 8 L18 15 M25 8 H1" />
          </svg>
        </button>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="slider-track"
        style={{
          ...trackStyle,
          paddingLeft: sidePadding,
          paddingRight: sidePadding,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        {slides.map((s, i) => {
          const isExpanded = !!expanded[i];
          return (
            <article key={i} style={cardStyle}>
              <img
                src={s.image}
                alt={s.alt ?? s.title}
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.82) 0%, rgba(0,0,0,.45) 32%, rgba(0,0,0,0) 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "clamp(20px,4%,36px)",
                  color: "#fff",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "clamp(22px,2.4vw,32px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>

                <div className={`card-text${isExpanded ? " is-expanded" : ""}`}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "clamp(13px,1vw,15px)",
                      lineHeight: 1.5,
                      opacity: 0.9,
                      maxWidth: "80%",
                    }}
                  >
                    {s.text}
                  </p>
                </div>

                <button
                  type="button"
                  className="see-more-btn"
                  aria-expanded={isExpanded}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(i);
                  }}
                >
                  {isExpanded ? "Ver menos" : "Ver más"}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M1 1 L5 5 L9 1" />
                  </svg>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 24,
        }}
      >
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a la tarjeta ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: i === active ? "#111" : "#cccccc",
              transition: "background .2s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}

const arrowStyle: CSSProperties = {
  background: "none",
  border: "none",
  color: "#111",
  cursor: "pointer",
  padding: 6,
  opacity: 0.55,
  transition: "opacity .2s ease",
  display: "inline-flex",
};
