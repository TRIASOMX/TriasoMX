import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import single from "../../assets/images/ColdMix/CMProv4.webp";
import FillLinkButton from "../unitComponents/FillLinkButton";

const CMOdom = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [, setValue3] = useState(0);
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

          setTimeout(() => {
            setValue(25);
            setValue5(500);
            setValue4(10);
            setValue1(20);
            setValue2(30);

            setValue3(24);
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
      className="w-full max-w-[1500px] px-8 py-6 md:py-16 min-h-[70vh]"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2">
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value5} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tph</p>
            </div>
            <p className="text-[#4F4F4F]">Rango de capacidades de producción</p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <h1>-</h1>
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">tons</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de unidad de tolvas</p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-7xl font-bold ml-3">''</p>
            </div>
            <p className="text-[#4F4F4F] text-start w-full">Banda colectora</p>
          </div>
          <FillLinkButton href="#planosCold" />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 col-span-1 md:col-span-4">
          <div>
            <img
              src={single.src}
              alt="Back of a cold mix asphalt plant"
              className="max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMOdom;
