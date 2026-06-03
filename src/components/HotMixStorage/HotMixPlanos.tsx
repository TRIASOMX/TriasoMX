import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useClipPathScrollTrigger } from "../lib/useClipPathScrollTrigger";
import HMainS1 from "../../assets/images/HotMix/Silo50-Comp.Assy-R.webp";
import HMainBS1 from "../../assets/images/HotMix/Silo50-Comp.Assy.webp";
import HLeftBS1 from "../../assets/images/HotMix/Silosf50-1.webp";
import HRL50 from "../../assets/images/HotMix/Silo-SF50TBpL.webp";
import HRL100 from "../../assets/images/HotMix/Silo-SF100TBpL.webp";
import HRL150 from "../../assets/images/HotMix/Silo-SF150TBpL.webp";
import HRL200 from "../../assets/images/HotMix/Silo-SF200TBpL.webp";
import HRR50 from "../../assets/images/HotMix/Silo-SF50TBpFn.webp";
import HRR100 from "../../assets/images/HotMix/Silo-SF100TBpFn.webp";
import HRR150 from "../../assets/images/HotMix/Silo-SF150TBpFn.webp";
import HRR200 from "../../assets/images/HotMix/Silo-SF200TBpFn.webp";
import HMainBS2 from "../../assets/images/HotMix/Siloae100-2.webp";
import HMainBR1 from "../../assets/images/HotMix/Silo-SF50TBpS.webp";
import HMainBR2 from "../../assets/images/HotMix/Silo-SF100TBpS.webp";
import HMainBR3 from "../../assets/images/HotMix/Silo-SF150TBpS.webp";
import HMainBR4 from "../../assets/images/HotMix/Silo-SF200TBpS.webp";
import HML50 from "../../assets/images/HotMix/50L.webp";
import HMR50 from "../../assets/images/HotMix/50R.webp";
import HML100 from "../../assets/images/HotMix/100L.webp";
import HMR100 from "../../assets/images/HotMix/100R.webp";

gsap.registerPlugin(ScrollTrigger);

const slatConveyor = {
  length: 1667.25,
  width: 67.05,
  heightErec: 1286.25,
  chain: 981.45,
  heightDischarge: 980.8,
  angle: "48.6°",
};
const toggleConfig = [
  {
    id: "1-50tons",
    dimensions: {
      width: 301.752,
      height: 1304.544,
      length: 2011.68,
      chasisLenght: 1459.992,
      transporWidth: 365.76,
      axleConfig: "Doble eje",
      wheel: 124.968,
      support: "Patas de acero con placas de base para fijación con pernos de anclaje",
      wheels: 'Neumáticos de 16 pulgadas aptos para carretera',
      capacity: "50 tons",
      truckHeight: 368.808,
    },
  },
  {
    id: "1-100tons",
    dimensions: {
      width: 350.52,
      height: 1584.96,
      length: 2011.68,
      chasisLenght: 1459.992,
      transporWidth: 365.76,
      axleConfig: "Doble eje",
      wheel: 124.968,
      support: "Patas de acero con placas de base para fijación con pernos de anclaje",
      wheels: 'Neumáticos de 16 pulgadas aptos para carretera',
      capacity: "50 tons",
      truckHeight: 212,
    },
  },
  {
    id: "2-50tons",
    dimensions: {
      width: 354.3,
      height: 1695.4,
      length: 1624.4,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Doble eje",
      wheel: 140,
      support: "Patas de acero con placas de base para fijación con pernos de anclaje",
      wheels: 'Neumáticos de 16 pulgadas aptos para carretera',
      capacity: "50 tons",
      truckHeight: 368.8,
    },
  },
  {
    id: "2-100tons",
    dimensions: {
      width: 360.2,
      height: 1984.2,
      length: 1892.3,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Doble eje",
      wheel: 140,
      support: "Patas de acero con placas de base para fijación con pernos de anclaje",
      wheels: 'Neumáticos de 16 pulgadas aptos para carretera',
      capacity: "100 tons",
      truckHeight: 368.8,
    },
  },
  {
    id: "2-150tons",
    dimensions: {
      width: 363,
      height: 2136.6,
      length: 2047.8,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Doble eje",
      wheel: 140,
      support: "Patas de acero con placas de base para fijación con pernos de anclaje",
      wheels: 'Neumáticos de 16 pulgadas aptos para carretera',
      capacity: "150 tons",
      truckHeight: 368.8,
    },
  },
  {
    id: "2-200tons",
    dimensions: {
      width: 367.2,
      height: 2526,
      length: 2466.2,
      chasisLenght: 0,
      transporWidth: 0,
      axleConfig: "Doble eje",
      wheel: 140,
      support: "Patas de acero con placas de base para fijación con pernos de anclaje",
      wheels: 'Neumáticos de 16 pulgadas aptos para carretera',
      capacity: "200 tons",
      truckHeight: 368.8,
    },
  },
];
const HotMixPlanos = () => {
  //logica de cambio de imagenes
  const [activeVersion, setActiveVersion] = useState("50tons");
  //tabs states
  const [activeTab, setActiveTab] = useState(1);

  //animation
  const boxRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const otroElemento = useRef<HTMLDivElement>(null);
  const columnGrid1 = useRef<HTMLDivElement>(null);
  const columnGrid2 = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const clipTargetRef = useRef<HTMLDivElement>(null);
  const cmToFeet = 0.01;
  //RENDERIZADO CONDICIONAL DE IMAGENES
  type VersionType = "50tons" | "100tons" | "150tons" | "200tons";
  const imageMap: Record<VersionType, string> = {
    "50tons": HMainBR1.src,
    "100tons": HMainBR2.src,
    "150tons": HMainBR3.src,
    "200tons": HMainBR4.src,
    // Agrega más versiones aquí
  };
  const imageMap2: Record<VersionType, string> = {
    "50tons": HRL50.src,
    "100tons": HRL100.src,
    "150tons": HRL150.src,
    "200tons": HRL200.src,
    // Agrega más versiones aquí
  };
  const imageMap3: Record<VersionType, string> = {
    "50tons": HRR50.src,
    "100tons": HRR100.src,
    "150tons": HRR150.src,
    "200tons": HRR200.src,
    // Agrega más versiones aquí
  };

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
    C5_1: false,
  });

  const selectedImage = imageMap[activeVersion as VersionType] || HLeftBS1.src;
  const selectedImage2 =
    imageMap2[activeVersion as VersionType] || HLeftBS1.src;
  const selectedImage3 =
    imageMap3[activeVersion as VersionType] || HLeftBS1.src;
  //KEY
  const key = `${activeTab}-${activeVersion}`;
  const activeData = toggleConfig.find((item) => item.id === key);
  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };

  const productionCapacityOptions = [
    { id: "50tons", label: "50 tons", tab: 1 },
    { id: "100tons", label: "100 tons", tab: 1 },
    { id: "50tons", label: "50 tons", tab: 2 },
    { id: "100tons", label: "100 tons", tab: 2 },
    { id: "150tons", label: "150 tons", tab: 2 },
    { id: "200tons", label: "200 tons", tab: 2 },
  ] as const;

  const siloOptions = [
    { id: 1, label: "Auto-eregible" },
    { id: 2, label: "Semi-estacionario" },
  ];

  useClipPathScrollTrigger({
    enabled: activeTab === 1 && activeVersion === "50tons",

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
    <div ref={containerRef} className="w-full flex flex-col items-center justify-center">
      <div className="h-[80vh] relative flex items-center justify-center bg-bgMain w-full">
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
             z-20 w-[120px] h-[600px]"
        >
          <img
            src={HMainBS1.src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Imagen de fondo"
            style={{
              display:
                activeVersion === "50tons" && activeTab === 1
                  ? "block"
                  : "none",
              opacity: activeVersion === "50tons" && activeTab === 1 ? 1 : 0,
              visibility:
                activeVersion === "50tons" && activeTab === 1
                  ? "visible"
                  : "hidden",
            }}
          />
          <img
            ref={imgRef}
            src={HMainS1.src}
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
        <header id="planosSilos" className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Especificaciones
          </h1>
          <div className="flex items-center justify-center mt-10">
            <h1 className="mr-3" id="measure">
              Medida:
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
            {/* mobile primer select */}
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto mb-6">
              <label className="text-white block text-center">
                Capacidad de producción:
              </label>

              <div className="relative">
                <select
                  value={activeVersion}
                  onChange={(e) => setActiveVersion(e.target.value as any)}
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
        appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {productionCapacityOptions
                    .filter((opt) => opt.tab === activeTab)
                    .map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* label de primer select y botones */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:pb-5">
              <label className="text-white block text-center">
                Capacidad de producción:
              </label>
            </div>

            {/* botones */}
            <div className="hidden md:flex flex-wrap justify-center gap-5 mb-6">
              {productionCapacityOptions
                .filter((opt) => opt.tab === activeTab)
                .map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveVersion(option.id)}
                    className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300
          ${activeVersion === option.id
                        ? "text-black bg-white border-white"
                        : "text-white bg-transparent border-white"
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
            </div>

            {/* mobile segundo select */}
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto mb-6">
              <label className="text-white block text-center">
                Opciones:
              </label>

              <div className="relative">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(Number(e.target.value))}
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
        appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {siloOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* opciones desktop */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:pb-5">
              <label className="text-white block text-center">
                Opciones:
              </label>
            </div>

            <div className="hidden md:flex justify-center gap-5">
              {siloOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setActiveTab(option.id);
                    if (option.id === 1) setActiveVersion("50tons");
                  }}
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300
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
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col items-start justify-start gap-0 md:gap-4 h-full col-span-1 w-full order-2 md:order-1 mt-10 md:mt-0"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Control y operación
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-4 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Operación automática o manual, según se requiera en campo.</li>
                        <li>
                          Sistema operativo Triaso Relief 8.0.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Monitoreo remoto de los parámetros de operación, con supervisión en tiempo real y registro histórico de datos.
                            </li>
                            <li>
                              Sistema de monitoreo remoto, accesible desde computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Sistema de alarmas y seguridades para condiciones fuera de rango.

                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Sistema de alimentación y descarga
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Tolva de alimentación superior con sello de goma y cubierta contra lluvia.</li>
                        <li>Cámara de descarga por lote de 1 m³.</li>
                        <li>Compuertas neumáticas para descarga rápida y desvío de material de desperdicio.</li>
                        <li>Integración con celdas de carga y control mediante lógica programable.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Componentes y sistema eléctrico

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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Motores, componentes y cableado Siemens de grado industrial.</li>
                        <li>Sistema de cableado simplificado para facilitar el mantenimiento.</li>
                        <li>Conexiones eléctricas protegidas contra la intemperie.</li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>Líneas de combustible externas, sensores y cableado de señales preinstalados.</li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex items-start justify-center w-full h-[600px] order-1 md:order-2">
                    {activeVersion === "50tons" ? (
                      <div className="w-full"></div>
                    ) : (
                      <img
                        src={HMainBS2.src}
                        alt=""
                        className="w-[120px] h-[600px]"
                      />
                    )}
                  </div>
                  <div
                    className="flex flex-col items-start justify-start h-full gap-0 md:gap-4 w-full col-span-1 order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Resistencia y seguridad
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo plazo
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>Componentes atornillados con recubrimiento anticorrosivo</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Tornillería galvanizada y pintura electrostática, de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Cubierta contra lluvia y descarga anti-segregación.
                        </li>
                        <li>
                          Barandales de seguridad integrados y plataforma conforme a las normas OSHA.
                        </li>
                        <li>Aislamiento térmico con fibra de vidrio, que reduce la pérdida de calor y la temperatura superficial.</li>
                        <li>
                          <ul className="list-disc ml-10">
                            <li>Hasta 72 horas de retención de temperatura.</li>
                          </ul>
                        </li>

                        <li>Sellos tipo laberinto para disminuir la fuga de aire y calor.</li>
                        <li>Carcasa resistente al polvo que protege el módulo de control.</li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              También puede transportarse en lowboy o plataforma (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>
                        <li>Patas de soporte atornillables para montaje rápido en sitio.</li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT para visibilidad durante el transporte.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Cumplimeinto con normas industriales
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>NOM</li>
                        <li>DOT</li>
                        <li>SCT</li>
                        <li>SEMARNAT</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 gap-6 w-full overflow-x-auto">
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
                    <div className="h-[400px] min-w-[650px] w-full flex items-center justify-center">
                      {activeVersion === "50tons" ? (
                        <img
                          src={HML50.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <img
                          src={HML100.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[400px]">
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
                    <div className="h-[400px] min-w-[150px] w-full flex justify-center items-center">
                      {activeVersion === "50tons" ? (
                        <img
                          src={HMR50.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <img
                          src={HMR100.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-10 gap-3 md:gap-10">
                  <div className="text-white font-normal col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Dimensiones del silo
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud:</h1>
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
                        <h1>Altura:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad de almacenamiento:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.capacity ?? ""} `
                            : `${activeData?.dimensions.capacity ?? 0}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Estructura y chasis
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud total (incluyendo quinta rueda):</h1>
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
                        <h1>Longitud del chasis:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.chasisLenght?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.chasisLenght ?? 0) *
                              cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho de transporte:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.transporWidth?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.transporWidth ?? 0) *
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
                        <h1>Configuración de ejes: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.axleConfig ?? ""} `
                            : `${activeData?.dimensions.axleConfig ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura del enganche de quinta rueda:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheel?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.wheel ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Sistema de soporte:</h1>
                        <p className="text-end md:text-start">
                          {unit === "metric"
                            ? `${activeData?.dimensions.support ?? ""} `
                            : `${activeData?.dimensions.support ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ruedas:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheels ?? ""} `
                            : `${activeData?.dimensions.wheels ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura de descarga a camión:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.truckHeight?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.truckHeight ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura total (punto más alto):</h1>
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
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-3 md:mt-10 gap-0 md:gap-10">
                  <div className="text-white font-normal col-span-1 md:col-span-3 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Elevador alimentador de cangilones
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
                    <div
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-3 justify-center w-full gap-3 gap-6 lg:gap-20 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C5_1
                        ? "max-h-[600px] opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100`}
                    >
                      <div className="text-white font-normal col-span-1">
                        <div className="flex justify-between">
                          <h1>Longitud:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.length ?? 0) * cmToFeet
                              ).toFixed(1)} mt`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Ancho:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.width ?? 0) * cmToFeet
                              ).toFixed(1)} mt`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Altura (en posición de trabajo):</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightErec?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightErec ?? 0) * cmToFeet
                              ).toFixed(1)} mt`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Altura de descarga:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.chain?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.chain ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div>
                        {/* <div className="flex justify-between">
                          <h1>Height (discharge height):</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightDischarge?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightDischarge ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div> */}
                        <div className="flex justify-between">
                          <h1>Ángulo de inclinación:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.angle ?? ""} `
                              : `${slatConveyor.angle ?? 0}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col text-white col-span-1 md:col-span-2 w-full justify-center">
                        <ul className="ml-2 lg:ml-6 list-disc w-full">
                          <li>
                            Se transporta junto con el silo sobre el mismo chasis.

                          </li>
                          <li>
                            Estructura independiente, no fijada al bastidor del silo.

                          </li>
                          <li>
                            Capacidad de hasta 320 TPH.
                          </li>
                          <li>Paletas de acero reforzadas para mayor durabilidad y desempeño uniforme.</li>
                          <li>
                            Compuerta de salida secundaria para cuando se requiera

                          </li>
                          <li>
                            Puertas de acceso superiores para facilitar la limpieza e inspección.

                          </li>
                          <li>
                            Sistema manual de tensado de cadena para una operación confiable a largo plazo.

                          </li>
                          <li>
                            Alineación rápida con la entrada del silo durante la instalación.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col items-start justify-start gap-0 md:gap-4 h-full col-span-1 w-full order-2 md:order-1 mt-10 md:mt-0"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Control y operación
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-4 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Operación automática o manual, según se requiera en campo.</li>
                        <li>
                          Sistema operativo Triaso Relief 8.0.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Monitoreo remoto de los parámetros de operación, con supervisión en tiempo real y registro histórico de datos.
                            </li>
                            <li>
                              Sistema de monitoreo remoto, accesible desde computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Sistema de alarmas y seguridades para condiciones fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Sistema de alimentación y descarga
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Tolva de alimentación superior con sello de goma y cubierta contra lluvia.</li>
                        <li>Cámara de descarga por lote de 1 m³.</li>
                        <li>Compuertas neumáticas para descarga rápida y desvío de material de desperdicio.</li>
                        <li>Integración con celdas de carga y control mediante lógica programable.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Componentes y sistema eléctrico
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Motores, componentes y cableado Siemens de grado industrial.</li>
                        <li>Sistema de cableado simplificado para facilitar el mantenimiento.</li>
                        <li>Conexiones eléctricas protegidas contra la intemperie.</li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>Líneas de combustible externas, sensores y cableado de señales preinstalados.</li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex items-start justify-center w-full h-[600px] order-1 md:order-2">
                    <img
                      src={selectedImage}
                      alt="Selected image"
                      className="w-[120px] h-[600px]"
                    />
                  </div>
                  <div
                    className="flex flex-col items-start justify-start h-full gap-0 md:gap-4 w-full col-span-1 order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Resistencia y seguridad
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>Componentes atornillados con recubrimiento anticorrosivo.</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Tornillería galvanizada y pintura electrostática, de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Cubierta contra lluvia y descarga anti-segregación.
                        </li>
                        <li>
                          Barandales de seguridad integrados y plataforma conforme a las normas OSHA.
                        </li>
                        <li>Aislamiento térmico con fibra de vidrio, que reduce la pérdida de calor y la temperatura superficial.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Hasta 72 horas de retención de temperatura.
                            </li>
                          </ul>
                        </li>
                        <li>Sellos tipo laberinto para disminuir la fuga de aire y calor.</li>
                        <li>Carcasa resistente al polvo que protege el módulo de control.</li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              También puede transportarse en lowboy o plataforma (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>
                        <li>Patas de soporte atornillables para montaje rápido en sitio.</li>
                        <li>Iluminación y reflejantes conformes a normativa DOT para visibilidad durante el transporte.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Cumplimeinto con normas industriales
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>NOM</li>
                        <li>DOT</li>
                        <li>SCT</li>
                        <li>SEMARNAT</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 gap-6 w-full overflow-x-auto">
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
                    <div className="h-[400px] min-w-[450px] flex items-center justify-center">
                      <img
                        src={selectedImage2}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[400px]">
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
                    <div className="h-[400px] min-w-[150px] flex justify-center items-center">
                      <img
                        src={selectedImage3}
                        alt=""
                        className="w-auto h-[400px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-10 gap-3 md:gap-10">
                  <div className="text-white font-normal col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Dimensiones del silo
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud:</h1>
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
                        <h1>Altura:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.height?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad de almacenamiento:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.capacity ?? ""} `
                            : `${activeData?.dimensions.capacity ?? 0}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Estructura y chasis
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
                    <div
                      className={`text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud total (incluyendo quinta rueda):</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.length?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      {/* <div className="flex justify-between">
                        <h1>Chassis length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.chasisLenght?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.chasisLenght ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Transportation width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.transporWidth?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.transporWidth ?? 0) *
                              cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.width?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
                        </p>
                      </div> */}
                      <div className="flex justify-between">
                        <h1>Configuración de ejes: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.axleConfig ?? ""} `
                            : `${activeData?.dimensions.axleConfig ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura del enganche de quinta rueda (si se entrega preinstalado)::</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheel?.toFixed(1) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.wheel ?? 0) * cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Sistema de soporte: </h1>
                        <p className="text-end md:text-start">
                          {unit === "metric"
                            ? `${activeData?.dimensions.support ?? ""} `
                            : `${activeData?.dimensions.support ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ruedas: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.wheels ?? ""} `
                            : `${activeData?.dimensions.wheels ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura de descarga a camión:</h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.truckHeight?.toFixed(
                              1
                            ) ?? ""
                            } cm`
                            : `${(
                              (activeData?.dimensions.truckHeight ?? 0) *
                              cmToFeet
                            ).toFixed(1)} mt`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total height (heighest point):</h1>
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
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full mt-3 md:mt-10 gap-0 md:gap-10">
                  <div className="text-white font-normal col-span-1 md:col-span-3 w-full">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Elevador alimentador de cangilones
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
                    <div
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-3 justify-center w-full gap-3 gap-6 lg:gap-20 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C5_1
                        ? "max-h-[600px] opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100`}
                    >
                      <div className="text-white font-normal col-span-1">
                        <div className="flex justify-between">
                          <h1>Longitud:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.length?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.length ?? 0) * cmToFeet
                              ).toFixed(1)} mt`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Altura:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.width?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.width ?? 0) * cmToFeet
                              ).toFixed(1)} mt`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Altura (en posición de trabajo):</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightErec?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightErec ?? 0) * cmToFeet
                              ).toFixed(1)} mt`}
                          </p>
                        </div>
                        {/* <div className="flex justify-between">
                          <h1>Altura de descarga:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.chain?.toFixed(1) ?? ""} cm`
                              : `${(
                                (slatConveyor.chain ?? 0) * cmToFeet
                              ).toFixed(1)} ft`}
                          </p>
                        </div> */}
                        <div className="flex justify-between">
                          <h1>Altura de descarga:
                          </h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.heightDischarge?.toFixed(1) ?? ""
                              } cm`
                              : `${(
                                (slatConveyor.heightDischarge ?? 0) * cmToFeet
                              ).toFixed(1)} mt`}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Ángulo de inclinación:</h1>
                          <p>
                            {unit === "metric"
                              ? `${slatConveyor.angle ?? ""} `
                              : `${slatConveyor.angle ?? 0}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col text-white col-span-1 md:col-span-2 w-full justify-center">
                        <ul className="ml-2 lg:ml-6 list-disc w-full">
                          <li>
                            Se transporta junto con el silo sobre el mismo chasis.

                          </li>
                          <li>
                            Estructura independiente, no fijada al bastidor del silo.

                          </li>
                          <li>
                            Capacidad de hasta 320 TPH.

                          </li>
                          <li>Paletas de acero reforzadas para mayor durabilidad y desempeño uniforme.
                          </li>
                          <li>
                            Compuerta de salida secundaria para cuando se requiera

                          </li>
                          <li>
                            Puertas de acceso superiores para facilitar la limpieza e inspección.

                          </li>
                          <li>
                            Driven by industrial motor and reducer for easy
                            maintenance
                          </li>
                          <li>
                            Sistema manual de tensado de cadena para una operación confiable a largo plazo.

                          </li>
                          <li>
                            Alineación rápida con la entrada del silo durante la instalación.
                          </li>
                        </ul>
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

export default HotMixPlanos;
