import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import single from "../../assets/images/HotMix/HMProv1.webp";
import FillLinkButton from "../unitComponents/FillLinkButton";

const HMOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value4, setValue4] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reinicia valores antes de animar
          setValue(0);
          setValue1(0);
          setValue2(0);
          setValue4(0);

          setTimeout(() => {
            setValue(50);
            setValue1(135);
            setValue2(10);
            setValue4(72);
          }, 300); // Pequeño retraso para asegurar reinicio
        }
      },
      {
        threshold: 0.5, // cuando el 50% sea visible
      },
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-7xl my-6 md:my-16 min-h-[80vh]"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2">
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tons</p>
            </div>
            <p className="text-[#4F4F4F]">
              capacidad de almacenamiento de mezcla asfáltica
            </p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">minutos</p>
            </div>
            <p className="text-[#4F4F4F]">Tiempo de instalación</p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">horas</p>
            </div>
            <p className="text-[#4F4F4F] text-start w-full">
              Tiempo de preservación
            </p>
          </div>
          <div className="hidden md:block">
            <FillLinkButton href="#planosSilos" />
          </div>
        </div>

        <div className="flex flex-col items-end justify-center col-span-1 md:col-span-4">
          <div className="w-3/5">
            <img src={single.src} alt="Back of a Hot-Mix storage silo" />
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <FillLinkButton href="#planosSilos" />
        </div>
      </div>
    </div>
  );
};

export default HMOdometer;
