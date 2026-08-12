import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import FillLinkButton from "../../unitComponents/FillLinkButton";
import HeroImage from "../../../assets/images/Casetas/remolcable.webp";

const OdometerRemolcable = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [, setValue2] = useState(0);
  const [, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [, setValue5] = useState(0);

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
            setValue(3000);
            setValue1(1.5);
            setValue2(5);
            setValue4(3);
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
    <div ref={sectionRef} className="max-w-7xl px-8 py-6 md:py-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2 w-full gap-4">
          <div className="flex flex-col items-center lg:items-start justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />

              <p className="text-sm font-normal">Lbs</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de eje</p>
          </div>

          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value1} format="(,ddd).dd" duration={2000} />
              <p className="text-sm font-normal ml-3">Tons</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de aire acondicionado</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex text-5xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">"</p>
            </div>
            <p className="text-[#4F4F4F] text-center lg:text-start w-full">
              Aislamiento
            </p>
          </div>
          <div className="hidden md:block">
            <FillLinkButton href="#planosCaseta" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center col-span-1 md:col-span-4 w-full">
          <div className="">
            <img
              src={HeroImage.src}
              alt="Caseta Odometer"
              className="rounded-lg"
            />
          </div>

          <div className="flex justify-center md:hidden">
            <FillLinkButton href="#planosCaseta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdometerRemolcable;
