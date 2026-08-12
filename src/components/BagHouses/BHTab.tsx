// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  {
    id: 0,
    src: "/Gallery/baghouses3.webp",
    alt: "Baghouse mounted on the same chasis as the drum mixer",
  },
  { id: 1, src: "/Gallery/baghouses2.webp", alt: "Baghouse self-contained" },
];

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-7xl px-4 sm:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-start gap-8 mt-10 mb-4">
      <div className="flex flex-col gap-4 md:gap-10">
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-4">
          {images.map((_img, index) => (
            <button
              aria-label="Select tab"
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-center min-h-[80px] md:text-start font-normal p-4 rounded-xl text-sm md:text-base w-full sm:flex-1 lg:flex-none lg:w-8/12 ${
                activeIndex === index
                  ? "border-red-500 text-white bg-blueMain"
                  : "border-transparent bg-white text-grisT"
              }`}
            >
              {index === 0 ? (
                <>
                  Montado sobre el mismo chasis{" "}
                  <span className="hidden md:inline">
                    que el tambor mezclador
                  </span>
                </>
              ) : (
                "Acoplables"
              )}
            </button>
          ))}
        </div>
        <p className="text-grisT text-sm lg:text-lg md:text-lg">
          Sistemas de control de emisiones acoplables e integradas, diseñados
          para una filtración de aire eficiente y la captación de partículas
          en plantas de asfalto — configurables tanto para instalaciones
          portátiles como estacionarias.
        </p>
      </div>

      <div className="w-full aspect-[16/9] flex justify-center items-start">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="rounded-2xl h-[350px] w-full object-contain"
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </div>
  );
}
