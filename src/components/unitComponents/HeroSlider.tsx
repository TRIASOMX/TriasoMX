import { useEffect, useState, useRef } from "react";

interface HeroCard {
    title: string;
    href: string;
    image: string;
}

interface Props {
    slides: HeroCard[];
    autoSlide?: boolean;
    interval?: number;
}

export default function HeroSlider({
    slides,
    autoSlide = true,
    interval = 4000,
}: Props) {
    if (!slides || slides.length === 0) return null;
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const CARD_WIDTH = 260;
    const CARD_WIDTH_DESKTOP = 280;
    const GAP = 24;

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
    const step = isDesktop ? CARD_WIDTH_DESKTOP + GAP : CARD_WIDTH + GAP;
    const repeatedSlides = [...slides, ...slides];

    const next = () => {
        setIsTransitioning(true);
        setCurrent((prev) => prev + 1);
    };

    const prev = () => {
        setIsTransitioning(true);
        setCurrent((prev) => prev - 1);
    };

    useEffect(() => {
  
        if (current >= slides.length) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false); 
                setCurrent(0); 
            }, 700); 

            return () => clearTimeout(timeout);
        }

        if (current < 0) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrent(slides.length - 1);
            }, 700);

            return () => clearTimeout(timeout);
        }
    }, [current, slides.length]);

    useEffect(() => {
        if (!autoSlide || paused) return;
        const id = setInterval(next, interval);
        return () => clearInterval(id);
    }, [paused, autoSlide, interval]);

    const activeDotIndex = (current % slides.length + slides.length) % slides.length;

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
        >
            <div className="overflow-hidden py-4">
                <div
                    className="flex gap-6"
                    style={{
                        // Aplicamos o removemos la transición según corresponda
                        transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
                        transform: `translateX(-${current * step}px)`,
                    }}
                >
                    {repeatedSlides.map((card, index) => (
                        <a
                            key={index}
                            href={card.href}
                            className="group relative min-w-[260px] md:min-w-[280px] h-[250px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700"
                                style={{ backgroundImage: `url(${card.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                                <h3 className="text-xl font-bold mb-2 drop-shadow-md">
                                    {card.title}
                                </h3>
                                <div className="flex">
                                    <span className="text-sm border border-white/70 backdrop-blur-sm rounded-3xl py-2 px-4 text-white group-hover:bg-white group-hover:text-black transition-colors">
                                        Ver más
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-row justify-center items-baseline gap-5">
                <button
                    onClick={prev}
                    className="w-8 h-8 rounded-full bg-black/60 lg:bg-white/60 text-white flex items-center justify-center hover:bg-black transition"
                >
                    ‹
                </button>

                <div className="flex gap-2 mt-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            aria-label="Slider buttons"
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrent(index);
                            }}
                            className={`transition-all duration-300 rounded-full ${
                                activeDotIndex === index
                                    ? "w-8 h-1.5 bg-red-600"
                                    : "w-1.5 h-1.5 bg-black/20 lg:bg-[#f9f9f9]/40 hover:bg-red-600"
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-8 h-8 rounded-full bg-black/60 lg:bg-white/60 text-white flex items-center justify-center hover:bg-black transition"
                >
                    ›
                </button>
            </div>
        </div>
    );
}