// src/components/Tabs.tsx
import { useState } from "react";

const images = [
  { id: 0, src: "/Gallery/baghouses1.webp", alt: "Bag house mounted on the same chassis as the drum mixer" },
  { id: 1, src: "/Gallery/baghouses2.webp", alt: "Bag house self-contained" },
];

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 mt-10 mb-4">

      <div className="flex flex-row justify-center gap-6 lg:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-sm pb-2 border-b-2 transition-all ${activeIndex === index
                ? "border-red-500 text-black font-bold"
                : "border-transparent text-[#5d5d5d] font-normal"
              }
      `}
          >
            {index === 0 ? "Mounted on the same chassis" : "Self-contained"}
          </button>
        ))}
      </div>


      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        className=" w-full object-contain md:object-cover lg:object-cover"
      />

      <div className="flex flex-col max-w-7xl mx-auto px-8 lg:hidden">
        <h2>Different Types of Filter Bags and Their Specific Applications:</h2>
        <ul className="list-disc pl-5 font-semibold text-[#5d5d5d]">
          <li>Polyester</li>
          <li>Nomex</li>
          <li>Polyamide (P84)</li>
        </ul>
      </div>

      <div className="hidden lg:flex flex-col justify-between gap-10">
        <div className="flex flex-col gap-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={` text-start border-b-2 pb-2 transition-all
          ${activeIndex === index ? "border-red-500 text-black font-bold" : "border-transparent text-[#5d5d5d] font-normal" } `}>
              {index === 0 ? (
                <>
                  Mounted on the same <br />
                  chassis as the drum mixer
                </>
              ) : (
                "Self-contained"
              )}
            </button>
          ))}
        </div>

        <div>
          <h2>Different Types of Filter Bags and Their Specific Applications:</h2>
          <ul className="list-disc pl-5 font-semibold text-[#5d5d5d]">
            <li>Polyester</li>
            <li>Nomex</li>
            <li>Polyamide (P84)</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
