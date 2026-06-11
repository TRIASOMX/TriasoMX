import React, { useState, useEffect, useRef } from "react";
import Hero1 from "../../assets/images/IntegralAsphalt/Hero1.webp";
import Hero2 from "../../assets/images/IntegralAsphalt/Hero2.webp";
import Hero3 from "../../assets/images/IntegralAsphalt/Hero3.webp";
import Hero4 from "../../assets/images/IntegralAsphalt/Hero4.webp";

const SliderHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

const Sliders = [
    {
      titulo: "Ideal para programas de bacheo",
      texto:
        "Solución eficiente para bacheo y mantenimiento vial, con producción inmediata de mezcla asfáltica directamente en el sitio de trabajo.",
      img: Hero1,
    },
    {
      titulo: "Cero emisiones, listo para funcionar en cualquier lugar",
      texto:
        "Diseñada para funcionar en los lugares más inaccesibles, esta planta de asfalto todo en uno se adapta fácilmente a las carreteras más estrechas y difíciles.",
      img: Hero2,
    },
    {
      titulo: "Movilidad que impulsa tu trabajo",
      texto:
        "Gracias a su diseño integrado y a su estructura optimizada, esta planta de asfalto se puede trasladar fácilmente sin maniobras complejas ni equipos especiales, lo que permite iniciar las operaciones en lugares a los que otras simplemente no pueden llegar.",
      img: Hero3,
    },
    {
      titulo: "Transporte sin complicaciones, producción ilimitada",
      texto:
        "Esta planta de asfalto compacta está diseñada para desplazarse con facilidad por terrenos difíciles y espacios reducidos, lo que elimina las barreras logísticas que otros equipos no pueden superar. Es ideal para proyectos en lugares remotos o de difícil acceso.",
      img: Hero4,
    },
  ];

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Sliders.length);
    }, 5000);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Sliders.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Sliders.length) % Sliders.length);
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Sliders.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.img.src}
              alt={`slide-${index}`}
              className="w-full object-cover h-[300px] md:h-[600px]"
              fetchPriority="high"
            />

            <div className="absolute top-10 left-10 text-white p-6 max-w-sm md:max-w-md rounded-md">
              <div className="absolute inset-0 bg-blueMain opacity-70 rounded-md lg:w-[850px]"></div>

              <h2 className="relative text-lg lg:text-4xl font-bold mb-2 lg:translate-x-1/2 lg:text-center">
                {slide.titulo}
              </h2>

              <div className="lg:w-[800px] lg:translate-x-1/5">
                <p className="relative w-full text-sm md:text-lg lg:text-lg lg:text-center">
                  {slide.texto}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones navegación */}
      <button
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
        onClick={prevSlide}
      >
        ‹
      </button>

      <button
        aria-label="Next slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
        onClick={nextSlide}
      >
        ›
      </button>

      {/* Puntos indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Sliders.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index
                ? "bg-blueMain"
                : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderHero;