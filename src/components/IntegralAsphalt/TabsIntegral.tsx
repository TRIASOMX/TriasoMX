// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  {
    id: 0,
    src: "/Gallery/tolva1.webp",
    alt: "Chasis estándar",
    sub: "Para movilidad de la planta vacía",
    tabShort: "Estándar",
    tabLong: "Chasis estándar para movilidad de la planta vacía",
  },
  {
    id: 1,
    src: "/Gallery/tolva2.webp",
    alt: "Todo montado ",
    sub: "Sobre patas de soporte",
    tabShort: "Ligero",
    tabLong: "Todo montado sobre un chasis ligero con patas de soporte",
  },
  {
    id: 2,
    src: "/Gallery/tolva3.webp",
    alt: "Chasis reforzado",
    sub: "Para movilidad de la planta completamente cargada",
    tabShort: "Reforzado",
    tabLong: "Chasis reforzado para una movilidad de la planta completamente cargada",
  },
];

export default function TabsIntegral() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 mb-2 max-w-7xl mx-auto px-4">
      {/* Tabs: control segmentado en mobile, subrayado en desktop */}
      <div
        role="tablist"
        aria-label="Tipo de chasis"
        className="grid grid-cols-3 w-full text-center
                   gap-1 rounded-full bg-gray-100 p-1
                   md:gap-2 md:bg-transparent md:rounded-none md:p-0"
      >
        {images.map((img, index) => {
          const active = activeIndex === index;
          return (
            <button
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={img.tabLong}
              key={img.id}
              onClick={() => setActiveIndex(index)}
              className={`min-w-0 flex items-center justify-center text-center leading-tight
                          transition-all duration-200
                          rounded-full px-2 py-2 text-sm
                          md:rounded-none md:border-b-2 md:px-2 md:py-2 md:text-base md:leading-snug
                          ${
                            active
                              ? "bg-white text-black font-bold shadow-sm md:bg-transparent md:shadow-none md:border-redBg"
                              : `text-grisT font-normal bg-white/40 ring-1 ring-inset ring-black/5
                                 hover:bg-white/80 hover:text-black
                                 md:bg-transparent md:ring-0 md:border-transparent
                                 md:hover:bg-transparent md:hover:text-black md:hover:border-gray-300`
                          }`}
            >
              <span className="md:hidden">{img.tabShort}</span>
              <span className="hidden md:inline">{img.tabLong}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 w-full flex flex-col justify-center items-center bg-gray-100 rounded-2xl overflow-hidden px-4 py-6">
        <div className="w-full h-[240px] sm:h-[320px] md:h-[460px] lg:h-[520px] flex items-center justify-center">
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>

        <p className="font-bold text-lg md:text-4xl lg:text-4xl pt-4 md:pt-5 text-center min-h-[3.5rem] md:min-h-[6.5rem] lg:min-h-[6.5rem]">
          {images[activeIndex].sub}
        </p>
      </div>
    </div>
  );
}
