import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import heroImg from "../../assets/images/FuelPreHeaters/FPH1.webp";
import FillLinkButton from "../unitComponents/FillLinkButton";

const PrecalentadoresOdometro = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [_value2, setValue2] = useState(0);
  const [_value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [_value5, setValue5] = useState(0);

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
            setValue(40);
            setValue1(1650);
            setValue2(5);
            setValue4(100);
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
      className="max-w-[1500px] px-8 mx-auto my-10 md:my-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2 gap-6">
          <div className="flex flex-col items-center lg:items-start justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <span className="w-[3ch] flex flex-row self-center">
                <Odometer value={value} format="(,ddd)" duration={2000} />
              </span>

              <p className="text-sm font-normal">°C</p>
            </div>
            <p className="text-[#4F4F4F]">Calentamiento de cualquier caudal</p>
          </div>

          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value1} format="(,ddd).dd" duration={2000} />
              <p className="text-sm font-normal ml-3">Litros</p>
            </div>
            <p className="text-[#4F4F4F] self-center md:self-start">
              Capacidad de calentamiento de caudal
            </p>
          </div>

          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Calibre malla</p>
            </div>
            <p className="text-[#4F4F4F] text-center lg:text-start w-full">
              Tamaño de filtrado de impurezas en combustible
            </p>
          </div>
          <div className="hidden md:block">
            <FillLinkButton href="#fuelPreHeaters" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center col-span-1 md:col-span-4">
          <div className="lg:w-3/5">
            <img
              src={heroImg.src}
              alt="Baghouse Odometer"
              className="rounded-lg"
            />
          </div>

          <div className="flex justify-center md:hidden">
            <FillLinkButton href="#fuelPreHeaters" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrecalentadoresOdometro;
