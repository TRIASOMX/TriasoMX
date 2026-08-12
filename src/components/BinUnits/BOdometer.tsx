import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import single from "../../assets/images/BinUnits/BinOdometer.webp";
import FillLinkButton from "../unitComponents/FillLinkButton";

const BOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

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

          setTimeout(() => {
            setValue(60);
            setValue3(500);

            setValue1(14);
            setValue4(20);

            setValue2(18);
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
      className="w-full max-w-7xl px-8 mx-auto py-10 md:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center ">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tph</p>
            </div>
            <p className="text-[#4F4F4F]">Rango de dosificación</p>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">tons</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de unidad de tolvas</p>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-5xl font-normal ml-3">"</p>
            </div>
            <p className="text-[#4F4F4F] text-center w-full">
              Banda dosificadora
            </p>
          </div>
          <div className="hidden md:block">
            <FillLinkButton href="#planosBinUnits" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mx-auto gap-6 pt-10 col-span-1 md:col-span-4">
          <div className="w-4/6">
            <img
              src={single.src}
              alt="Bin Unit Odometer"
              className=" object-cover rounded-xl"
            />
          </div>

          <div className="flex justify-center md:hidden">
            <FillLinkButton href="#planosBinUnits" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOdometer;
