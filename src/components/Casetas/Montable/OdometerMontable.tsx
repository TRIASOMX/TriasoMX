import { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import montable from "../../../assets/images/Casetas/montable1.webp";
import FillLinkButton from "../../unitComponents/FillLinkButton";

const OdometerMontable = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
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
            setValue(4);
            setValue1(1);
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
    <div
      ref={sectionRef}
      className="max-w-[1500px] w-full px-8 py-6 md:py-20 min-h-[80vh]"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center">
        <div className="flex flex-col h-full justify-between col-span-1 md:col-span-2">
          <div className="flex flex-col items-start lg:items-start justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
              <span className="w-[1.5ch] flex flex-row">
                <Odometer value={value} format="(,ddd)" duration={2000} />
              </span>

              <p className="text-sm font-normal">orejas</p>
            </div>
            <p className="text-[#4F4F4F]">De izaje</p>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-[6ch] lg:w-[5.1ch] md:w-[5.1ch]">
              <Odometer value={value1} format="(,ddd)" duration={2000} />
              <p>.</p>
              <Odometer value={value2} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">Tons</p>
            </div>
            <p className="text-[#4F4F4F]">Capacidad de aire acondicionado</p>
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-[6.7ch] lg:w-[6.4ch] md:w-[6.4ch]">
              <Odometer value={value4} format="(,ddd)" duration={2000} />
              <p className="text-sm font-normal ml-3">"</p>
            </div>
            <p className="text-[#4F4F4F] text-center lg:text-start w-full">
              Aislamiento
            </p>
          </div>
          <FillLinkButton href="#casetaPlanos" />
        </div>

        <div className="flex flex-col items-center justify-center col-span-1 md:col-span-4">
          <div className="lg:w-3/5">
            <img
              src={montable.src}
              alt="Baghouse Odometer"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdometerMontable;
