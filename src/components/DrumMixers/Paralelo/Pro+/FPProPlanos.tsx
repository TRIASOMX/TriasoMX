import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tab3Main2 from "../../../../assets/images/DrumMixers/FlujoParalelo/Pro/PlaFp_PRO/PlaFpPRO_VA.png";
import tab3Right from "../../../../assets/images/DrumMixers/FlujoParalelo/Pro/PlaFp_PRO/BpPlaFp_PRO_VA.png";
import tab6Right from "../../../../assets/images/DrumMixers/tab6Right.webp";
import tab6Left from "../../../../assets/images/DrumMixers/tab6Left.webp";
import tab5Main from "../../../../assets/images/DrumMixers/tab5Main.webp";
import tab5Left from "../../../../assets/images/DrumMixers/tab5Left.webp";
import tab1Main from "../../../../assets/images/DrumMixers/FlujoParalelo/Pro/PlaFp_PRO/BpPlaFp_PRO_VA.png";
import tab1Left from "../../../../assets/images/DrumMixers/FlujoParalelo/Pro/PlaFp_PRO/BpPlaFp_PRO_VT.png";
import tab1Right from "../../../../assets/images/DrumMixers/tab5Right.webp";
import tab2Left from "../../../../assets/images/DrumMixers/FlujoParalelo/Pro/PlaFp_PRO/BpPlaFp_PRO_VL.png";
import tab6Main from "../../../../assets/images/DrumMixers/tab6M.webp";
import { useClipPathScrollTrigger } from "../../../../components/lib/useClipPathScrollTrigger.tsx";

const newSizes = [
  {
    id: "1",
    dimensions: {
      burner: 24,
      ACFM: 5907,
      motor: 6,
      ACFM2: 14000,
      area: 24,
      bags: 168,
    },
  },
  {
    id: "2",
    dimensions: {
      burner: 33,
      ACFM: 7700,
      motor: 8,
      ACFM2: 19250,
      area: 33,
      bags: 224,
    },
  },
  {
    id: "3",
    dimensions: {
      burner: 42,
      ACFM: 8900,
      motor: 10,
      ACFM2: 22000,
      area: 37,
      bags: 280,
    },
  },
  {
    id: "4",
    dimensions: {
      burner: 60,
      ACFM: 10740,
      motor: 10,
      ACFM2: 22000,
      area: 37,
      bags: 280,
    },
  },
];
const cabinSize = [
  {
    length: 434.71,
    width: 222.93,
    height: 309.34,
  },
];
const toggleConfig = [
  {
    id: "1",
    dimensions: {
      width: 2.81,
      height: 7.0537,
      length: 16.25,
      diameter: 1.2,
      drumLenght: 6.6,
      drumHeight: 2.6431,
      transportationHeight: 4.21,
      wheel: 1.4,
      humidity3: 40,
      humidity5: 30,
    },
  },
  {
    id: "2",
    dimensions: {
      width: 2.85,
      height: 7.0537,
      length: 17.4,
      diameter: 1.37,
      drumLenght: 6.93,
      drumHeight: 2.6431,
      transportationHeight: 4.2457,
      wheel: 1.4,
      humidity3: 80,
      humidity5: 60,
    },
  },
  {
    id: "3",
    dimensions: {
      width: 2.87,
      height: 7.0537,
      length: 18.68,
      diameter: 1.52,
      drumLenght: 7.31,
      drumHeight: 2.6431,
      transportationHeight: 4.2457,
      wheel: 1.4,
      humidity3: 120,
      humidity5: 80,
    },
  },
  {
    id: "4",
    dimensions: {
      width: 2.99,
      height: 7.0537,
      length: 20.07,
      diameter: 1.8,
      drumLenght: 8.52,
      drumHeight: 2.6431,
      transportationHeight: 4.2457,
      wheel: 1.4,
      humidity3: 160,
      humidity5: 120,
    },
  },
  {
    id: "5",
    dimensions: {
      width: 3.9,
      height: 7.05,
      length: 21.27,
      diameter: 1.98,
      drumLenght: 8.78,
      drumHeight: 2.5908,
      transportationHeight: 4.2457,
      wheel: 1.4,
      humidity3: 200,
      humidity5: 160,
    },
  },
  {
    id: "6",
    dimensions: {
      width: 3.25,
      height: 5.0968,
      length: 22.8,
      diameter: 2.13,
      drumLenght: 12.8048,
      drumHeight: 2.8931,
      transportationHeight: 4.2457,
      wheel: 1.4,
      humidity3: 260,
      humidity5: 200,
    },
  },
  {
    id: "7",
    dimensions: {
      width: 3.1,
      height: 3.9,
      length: 20.37,
      diameter: 2.59,
      drumLenght: 12.8048,
      drumHeight: 2.8931,
      transportationHeight: 4.2457,
      wheel: 1.4,
      humidity3: 360,
      humidity5: 300,
    },
  },
];
gsap.registerPlugin(ScrollTrigger);

const DrumMixPlanos = () => {
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
  const imgRef = useRef<HTMLImageElement>(null);
  const clipTargetRef = useRef<HTMLDivElement>(null);
  // valor de cm a pies
  const cmToFeet = 3.28084;
  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  //ESTADOS DE LOS DROPWDOWNS
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    C1_1: false,
    C1_2: false,
    C1_3: false,
    C2_1: false,
    C2_2: false,
    C2_3: false,
    C3_1: false,
    C3_2: false,
    C3_3: false,
    C3_4: false,
    C3_5: false,
    C4_1: false,
    C4_2: false,
    C5_1: false,
    C5_2: false,
  });
  //ACTIVE DATA
  const activeData = toggleConfig.find(
    (item) => item.id === activeTab.toString(),
  );

  const modelOptions = [
    { id: 1, label: "40 Tph" },
    { id: 2, label: "80 Tph" },
    { id: 3, label: "120 Tph" },
    { id: 4, label: "160 Tph" },
    { id: 5, label: "200 Tph" },
    { id: 6, label: "260 Tph" },
    { id: 7, label: "360 Tph" },
  ];

  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };

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
             z-20 w-[250px] h-[450px]"
        >
          <img
            src={tab1Main.src}
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
            src={tab3Main2.src}
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
        <header className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            ESPECIFICACIONES
          </h1>
          <div className="flex items-center justify-center mt-10">
            <h1 className="mr-3" id="measure">
              SISTEMA DE MEDICIÓN:
            </h1>
            <div
              onClick={toggleUnit}
              className="relative w-48 h-10 rounded-full border border-white cursor-pointer select-none"
            >
              {/* Fondo deslizante */}
              <div
                className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${
                  unit === "metric" ? "translate-x-full" : ""
                }`}
              ></div>

              {/* Texto sobrepuesto */}
              <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-bold">
                <span
                  className={unit === "imperial" ? "text-black" : "text-white"}
                >
                  IMPERIAL
                </span>
                <span
                  className={unit === "metric" ? "text-black" : "text-white"}
                >
                  METRICO
                </span>
              </div>
            </div>
          </div>
        </header>
        <div id="planosDrumMixers" className="w-full px-8 lg:px-8 mt-14">
          <div id="options" ref={optionsRef} className="w-full">
            {/* móvil */}
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto">
              <label className="text-white block text-center">MODELOS:</label>
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
              <label className="text-white block text-center">MODELOS:</label>
            </div>
            <div className="hidden md:flex flex-wrap justify-center gap-5  mx-auto px-2">
              {modelOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 w-[150px]
                    ${
                      activeTab === option.id
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
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          ÁLABES
                        </h1>
                        <button
                          aria-label="See more about the flights section"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Álabes de entrada</li>
                        <li>Álabes de acondicionamiento</li>
                        <li>Álabes de radiación</li>
                        <li>Álabes de secado</li>

                        <li>Álabes de mezclado</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL Y OPERACIÓN
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>Sistema operativo Triaso Relief 8.0.</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Monitoreo remoto de los parámetros de operación,
                              con supervisión en tiempo real y registro
                              histórico de datos.
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Sistema de monitoreo remoto, accesible desde
                              computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Sistema de alarmas y seguridades para condiciones
                          fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          RESISTENCIA Y SEGURIDAD
                        </h1>
                        <button
                          aria-label="See more about the components and electrical composition"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all text-sm lg:text-base duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo
                          plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>
                          Componentes atornillados con recubrimiento
                          anticorrosivo.
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Tornillería galvanizada y pintura electrostática,
                              de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Aislamiento térmico con lana mineral, que reduce la
                          pérdida de calor y la temperatura superficial.
                        </li>
                        <li>
                          Sellos tipo laberinto para disminuir la fuga de aire y
                          calor.
                        </li>
                        <li>
                          Carcasa resistente al polvo que protege el módulo de
                          control.
                        </li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                        <li>
                          Arrancador suave en elevador para romper bolas de
                          mezcla endurecida.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab1Main.src}
                      alt=""
                      className="w-[250px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-2 lg:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          QUEMADORES
                        </h1>
                        <button
                          aria-label="See more about the burner system"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between">
                          <h1>Quemador:</h1>
                          <p>7.5 millones de BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>1,611</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor:</h1>
                          <p>5 hp</p>
                        </li>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diésel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>Sensores UV para monitoreo de llama.</li>
                        <li>
                          Sistema de flama piloto y flama principal
                          independientes
                        </li>
                        <li>
                          Sistema de filtración de combustible y regulación de
                          seguridad
                        </li>
                        <li>
                          Sistema de ionización para asistencia de plasma para
                          soporte de combustión.
                        </li>
                        <li>
                          Autocarburación del quemador por sensores en la
                          chimenea
                        </li>
                        <li>Silenciador para quemador.</li>
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    {/* <div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CASAS DE BOLSAS
                        </h1>
                        <button
                          aria-label="See more about the baghouse capacity"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_2 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>5,250</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Area de filtrado:</h1>
                          <p>704 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Aislante de fibra de vidrio:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bolsas:</h1>
                          <p>64</p>
                        </div>
                        <li>
                          Alabes aerodinámicos para operación silenciosa del
                          extractor.
                        </li>
                        <li>
                          Chimenea con puertos para mediciones ecológicas.
                        </li>
                        <li>Sensores de gases para monitoreo ambiental</li>
                        <ul className="ml-2 lg:ml-6">
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Monóxido de carbono (CO)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Material patriculado (PM)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Óxidos de nitrógeno (NOx)
                          </li>

                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Dióxido de azufre (SO₂)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Oxígeno (O₂) para verificación de combustión y
                            exceso de aire
                          </li>
                        </ul>
                      </div>
                    </div>*/}
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTES Y SISTEMAS ELÉCTRICOS
                        </h1>
                        <button
                          aria-label="See more about the durability and safety of the system"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
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
                        className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Motores, componentes y cableado Siemens de grado
                          industrial.
                        </li>
                        <li>
                          Sistema de cableado simplificado para facilitar el
                          mantenimiento.
                        </li>

                        <li>
                          Conexiones eléctricas protegidas contra la intemperie.
                        </li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>
                          Líneas de combustible externas, sensores y cableado de
                          señales preinstalados.
                        </li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado
                          con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-end">
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
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab2Left.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DIMENSIONES DEL TAMBOR
                          </h1>
                          <button
                            aria-label="See more about the drum dimensions"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_1 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 overflow-hidden ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumLenght?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumLenght ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>

                          <div className="flex justify-between">
                            <h1>Diámetro:</h1>
                            <p data-imperial="264.31 cm" data-metric="8.67 ft">
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.diameter?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.diameter ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CHASIS Y ESTRUCTURA
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_2 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud total (incluyendo quinta rueda):</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.length?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.length ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Configuración de ejes:</h1>
                            <p>Un eje</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de la quinta rueda:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.wheel?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.wheel ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.height?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.height ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura para transporte:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.transportationHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions
                                      .transportationHeight ?? 0) * cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            RANGO DE PRODUCCIÓN
                          </h1>
                          <button
                            aria-label="See more about the production rate"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_3 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humedad:</h1>
                            <p>40 Tph</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humedad:</h1>
                            <p>30 Tph</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CUMPLIMIENTO CON NORMAS INDUSTRIALES
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_5 ? "rotate-180" : ""
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
                          className={`text-sm lg:text-base transition-all duration-500 md:mb-0 overflow-hidden ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_5
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>NOM</li>
                          <li>DOT</li>
                          <li>SCT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          SISTEMA DE GIRO
                        </h1>
                        <button
                          aria-label="See more information about the Drum Drive System"
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Accionado por dos motores de 10 HP</li>
                        <li>
                          Sistema de accionamiento por roles de carga para
                          operación continua y confiable
                        </li>
                        <li>VFDs digitales para ajuste preciso de velocidad</li>
                        <li>
                          Aros y roles forjados, maquinados y tratados
                          térmicamente para mayor durabilidad
                        </li>
                        <li>
                          Componentes maquinados con precisión para un desempeño
                          balanceado y resistente a la deformación
                        </li>
                        <li>
                          Montaje sobre muelles para absorber variaciones de
                          carga y expansión térmica
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILIDAD
                        </h1>
                        <button
                          aria-label="See more about the portability"
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama
                          baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              También puede transportarse en lowboy o plataforma
                              (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Montada sobre chasis de transporte estándar con tres
                          ejes y rines de 16” para carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre (pull-type) con acoplamiento de
                          seguridad y sistema de frenos.
                        </li>
                        <li>
                          La instalación no requiere grúa ni equipo de izaje.
                        </li>
                        <li>
                          Patas de soporte atornillables para montaje rápido en
                          sitio.
                        </li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT
                          para visibilidad durante el transporte.
                        </li>
                      </ul>
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
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          ÁLABES
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Álabes de entrada</li>
                        <li>Álabes de acondicionamiento</li>
                        <li>Álabes de radiación</li>
                        <li>Álabes de secado</li>

                        <li>Álabes de mezclado</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL Y OPERACIÓN
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>Sistema operativo Triaso Relief 8.0.</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Monitoreo remoto de los parámetros de operación,
                              con supervisión en tiempo real y registro
                              histórico de datos.
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Sistema de monitoreo remoto, accesible desde
                              computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Sistema de alarmas y seguridades para condiciones
                          fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          RESISTENCIA Y SEGURIDAD
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo
                          plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>
                          Componentes atornillados con recubrimiento
                          anticorrosivo.
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Tornillería galvanizada y pintura electrostática,
                              de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Aislamiento térmico con lana mineral, que reduce la
                          pérdida de calor y la temperatura superficial.
                        </li>
                        <li>
                          Sellos tipo laberinto para disminuir la fuga de aire y
                          calor.
                        </li>
                        <li>
                          Carcasa resistente al polvo que protege el módulo de
                          control.
                        </li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                        <li>
                          Arrancador suave en elevador para romper bolas de
                          mezcla endurecida.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab1Main.src}
                      alt=""
                      className="w-[250px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          QUEMADOR
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between">
                          <h1>Quemador:</h1>
                          <p>15 millones de BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>3,222</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor:</h1>
                          <p>10 hp</p>
                        </li>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diésel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>Sensores UV para monitoreo de llama.</li>
                        <li>
                          Sistema de flama piloto y flama principal
                          independientes
                        </li>
                        <li>
                          Sistema de filtración de combustible y regulación de
                          seguridad
                        </li>
                        <li>
                          Sistema de ionización para asistencia de plasma para
                          soporte de combustión.
                        </li>
                        <li>
                          Autocarburación del quemador por sensores en la
                          chimenea
                        </li>
                        <li>Silenciador para quemador.</li>
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    {/*<div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CASAS DE BOLSAS
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>10,500</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Area de filtrado:</h1>
                          <p>1,100 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Aislante de fibra de vidrio:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bolsas:</h1>
                          <p>112</p>
                        </div>
                        <li>
                          Alabes aerodinámicos para operación silenciosa del
                          extractor.
                        </li>
                        <li>
                          Chimenea con puertos para mediciones ecológicas.
                        </li>
                        <li>Sensores de gases para monitoreo ambiental</li>
                        <ul className="ml-2 lg:ml-6">
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Monóxido de carbono (CO)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Material patriculado (PM)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Óxidos de nitrógeno (NOx)
                          </li>

                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Dióxido de azufre (SO₂)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Oxígeno (O₂) para verificación de combustión y
                            exceso de aire
                          </li>
                        </ul>
                      </div>
                    </div>*/}
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTES Y SISTEMAS ELÉCTRICOS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Motores, componentes y cableado Siemens de grado
                          industrial.
                        </li>
                        <li>
                          Sistema de cableado simplificado para facilitar el
                          mantenimiento.
                        </li>

                        <li>
                          Conexiones eléctricas protegidas contra la intemperie.
                        </li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>
                          Líneas de combustible externas, sensores y cableado de
                          señales preinstalados.
                        </li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado
                          con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-end">
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
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab2Left.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DIMENSIONES DEL TAMBOR
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumLenght?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumLenght ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumHeight ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Diametro:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.diameter?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.diameter ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CHASIS Y ESTRUCTURA
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud total (incluyendo quinta rueda):</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.length?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.length ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Configuración de ejes:</h1>
                            <p>Dos ejes</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de la quinta rueda:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.wheel?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.wheel ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura total:</h1>
                            <p data-imperial="731.29 cm" data-metric="23.99 ft">
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.height?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.height ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura para transporte:</h1>
                            <p data-imperial="427.57 cm" data-metric="14.02 ft">
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.transportationHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions
                                      .transportationHeight ?? 0) * cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            RANGO DE PRODUCCIÓN
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humedad:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              80 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humidity:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              60 Tph
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CUMPLIMIENTO CON NORMAS INDUSTRIALES
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_5
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>NOM</li>
                          <li>DOT</li>
                          <li>SCT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          SISTEMA DE GIRO
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Accionado por dos motores de 15 HP</li>
                        <li>
                          Sistema de accionamiento por roles de carga para
                          operación continua y confiable
                        </li>
                        <li>VFDs digitales para ajuste preciso de velocidad</li>
                        <li>
                          Aros y roles forjados, maquinados y tratados
                          térmicamente para mayor durabilidad
                        </li>
                        <li>
                          Componentes maquinados con precisión para un desempeño
                          balanceado y resistente a la deformación
                        </li>
                        <li>
                          Montaje sobre muelles para absorber variaciones de
                          carga y expansión térmica
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILIDAD
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama
                          baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              También puede transportarse en lowboy o plataforma
                              (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Montada sobre chasis de transporte estándar con tres
                          ejes y rines de 16” para carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre (pull-type) con acoplamiento de
                          seguridad y sistema de frenos.
                        </li>
                        <li>
                          La instalación no requiere grúa ni equipo de izaje.
                        </li>
                        <li>
                          Patas de soporte atornillables para montaje rápido en
                          sitio.
                        </li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT
                          para visibilidad durante el transporte.
                        </li>
                      </ul>
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
                    className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          ÁLABES
                        </h1>
                        <button
                          aria-label="See more about the flights"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Álabes de entrada</li>
                        <li>Álabes de acondicionamiento</li>
                        <li>Álabes de radiación</li>
                        <li>Álabes de secado</li>

                        <li>Álabes de mezclado</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL Y OPERACIÓN
                        </h1>
                        <button
                          aria-label="See more about the control and operation of the drum mixer"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>Sistema operativo Triaso Relief 8.0.</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Monitoreo remoto de los parámetros de operación,
                              con supervisión en tiempo real y registro
                              histórico de datos.
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Sistema de monitoreo remoto, accesible desde
                              computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Sistema de alarmas y seguridades para condiciones
                          fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          RESISTENCIA Y SEGURIDAD
                        </h1>
                        <button
                          aria-label="See more about the components and electrical composition of the system"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo
                          plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>
                          Componentes atornillados con recubrimiento
                          anticorrosivo.
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Tornillería galvanizada y pintura electrostática,
                              de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Aislamiento térmico con lana mineral, que reduce la
                          pérdida de calor y la temperatura superficial.
                        </li>
                        <li>
                          Sellos tipo laberinto para disminuir la fuga de aire y
                          calor.
                        </li>
                        <li>
                          Carcasa resistente al polvo que protege el módulo de
                          control.
                        </li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                        <li>
                          Arrancador suave en elevador para romper bolas de
                          mezcla endurecida.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full min-h-[600px] order-1 md:order-2"></div>
                  <div
                    className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          QUEMADOR
                        </h1>
                        <button
                          aria-label="See more about the burner system"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Quemador:</h1>
                          <p>23 millones de BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>4,833</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor:</h1>
                          <p>15 hp</p>
                        </li>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diésel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>Sensores UV para monitoreo de llama.</li>
                        <li>
                          Sistema de flama piloto y flama principal
                          independientes
                        </li>
                        <li>
                          Sistema de filtración de combustible y regulación de
                          seguridad
                        </li>
                        <li>
                          Sistema de ionización para asistencia de plasma para
                          soporte de combustión.
                        </li>
                        <li>
                          Autocarburación del quemador por sensores en la
                          chimenea
                        </li>
                        <li>Silenciador para quemador.</li>
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    {/*<div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CASA DE BOLSAS
                        </h1>
                        <button
                          aria-label="See more about the capacity of the integrated baghouse"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>14,000</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Area de filtrado:</h1>
                          <p>1,692 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Aislante de fibra de vidrio:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bolsas:</h1>
                          <p>169</p>
                        </div>
                        <li>
                          Alabes aerodinámicos para operación silenciosa del
                          extractor.
                        </li>
                        <li>
                          Chimenea con puertos para mediciones ecológicas.
                        </li>
                        <li>Sensores de gases para monitoreo ambiental</li>
                        <ul className="ml-2 lg:ml-6">
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Monóxido de carbono (CO)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Material patriculado (PM)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Óxidos de nitrógeno (NOx)
                          </li>

                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Dióxido de azufre (SO₂)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Oxígeno (O₂) para verificación de combustión y
                            exceso de aire
                          </li>
                        </ul>
                      </div>
                    </div>*/}
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTES Y SISTEMAS ELÉCTRICOS
                        </h1>
                        <button
                          aria-label="See more about the durability and safety of the system"
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Motores, componentes y cableado Siemens de grado
                          industrial.
                        </li>
                        <li>
                          Sistema de cableado simplificado para facilitar el
                          mantenimiento.
                        </li>

                        <li>
                          Conexiones eléctricas protegidas contra la intemperie.
                        </li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>
                          Líneas de combustible externas, sensores y cableado de
                          señales preinstalados.
                        </li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado
                          con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-end">
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
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab2Left.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DIMENSIONES DEL TAMBOR
                          </h1>
                          <button
                            aria-label="See more about the drum dimensions"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumLenght?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumLenght ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          {/* <div className="flex justify-between">
                            <h1>Altura:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumHeight ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div> */}
                          <div className="flex justify-between">
                            <h1>Diámetro:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.diameter?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.diameter ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CHASIS Y ESTRUCTURA
                          </h1>
                          <button
                            aria-label="See more about the chassis and the structure"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud total (incluyendo quinta rueda):</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.length?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.length ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Configuración de ejes:</h1>
                            <p>Tres ejes</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de la quinta rueda:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.wheel?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.wheel ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.height?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.height ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de transporte:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.transportationHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions
                                      .transportationHeight ?? 0) * cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            RANGO DE PRODUCCIÓN
                          </h1>
                          <button
                            aria-label="See more about the production rate"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humedad:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              120 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humedad:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              80 Tph
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CUMPLIMIENTO CON NORMAS INDUSTRIALES
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_5
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>NOM</li>
                          <li>DOT</li>
                          <li>SCT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          SISTEMA DE GIRO
                        </h1>
                        <button
                          aria-label="See more about the drum drive system"
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Accionado por dos motores de 20 HP</li>
                        <li>
                          Sistema de accionamiento por roles de carga para
                          operación continua y confiable
                        </li>
                        <li>VFDs digitales para ajuste preciso de velocidad</li>
                        <li>
                          Aros y roles forjados, maquinados y tratados
                          térmicamente para mayor durabilidad
                        </li>
                        <li>
                          Componentes maquinados con precisión para un desempeño
                          balanceado y resistente a la deformación
                        </li>
                        <li>
                          Montaje sobre muelles para absorber variaciones de
                          carga y expansión térmica
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILIDAD
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama
                          baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              También puede transportarse en lowboy o plataforma
                              (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Montada sobre chasis de transporte estándar con tres
                          ejes y rines de 16” para carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre (pull-type) con acoplamiento de
                          seguridad y sistema de frenos.
                        </li>
                        <li>
                          La instalación no requiere grúa ni equipo de izaje.
                        </li>
                        <li>
                          Patas de soporte atornillables para montaje rápido en
                          sitio.
                        </li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT
                          para visibilidad durante el transporte.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div
                    className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          ÁLABES
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Álabes de entrada</li>
                        <li>Álabes de acondicionamiento</li>
                        <li>Álabes de radiación</li>
                        <li>Álabes de secado</li>

                        <li>Álabes de mezclado</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL Y OPERACIÓN
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>Sistema operativo Triaso Relief 8.0.</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Monitoreo remoto de los parámetros de operación,
                              con supervisión en tiempo real y registro
                              histórico de datos.
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Sistema de monitoreo remoto, accesible desde
                              computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Sistema de alarmas y seguridades para condiciones
                          fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          RESISTENCIA Y SEGURIDAD
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo
                          plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>
                          Componentes atornillados con recubrimiento
                          anticorrosivo.
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Tornillería galvanizada y pintura electrostática,
                              de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Aislamiento térmico con lana mineral, que reduce la
                          pérdida de calor y la temperatura superficial.
                        </li>
                        <li>
                          Sellos tipo laberinto para disminuir la fuga de aire y
                          calor.
                        </li>
                        <li>
                          Carcasa resistente al polvo que protege el módulo de
                          control.
                        </li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                        <li>
                          Arrancador suave en elevador para romper bolas de
                          mezcla endurecida.
                        </li>
                        <li>Escaleras y barandales para operación segura.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab1Main.src}
                      alt=""
                      className="w-[250px] h-auto"
                    />
                  </div>
                  <div
                    className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          QUEMADOR
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between w-full">
                          <h1>Quemador:</h1>
                          <p>30 millones de BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>6,444</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor:</h1>
                          <p>20 hp</p>
                        </li>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diésel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>Sensores UV para monitoreo de llama.</li>
                        <li>
                          Sistema de flama piloto y flama principal
                          independientes
                        </li>
                        <li>
                          Sistema de filtración de combustible y regulación de
                          seguridad
                        </li>
                        <li>
                          Sistema de ionización para asistencia de plasma para
                          soporte de combustión.
                        </li>
                        <li>
                          Autocarburación del quemador por sensores en la
                          chimenea
                        </li>
                        <li>Silenciador para quemador.</li>
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    {/*<div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CASA DE BOLSAS
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>19,250 </p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Area de filtrado:</h1>
                          <p>2,463 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Aislante de fibra de vidrio:</h1>
                          <p>2"</p>
                        </div>
                        <li className="flex justify-between w-full">
                          <h1>Bolsas:</h1>
                          <p>224</p>
                        </li>
                      </div>
                    </div>
*/}{" "}
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTES Y SISTEMAS ELÉCTRICOS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Motores, componentes y cableado Siemens de grado
                          industrial.
                        </li>
                        <li>
                          Sistema de cableado simplificado para facilitar el
                          mantenimiento.
                        </li>

                        <li>
                          Conexiones eléctricas protegidas contra la intemperie.
                        </li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>
                          Líneas de combustible externas, sensores y cableado de
                          señales preinstalados.
                        </li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado
                          con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[135px] h-[60px] self-end">
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
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="w-[372px] h-[285px] flex items-center justify-center">
                      <img
                        src={tab1Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[285px] shrink-0">
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
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="h-[285px] w-[744px] flex justify-center items-center">
                      <img
                        src={tab2Left.src}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DIMENSIONES DEL TAMBOR
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumLenght?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumLenght ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          {/*<div className="flex justify-between">
                            <h1>Height:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } cm`
                                : `${(
                                    (activeData?.dimensions.drumHeight ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>*/}
                          <div className="flex justify-between">
                            <h1>Diámetro:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.diameter?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.diameter ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CHASIS Y ESTRUCTURA
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud total (incluyendo quinta rueda):</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.length?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.length ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Configuración de ejes:</h1>
                            <p>Tres ejes</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de la quinta rueda:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.wheel?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.wheel ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.height?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.height ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura para transporte:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.transportationHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions
                                      .transportationHeight ?? 0) * cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            RANGO DE PRODUCCIÓN
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humedad:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              160 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humedad:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              120 Tph
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CUMPLIMIENTO CON NORMAS INDUSTRIALES
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_5
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>NOM</li>
                          <li>DOT</li>
                          <li>SCT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          SISTEMA DE GIRO
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Accionado por dos motores de 20 HP</li>
                        <li>
                          Sistema de accionamiento por roles de carga para
                          operación continua y confiable
                        </li>
                        <li>VFDs digitales para ajuste preciso de velocidad</li>
                        <li>
                          Aros y roles forjados, maquinados y tratados
                          térmicamente para mayor durabilidad
                        </li>
                        <li>
                          Componentes maquinados con precisión para un desempeño
                          balanceado y resistente a la deformación
                        </li>
                        <li>
                          Montaje sobre muelles para absorber variaciones de
                          carga y expansión térmica
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILIDAD
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama
                          baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              También puede transportarse en lowboy o plataforma
                              (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Montada sobre chasis de transporte estándar con tres
                          ejes y rines de 16” para carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre (pull-type) con acoplamiento de
                          seguridad y sistema de frenos.
                        </li>
                        <li>
                          La instalación no requiere grúa ni equipo de izaje.
                        </li>
                        <li>
                          Patas de soporte atornillables para montaje rápido en
                          sitio.
                        </li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT
                          para visibilidad durante el transporte.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 5 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          ÁLABES
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Álabes de entrada</li>
                        <li>Álabes de acondicionamiento</li>
                        <li>Álabes de radiación</li>
                        <li>Álabes de secado</li>

                        <li>Álabes de mezclado</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL Y OPERACIÓN
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>Sistema operativo Triaso Relief 8.0.</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Monitoreo remoto de los parámetros de operación,
                              con supervisión en tiempo real y registro
                              histórico de datos.
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Sistema de monitoreo remoto, accesible desde
                              computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Sistema de alarmas y seguridades para condiciones
                          fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          RESISTENCIA Y SEGURIDAD
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo
                          plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>
                          Componentes atornillados con recubrimiento
                          anticorrosivo.
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Tornillería galvanizada y pintura electrostática,
                              de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Aislamiento térmico con lana mineral, que reduce la
                          pérdida de calor y la temperatura superficial.
                        </li>
                        <li>
                          Sellos tipo laberinto para disminuir la fuga de aire y
                          calor.
                        </li>
                        <li>
                          Carcasa resistente al polvo que protege el módulo de
                          control.
                        </li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                        <li>
                          Arrancador suave en elevador para romper bolas de
                          mezcla endurecida.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab5Main.src}
                      alt=""
                      className="w-[120px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          QUEMADOR
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between">
                          <h1>Quemador:</h1>
                          <p>40 millones de BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>8,592</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor:</h1>
                          <p>25 hp</p>
                        </li>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diésel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>Sensores UV para monitoreo de llama.</li>
                        <li>
                          Sistema de flama piloto y flama principal
                          independientes
                        </li>
                        <li>
                          Sistema de filtración de combustible y regulación de
                          seguridad
                        </li>
                        <li>
                          Sistema de ionización para asistencia de plasma para
                          soporte de combustión.
                        </li>
                        <li>
                          Autocarburación del quemador por sensores en la
                          chimenea
                        </li>
                        <li>Silenciador para quemador.</li>
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    {/*<div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CASAS DE BOLSAS
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>24,500</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Area de filtrado:</h1>
                          <p>3,079 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Aislante de fibra de vidrio:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bolsas:</h1>
                          <p>280</p>
                        </div>
                        <li>
                          Alabes aerodinámicos para operación silenciosa del
                          extractor.
                        </li>
                        <li>
                          Chimenea con puertos para mediciones ecológicas.
                        </li>
                        <li>Sensores de gases para monitoreo ambiental</li>
                        <ul className="ml-2 lg:ml-6">
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Monóxido de carbono (CO)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Material patriculado (PM)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Óxidos de nitrógeno (NOx)
                          </li>

                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Dióxido de azufre (SO₂)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Oxígeno (O₂) para verificación de combustión y
                            exceso de aire
                          </li>
                        </ul>
                      </div>
                    </div>*/}
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTES Y SISTEMA ELÉCTRICO
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Motores, componentes y cableado Siemens de grado
                          industrial.
                        </li>
                        <li>
                          Sistema de cableado simplificado para facilitar el
                          mantenimiento.
                        </li>

                        <li>
                          Conexiones eléctricas protegidas contra la intemperie.
                        </li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>
                          Líneas de combustible externas, sensores y cableado de
                          señales preinstalados.
                        </li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado
                          con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[225px] h-[60px]">
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
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="w-[225px] h-[294px] flex items-center justify-center">
                      <img
                        src={tab5Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[294px] shrink-0">
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
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="h-[294px] w-[900px] flex justify-center items-center">
                      <img
                        src={tab1Right.src}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DIMENSIONES DEL TAMBOR
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumLenght?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumLenght ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          {/*<div className="flex justify-between">
                            <h1>Altura:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumHeight ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>*/}
                          <div className="flex justify-between">
                            <h1>Diámetro:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.diameter?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.diameter ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CHASIS Y ESTRUCTURA
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud total (incluyendo quinta rueda):</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.length?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.length ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Configuración de ejes:</h1>
                            <p>Tres ejes</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de la quinta rueda:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.wheel?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.wheel ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.height?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.height ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            RANGO DE PRODUCCIÓN
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humedad:</h1>
                            <p>200 Tph</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humedad:</h1>
                            <p>160 Tph</p>
                          </div>
                        </div>
                      </div>

                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CUMPLIMIENTO CON NORMAS INDUSTRIALES
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_5
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>NOM</li>
                          <li>DOT</li>
                          <li>SCT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          SISTEMA DE GIRO
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Accionado por dos motores de 20 HP</li>
                        <li>
                          Sistema de accionamiento por roles de carga para
                          operación continua y confiable
                        </li>
                        <li>VFDs digitales para ajuste preciso de velocidad</li>
                        <li>
                          Aros y roles forjados, maquinados y tratados
                          térmicamente para mayor durabilidad
                        </li>
                        <li>
                          Componentes maquinados con precisión para un desempeño
                          balanceado y resistente a la deformación
                        </li>
                        <li>
                          Montaje sobre muelles para absorber variaciones de
                          carga y expansión térmica
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILIDAD
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama
                          baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              También puede transportarse en lowboy o plataforma
                              (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Montada sobre chasis de transporte estándar con tres
                          ejes y rines de 16” para carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre (pull-type) con acoplamiento de
                          seguridad y sistema de frenos.
                        </li>
                        <li>
                          La instalación no requiere grúa ni equipo de izaje.
                        </li>
                        <li>
                          Patas de soporte atornillables para montaje rápido en
                          sitio.
                        </li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT
                          para visibilidad durante el transporte.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 6 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          ÁLABES
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Álabes de entrada</li>
                        <li>Álabes de acondicionamiento</li>
                        <li>Álabes de radiación</li>
                        <li>Álabes de secado</li>

                        <li>Álabes de mezclado</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL Y OPERACIÓN
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>Sistema operativo Triaso Relief 8.0.</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Monitoreo remoto de los parámetros de operación,
                              con supervisión en tiempo real y registro
                              histórico de datos.
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Sistema de monitoreo remoto, accesible desde
                              computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Sistema de alarmas y seguridades para condiciones
                          fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          RESISTENCIA Y SEGURIDAD
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo
                          plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>
                          Componentes atornillados con recubrimiento
                          anticorrosivo.
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Tornillería galvanizada y pintura electrostática,
                              de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Aislamiento térmico con lana mineral, que reduce la
                          pérdida de calor y la temperatura superficial.
                        </li>
                        <li>
                          Sellos tipo laberinto para disminuir la fuga de aire y
                          calor.
                        </li>
                        <li>
                          Carcasa resistente al polvo que protege el módulo de
                          control.
                        </li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                        <li>
                          Arrancador suave en elevador para romper bolas de
                          mezcla endurecida.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab6Main.src}
                      alt=""
                      className="w-[120px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          QUEMADOR
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between">
                          <h1>Quemador:</h1>
                          <p>50 millones de BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>10,740</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor:</h1>
                          <p>40 hp</p>
                        </li>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diésel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>Sensores UV para monitoreo de llama.</li>
                        <li>
                          Sistema de flama piloto y flama principal
                          independientes
                        </li>
                        <li>
                          Sistema de filtración de combustible y regulación de
                          seguridad
                        </li>
                        <li>
                          Sistema de ionización para asistencia de plasma para
                          soporte de combustión.
                        </li>
                        <li>
                          Autocarburación del quemador por sensores en la
                          chimenea
                        </li>
                        <li>Silenciador para quemador.</li>
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    {/*<div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CASA DE BOLSAS
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>35,000</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Area de filtrado:</h1>
                          <p>4,310 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Aislante de fibra de vidrio:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bolsas:</h1>
                          <p>382</p>
                        </div>
                        <li>
                          Alabes aerodinámicos para operación silenciosa del
                          extractor.
                        </li>
                        <li>
                          Chimenea con puertos para mediciones ecológicas.
                        </li>
                        <li>Sensores de gases para monitoreo ambiental</li>
                        <ul className="ml-2 lg:ml-6">
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Monóxido de carbono (CO)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Material patriculado (PM)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Óxidos de nitrógeno (NOx)
                          </li>

                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Dióxido de azufre (SO₂)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Oxígeno (O₂) para verificación de combustión y
                            exceso de aire
                          </li>
                        </ul>
                      </div>
                    </div>*/}
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTES Y SISTEMAS ELÉCTRICOS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Motores, componentes y cableado Siemens de grado
                          industrial.
                        </li>
                        <li>
                          Sistema de cableado simplificado para facilitar el
                          mantenimiento.
                        </li>

                        <li>
                          Conexiones eléctricas protegidas contra la intemperie.
                        </li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>
                          Líneas de combustible externas, sensores y cableado de
                          señales preinstalados.
                        </li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado
                          con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[225px] h-[60px]">
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
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="w-[225px] h-[294px] flex items-center justify-center">
                      <img
                        src={tab6Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[294px] shrink-0">
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
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="h-[294px] w-[900px] flex justify-center items-center">
                      <img
                        src={tab6Right.src}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DIMENSIONES DEL TAMBOR
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumLenght?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumLenght ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          {/*<div className="flex justify-between">
                            <h1>Altura:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumHeight ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>*/}
                          <div className="flex justify-between">
                            <h1>Diámetro:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.diameter?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.diameter ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            CHASIS Y ESTRUCTURA
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud total (incluyendo quinta rueda):</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.length?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.length ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Configuración de ejes:</h1>
                            <p>Tres ejes</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de la quinta rueda:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.wheel?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.wheel ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.height?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.height ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            RANGO DE PRODUCCIÓN
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humedad:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              260 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humedad:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              200 Tph
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                            Cumplimiento con normas industriales
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_5
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>NOM</li>
                          <li>DOT</li>
                          <li>SCT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          SISTEMA DE GIRO
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Accionado por dos motores de 20 HP</li>
                        <li>
                          Sistema de accionamiento por roles de carga para
                          operación continua y confiable
                        </li>
                        <li>VFDs digitales para ajuste preciso de velocidad</li>
                        <li>
                          Aros y roles forjados, maquinados y tratados
                          térmicamente para mayor durabilidad
                        </li>
                        <li>
                          Componentes maquinados con precisión para un desempeño
                          balanceado y resistente a la deformación
                        </li>
                        <li>
                          Montaje sobre muelles para absorber variaciones de
                          carga y expansión térmica
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILIDAD
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama
                          baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              También puede transportarse en lowboy o plataforma
                              (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Montada sobre chasis de transporte estándar con tres
                          ejes y rines de 16” para carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre (pull-type) con acoplamiento de
                          seguridad y sistema de frenos.
                        </li>
                        <li>
                          La instalación no requiere grúa ni equipo de izaje.
                        </li>
                        <li>
                          Patas de soporte atornillables para montaje rápido en
                          sitio.
                        </li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT
                          para visibilidad durante el transporte.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 7 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-between gap-0 md:gap-4 w-full h-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full mt-10 md:mt-0">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          ÁLABES
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Álabes de entrada</li>
                        <li>Álabes de acondicionamiento</li>
                        <li>Álabes de radiación</li>
                        <li>Álabes de secado</li>

                        <li>Álabes de mezclado</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CONTROL Y OPERACIÓN
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>Sistema operativo Triaso Relief 8.0.</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Monitoreo remoto de los parámetros de operación,
                              con supervisión en tiempo real y registro
                              histórico de datos.
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Sistema de monitoreo remoto, accesible desde
                              computadora, tablet o teléfono.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Sistema de alarmas y seguridades para condiciones
                          fuera de rango.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          RESISTENCIA Y SEGURIDAD
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C1_3: !prev.C1_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C1_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C1_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo
                          plazo.
                        </li>
                        <li>Flancos estéticos para una imagen profesional</li>
                        <li>
                          Componentes atornillados con recubrimiento
                          anticorrosivo.
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Tornillería galvanizada y pintura electrostática,
                              de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Aislamiento térmico con lana mineral, que reduce la
                          pérdida de calor y la temperatura superficial.
                        </li>
                        <li>
                          Sellos tipo laberinto para disminuir la fuga de aire y
                          calor.
                        </li>
                        <li>
                          Carcasa resistente al polvo que protege el módulo de
                          control.
                        </li>
                        <li>Forro exterior de lámina de acero inoxidable.</li>
                        <li>
                          Arrancador suave en elevador para romper bolas de
                          mezcla endurecida.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tab6Main.src}
                      alt=""
                      className="w-[120px] h-auto"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3 gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          QUEMADOR
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="flex justify-between">
                          <h1>Quemador:</h1>
                          <p>75 millones de BTU/hr</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>ACFM:</h1>
                          <p>16,110</p>
                        </li>
                        <li className="flex justify-between w-full">
                          <h1>Motor:</h1>
                          <p>60 hp</p>
                        </li>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Diésel
                            </li>
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              Gas
                            </li>
                          </ul>
                        </li>
                        <li>Sensores UV para monitoreo de llama.</li>
                        <li>
                          Sistema de flama piloto y flama principal
                          independientes.
                        </li>
                        <li>
                          Sistema de filtración de combustible y regulación de
                          seguridad.
                        </li>
                        <li>
                          Sistema de ionización para asistencia de plasma para
                          soporte de combustión.
                        </li>
                        <li>
                          Autocarburación del quemador por sensores en la
                          chimenea.
                        </li>
                        <li>Silenciador para quemador.</li>
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    {/*<div className="text-white font-normal w-full flex flex-col gap-4 justify-between h-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          CASA DE BOLSAS
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block md:mb-0`}
                      >
                        <div className="flex justify-between">
                          <h1>ACFM:</h1>
                          <p>52,000</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Area de filtrado:</h1>
                          <p>6,384 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Aislante de fibra de vidrio:</h1>
                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <h1>Bolsas:</h1>
                          <p>336</p>
                        </div>
                        <li>
                          Alabes aerodinámicos para operación silenciosa del
                          extractor.
                        </li>
                        <li>
                          Chimenea con puertos para mediciones ecológicas.
                        </li>
                        <li>Sensores de gases para monitoreo ambiental</li>
                        <ul className="ml-2 lg:ml-6">
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Monóxido de carbono (CO)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Material patriculado (PM)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Óxidos de nitrógeno (NOx)
                          </li>

                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Dióxido de azufre (SO₂)
                          </li>
                          <li
                            className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                          >
                            Oxígeno (O₂) para verificación de combustión y
                            exceso de aire
                          </li>
                        </ul>
                      </div>
                    </div>*/}
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          COMPONENTES Y SISTEMAS ELÉCTRICOS
                        </h1>
                        <button
                          className="block md:hidden"
                          onClick={() =>
                            setOpenSections((prev) => ({
                              ...prev,
                              C2_3: !prev.C2_3,
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C2_3
                            ? "max-h-96 opacity-1"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Motores, componentes y cableado Siemens de grado
                          industrial.
                        </li>
                        <li>
                          Sistema de cableado simplificado para facilitar el
                          mantenimiento.
                        </li>

                        <li>
                          Conexiones eléctricas protegidas contra la intemperie.
                        </li>
                        <li>Sistema de transmisión con poleas y bujes.</li>
                        <li>
                          Líneas de combustible externas, sensores y cableado de
                          señales preinstalados.
                        </li>
                        <li>
                          Elevador de mezcla asfáltica, de arrastre integrado
                          con sistema abisagrado.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start md:justify-center items-end my-10 overflow-x-auto w-full whitespace-nowrap flex-nowrap">
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[272px]">
                    <div className="flex items-center justify-center w-[225px] h-[60px]">
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
                          ? `${
                              activeData?.dimensions.width?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.width ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="w-[225px] h-[294px] flex items-center justify-center">
                      <img
                        src={tab6Left.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end min-w-[90px] h-[294px] shrink-0">
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
                          ? `${
                              activeData?.dimensions.height?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.height ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                  <div className="flex flex-col items-center justify-center shrink-0 min-w-[744px]">
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
                          ? `${
                              activeData?.dimensions.length?.toFixed(1) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.length ?? 0) * cmToFeet
                            ).toFixed(1)} ft`}
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
                    <div className="h-[294px] w-[900px] flex justify-center items-center">
                      <img
                        src={tab6Right.src}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-10 gap-0 md:gap-10">
                  <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            DIMENSIONES DEL TAMBOR
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_1 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 md:mb-0 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumLenght?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumLenght ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          {/* <div className="flex justify-between">
                            <h1>Altura:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.drumHeight?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.drumHeight ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>*/}
                          <div className="flex justify-between">
                            <h1>Diámetro:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.diameter?.toFixed(
                                      1,
                                    ) ?? ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.diameter ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                            Chasis y estructura
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_2 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>Longitud total (incluyendo quinta rueda):</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.length?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.length ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Configuración de ejes:</h1>
                            <p>Tres ejes</p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura de la quinta rueda:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.wheel?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.wheel ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Ancho total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.width?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.width ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>Altura total:</h1>
                            <p>
                              {unit === "metric"
                                ? `${
                                    activeData?.dimensions.height?.toFixed(1) ??
                                    ""
                                  } m`
                                : `${(
                                    (activeData?.dimensions.height ?? 0) *
                                    cmToFeet
                                  ).toFixed(1)} ft`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                      <div className="text-white font-normal flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                            RANGO DE PRODUCCIÓN
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <div className="flex justify-between">
                            <h1>3% humedad:</h1>
                            <p data-imperial="389.2 cm" data-metric="12.94 ft">
                              360 Tph
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <h1>5% humedad:</h1>
                            <p data-imperial="128 cm" data-metric="4.2 ft">
                              300 Tph
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-start justify-start text-white flex flex-col gap-4">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h1 className="font-bold lg:text-xl text-base w-full pb-3 uppercase">
                            Cumplimiento con normas industriales
                          </h1>
                          <button
                            className="block md:hidden"
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                C3_5: !prev.C3_5,
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C3_5 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                            openSections.C3_5
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>NOM</li>
                          <li>DOT</li>
                          <li>SCT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          SISTEMA DE GIRO
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_1 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Accionado por dos motores de 20 HP</li>
                        <li>
                          Sistema de accionamiento por roles de carga para
                          operación continua y confiable
                        </li>
                        <li>VFDs digitales para ajuste preciso de velocidad</li>
                        <li>
                          Aros y roles forjados, maquinados y tratados
                          térmicamente para mayor durabilidad
                        </li>
                        <li>
                          Componentes maquinados con precisión para un desempeño
                          balanceado y resistente a la deformación
                        </li>
                        <li>
                          Montaje sobre muelles para absorber variaciones de
                          carga y expansión térmica
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          PORTABILIDAD
                        </h1>
                        <button
                          className="block"
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
                            className={`transition-transform duration-300 transform ${
                              openSections.C4_2 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 overflow-hidden md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${
                          openSections.C4_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>Diseñada para reubicación.</li>
                        <li>
                          La quinta rueda integrada elimina la necesidad de cama
                          baja (lowboy).
                        </li>
                        <li className="list-none">
                          <ul className="ml-2 lg:ml-6">
                            <li
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent"
                            >
                              También puede transportarse en lowboy o plataforma
                              (flatbed) si se prefiere.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Montada sobre chasis de transporte estándar con tres
                          ejes y rines de 16” para carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre (pull-type) con acoplamiento de
                          seguridad y sistema de frenos.
                        </li>
                        <li>
                          La instalación no requiere grúa ni equipo de izaje.
                        </li>
                        <li>
                          Patas de soporte atornillables para montaje rápido en
                          sitio.
                        </li>
                        <li>
                          Iluminación y reflejantes conformes a normativa DOT
                          para visibilidad durante el transporte.
                        </li>
                      </ul>
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

export default DrumMixPlanos;
