import { useState } from "react";

type Item = {
  label: string;
  children?: string[];
};

type DataSet = {
  items: Item[];
  image: any;
};

type Props = {
  data: DataSet[];
};

export default function AsphaltComponent({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const { items, image } = data[activeIndex];

  return (
    <section className="w-full bg-blueMain text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-2 items-start">
        <div className="w-full lg:w-[42%] order-1 md:order-0">
          <ul className="space-y-3 text-sm font-base sm:text-base lg:text-lg">
            {items.map((item, i) => (
              <li key={i} className="font-normal">
                • {item.label}
                {item.children && (
                  <ul className="ml-5 mt-2 font-normal space-y-1 opacity-80 list-disc text-sm sm:text-base">
                    {item.children.map((sub, j) => (
                      <li key={j}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[58%] flex flex-col items-center  lg:min-h-[520px] order-0 md:order-1">
          <div className="w-full text-center lg:text-left mb-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Totalmente personalizables
            </h1>
            <p className="text-sm lg:text-lg md:text-lg font-light opacity-80">
              Tanques de asfalto desde lo más básico hasta los más equipados.
            </p>
          </div>

          <div className="w-full flex items-center justify-center h-[220px] sm:h-[340px] lg:h-[420px]">
            <img
              src={image?.src ?? image}
              alt="Asphalt Storage Tank"
              className="max-w-full max-h-full w-auto h-full object-contain"
            />
          </div>

          <div className="w-full flex justify-center items-center gap-5  md:flex lg:justify-end ">
            <button
              onClick={goPrev}
              className=" p-2 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-50 transition active:scale-95 "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4d4d4d"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={goNext}
              className="p-2 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-50 transition active:scale-95 "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4d4d4d"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
