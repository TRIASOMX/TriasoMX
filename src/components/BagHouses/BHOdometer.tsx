import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import bagHouseMain from "../../assets/images/BagHouses/bagHouseMain.webp";
import FillLinkButton from "../unitComponents/FillLinkButton";

const BHOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

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

          setTimeout(() => {
            setValue(4);
            setValue1(99);
            setValue2(10);
            setValue4(5);
            setValue3(500);
            setValue5(90);
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
      className="w-full max-w-7xl flex flex-col justify-center items-center py-10 md:py-20 px-8 md:px-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center max-w-[1500px]">
        <div className="flex flex-col justify-between col-span-1 md:col-span-2 h-full">
          <div className="flex flex-col items-center lg:items-start justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <span className="flex flex-row">
                <Odometer value={value} format="(,ddd)" duration={2000} />

                <p>-</p>

                <Odometer value={value5} format="(,ddd)" duration={2000} />
              </span>

              <p className="text-sm font-normal ml-3">mil ACFM</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de casa de bolsas</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal w-full justify-center lg:justify-start items-baseline">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p>.</p>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">%</p>
            </div>
            <p className="text-[#4F4F4F] w-full text-center lg:text-start">
              Filtración de captura de partículas finas
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center w-full lg:justify-start items-baseline ">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">tph</p>
            </div>
            <p className="text-[#4F4F4F] text-center lg:text-start w-full">
              Gama de bolsas para plantas de asfalto
            </p>
          </div>
          <div className="hidden md:block">
            <FillLinkButton href="#planos" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full col-span-1 md:col-span-4">
          <div className="lg:w-3/5 self-end">
            <img
              src={bagHouseMain.src}
              alt="Baghouse Odometer"
              className="rounded-lg"
            />
          </div>

          <div className="flex justify-center md:hidden">
            <FillLinkButton href="#planos" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">
            Cumplimiento total de las normas ecológicas
          </h1>
        </div>
        <div>
          <p className="font-thin text-[#393939] text-xl md:text-3xl">
            de México, Latinoamérica y Estados Unidos
          </p>
        </div>
      </div>
    </div>
  );
};

export default BHOdometer;
