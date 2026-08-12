import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import img1 from "../../assets/images/DrumMixers/Contraflujo/Pro+/Plasma.webp";
import FillLinkButton from "../unitComponents/FillLinkButton";

const BurnerOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value5, setValue5] = useState(0);
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
          setValue5(0);
          setValue3(0);
          setValue4(0);

          setTimeout(() => {
            setValue(6);
            setValue3(125);

            setValue1(1.2);
            setValue4(26.8);

            setValue2(5);
            setValue5(100);
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
      className="w-full h-min-[70vh] max-w-[1500px] px-8 py-6 md:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center ">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd).d" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd).d" duration={2000} />
              <p className="text-sm font-normal ml-3">millones</p>
            </div>
            <p className="text-[#4F4F4F]">
              BTUH/hr <br />
              En modelos seleccionados
            </p>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value1} format="(,ddd).dd" duration={2000} />
              <h1>-</h1>
              <Odometer value={value4} format="(,ddd).dd" duration={2000} />
              <p className="text-sm font-normal ml-3">mil</p>
            </div>
            <p className="text-[#4F4F4F]">ACFM</p>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd).dd" duration={2000} />
              <h1>-</h1>
              <Odometer value={value5} format="(,ddd).dd" duration={2000} />
              <p className="text-sm font-normal ml-3">Hp</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de quemador</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center col-span-1 md:col-span-4">
          <div className="">
            <img
              src={img1.src}
              alt="Bin Unit Odometer"
              className=" rounded-xl md:min-h-[50vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnerOdometer;
