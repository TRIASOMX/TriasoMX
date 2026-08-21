import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import img1 from "../../assets/images/PowderA/odometerIMG.webp";
import FillLinkButton from "../unitComponents/FillLinkButton";

const PAOdometer = () => {
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
            setValue(2);
            setValue1(10);
            setValue2(3);
            setValue4(7);
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
    <div ref={sectionRef} className="w-full max-w-[1500px] px-8 py-6 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2 gap-6">
          <div className="flex flex-col lg:items-start items-center justify-center">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">M3</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de aditivos en polvo</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">kg/min</p>
            </div>
            <p className="text-[#4F4F4F]">
              Rango de descarga con velocidad ajustable
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">hp</p>
            </div>
            <p className="text-[#4F4F4F] text-center w-full">
              Potencia nominal del motor de descarga
            </p>
          </div>
          <div className="hidden md:block">
            <FillLinkButton href="#planosPowder" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center col-span-1 md:col-span-4">
          <div>
            <img src={img1.src} alt="Powder Additives VL" />
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <FillLinkButton href="#planosPowder" />
        </div>
      </div>
    </div>
  );
};

export default PAOdometer;
