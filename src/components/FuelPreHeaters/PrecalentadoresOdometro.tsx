import React, { useEffect, useState, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";


const PrecalentadoresOdometro = () => {
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
                    <div className="flex flex-col items-center lg:items-start justify-center mx-auto lg:mx-0">
                        <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-full">
                            <span className="w-[3ch] flex flex-row">
                                <Odometer value={value} format="(,ddd)" duration={2000} />
                            </span>

                            <p className="text-sm font-normal">°C</p>
                        </div>
                        <p className="text-[#4F4F4F]">Calentamiento de cualquier cadual</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-[6ch] lg:w-[6ch] md:w-[6ch]">
                            <Odometer value={value1} format="(,ddd).dd" duration={2000} />
                            <p className="text-sm font-normal ml-3">Litros</p>
                        </div>
                        <p className="text-[#4F4F4F]">Capacidad de calentamiento de caudal</p>
                    </div>

                    <div className="flex flex-col items-center justify-center mx-auto lg:mx-0 md:mx-0">
                        <div className="flex text-6xl lg:text-[5rem] md:text-[5rem] font-normal justify-center lg:justify-start items-baseline w-[6.7ch] lg:w-[8ch] md:w-[6.4ch]">
                            <Odometer value={value4} format="(,ddd)" duration={2000} />
                            <p className="text-sm font-normal ml-3">Calibre malla</p>
                        </div>
                        <p className="text-[#4F4F4F] text-center lg:text-start w-full">
                            Tamaño de filtrado de impurezas en combustible
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center py-10 space-y-5">
                    <div className="lg:w-3/5">
                        <img src="https://placehold.co/600x400/png" alt="Baghouse Odometer" className="rounded-lg" />
                    </div>
                    <div className="">
                        <a
                            href=""
                            className="group relative inline-flex items-center justify-center px-4 py-2 rounded-xl border border-black text-black font-medium overflow-hidden transition-all duration-300 ease-out hover:text-white  hover:shadow-lg"
                        >
                            <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"/>
                            <span className="relative z-10">
                                Todos los detalles técnicos
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrecalentadoresOdometro;
