import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RAPMain from "../../assets/images/RapBins/RAPMain.webp";
import RAPMain2 from "../../assets/images/RapBins/RAPMainBlue.webp";
import tolva2L2 from "../../assets/images/BinUnits/tolva2L2.webp";
import tolva2L1 from "../../assets/images/BinUnits/tolva2L1.webp";
import tolva1L2 from "../../assets/images/BinUnits/tolva1L2.webp";
import tolva1L1 from "../../assets/images/BinUnits/tolva1L1.webp";
import tolva1F from "../../assets/images/BinUnits/tolva1F.webp";
import tolva2F1 from "../../assets/images/BinUnits/tolva2F1.webp";
import tolva1Main from "../../assets/images/BinUnits/tolva1Main.webp";
import { useClipPathScrollTrigger } from "../../components/lib/useClipPathScrollTrigger.tsx"

gsap.registerPlugin(ScrollTrigger);

const singleUnit = {
  capacity: "20 tons",
};
const structure = {
  axleConfi: "One Axle",
};
const toggleConfig = [
  {
    id: "1",
    dimensions: {
      //Without Aesthetic Side Panels
      singleLength: 3.65,
      width: 2.68,
      singleHeight: 2.0,
      height: 3.81,
      length: 7.22,
      tLenght: 10.88,
      tWheel: 1.34,
      tStructurew: 2.60,
      hOperation: 3.81,
      tph: 60,


      //with Aesthetic Side Panels
      aSingleLength: 3.65,
      aWidth: 2.68,
      aSingleHeight: 2.01,
      aHeight: 3.81,
      aLength: 7.22,
      aTlenght: 10.88,
      aTwheel: 1.34,
      aTstructurew: 2.60,
      aHoperation: 3.81,
      aTph: 60,
    },
  },
  {
    id: "2",
    dimensions: {
      //Without Aesthetic Side Panels
      singleLength: 3.65,
      width: 2.68,
      singleHeight: 2.01,
      height: 3.81,
      length: 10.88,
      tLenght: 10.88,
      tWheel: 1.34,
      tStructurew: 2.60,
      hOperation: 3.81,
      tph: 60,


      //with Aesthetic Side Panels
      aSingleLength: 3.65,
      aWidth: 2.68,
      aSingleHeight: 2.01,
      aHeight: 3.81,
      aLength: 9.57,
      aTlenght: 10.88,
      aTwheel: 1.34,
      aTstructurew: 2.60,
      aHoperation: 3.81,
      aTph: 60,
    },
  },
];
const RBPlanos = () => {
  //logica de cambio de imagenes
  const [panelOption, setPanelOption] = useState<"withPanels" | "withoutPanels">("withPanels");
  //tabs states
  const [activeTab, setActiveTab] = useState(2);

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

  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };
  const activeData = toggleConfig.find(
    (item) => item.id === activeTab.toString()
  );

  // Helper: elige la dimensión correcta según si tiene paneles o no
  type DimKey = keyof NonNullable<typeof activeData>["dimensions"];
  const dim = (withKey: DimKey, withoutKey: DimKey): number =>
    panelOption === "withPanels"
      ? activeData?.dimensions[withKey] ?? 0
      : activeData?.dimensions[withoutKey] ?? 0;
  //ESTADOS DE LOS DROPWDOWNS
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    C1_1: false,
    C1_2: false,
    C2_1: false,
    C2_2: false,
    C2_3: false,
    C3_1: false,
    C3_2: false,
    C3_3: false,
    C4_1: false,
    C4_2: false,
    C4_3: false,
  });

  const exteriorOptions = [
    {
      id: "withPanels",
      label: "Con flancos estéticos",
    },
    {
      id: "withoutPanels",
      label: "Sin flancos estéticos",
    },
  ];

  const modelOptions = [
    { id: 1, label: "1 Unidad" },
    { id: 2, label: "2 Unidades" },
  ];

  useClipPathScrollTrigger({
    enabled: activeTab === 2,

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
             z-20 w-[180px] h-[560px]"
        >
          <img
            src={RAPMain2.src}
            className="absolute top-0 left-0 w-full h-full object-contain"
            alt="Imagen de fondo"
            style={{
              display: activeTab === 2 ? "block" : "none",
              opacity: activeTab === 2 ? 1 : 0,
              visibility: activeTab === 2 ? "visible" : "hidden",
            }}
          />
          <img
            ref={imgRef}
            src={RAPMain.src}
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
        <header id="planosRapBins" className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Especificaciones
          </h1>
          <div className="flex items-center justify-center mt-10">
            <h1 className="mr-3 text-white" id="measure">
              Unidad:
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
                  className={
                    unit === "imperial" ? "text-black" : "text-white"
                  }
                >
                  Imperial
                </span>
                <span
                  className={unit === "metric" ? "text-black" : "text-white"}
                >
                  Métrica
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="w-full px-8 lg:px-8 mt-14">
          {/* Contenedor de los botones */}
          {/* Contenedor de los botones */}
          <div id="options" ref={optionsRef} className="w-full">
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto mb-6">
              <label className="text-white block text-center">
                Flancos:
              </label>

              <div className="relative">
                <select
                  value={panelOption}
                  onChange={(e) =>
                    setPanelOption(e.target.value as "withPanels" | "withoutPanels")
                  }
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-white/50">
                  {exteriorOptions.map((option) => (
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

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:pb-5">
              <label className="text-white block text-center">
                Flancos:
              </label>
            </div>
            <div className="hidden lg:flex justify-center gap-5 mb-6">
              {exteriorOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setPanelOption(option.id as "withPanels" | "withoutPanels")}
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300
                      ${panelOption === option.id
                      ? "text-black bg-white border-white"
                      : "text-white bg-transparent border-white"
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>


            {/* móvil */}
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto">
              <label className="text-white block text-center">
                Modelos:
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
                Modelos:
              </label>
            </div>
            <div className="hidden md:flex flex-wrap justify-center gap-5  mx-auto px-2">
              {modelOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 w-[150px]
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          Sistema de alimentación y dosificación
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Banda dosificadora de 18" con velocidad variable</li>
                        <li>Polea de cabeza recubierta de hule para agarre confiable</li>
                        <li>
                          Vibradores en la tolva de finos para asegurar una alimentación constante
                        </li>
                        <li>
                          Sensor de flujo para material fino con alarma de nivel bajo

                        </li>
                        <li>
                          Transportador de alimentación de 24" con banda ancha para un traslado más estable a baja velocidad

                        </li>
                        <li>Poleas de cabeza recubiertas de hule y rodillos estándar CEMA</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Resistencia y seguridad
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo plazo.

                        </li>
                        {panelOption === "withPanels" ? (
                          <li>Flancos estéticos para una imagen profesional</li>
                        ) : null}
                        <li>Componentes atornillados con recubrimiento anticorrosivo.</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Tornillería galvanizada y pintura electrostática, de alta resistencia y excelente adherencia.
                            </li>
                          </ul>
                        </li>
                        <li>Tanque de aire de 120 galones para operación del cañon de aire.</li>
                        <li>Limpiadores de banda para prolongar su vida útil.</li>
                        <li>Carcasa resistente al polvo que protege el módulo de control.</li>
                        <li>Solapas laterales integradas para mantener el material dentro de la banda.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tolva1Main.src}
                      alt=""
                      className="w-[240px] h-[600px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3">
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Operación automática o manual, según se requiera en campo.</li>
                        <li>
                          Monitoreo remoto de los parámetros de operación, con supervisión en tiempo real y registro histórico de datos.
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
                        <li>
                          Controles independientes y de fácil manejo, diseñados para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Portabilidad
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Diseñado para reubicación y movimiento frecuente.</li>
                        <li>
                          Con quinta rueda integrada, evitando el uso de cama baja si no se desea.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              También puede transportarse en cama baja o plataforma.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Montado sobre chasis de transporte con un eje y llantas de uso carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre con acoplamiento de seguridad y sistema de frenos.
                        </li>
                        <li>La instalación no requiere grúa ni equipo de izaje.</li>
                        <li>Patas de soporte atornilladas, para un armado rápido en sitio.</li>
                        <li>
                          Sistema de luces y señalamientos para transporte conforme a normas de carretera.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
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
                      <li>
                        Motores, componentes y cableado Siemens de grado industrial.
                      </li>
                      <li>Sistema de cableado simplificado para facilitar el mantenimiento.</li>
                      <li>Conexiones eléctricas protegidas contra la intemperie.</li>
                      <li>Sistema de transmisión con poleas y bujes.</li>
                      <li>
                        Líneas de combustible externas, sensores y cableado de señales preinstalados.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-2 px-0 md:px-10 lg:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Capacidad operativa
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full text-sm lg:text-base list-disc list-inside ${openSections.C3_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="w-full flex justify-between">
                        <p>Máxima capacidad de alimentación:</p>
                        <p>Hasta 60 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Cumplimiento con estándares de la industria
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
                      <li>SEMARNAT</li>
                      <li>SCT</li>
                      <li>NOM-001-SEDE</li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
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
                          ? `${dim("aWidth", "width")?.toFixed(2) ?? ""
                          } mt`
                          : `${(
                            (dim("aWidth", "width")) * cmToFeet
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
                    <div className="w-[200px] h-[250px] flex items-center justify-center">
                      <img
                        src={tolva1F.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[250px]">
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
                          ? `${dim("aHeight", "height")?.toFixed(2) ?? ""
                          } mt`
                          : `${(
                            (dim("aHeight", "height")) * cmToFeet
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
                          ? `${dim("aLength", "length")?.toFixed(2) ?? ""
                          } mt`
                          : `${(
                            (dim("aLength", "length")) * cmToFeet
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
                    <div className="h-[250px] min-w-[500px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva1L2.src}
                          alt="Dinámica con paneles"
                          className="h-[250px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva1L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[250px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Dimensiones de unidad individual                      </h1>
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
                            ? `${dim("aSingleLength", "singleLength")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aSingleLength", "singleLength")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aWidth", "width")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aWidth", "width")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aSingleHeight", "singleHeight")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aSingleHeight", "singleHeight")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Estructura y chasis                      </h1>
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
                        <h1>Longitud total (incluido el enganche):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aTlenght", "tLenght")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aTlenght", "tLenght")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Configuración del eje: </h1>
                        <p>Un eje</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura del enganche de quinta rueda:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aTwheel", "tWheel")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aTwheel", "tWheel")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aTstructurew", "tStructurew")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aTstructurew", "tStructurew")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura con las tolvas en funcionamiento:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aHoperation", "hOperation")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aHoperation", "hOperation")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>  
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Opciones de tolva
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
                    <div
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-2 lg:ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Indicadores de nivel de contenedores</li>
                        <li>Compuertas de control de profundidad ajustables</li>
                        <li>Canaletas para cables</li>
                        <li>Mamparas (disponibles en altura completa)</li>
                        <li>Gargantas de alimentación con autodescarga</li>
                        <li>Separadores para contenedores</li>
                        <li>Pasarelas</li>
                      </ul>
                      <ul className="ml-2 lg:ml-6 list-disc">
                        <li>Tapas para contenedores</li>
                        <li>Muros de contención integrados</li>
                        <li>Cañones de aire</li>
                        <li>Sondas de humedad</li>
                        <li>Protecciones de malla metálica</li>
                        <li>Vibradores de contenedores</li>
                        <li>Extensiones de contenedores</li>
                        <li>Filtros de scalping integrados</li>
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div
                    className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          Sistema de alimentación y dosificación
                        </h1>
                        <button
                          aria-label="See more about the feeding and dosign system"
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Banda dosificadora de 18" con velocidad variable</li>
                        <li>Polea de cabeza recubierta de hule para agarre confiable</li>
                        <li>
                          Vibradores en la tolva de finos para asegurar una alimentación constante

                        </li>
                        <li>
                          Sensor de flujo para material fino con alarma de nivel bajo

                        </li>
                        <li>
                          Transportador de alimentación de 24" con banda ancha para un traslado más estable a baja velocidad

                        </li>
                        <li>
                          Poleas de cabeza recubiertas de hule y rodillos estándar CEMA
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Resistencia y seguridad
                        </h1>
                        <button
                          aria-label="See more about the durability and safety"
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo plazo.
                        </li>
                        {panelOption === "withPanels" ? (
                          <li>Flancos estéticos para una imagen profesional</li>
                        ) : null}
                        <li>Componentes atornillados con recubrimiento anticorrosivo.</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Tornillería galvanizada y pintura electrostática, de alta resistencia y excelente adherencia.

                            </li>
                          </ul>
                        </li>
                        <li>Tanque de aire de 120 galones para operación del cañon de aire.</li>
                        <li>Limpiadores de banda para prolongar su vida útil.</li>
                        <li>Carcasa resistente al polvo que protege el módulo de control.</li>
                        <li>Solapas laterales integradas para mantener el material dentro de la banda.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2 min-h-[600px]"></div>
                  <div
                    className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Control y operación
                        </h1>
                        <button
                          aria-label="See more about the control and operation of the system"
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C2_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Operación automática o manual, según se requiera en campo.</li>
                        <li>
                          Monitoreo remoto de los parámetros de operación, con supervisión en tiempo real y registro histórico de datos.
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
                        <li>
                          Controles independientes y de fácil manejo, diseñados para confiabilidad en sitio.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Portabilidad
                        </h1>
                        <button
                          aria-label="See more about the portability"
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
                            className={`transition-transform duration-300 transform ${openSections.C2_3 ? "rotate-180" : ""
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6ml-6 list-disc list-inside ${openSections.C2_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Diseñado para reubicación y movimiento frecuente.</li>
                        <li>
                          Con quinta rueda integrada, evitando el uso de cama baja si no se desea.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              También puede transportarse en cama baja o plataforma.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Montado sobre chasis de transporte con un eje y llantas de uso carretera.
                        </li>
                        <li>
                          Enganche tipo arrastre con acoplamiento de seguridad y sistema de frenos.
                        </li>
                        <li>La instalación no requiere grúa ni equipo de izaje.</li>
                        <li>Patas de soporte atornilladas, para un armado rápido en sitio.</li>
                        <li>
                          Sistema de luces y señalamientos para transporte conforme a normas de carretera.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Componentes y sistema eléctrico
                      </h1>
                      <button
                        aria-label="See more about the components and electrical composition"
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
                      <li>
                        Motores, componentes y cableado Siemens de grado industrial.
                      </li>
                      <li>Sistema de cableado simplificado para facilitar el mantenimiento.</li>
                      <li>Conexiones eléctricas protegidas contra la intemperie.</li>
                      <li>Sistema de transmisión con poleas y bujes.</li>
                      <li>
                        Líneas de combustible externas, sensores y cableado de señales preinstalados.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-2 px-0 md:px-10 lg:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Capacidad operativa
                      </h1>
                      <button
                        aria-label="See more about the operating configuration"
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden w-full text-sm lg:text-base list-disc list-inside ${openSections.C3_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="w-full flex justify-between">
                        <p>Máxima capacidad de alimentación:</p>
                        <p>Hasta 120 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Cumplimiento con estándares de la industria
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <li>SEMARNAT</li>
                      <li>SCT</li>
                      <li>NOM-001-SEDE</li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
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
                          ? `${dim("aWidth", "width")?.toFixed(2) ?? ""
                          } mt`
                          : `${(
                            (dim("aWidth", "width")) * cmToFeet
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
                    <div className="w-[200px] h-[250px] flex items-center justify-center">
                      <img
                        src={tolva2F1.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[250px]">
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
                          ? `${dim("aHeight", "height")?.toFixed(2) ?? ""
                          } mt`
                          : `${(
                            (dim("aHeight", "height")) * cmToFeet
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
                          ? `${dim("aLength", "length")?.toFixed(2) ?? ""
                          } mt`
                          : `${(
                            (dim("aLength", "length")) * cmToFeet
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
                    <div className="h-[250px] min-w-[600px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva2L2.src}
                          alt="Dinámica con paneles"
                          className="h-[250px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva2L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[250px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Dimensiones de unidad individual
                      </h1>
                      <button
                        aria-label="See more about the single unit dimensions"
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
                            ? `${dim("aSingleLength", "singleLength")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aSingleLength", "singleLength")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aWidth", "width")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aWidth", "width")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Largo:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aSingleHeight", "singleHeight")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aSingleHeight", "singleHeight")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacidad:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Estructura y chasis
                      </h1>
                      <button
                        aria-label="See more about the chassis and structure"
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
                        <h1>Longitud total (incluido el enganche):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aTlenght", "tLenght")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aTlenght", "tLenght")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Configuración del eje: </h1>
                        <p>Un eje</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura del enganche de quinta rueda:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aTwheel", "tWheel")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aTwheel", "tWheel")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho total:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aTstructurew", "tStructurew")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aTstructurew", "tStructurew")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura con los contenedores en funcionamiento:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aHoperation", "hOperation")?.toFixed(2) ?? ""} mt`
                            : `${((dim("aHoperation", "hOperation")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Opciones de Tolva
                      </h1>
                      <button
                        aria-label="See more about the bin options"
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
                    <div
                      className={`text-sm lg:text-base grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-2 lg:ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Indicadores de nivel de contenedores</li>
                        <li>Compuertas de control de profundidad ajustables</li>
                        <li>Canaletas para cables</li>
                        <li>Mamparas (disponibles en altura completa)</li>
                        <li>Gargantas de alimentación con autodescarga</li>
                        <li>Separadores para contenedores</li>
                        <li>Pasarelas</li>
                      </ul>
                      <ul className="ml-2 lg:ml-6 list-disc">
                        <li>Tapas para contenedores</li>
                        <li>Muros de contención integrados</li>
                        <li>Cañones de aire</li>
                        <li>Sondas de humedad</li>
                        <li>Protecciones de malla metálica</li>
                        <li>Vibradores de contenedores</li>
                        <li>Extensiones de contenedores</li>
                        <li>Filtros de scalping integrados</li>
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

export default RBPlanos;