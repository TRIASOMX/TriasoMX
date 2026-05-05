// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/tolva1.webp", alt: "Chasis estándar", sub:"Para movilidad de la planta vacía" },
  { id: 1, src: "/Gallery/tolva2.webp", alt: "Todo montado ", sub:"Sobre patas de soporte" },
  { id: 2, src: "/Gallery/tolva3.webp", alt: "Chasis reforzado", sub:"Para movilidad de la planta completamente cargada" }, 
];

export default function TabsIntegral() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center  mt-10 mb-2 max-w-7xl mx-auto px-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full text-center gap-2">
        {images.map((img, index) => (
          <button
            aria-label="Tab Selector"
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`min-w-0 break-words border-b-2 py-2 px-2 text-lg md:text-base lg:text-base ${activeIndex === index
                ? "border-redBg text-black font-bold"
                : "border-transparent text-grisT font-normal"
              }`}
          >
            {index === 0 ? (
              <>
                Chasis estándar {" "}
                <span className="hidden md:inline">
                para  <br />
                movilidad de la planta vacía
                </span>
              </>
            ) : index === 1 ? (
              <>
                <span className="hidden md:inline"> Todo montado sobre </span>{" "}
                un chasis ligero <br />{" "}
                <span className="hidden md:inline"> con patas de soporte </span>
              </>
            ) : (
              <>
                Chasis reforzado{" "}
                <span className="hidden md:inline">
                  para una movilidad de la planta <br /> completamente cargada
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      <div className="w-full h-[50vh] lg:h-[75vh] md:h-[75hv]  flex flex-col justify-center items-center bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="w-full h-full object-contain"
        />

        <p className="font-bold text-xl lg:text-4xl md:text-4xl lg:pt-5 md:pt-5">{images[activeIndex].sub}</p>

      </div>
    </div>

  );
}
