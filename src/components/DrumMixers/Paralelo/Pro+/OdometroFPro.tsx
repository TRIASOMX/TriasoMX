import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import odoImg from "../../../../assets/images/DrumMixers/FlujoParalelo/Pro/PlaFpPro.webp";
import "odometer/themes/odometer-theme-default.css";
import FillLinkButton from "../../../unitComponents/FillLinkButton";

const OdometerDesamaq = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [, setValue4] = useState(0);
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
            setValue(40);
            setValue5(14);
            setValue6(360);

            setValue3(20);
            setValue1(0);

            setValue2(2);
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
      className="max-w-[1500px] mx-auto px-8 md:px-0 py-10 md:py-20 min-h-[80vh]"
    >
      <div className="flex justify-center items-center pb-10">
        <h1 className="text-[#4F4F4F] font-bold text-4xl">
          El equipo para arrasar con la competencia
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center">
        <div className="flex flex-col justify-between h-full col-span-1 md:col-span-2">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center items-center lg:justify-start lg:items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value6} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tph</p>
            </div>
            <p className="text-[#4F4F4F] text-center lg:text-start">
              Rango de producción
            </p>
            <p className="text-[#4F4F4F] text-center lg:text-start text-xs">
              En modelos seleccionados
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center items-center lg:justify-start lg:items-baseline w-full">
              <Odometer value={value5} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd)" duration={2000} />

              <p className="text-sm font-normal ml-3">Tons</p>
            </div>
            <p className="text-[#4F4F4F] text-center lg:text-start w-full">
              Capacidad de cada tolva
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center items-center lg:justify-start lg:items-baseline w-full gap-1 lg:gap-0">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <h1>.</h1>
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>.</h1>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <h1 className="text-sm font-normal ml-3">%</h1>
            </div>
            <p className="text-[#4F4F4F] text-center lg:text-start w-full">
              Incorporación de RAP
            </p>
            <p className="text-[#4F4F4F] text-center lg:text-start text-xs w-full">
              Pavimento Asfáltico Recuperado
            </p>
          </div>
          <FillLinkButton href="#planosDrumMixers" />
        </div>

        <div className="flex flex-col items-center justify-center col-span-1 md:col-span-4">
          <div>
            <img src={odoImg.src} alt="Odometer Drum" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdometerDesamaq;
