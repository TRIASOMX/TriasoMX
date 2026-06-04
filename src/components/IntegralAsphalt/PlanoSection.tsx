import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reinfo1 from "../../assets/images/IntegralAsphalt/reinfo1.webp";
import reinforcedBlue from "../../assets/images/IntegralAsphalt/reinforced.webp";
import reinforcedRight from "../../assets/images/IntegralAsphalt/reinfright.webp";
import reinforcedLeft from "../../assets/images/IntegralAsphalt/reinfleft.webp";
import supportRight from "../../assets/images/IntegralAsphalt/supportright.webp";
import supportLeft from "../../assets/images/IntegralAsphalt/supportleft.webp";
import supportMain from "../../assets/images/IntegralAsphalt/supportmain.webp";
import standarMain from "../../assets/images/IntegralAsphalt/standarmain.webp";
import standarRight from "../../assets/images/IntegralAsphalt/standarright.webp";
import standarLeft from "../../assets/images/IntegralAsphalt/standarleft.webp";
import { useClipPathScrollTrigger } from "../lib/useClipPathScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const drumMixer = [
  {
    length: 300,
    width: 112.32,
  },
];
const asphalTank = [
  {
    length: 389.2,
    width: 128,
    height: 158.5,
    capcity: "6,000",
  },
];
const binUnit = [
  {
    length: 317,
    width: 190.5,
    height: 160,
    capcity: "8 ton",
  },
];
const toggleConfig = [
  {
    id: "1",
    dimensions: {
      width: 292.1,
      height: 394.47,
      length: 762.0,
      support: "Stationary legs",
      chasisWidth: 266.7,
    },
  },
  {
    id: "2",
    dimensions: {
      width: 311.5,
      height: 388.75,
      length: 891.65,
      support: "Pre-set stationary legs",
      chasisWidth: 304.8,
      wheel: 'Eight 16" tires',
      axleConfig: "Dual 8-lug axles",
    },
  },
  {
    id: "3",
    dimensions: {
      width: 290.5,
      height: 421,
      length: 876,
      support: "Pre-set stationary legs",
      chasisWidth: 254,
      wheel: "11-22.5 tires",
      axleConfig: "Dual 8-lug axles",
      fifthWheel: 130.45,
    },
  },
];
const PlanoSection = () => {
  //tabs states
  const [activeTab, setActiveTab] = useState(3);

  //animation
  const boxRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const otroElemento = useRef<HTMLDivElement>(null);
  const columnGrid1 = useRef<HTMLDivElement>(null);
  const columnGrid2 = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const clipTargetRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLImageElement | null>(null);

  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  //ESTADOS DE LOS DROPWDOWNS
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    C1_1: false,
    C1_2: false,
    C2_1: false,
    C2_2: false,
    C3_1: false,
    C3_2: false,
    C3_3: false,
    C4_1: false,
    C4_2: false,
    C4_3: false,
    C5_1: false,
    C5_2: false,
    C5_3: false,
    C6_1: false,
    C6_2: false,
    C6_3: false,

  });
  // valor de cm a pies
  const cmToFeet = 0.01;
  const activeData = toggleConfig.find(
    (item) => item.id === activeTab.toString()
  );
  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };
  const modelOptions = [
    { id: 1, label: "Chasis estándar para movilidad de planta vacía" },
    { id: 2, label: "Chasis ligero con patas de soporte" },
    { id: 3, label: "Chasis reforzado para movilidad de planta llena" },

  ];

  useClipPathScrollTrigger({
    enabled: activeTab === 3,

    boxRef,
    nextSectionRef,
    clipTargetRef,
    imgRef,
    otroElementoRef: otroElemento,
    optionsRef,
    columnGrid1Ref: columnGrid1,
    columnGrid2Ref: columnGrid2,
    containerRef,
  });


  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="h-[100vh] lg:h-[80vh] md:h-[80vh] relative flex items-center justify-center w-full">
        <div
          className="absolute bottom-0 w-full h-4/6 overflow-hidden"
          style={{
            backgroundImage: "url(/fondoAsphalt.webp)",
            backgroundRepeat: "repeat-x", // Se repetirá horizontalmente si es necesario
            backgroundPosition: "center bottom",
            backgroundSize: "auto 100%", // Mantiene la altura completa y el ancho automático (se repetirá)
          }}
        ></div>
        <div
          id="boxScroll"
          ref={boxRef}
          className="text-white font-bold
           flex items-center justify-center
            rounded will-change-transform transform-gpu
             z-20 w-[200px] h-[588px]"
        >
          <img
            ref={blueRef}
            src={reinforcedBlue.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen de fondo"
            style={{
              display: activeTab === 3 ? "block" : "none",
              opacity: activeTab === 3 ? 1 : 0,
              visibility: activeTab === 3 ? "visible" : "hidden",
            }}
          />
          <img
            ref={imgRef}
            src={reinfo1.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen superior"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </div>
      <div
        ref={clipTargetRef}
        id="sectionNueva"
        className="bg-[url('/fondopatron.webp')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header id="planosIntegral" className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Especificaciones
          </h1>
          <div className="flex items-center justify-center mt-10">
            <h1 className="mr-3" id="measure">
              UNIDAD:
            </h1>
            <div
              onClick={toggleUnit}
              className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
            >
              {/* Fondo deslizante */}
              <div
                className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${unit === "metric" ? "translate-x-full" : ""
                  }`}
              ></div>

              {/* Texto sobrepuesto */}
              <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
                <span
                  className={unit === "imperial" ? "text-black" : "text-white"}
                >
                  MT
                </span>
                <span
                  className={unit === "metric" ? "text-black" : "text-white"}
                >
                  CM
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="w-full px-8 lg:px-8 mt-14">
          {/* Contenedor de los botones */}
          <div id="options" ref={optionsRef} className="w-full">
            {/* móvil */}
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto">
              <label className="text-white block text-center">
                OPCIONES:
              </label>
              <div className="relative">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(Number(e.target.value))}
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
                 appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {modelOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* desktop */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:pb-5">
              <label className="text-white block text-center">
                OPCIONES:
              </label>
            </div>
            <div className="hidden md:flex flex-wrap justify-center gap-5  mx-auto px-2">
              {modelOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 w-[300px]
                    ${activeTab === option.id
                      ? "text-gray-900 bg-white border-white"
                      : "text-white bg-transparent border-white"
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido de los tabs */}
          <div
            className="w-full mt-20 mb-10"
            id="tabsSection"
            ref={nextSectionRef}
          >
            {activeTab === 1 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col w-full h-full items-start justify-between gap-0 order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Construcción y Diseño
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_1: !prev.C1_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Patas de soporte plegables con altura de trabajo preestablecida
                        </li>
                        <li>Tambor fabricado con acero aleado resistente a altas temperaturas</li>
                        <li>
                          Protección frontal reforzada y sellos de EPDM en los extremos del tambor
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Control y Operación
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_2: !prev.C1_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Gabinete de control electrónico con amperímetro</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Controles independientes y de fácil manejo, diseñados para confiabilidad en sitio.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Controles digitales de temperatura y dosificación de asfalto
                        </li>

                        <li>
                          Variador de velocidad para ajustes en la mezcla
                        </li>

                        <li>
                          Opción remoto de los parámetros de operación, con supervisión en tiempo real y registro histórico de datos.
                        </li>

                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Sistema de monitoreo remoto, accesible desde computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Sistema de alarmas y seguridades para condiciones fuera de rango.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start mb-6 md:mb-0 justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={supportMain.src}
                      alt=""
                      className="w-[200px] h-[588px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full h-full col-span-1 order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Sistema de Quemador
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_1: !prev.C2_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Quemador diésel modulante
                        </li>
                        <li>
                          Diseño de aire total (total-air) de 1.5 a 3.0 millones de BTU/h
                        </li>
                        <li>
                          Motor de 1.5 HP con sensores UV y sistema de filtración de combustible
                        </li>
                        <li>
                          Cumple con normas de seguridad de EE. UU.
                        </li>

                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Componentes y Eléctrico
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Dos motores de 3 HP para rotación del tambor</li>
                        <li>
                          Cuatro reductores de engranajes
                        </li>
                        <li>
                          Motor de bomba de engranaje de 1 HP para inyección de asfalto

                        </li>

                        <li>
                          Motores, componentes y cableado Siemens de grado industrial.
                        </li>

                        <li>
                          Sistema de 110 V en gabinete de control con paro de emergencia
                        </li>

                        <li>
                          Generador trifásico de 20 kW
                        </li>

                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              20 kW en servicio continuo
                            </li>
                            <li>22 kW en servicio de emergencia</li>
                            <li>Voltaje 220/440</li>
                            <li>Motor Cummins de 35 HP</li>
                            <li>Tanque diésel de 110 L</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-center">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Álabes
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_1: !prev.C3_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Álabes de entrada</li>
                      <li>Álabes de secado tipo velo</li>
                      <li>Álabes de radiación</li>
                      <li>Álabes de calentamiento</li>
                      <li>Álabes de mezcla</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2"></div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Resistencia y seguridad
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_2: !prev.C3_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Bolsas filtrantes Nomex (opcional)</li>
                      <li>Aislamiento con fibra de vidrio de 1.5" en tambor y tanque</li>
                      <li>Revestimiento exterior de acero inoxidable en el tanque</li>
                      <li>Pintura automotriz horneada, resistente a la corrosión</li>
                      <li>Partes móviles protegidas y señalización de seguridad para el operador</li>
                      <li>Estructura extra reforzada para trabajo pesado a largo plazo.</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-center">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Portabilidad
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_3: !prev.C3_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Montado en chasis ligero para fácil reubicación cuando está vacío</li>
                      <li>Capacidad de carga de 10 toneladas, soportada por dos ejes con birlos de 8 pernos y ocho llantas de 16".</li>
                      <li>Enganche tipo tirón con acoplamiento de seguridad y sistema de frenos, con sistema de luces y señalamientos a normas de carretera.</li>
                      <li>La instalación no requiere grúa ni equipo de izaje.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2"></div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Sistema de Mezcla y Alimentación
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_1: !prev.C4_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Mezclador externo tipo pugmill (motor de 5 HP, paletas Hardox, eje simple)</li>
                      <li>Tolva de agregados montada de 8 toneladas con compuerta ajustable</li>
                      <li>Banda de alimentación de 18" de ancho con polea principal revestida</li>
                      <li>Mini banda transportadora (9" x 6 m) con motor de 1 HP y reductor de gusano</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-start items-start">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Tanque de Asfalto
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_2: !prev.C4_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Tanque de asfalto montado con capacidad de 6,000 L</li>
                      <li>Calentamiento directo con quemador de 140,000 BTU/h</li>
                      <li>Bomba de 2" con motor de 2 HP</li>
                      <li>Agitador de asfalto integrado para un arranque más rápido</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Tasa de Producción
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_3: !prev.C4_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Nominal: 10 TPH en operación continua</li>
                      <li>Producción continua durante 10 horas (con tanque lleno)</li>
                    </ul>
                  </div>


                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Cumplimiento con Normativas Industriales
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_1: !prev.C5_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C5_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Mezclador externo tipo pugmill (motor de 5 HP, paletas Hardox, eje simple)</li>
                      <li>Tolva de agregados montada de 8 toneladas con compuerta ajustable</li>
                      <li>Banda de alimentación de 18" de ancho con polea principal revestida</li>
                      <li>Mini banda transportadora (9" x 6 m) con motor de 1 HP y reductor de gusano</li>
                    </ul>
                  </div>
                </div>




                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.width ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[272px] h-[353px] flex items-center justify-center">
                      <img
                        src={supportLeft.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
                    <div className="border-dotted border-t border-t-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 5 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.30711 15.287C5.4232 15.5673 5.69668 15.75 6.00002 15.75H18C18.3034 15.75 18.5768 15.5673 18.6929 15.287C18.809 15.0068 18.7449 14.6842 18.5304 14.4697L12.5304 8.46967C12.2375 8.17678 11.7626 8.17678 11.4697 8.46967L5.46969 14.4697C5.25519 14.6842 5.19103 15.0068 5.30711 15.287Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="my-3">
                      <p className="text-white text-lg">
                        {unit === "metric"
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.height ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                    </div>
                    <div className="border-dotted border-b border-b-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 8 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.length ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[353px] w-[744px] flex justify-center items-center">
                      <img
                        src={supportRight.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full mt-10">
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        Chasis y estructura
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_2: !prev.C5_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Soporte:</h1>
                        <p>{activeData?.dimensions.support ?? ""}</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho del chasis:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.chasisWidth?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.chasisWidth ?? 0) *
                              cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full mt-0 md:mt-10 gap-0 md:gap-10">
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Dimensiones del tambor
                      </h1>
                      <button
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_3: !prev.C5_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].length?.toFixed(1) ?? ""} cm`
                            : `${(
                              (drumMixer[0].length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].width?.toFixed(1) ?? ""} cm`
                            : `${((drumMixer[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].width?.toFixed(1) ?? ""} cm`
                            : `${((drumMixer[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        DIMENSIONeS del tanque de asfalto
                      </h1>
                      <button
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_2: !prev.C5_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].length?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].width?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].width ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Alto:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].height?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].capcity ?? ""} L`
                            : `${asphalTank[0].capcity ?? 0} L`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Dimensiones de la tolva
                      </h1>
                      <button
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_3: !prev.C5_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].length?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].length ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].width?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Alto:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].height?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].height ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].capcity ?? ""}`
                            : `${binUnit[0].capcity ?? 0}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col w-full h-full items-start justify-between gap-0 order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Construcción y Diseño
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_1: !prev.C1_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Patas de soporte plegables con altura de trabajo preestablecida
                        </li>
                        <li>Tambor fabricado con acero aleado resistente a altas temperaturas</li>
                        <li>
                          Protección frontal reforzada y sellos de EPDM en los extremos del tambor
                        </li>

                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Control y Operación
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_2: !prev.C1_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Gabinete de control electrónico con amperímetro</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Controles independientes y de fácil manejo, diseñados para confiabilidad en sitio.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Controles digitales de temperatura y dosificación de asfalto
                        </li>
                        <li>
                          Variador de velocidad para ajustes en la mezcla
                        </li>
                        <li>
                          Opción remoto de los parámetros de operación, con supervisión en tiempo real y registro histórico de datos.
                        </li>
                        <ul className="list-disc ml-10">
                          <li>
                            Sistema de monitoreo remoto, accesible desde computadora, tablet o teléfono.
                          </li>
                        </ul>
                        <li>
                          Sistema de alarmas y seguridades para condiciones fuera de rango.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start mb-6 md:mb-0 justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={standarMain.src}
                      alt=""
                      className="w-[200px] h-[588px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full h-full col-span-1 order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Sistema de Quemador
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_1: !prev.C2_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Quemador diésel modulante

                        </li>

                        <li>Diseño de aire total (total-air) de 1.5 a 3.0 millones de BTU/h</li>
                        <li>Motor de 1.5 HP con sensores UV y sistema de filtración de combustible</li>
                        <li>Cumple con normas de seguridad de EE. UU.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Componentes y Eléctrico
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Dos motores de 3 HP para rotación del tambor
                        </li>
                        <li>Cuatro reductores de engranajes</li>
                        <li>
                          Motor de bomba de engranaje de 1 HP para inyección de asfalto
                        </li>
                        <li>Motores, componentes y cableado Siemens de grado industrial.</li>
                        <li>Sistema de 110 V en gabinete de control con paro de emergencia</li>
                        <li>Generador trifásico de 20 kW</li>
                        <li className="list-none">
                          <ul className="list-disc pl-10">
                            <li>20 kW en servicio continuo</li>
                            <li>22 kW en servicio de emergencia</li>
                            <li>Voltaje 220/440</li>
                            <li>Motor Cummins de 35 HP</li>
                            <li>Tanque diésel de 110 L</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-center">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Álabes
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_1: !prev.C3_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Álabes de entrada</li>
                      <li>Álabes de secado tipo velo</li>
                      <li>Álabes de radiación</li>
                      <li>Álabes de calentamiento</li>
                      <li>Álabes de mezcla</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2"></div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Resistencia y seguridad
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_2: !prev.C3_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Bolsas filtrantes Nomex (opcional)</li>
                      <li>Aislamiento con fibra de vidrio de 1.5" en tambor y tanque</li>
                      <li>Revestimiento exterior de acero inoxidable en el tanque</li>
                      <li>Pintura automotriz horneada, resistente a la corrosión</li>
                      <li>Partes móviles protegidas y señalización de seguridad para el operador</li>
                      <li>Estructura extra reforzada para trabajo pesado a largo plazo.</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-center">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Portabilidad
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_3: !prev.C3_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Montado en chasis ligero para fácil reubicación cuando está vacío</li>
                      <li>Capacidad de carga de 10 toneladas, soportada por dos ejes con birlos de 8 pernos y ocho llantas de 16".</li>
                      <li>Enganche tipo tirón con acoplamiento de seguridad y sistema de frenos, con sistema de luces y señalamientos a normas de carretera.</li>
                      <li>La instalación no requiere grúa ni equipo de izaje.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2"></div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Sistema de Mezcla y Alimentación
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_1: !prev.C4_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Mezclador externo tipo pugmill (motor de 5 HP, paletas Hardox, eje simple)</li>
                      <li>Tolva de agregados montada de 8 toneladas con compuerta ajustable</li>
                      <li>Banda de alimentación de 18" de ancho con polea principal revestida</li>
                      <li>Mini banda transportadora (9" x 6 m) con motor de 1 HP y reductor de gusano</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-start items-start gap-5">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Tanque de Asfalto
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_2: !prev.C4_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Tanque de asfalto montado con capacidad de 6,000 L</li>
                      <li>Calentamiento directo con quemador de 140,000 BTU/h</li>
                      <li>Bomba de 2" con motor de 2 HP</li>
                      <li>Agitador de asfalto integrado para un arranque más rápido</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Tasa de Producción                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_3: !prev.C4_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Nominal: 10 TPH en operación continua</li>
                      <li>Producción continua durante 10 horas (con tanque lleno)</li>
                    </ul>
                  </div>


                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Cumplimiento con Normativas Industriales
                      </h1>
                      <button
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_1: !prev.C5_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C5_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li> Instalación eléctrica con cableado UL</li>
                    </ul>
                  </div>
                </div>




                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.width ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[272px] h-[353px] flex items-center justify-center">
                      <img
                        src={standarLeft.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
                    <div className="border-dotted border-t border-t-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 5 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.30711 15.287C5.4232 15.5673 5.69668 15.75 6.00002 15.75H18C18.3034 15.75 18.5768 15.5673 18.6929 15.287C18.809 15.0068 18.7449 14.6842 18.5304 14.4697L12.5304 8.46967C12.2375 8.17678 11.7626 8.17678 11.4697 8.46967L5.46969 14.4697C5.25519 14.6842 5.19103 15.0068 5.30711 15.287Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="my-3">
                      <p className="text-white text-lg">
                        {unit === "metric"
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.height ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                    </div>
                    <div className="border-dotted border-b border-b-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 8 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.length ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[353px] w-[744px] flex justify-center items-center">
                      <img
                        src={standarRight.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full mt-10">
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Chasis y estructura
                      </h1>
                      <button
                        aria-label="See more about the chassis and structure of the system"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_2: !prev.C5_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo total (incluyendo enganche):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Configuración de ejes:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.axleConfig ?? ""} `
                            : `${activeData?.dimensions.axleConfig ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Soporte:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.support ?? ""} `
                            : `${activeData?.dimensions.support ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ruedas de transporte:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheel ?? ""} `
                            : `${activeData?.dimensions.wheel ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho del chasis:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.chasisWidth?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.chasisWidth ?? 0) *
                              cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full mt-0 md:mt-10 gap-0 md:gap-10">
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Dimensiones del tambor
                      </h1>
                      <button
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_3: !prev.C5_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].length?.toFixed(1) ?? ""} cm`
                            : `${(
                              (drumMixer[0].length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].width?.toFixed(1) ?? ""} cm`
                            : `${((drumMixer[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].width?.toFixed(1) ?? ""} cm`
                            : `${((drumMixer[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        DIMENSIONeS del tanque de asfalto
                      </h1>
                      <button
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C6_1: !prev.C6_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C6_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C6_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].length?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].width?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].width ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Alto:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].height?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].capcity ?? ""} L`
                            : `${asphalTank[0].capcity ?? 0} L`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Dimensiones de la tolva
                      </h1>
                      <button
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C6_2: !prev.C6_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C6_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C6_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].length?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].length ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].width?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Alto:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].height?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].height ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].capcity ?? ""} `
                            : `${binUnit[0].capcity ?? 0} `}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col w-full h-full items-start justify-between gap-0 order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Construcción y Diseño
                        </h1>
                        <button
                          aria-label="See more about the Durability and Safety"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_1: !prev.C1_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C1_1 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Patas de soporte plegables con altura de trabajo preestablecida
                        </li>
                        <li>Tambor fabricado con acero aleado resistente a altas temperaturas</li>
                        <li>Protección frontal reforzada y sellos de EPDM en los extremos del tambor</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Control y Operación
                        </h1>
                        <button
                          aria-label="See more about the control and operation of the system"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_2: !prev.C1_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C1_2 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Gabinete de control electrónico con amperímetro</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Controles independientes y de fácil manejo, diseñados para confiabilidad en sitio.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Controles digitales de temperatura y dosificación de asfalto
                        </li>
                        <li>
                          Variador de velocidad para ajustes en la mezcla
                        </li>
                        <li>
                          Opción remoto de los parámetros de operación, con supervisión en tiempo real y registro histórico de datos.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc pl-10">
                            <li>
                              Sistema de monitoreo remoto, accesible desde computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Sistema de alarmas y seguridades para condiciones fuera de rango.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start mb-6 md:mb-0 justify-center w-full h-[588px] order-1 md:order-2"></div>
                  <div
                    className="flex flex-col items-start justify-between w-full h-full col-span-1 order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Sistema de Quemador
                        </h1>
                        <button
                          aria-label="See more about the components and electrical composition"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_1: !prev.C2_1,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C2_1 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Quemador diésel modulante
                        </li>
                        <li>Diseño de aire total (total-air) de 1.5 a 3.0 millones de BTU/h</li>
                        <li>Motor de 1.5 HP con sensores UV y sistema de filtración de combustible</li>
                        <li>Cumple con normas de seguridad de EE. UU.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Componentes y Eléctrico
                        </h1>
                        <button
                          aria-label="See more about the portability"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_2: !prev.C2_2,
                            }))
                          }
                        >
                          <svg
                            width="28px"
                            height="28px"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                            className={`transition-transform duration-300 transform ${openSections.C2_2 ? "rotate-180" : ""
                              }`}
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Dos motores de 3 HP para rotación del tambor
                        </li>
                        <li>
                          Cuatro reductores de engranajes
                        </li>
                        <li>
                          Motor de bomba de engranaje de 1 HP para inyección de asfalto
                        </li>
                        <li>
                          Motores, componentes y cableado Siemens de grado industrial.
                        </li>
                        <li>Sistema de 110 V en gabinete de control con paro de emergencia</li>
                        <li>Generador trifásico de 20 kW</li>
                        <li className="list-none">
                          <ul className="list-disc pl-10">
                            <li>20 kW en servicio continuo</li>
                            <li>22 kW en servicio de emergencia</li>
                            <li>Voltaje 220/440</li>
                            <li>Motor Cummins de 35 HP</li>
                            <li>Tanque diésel de 110 L</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-center">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Álabes
                      </h1>
                      <button
                        aria-label="See more about the burner system"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_1: !prev.C3_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Álabes de entrada</li>
                      <li>Álabes de secado tipo velo</li>
                      <li>Álabes de radiación</li>
                      <li>Álabes de calentamiento</li>
                      <li>Álabes de mezcla</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2"></div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Resistencia y seguridad
                      </h1>
                      <button
                        aria-label="See more about the compliance with industry standards"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_2: !prev.C3_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Bolsas filtrantes Nomex (opcional)</li>
                      <li>Aislamiento con fibra de vidrio de 1.5" en tambor y tanque</li>
                      <li>Revestimiento exterior de acero inoxidable en el tanque</li>
                      <li>Pintura automotriz horneada, resistente a la corrosión</li>
                      <li>Partes móviles protegidas y señalización de seguridad para el operador</li>
                      <li>Estructura extra reforzada para trabajo pesado a largo plazo.</li>
                    </ul>
                  </div>
                </div>


                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-center">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Portabilidad
                      </h1>
                      <button
                        aria-label="See more about the burner system"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C3_3: !prev.C3_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C3_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C3_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Montado en un chasis de servicio estándar diseñado para trasladar la planta vacía.</li>
                      <li>Capacidad de carga de 10 toneladas, soportada por dos ejes con birlos de 8 pernos y ocho llantas de 16".</li>
                      <li>Enganche tipo arrastre con acoplamiento de seguridad y sistema de frenos, con sistema de luces y señalamientos a normas de carretera.</li>
                      <li>La instalación no requiere grúa ni equipo de izaje.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2"></div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Sistema de Mezcla y Alimentación
                      </h1>
                      <button
                        aria-label="See more about the compliance with industry standards"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_1: !prev.C4_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Mezclador externo tipo pugmill (motor de 5 HP, paletas Hardox, eje simple)</li>
                      <li>Tolva de agregados montada de 8 toneladas con compuerta ajustable</li>
                      <li>Banda de alimentación de 18" de ancho con polea principal revestida</li>
                      <li>Mini banda transportadora (9" x 6 m) con motor de 1 HP y reductor de gusano</li>
                    </ul>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-0 md:mt-10 justify-center items-center">
                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Tanque de Asfalto
                      </h1>
                      <button
                        aria-label="See more about the burner system"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_2: !prev.C4_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Tanque de asfalto montado con capacidad de 6,000 L</li>
                      <li>Calentamiento directo con quemador de 140,000 BTU/h</li>
                      <li>Bomba de 2" con motor de 2 HP</li>
                      <li>Agitador de asfalto integrado para un arranque más rápido</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-2">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Tasa de Producción
                      </h1>
                      <button
                        aria-label="See more about the burner system"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C4_3: !prev.C4_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C4_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>Nominal: 10 TPH en operación continua</li>
                      <li>Producción continua durante 10 horas (con tanque lleno)</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Cumplimiento con Normativas Industriales
                      </h1>
                      <button
                        aria-label="See more about the compliance with industry standards"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_1: !prev.C5_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <ul
                      className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C5_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>Instalación eléctrica con cableado UL</li>
                    </ul>
                  </div>
                </div>


                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.width ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[272px] h-[353px] flex items-center justify-center">
                      <img
                        src={reinforcedLeft.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[353px]">
                    <div className="border-dotted border-t border-t-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 5 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.30711 15.287C5.4232 15.5673 5.69668 15.75 6.00002 15.75H18C18.3034 15.75 18.5768 15.5673 18.6929 15.287C18.809 15.0068 18.7449 14.6842 18.5304 14.4697L12.5304 8.46967C12.2375 8.17678 11.7626 8.17678 11.4697 8.46967L5.46969 14.4697C5.25519 14.6842 5.19103 15.0068 5.30711 15.287Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="my-3">
                      <p className="text-white text-lg">
                        {unit === "metric"
                          ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.height ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                    </div>
                    <div className="border-dotted border-b border-b-white w-full h-full flex items-center justify-center">
                      <div className="bg-white w-[1px] h-full relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="6 8 12 10" // Área ajustada al contenido real
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block p-0 m-0 overflow-visible"
                            style={{ shapeRendering: "crispEdges" }}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <div className="border-dotted border-l border-l-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-white lg:text-lg text-base w-full text-center mx-4">
                        {unit === "metric"
                          ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (activeData?.dimensions.length ?? 0) * cmToFeet
                          ).toFixed(1)} mt`}
                      </p>
                      <div className="border-dotted border-r border-r-white h-full w-full flex items-center justify-center">
                        <div className="bg-white h-[1px] w-full relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="8 5 8 14" // Ajustado para recortar espacio vacío
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="block p-0 m-0 overflow-visible"
                              style={{ shapeRendering: "crispEdges" }}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z"
                                fill="#ffffff"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[353px] w-[744px] flex justify-center items-center">
                      <img
                        src={reinforcedRight.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full mt-10">
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Chasis y estructura
                      </h1>
                      <button
                        aria-label="See more about the chassis and structure of the system"
                        className="block md:hidden"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_2: !prev.C5_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo total (incluyendo quinta rueda)::</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Configuración de ejes:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.axleConfig ?? ""}`
                            : `${activeData?.dimensions.axleConfig ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura enganche quinta rueda</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.fifthWheel?.toFixed(1) ??
                            ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.fifthWheel ?? 0) *
                              cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Soporte:</h1>
                        <p>
                          <div className="flex justify-between">
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.support ?? ""} `
                                : `${activeData?.dimensions.support ?? 0} `}
                            </p>
                          </div>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ruedas de transporte:</h1>

                        <div className="flex justify-between">
                          <p>
                            {unit === "metric"
                              ? `${activeData?.dimensions.wheel ?? ""} `
                              : `${activeData?.dimensions.wheel ?? 0} `}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho del chasis:</h1>
                        <p>
                          <div className="flex justify-between">
                            <p>
                              {unit === "metric"
                                ? `${activeData?.dimensions.chasisWidth?.toFixed(
                                  1
                                ) ?? ""
                                } cm`
                                : `${(
                                  (activeData?.dimensions.chasisWidth ?? 0) *
                                  cmToFeet
                                ).toFixed(1)} mt`}
                            </p>
                          </div>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full mt-0 md:mt-10 gap-0 md:gap-10">
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Dimensiones del tambor
                      </h1>
                      <button
                        aria-label="See more about the Drum Mixer Specifications"
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C5_3: !prev.C5_3,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C5_3 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C5_3
                        ? "max-h-[650px] opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].length?.toFixed(1) ?? ""} cm`
                            : `${(
                              (drumMixer[0].length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].width?.toFixed(1) ?? ""} cm`
                            : `${((drumMixer[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura:</h1>
                        <p>
                          {unit === "metric"
                            ? `${drumMixer[0].width?.toFixed(1) ?? ""} cm`
                            : `${((drumMixer[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        DIMENSIONeS del tanque de asfalto
                      </h1>
                      <button
                        aria-label="See more about the Asphalt Tank specifications"
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C6_1: !prev.C6_1,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C6_1 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C6_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].length?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].length ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].width?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].width ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Alto:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].height?.toFixed(1) ?? ""} cm`
                            : `${(
                              (asphalTank[0].height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>
                          {unit === "metric"
                            ? `${asphalTank[0].capcity ?? ""} L`
                            : `${asphalTank[0].capcity ?? 0} L`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4 text-white">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Dimensiones de la tolva
                      </h1>
                      <button
                        aria-label="See more about the Bin Units specifications"
                        className="block"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            C6_2: !prev.C6_2,
                          }))
                        }
                      >
                        <svg
                          width="28px"
                          height="28px"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#000000"
                          className={`transition-transform duration-300 transform ${openSections.C6_2 ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full list-disc list-inside ${openSections.C6_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].length?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].length ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].width?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].width ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Alto:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].height?.toFixed(1) ?? ""} cm`
                            : `${((binUnit[0].height ?? 0) * cmToFeet).toFixed(
                              1
                            )} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>
                          {unit === "metric"
                            ? `${binUnit[0].capcity ?? ""} `
                            : `${binUnit[0].capcity ?? 0} `}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanoSection;
