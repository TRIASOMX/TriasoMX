import { useState, useRef, useEffect, useCallback } from "react";

export interface SlideItem {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  accentColor?: string;
}

interface ProductSliderProps {
  slides: SlideItem[];
}

function accentOf(slides: SlideItem[], i: number) {
  return slides[i]?.accentColor ?? "#000000";
}

export default function ProductSlider({ slides }: ProductSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const trackRef = useRef<HTMLDivElement>(null);

  const CARD_CLASS =
    "flex-none snap-start w-[calc(100%-1rem)] md:w-[58%] lg:w-[38%] shrink-0";

  // --- NUEVA FUNCIÓN: Lógica condicional para centrar ---
  const getAlignmentClass = (count: number) => {
    if (count === 1) return "justify-center"; // Centra 1 elemento en todas las pantallas
    if (count === 2) return "lg:justify-center"; // Centra 2 elementos solo en pantallas LG (donde no desbordan)
    return ""; // 3 o más elementos usan el justify-start por defecto para hacer scroll normal
  };

  const syncDot = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
  
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    const trackRect = track.getBoundingClientRect();
  
    let closestIndex = 0;
    let closestDistance = Infinity;
  
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.left - trackRect.left);
  
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
  
    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const cardW = card.offsetWidth + 16;
    track.scrollTo({ left: index * cardW, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll("[data-card]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target as Element);
            setActiveIndex(index);
          }
        });
      },
      {
        root: track,
        threshold: 0.6,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    dragStart.current = { x: e.pageX, scrollLeft: track.scrollLeft };
  };
  
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft =
      dragStart.current.scrollLeft - (e.pageX - dragStart.current.x) * 1.1;
  };
  
  const stopDrag = () => setIsDragging(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 select-none">
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className={[
          "flex gap-4",
          getAlignmentClass(slides.length), // <--- APLICAMOS LA FUNCIÓN AQUÍ
          "overflow-x-auto scroll-smooth",
          "snap-x snap-mandatory",
          "pb-2",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {slides.map((slide, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={i}
              data-card
              className={`${CARD_CLASS} relative rounded-2xl overflow-hidden transition-transform duration-300`}
              style={{ background: slide.bgColor }}
            >
              <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-contain p-8 z-0 transition-transform duration-500"
                  style={{
                    transform: isExpanded
                      ? "scale(0.82) translateY(-6%)"
                      : "scale(1)",
                  }}
                />

                <div
                  className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(to top, ${slide.bgColor}f8 35%, ${slide.bgColor}bb 65%, transparent 100%)`,
                    opacity: isExpanded ? 1 : 0,
                  }}
                />

                <div
                  className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, ${slide.bgColor}cc, transparent)`,
                  }}
                />

                <div className="absolute top-0 left-0 right-0 z-20 p-5">
                  <h3
                    className="font-bold text-white leading-snug"
                    style={{
                      fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)",
                      textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                    }}
                  >
                    {slide.title}
                  </h3>
                </div>

                <div
                  className="absolute left-0 right-0 z-20 px-5 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    bottom: "52px",
                    maxHeight: isExpanded ? "240px" : "0px",
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <p className="text-white/85 text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-2 px-5 py-3.5 text-white/90 text-sm font-medium transition-all duration-200 hover:text-white active:opacity-80"
                  style={{
                    background: "rgba(0,0,0,0.22)",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="text-[10px] leading-none transition-transform duration-300"
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▲
                  </span>
                  {isExpanded ? "mostrar menos" : "mostrar más"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className="rounded-full transition-all duration-300 ease-out"
            style={{
              width: activeIndex === i ? "22px" : "8px",
              height: "8px",
              background:
                activeIndex === i
                  ? accentOf(slides, i)
                  : "rgba(156,163,175,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
}