// src/components/Tabs.tsx
import { useState } from "react";


const images = [
  { id: 0, src: "/Gallery/baghouses1.webp", alt: "Baghouse mounted on the same chasis as the drum mixer" },
  { id: 1, src: "/Gallery/baghouses2.webp", alt: "Baghouse self-contained" },
];

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-7xl px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-start gap-8 mt-10 mb-4">
      <div className="flex lg:flex-col items-stretch justify-around gap-4 md:gap-10">
        {images.map((img, index) => (
          <button
            aria-label="Select tab"
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-center min-h-[80px] md:text-start font-normal p-4 rounded-xl md:pr-4 md:w-8/12 text-sm md:text-base ${activeIndex === index
              ? "border-red-500 text-white bg-blueMain"
              : "border-transparent bg-white text-grisT"
              }`}
          >
            {index === 0 ? (
              <>
                Mounted on the same <br />
                chassis{" "}
                <span className="hidden md:inline">as the drum mixer</span>
              </>
            ) : (
              "Self-contained"
            )}
          </button>
        ))}
      </div>


      <div className=" w-full aspect-[16/9]">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="border-2 border-blueMain rounded-2xl h-[350px] w-full object-contain md:object-cover lg:object-cover"
          fetchPriority="high"
          loading="eager"
        />
      </div>


      <div>
        <p className=" text-grisT text-sm lg:text-lg md:text-lg">
          Self-contained and mounted integrated dust control systems designed for efficient air filtration and particulate capture in asphalt plants — configurable for both portable and stationary installations.
        </p>
      </div>
    </div>
  );
}
