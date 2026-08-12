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

export interface SliderModalSection {
  title: string;
  /** Color de fondo del bloque, ej. "#fffaea" */
  background: string;
  paragraphs: string[];
  imgSrc?: string;
  imgAlt?: string;
  /** Posición de la imagen respecto al texto (desktop). Por defecto "left" */
  imagePosition?: "left" | "right";
  /** Alineación del título (desktop). Por defecto "left" */
  titleAlign?: "left" | "right";
}

export interface SliderLastSlideModal {
  /** Texto del botón que abre la modal. Por defecto "Ver más" */
  buttonText?: string;
  /** Título general de la modal (opcional) */
  title?: string;
  /** Bloques de contenido de la modal */
  sections: SliderModalSection[];
}

export interface SliderProps {
  slides: Slide[];
  /** Relación de aspecto de cada tarjeta (ancho / alto). Por defecto 1.42 */
  aspectRatio?: number;
  /** Ancho máximo de una tarjeta en px (desktop). Por defecto 720 */
  cardMaxWidth?: number;
  dark?: boolean;
  /** Si se define, agrega un botón en la última tarjeta que abre una modal */
  lastSlideModal?: SliderLastSlideModal;
}

/* ------------------------------------------------------------------ */
/*  Componente                                                        */
/* ------------------------------------------------------------------ */

export default function Slider({
  slides,
  aspectRatio = 1.42,
  cardMaxWidth = 720,
  dark = false,
  lastSlideModal,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(1);
  const [sidePadding, setSidePadding] = useState(24);
  // --- texto expandido por tarjeta (solo mobile / md) -------------
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  // --- modal de la última tarjeta (opcional, vía lastSlideModal) --
  const [modalOpen, setModalOpen] = useState(false);
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
    // no iniciar el arrastre si el pointerdown viene de un botón: capturar el
    // puntero aquí redirigiría también su click al track, y el botón nunca lo recibiría
    if ((e.target as HTMLElement).closest("button")) return;
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
  const arrowStyle: CSSProperties = {
    background: "none",
    border: "none",
    color: dark ? "#111" : "white",
    cursor: "pointer",
    padding: 6,
    opacity: 0.55,
    transition: "opacity .2s ease",
    display: "inline-flex",
  };

  return (
    <section
      style={{
        width: "100%",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
        paddingBlock: 30,
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

        .modal-open-btn{
          display:inline-flex;
        }

        .modal-section-row{
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:16px;
        }
        .modal-title-row{
          display:flex;
        }
        @media (min-width: 1024px){
          .modal-section-row{
            flex-direction:row;
          }
          .modal-section-row.reverse{
            flex-direction:row-reverse;
          }
          .modal-title-row.align-right{
            justify-content:flex-end;
          }
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
          .modal-open-btn{
            display:none;
          }
          .modal-open-btn.is-expanded{
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
                    "linear-gradient(to top, rgba(0,0,0,.97) 0%, rgba(0,0,0,.85) 25%, rgba(0,0,0,.55) 50%, rgba(0,0,0,0) 80%)",
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

                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                  className="text-lg md:text-2xl"
                >
                  {s.title}
                </h3>

                <div className={`card-text${isExpanded ? " is-expanded" : ""}`}>
                  <p
                    style={{
                      margin: 0,

                      lineHeight: 1.5,
                      opacity: 0.9,
                      maxWidth: "100%",
                    }}
                    className="font-normal text-xs md:text-sm"
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

                {lastSlideModal && i === slides.length - 1 && (
                  <button
                    type="button"
                    className={`modal-open-btn${isExpanded ? " is-expanded" : ""}`}
                    style={{
                      alignItems: "center",
                      gap: 8,
                      marginTop: 16,
                      background: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 20px",
                      color: "#000",
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalOpen(true);
                    }}
                  >
                    {lastSlideModal.buttonText ?? "Ver más"}
                  </button>
                )}
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

      {/* Modal de la última tarjeta */}
      {lastSlideModal && modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="slider-modal-title"
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              width: "min(92vw, 44rem)",
              maxHeight: "88vh",
              overflowY: "auto",
            }}
          >
            <div style={{ padding: "24px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                {lastSlideModal.title && (
                  <h3
                    id="slider-modal-title"
                    style={{
                      margin: 0,
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#111",
                    }}
                  >
                    {lastSlideModal.title}
                  </h3>
                )}
                <button
                  type="button"
                  aria-label="Cerrar"
                  onClick={() => setModalOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                    color: "#111",
                    flexShrink: 0,
                    marginLeft: "auto",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {lastSlideModal.sections.map((section, si) => (
                  <div
                    key={si}
                    style={{
                      background: section.background,
                      borderRadius: 16,
                      padding: 20,
                    }}
                  >
                    <div
                      className={`modal-title-row${
                        section.titleAlign === "right" ? " align-right" : ""
                      }`}
                    >
                      <h4
                        style={{
                          margin: "0 0 16px",
                          fontWeight: 700,
                          fontSize: 15,
                          color: "#111",
                          textTransform: "uppercase",
                          letterSpacing: ".04em",
                        }}
                      >
                        {section.title}
                      </h4>
                    </div>

                    <div
                      className={`modal-section-row${
                        section.imagePosition === "right" ? " reverse" : ""
                      }`}
                    >
                      {section.imgSrc && (
                        <img
                          src={section.imgSrc}
                          alt={section.imgAlt ?? ""}
                          style={{ width: 150, height: "auto", flexShrink: 0 }}
                        />
                      )}
                      <div
                        style={{
                          flex: "1 1 240px",
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {section.paragraphs.map((p, pi) => (
                          <p
                            key={pi}
                            style={{
                              margin: 0,
                              fontSize: 12.5,
                              lineHeight: 1.6,
                              color: "#4b5563",
                            }}
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
