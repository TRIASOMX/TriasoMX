import { useRef } from "react";

interface ImageData {
  src: string;
  title: string;
  texto: string;
}

interface Props {
  images: ImageData[];
}

export default function ItemsSliderLarge({ images }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(
      "[data-card]",
    ) as HTMLDivElement;

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-2">
      <div className="relative">
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            pb-6
            no-scrollbar
          "
        >
          {images.map((img, i) => (
            <article
              key={i}
              data-card
              className="
                snap-start
                shrink-0
                w-[85%]
                md:w-[60%]
                lg:w-[32%]
                bg-bgMain
                rounded-2xl
                border border-gray-200
                shadow-md
                p-8
                flex flex-col
              "
            >
              <div className="flex flex-col gap-4 h-full">
                <div className="h-14 md:h-16 flex items-center">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <h1 className="font-bold text-grisT text-lg md:text-2xl leading-tight line-clamp-3">
                  {img.title}
                </h1>

                <p className="text-grisT text-sm md:text-lg leading-relaxed">
                  {img.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:flex absolute -bottom-4 right-2 gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Left slider button"
            className="
              p-2
              bg-white
              border border-gray-200
              rounded-full
              shadow
              hover:bg-gray-50
              transition
              active:scale-95
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Right slider button"
            className="
              p-2
              bg-white
              border border-gray-200
              rounded-full
              shadow
              hover:bg-gray-50
              transition
              active:scale-95
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
