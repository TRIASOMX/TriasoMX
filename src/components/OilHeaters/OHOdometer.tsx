import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import single from "../../assets/images/OilHeaters/OilHeaterVT.webp";

const OHOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reinicia valores antes de animar
          setValue(0);
          setValue1(0);
          setValue2(0);
          setValue3(0);
          setValue4(0);
          setValue5(0);
          setValue6(0);

          setTimeout(() => {
            setValue(1);
            setValue1(2);
            setValue2(100);
            setValue4(6);
            setValue3(4);
            setValue5(2);
            setValue6(4);
          }, 300); // Pequeño retraso para asegurar reinicio
        }
      },
      {
        threshold: 0.5, // cuando el 50% sea visible
      }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-8 py-10 lg:py-0 lg:mt-32 lg:mb-32 md:mt-32 md:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-center lg:items-start justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full gap-1">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>&</h1>
              <Odometer value={value5} format="(,ddd)" duration={2000} />
              <h1>.</h1>
              <Odometer value={value6} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">millones de Btu/Hr</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de calentamiento</p>
          </div>

          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">pulgadas</p>
            </div>
            <p className="text-[#4F4F4F]">Sistema de serpentín de alta eficiencia</p>
          </div>

          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">litros</p>
            </div>
            <p className="text-[#4F4F4F] text-start w-full">
             Tanque de expansión de aceite térmico
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 py-14">
          <div>
            <img src={single.src} alt="Front of an oil heater system" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OHOdometer;
