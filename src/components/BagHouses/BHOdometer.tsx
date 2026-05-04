import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import bagHouseMain from "../../assets/images/BagHouses/bagHouseMain.webp"

const BHOdometer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
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
      }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl px-8 mx-auto lg:mt-56 lg:mb-56 md:mt-56 md:mb-56">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-start justify-center mx-auto py-10 lg:py-0 lg:mx-0 gap-10 md:gap-20">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <span className="w-[3.6ch] flex flex-row">
                <Odometer value={value} format="(,ddd)" duration={2000} />


                <p>-</p>

                <Odometer value={value5} format="(,ddd)" duration={2000} />
              </span>

              <p className="text-sm font-normal ml-3">mil ACFM</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de casa de bolsas</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-[6ch] lg:w-[5.1ch] md:w-[5.1ch]">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p>.</p>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">%</p>
            </div>
            <p className="text-[#4F4F4F]">Filtración de captura de particulas finas</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-[6.7ch] lg:w-[6.4ch] md:w-[6.4ch]">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value3} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">tph</p>
            </div>
            <p className="text-[#4F4F4F] text-start w-full">
              Gama de bolsas para plantas de asfalto
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-10 space-y-5">
          <div className="lg:w-3/5">
            <img src={bagHouseMain.src} alt="Baghouse Odometer" className="rounded-lg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-10">
        <div>
          <h1 className="text-4xl font-bold">Cumplimiento total de las normas ecológicas</h1>
        </div>
        <div>
          <p className="font-thin text-[#393939] text-3xl">de México, Latinoamérica y Estados Unidos</p>
        </div>
      </div>
    </div>
  );
};

export default BHOdometer;
