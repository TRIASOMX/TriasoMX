import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tolva6L2 from "../../assets/images/BinUnits/tolva6L2.webp";
import tolva6L1 from "../../assets/images/BinUnits/tolva6L1.webp";
import tolva6Main from "../../assets/images/BinUnits/tolva6Main.webp";
import tolva5L1 from "../../assets/images/BinUnits/tolva5L1.webp";
import tolva5L2 from "../../assets/images/BinUnits/tolva5L2.webp";
import tolva5Main from "../../assets/images/BinUnits/tolva5Main.webp";
import tolva4L2 from "../../assets/images/BinUnits/tolva4L2.webp";
import tolva4L1 from "../../assets/images/BinUnits/tolva4L1.webp";
import tolva4F1 from "../../assets/images/BinUnits/tolva4F1.webp";
import tolva4Main from "../../assets/images/BinUnits/tolva4Main.webp";
import tolva3L1 from "../../assets/images/BinUnits/tolva3L1.webp";
import tolva3Main from "../../assets/images/BinUnits/tolva3Main.webp";
import tolva3Blue from "../../assets/images/BinUnits/tolva3Blue.webp";
import tolva2L2 from "../../assets/images/BinUnits/tolva2L2.webp";
import tolva2L1 from "../../assets/images/BinUnits/tolva2L1.webp";
import tolva2F1 from "../../assets/images/BinUnits/tolva2F1.webp";
import tolva2Main from "../../assets/images/BinUnits/tolva2Main.webp";
import tolva1L2 from "../../assets/images/BinUnits/tolva1L2.webp";
import tolva1L1 from "../../assets/images/BinUnits/tolva1L1.webp";
import tolva1F from "../../assets/images/BinUnits/tolva1F.webp";
import tolva1Main from "../../assets/images/BinUnits/tolva1Main.webp";
import tolva3L2 from "../../assets/images/BinUnits/tolva3L2.webp";
import { useClipPathScrollTrigger } from "../../components/lib/useClipPathScrollTrigger.tsx"
gsap.registerPlugin(ScrollTrigger);

const singleUnit = [
  {
    length: 365.75,
    width: 268.22,
    height: 201.17,
    capacity: "20 tons",
  },
];
const toggleConfig = [
  {
    id: "1",
    dimensions: {
      //No Aesthetic Side Panels
      width: 268.22,
      height: 381.0,
      length: 722.37,

      singleLength: 365.75,
      singleWidth: 268.22,
      singleHeight: 201.17,

      totalLength: 722.37,
      wheel: 134.11,
      totalWidth: 260,
      heightWithBins: 381,

      //Aesthetic Side Panels
      awidth: 268.22,
      aheight: 381.0,
      alength: 722.37,

      asingleLength: 365.75,
      asingleWidth: 268.22,
      asingleHeight: 201.17,

      atotalLength: 722.37,
      awheel: 134.11,
      atotalWidth: 260,
      aheightWithBins: 381,

    },
  },
  {
    id: "2",
    dimensions: {
      //No Aesthetic Side Panels
      width: 268.22,
      height: 388.62,
      length: 1088.13,

      singleLength: 365.75,
      singleWidth: 268.22,
      singleHeight: 201.17,

      totalLength: 1088.13,
      wheel: 134.11,
      totalWidth: 260,
      heightWithBins: 381,

      //Aesthetic Side Panels
      awidth: 268.22,
      aheight: 381.0,
      alength: 957.90,

      asingleLength: 365.75,
      asingleWidth: 268.22,
      asingleHeight: 201.17,

      atotalLength: 957.90,
      awheel: 134.11,
      atotalWidth: 260,
      aheightWithBins: 381,
    },
  },
  {
    id: "3",
    dimensions: {
      //No Aesthetic Side Panels
      width: 268.22,
      height: 381,
      length: 1333.30,

      singleLength: 365.75,
      singleWidth: 268.22,
      singleHeight: 201.17,

      totalLength: 1333.30,
      wheel: 134.11,
      totalWidth: 260,
      heightWithBins: 381,

      //Aesthetic Side Panels
      awidth: 268.22,
      aheight: 381.0,
      alength: 1333.30,

      asingleLength: 365.75,
      asingleWidth: 268.22,
      asingleHeight: 201.17,

      atotalLength: 1330.30,
      awheel: 134.11,
      atotalWidth: 260,
      aheightWithBins: 381,
    },
  },
  {
    id: "4",
    dimensions: {
      //No Aesthetic Side Panels
      width: 268.22,
      height: 381.0,
      length: 1697,

      singleLength: 365.75,
      singleWidth: 268.22,
      singleHeight: 201.17,

      totalLength: 1697,
      wheel: 134.11,
      totalWidth: 260,
      heightWithBins: 381,

      //Aesthetic Side Panels
      awidth: 268.22,
      aheight: 381.0,
      alength: 1697,

      asingleLength: 365.75,
      asingleWidth: 268.22,
      asingleHeight: 201.17,

      atotalLength: 1697,
      awheel: 134.11,
      atotalWidth: 260,
      aheightWithBins: 381,
    },
  },
  {
    id: "5",
    dimensions: {
      //No Aesthetic Side Panels
      width: 268.22,
      height: 381.0,
      length: 2060.45,

      singleLength: 365.75,
      singleWidth: 268.22,
      singleHeight: 201.17,

      totalLength: 2060.45,
      wheel: 134.11,
      totalWidth: 260,
      heightWithBins: 381,

      //Aesthetic Side Panels
      awidth: 268.22,
      aheight: 381.0,
      alength: 2060.45,

      asingleLength: 365.75,
      asingleWidth: 268.22,
      asingleHeight: 201.17,

      atotalLength: 2060.45,
      awheel: 134.11,
      atotalWidth: 260,
      aheightWithBins: 381,
    },
  },
  {
    id: "6",
    dimensions: {
      //No Aesthetic Side Panels
      width: 268.22,
      height: 381.0,
      length: 2423.80,

      singleLength: 365.75,
      singleWidth: 268.22,
      singleHeight: 201.17,

      totalLength: 2423.80,
      wheel: 134.11,
      totalWidth: 260,
      heightWithBins: 381,

      //Aesthetic Side Panels
      awidth: 268.22,
      aheight: 381.0,
      alength: 722.37,

      asingleLength: 365.75,
      asingleWidth: 268.22,
      asingleHeight: 201.17,

      atotalLength: 722.37,
      awheel: 134.11,
      atotalWidth: 260,
      aheightWithBins: 381,
    },
  },
];
const BinPlanosSection = () => {
  //tabs states
  const [activeTab, setActiveTab] = useState(3);

  const [panelOption, setPanelOption] = useState<"withPanels" | "withoutPanels">("withPanels");

  const cmToFeet = 0.0328084;
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

  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const activeData = toggleConfig.find(
    (item) => item.id === activeTab.toString()
  );

  // Helper: elige la dimensión correcta según si tiene paneles o no
  type DimKey = keyof NonNullable<typeof activeData>["dimensions"];
  const dim = (withKey: DimKey, withoutKey: DimKey): number =>
    panelOption === "withPanels"
      ? activeData?.dimensions[withKey] ?? 0
      : activeData?.dimensions[withoutKey] ?? 0;

  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    updateElements(newUnit); // Actualiza los elementos en el DOM
  };
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

  // Función que busca elementos con data-metric/data-imperial y los actualiza
  const updateElements = (currentUnit: "metric" | "imperial") => {
    const elements = document.querySelectorAll("[data-metric][data-imperial]");
    elements.forEach((element) => {
      const value = element.getAttribute(`data-${currentUnit}`);
      if (value) {
        element.textContent = value;
      }
    });
  };

  // Efecto para actualizar al cargar (opcional)
  useEffect(() => {
    updateElements(unit);
  }, [unit, activeTab, panelOption]);

  const exteriorOptions = [
    {
      id: "withPanels",
      label: "Aesthetic Side Panels",
    },
    {
      id: "withoutPanels",
      label: "Without Aesthetic Side Panels",
    },
  ];

  const modelOptions = [
    { id: 1, label: "1 Bin" },
    { id: 2, label: "2 Bins" },
    { id: 3, label: "3 Bins" },
    { id: 4, label: "4 Bins" },
    { id: 5, label: "5 Bins" },
    { id: 6, label: "6 Bins" },
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
      <div className="h-[80VH] relative flex items-center justify-center bg-bgMain w-full">
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
             z-20 w-[120px] h-[560px]"
        >
          <img
            src={tolva3Blue.src}
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
            src={tolva3Main.src}
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
        <header id="planosBinUnits" className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Especificaciones
          </h1>
          <div className="flex items-center justify-center mt-10">
            <h1 className="mr-3" id="measure">
              UNIDAD DE MEDIDA:
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
        <div className="w-full px-8 lg:px-8 mt-14">
          {/* Contenedor de los botones */}
          <div id="options" ref={optionsRef} className="w-full">
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto mb-6">
              <label className="text-white block text-center">
                EXTERIOR:
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
                EXTERIOR:
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
                MODELOS:
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
                MODELS:
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
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Sistema de alimentación y dosificacióN
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
                        <li>Banda dosificadora de 18" con velocidad variable</li>
                        <li>Polea de cabeza recubierta de hule para agarre confiable</li>
                        <li>
                          Vibradores en la tolva de finos para asegurar una alimentación constante
                        </li>
                        <li>Sensor de flujo para material fino con alarma de nivel bajo</li>
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
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_2
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
                        <li>Limpiadores de banda para prolongar la vida útil de la banda.</li>
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
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Control y operacióN
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
                        <li>
                        Adaptable a la infraestructura de control existente de la planta de asfalto
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                            Integración sin complicaciones con los sistemas de control central
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          PORTABILITY
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
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        COMPONENTS & ELECTRICAL
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
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Maximum feeding capacity:</h1>
                        <p>Up to 60 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"

                      >
                        {unit === "metric"
                          ? `${dim("awidth", "width")?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (dim("awidth", "width")) * cmToFeet
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
                    <div className="min-w-[272px] h-[300px] flex items-center justify-center">
                      <img
                        src={tolva1F.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[300px]">
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
                      <p
                        className="text-white text-lg"
                      >
                        {unit === "metric"
                          ? `${dim("aheight", "height")?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (dim("aheight", "height")) * cmToFeet
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("alength", "length")?.toFixed(1) ?? ""
                          } cm`
                          : `${(
                            (dim("alength", "length")) * cmToFeet
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
                    <div className="h-[300px] min-w-[644px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva1L2.src}
                          alt="Dinámica con paneles"
                          className="h-[300px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva1L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[300px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        SINGLE UNIT DIMENSIONS
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p >
                          {unit === "metric"
                            ? `${dim("asingleLength", "singleLength")?.toFixed(1) ?? ""} cm`
                            : `${((dim("asingleLength", "singleLength")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleWidth", "singleWidth")?.toFixed(1) ?? ""} cm`
                            : `${((dim("asingleWidth", "singleWidth")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p >
                          {unit === "metric"
                            ? `${dim("asingleHeight", "singleHeight")?.toFixed(1) ?? ""} cm`
                            : `${((dim("asingleHeight", "singleHeight")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        CHASSIS & STRUCTURE
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalLength", "totalLength")?.toFixed(1) ?? ""} cm`
                            : `${((dim("atotalLength", "totalLength")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("awheel", "wheel")?.toFixed(1) ?? ""} cm`
                            : `${((dim("awheel", "wheel")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalWidth", "totalWidth")?.toFixed(1) ?? ""} cm`
                            : `${((dim("atotalWidth", "totalWidth")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aheightWithBins", "heightWithBins")?.toFixed(1) ?? ""} cm`
                            : `${((dim("aheightWithBins", "heightWithBins")) * cmToFeet).toFixed(
                              1
                            )} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        BIN OPTIONS
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
                      className={`grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-6 list-disc">
                        <li>Bin covers</li>
                        <li>Built-in retaining walls</li>
                        <li>Air cannons</li>
                        <li>Moisture probes</li>
                        <li>Wire mesh guarding</li>
                        <li>Bin vibrators</li>
                        <li>Bin extensions</li>
                        <li>Built-in scalping screens</li>
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
                  <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          FEEDING & DOSIGN SYSTEM
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
                        <li>18" variable-speed dosing belt</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>
                          Vibrators in fine aggregate bin to ensure consistent
                          feed
                        </li>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>
                          24" feeding conveyor wide conveyor belt for smoother
                          low-speed transport
                        </li>
                        <li>
                          Rubber-coated head pulleys and CEMA-standard rollers
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          DURABILITY & SAFETY
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
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        {panelOption === "withPanels" ? (
                          <li>Aesthetic side panels for professional image</li>
                        ) : null}
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>Belt cleaners for longer belt lifespan</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Built-in skirtboards to contain material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tolva2Main.src}
                      alt=""
                      className="w-[200px] h-[600px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          CONTROL & OPERATION
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
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Remote monitoring system accessible from
                              computers, tablets, and smartphones.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                        <li>
                          Adaptable to existing asphalt plant control
                          infrastructure
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Seamless integration to central control systems
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          PORTABILITY
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
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        COMPONENTS & ELECTRICAL
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
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Maximum feeding capacity:</h1>
                        <p>Up to 120 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("awidth", "width").toFixed(1)} cm`
                          : `${(dim("awidth", "width") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="min-w-[272px] h-[300px] flex items-center justify-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva1F.src}
                          alt="Dinámica con paneles"
                          className="h-[300px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva2F1.src}
                          alt="Dinámica sin paneles"
                          className="h-[300px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[300px]">
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
                      <p
                        className="text-white text-lg"
                      >
                        {unit === "metric"
                          ? `${dim("aheight", "height").toFixed(1)} cm`
                          : `${(dim("aheight", "height") * cmToFeet).toFixed(1)} ft`}
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("alength", "length").toFixed(1)} cm`
                          : `${(dim("alength", "length") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[300px] min-w-[810px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva2L2.src}
                          alt="Dinámica con paneles"
                          className="h-[300px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva2L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[300px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        SINGLE UNIT DIMENSIONS
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleLength", "singleLength").toFixed(1)} cm`
                            : `${(dim("asingleLength", "singleLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleWidth", "singleWidth").toFixed(1)} cm`
                            : `${(dim("asingleWidth", "singleWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleHeight", "singleHeight").toFixed(1)} cm`
                            : `${(dim("asingleHeight", "singleHeight") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        CHASSIS & STRUCTURE
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalLength", "totalLength").toFixed(1)} cm`
                            : `${(dim("atotalLength", "totalLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("awheel", "wheel").toFixed(1)} cm`
                            : `${(dim("awheel", "wheel") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalWidth", "totalWidth").toFixed(1)} cm`
                            : `${(dim("atotalWidth", "totalWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aheightWithBins", "heightWithBins").toFixed(1)} cm`
                            : `${(dim("aheightWithBins", "heightWithBins") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        BIN OPTIONS
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
                      className={`grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-6 list-disc">
                        <li>Bin covers</li>
                        <li>Built-in retaining walls</li>
                        <li>Air cannons</li>
                        <li>Moisture probes</li>
                        <li>Wire mesh guarding</li>
                        <li>Bin vibrators</li>
                        <li>Bin extensions</li>
                        <li>Built-in scalping screens</li>
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div
                    className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          FEEDING & DOSIGN SYSTEM
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${openSections.C1_1
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>18" variable-speed dosing belt</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>
                          Vibrators in fine aggregate bin to ensure consistent
                          feed
                        </li>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>
                          24" feeding conveyor wide conveyor belt for smoother
                          low-speed transport
                        </li>
                        <li>
                          Rubber-coated head pulleys and CEMA-standard rollers
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          DURABILITY & SAFETY
                        </h1>
                        <button
                          aria-label="See more about the durability and safety of the system"
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
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        {panelOption === "withPanels" ? (
                          <li>Aesthetic side panels for professional image</li>
                        ) : null}
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>Belt cleaners for longer belt lifespan</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Built-in skirtboards to contain material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-[628px] order-1 md:order-2"></div>
                  <div
                    className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          CONTROL & OPERATION
                        </h1>
                        <button
                          aria-label="See more about the control and the operation of the system"
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
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Remote monitoring system accessible from
                              computers, tablets, and smartphones.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                        <li>
                          Adaptable to existing asphalt plant control
                          infrastructure
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Seamless integration to central control systems
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          PORTABILITY
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
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        COMPONENTS & ELECTRICAL
                      </h1>
                      <button
                        aria-label="See more abou the components and electrical composition"
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
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
                      </h1>
                      <button
                        aria-label="See more about the oprating configuration"
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Maximum feeding capacity:</h1>
                        <p>Up to 180 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                        Compliance with Industry Standards
                      </h1>
                      <button
                        aria-label="See more about the compliance with industry standards"
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
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("awidth", "width").toFixed(1)} cm`
                          : `${(dim("awidth", "width") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="min-w-[222px] h-[250px] flex items-center justify-center">
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
                      <p
                        className="text-white text-lg"
                      >
                        {unit === "metric"
                          ? `${dim("aheight", "height").toFixed(1)} cm`
                          : `${(dim("aheight", "height") * cmToFeet).toFixed(1)} ft`}
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("alength", "length").toFixed(1)} cm`
                          : `${(dim("alength", "length") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[250px] min-w-[900px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva3L2.src}
                          alt="Dinámica con paneles"
                          className="h-[250px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva3L1.src}
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
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        SINGLE UNIT DIMENSIONS
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleLength", "singleLength").toFixed(1)} cm`
                            : `${(dim("asingleLength", "singleLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleWidth", "singleWidth").toFixed(1)} cm`
                            : `${(dim("asingleWidth", "singleWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleHeight", "singleHeight").toFixed(1)} cm`
                            : `${(dim("asingleHeight", "singleHeight") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        CHASSIS & STRUCTURE
                      </h1>
                      <button
                        aria-label="See more about the Chassis and structure of the system"
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalLength", "totalLength").toFixed(1)} cm`
                            : `${(dim("atotalLength", "totalLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("awheel", "wheel").toFixed(1)} cm`
                            : `${(dim("awheel", "wheel") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalWidth", "totalWidth").toFixed(1)} cm`
                            : `${(dim("atotalWidth", "totalWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aheightWithBins", "heightWithBins").toFixed(1)} cm`
                            : `${(dim("aheightWithBins", "heightWithBins") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        BIN OPTIONS
                      </h1>
                      <button
                        aria-label="See more about the Bin Options"
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
                      className={`grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-6 list-disc">
                        <li>Bin covers</li>
                        <li>Built-in retaining walls</li>
                        <li>Air cannons</li>
                        <li>Moisture probes</li>
                        <li>Wire mesh guarding</li>
                        <li>Bin vibrators</li>
                        <li>Bin extensions</li>
                        <li>Built-in scalping screens</li>
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          FEEDING & DOSIGN SYSTEM
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
                        <li>18" variable-speed dosing belt</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>
                          Vibrators in fine aggregate bin to ensure consistent
                          feed
                        </li>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>
                          24" feeding conveyor wide conveyor belt for smoother
                          low-speed transport
                        </li>
                        <li>
                          Rubber-coated head pulleys and CEMA-standard rollers
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          DURABILITY & SAFETY
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
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        {panelOption === "withPanels" ? (
                          <li>Aesthetic side panels for professional image</li>
                        ) : null}
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>Belt cleaners for longer belt lifespan</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Built-in skirtboards to contain material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tolva4Main.src}
                      alt=""
                      className="w-[120px] h-[600px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          CONTROL & OPERATION
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
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Remote monitoring system accessible from
                              computers, tablets, and smartphones.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                        <li>
                          Adaptable to existing asphalt plant control
                          infrastructure
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Seamless integration to central control systems
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          PORTABILITY
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
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        COMPONENTS & ELECTRICAL
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
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Maximum feeding capacity:</h1>
                        <p>Up to 240 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("awidth", "width").toFixed(1)} cm`
                          : `${(dim("awidth", "width") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="min-w-[150px] h-[200px] flex items-center justify-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva1F.src}
                          alt="Dinámica con paneles"
                          className="h-[200px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva4F1.src}
                          alt="Dinámica sin paneles"
                          className="h-[200px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[200px]">
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
                      <p
                        className="text-white text-lg"
                      >
                        {unit === "metric"
                          ? `${dim("aheight", "height").toFixed(1)} cm`
                          : `${(dim("aheight", "height") * cmToFeet).toFixed(1)} ft`}
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("alength", "length").toFixed(1)} cm`
                          : `${(dim("alength", "length") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[200px] min-w-[800px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva4L2.src}
                          alt="Dinámica con paneles"
                          className="h-[200px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva4L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[200px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        SINGLE UNIT DIMENSIONS
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleLength", "singleLength").toFixed(1)} cm`
                            : `${(dim("asingleLength", "singleLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleWidth", "singleWidth").toFixed(1)} cm`
                            : `${(dim("asingleWidth", "singleWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleHeight", "singleHeight").toFixed(1)} cm`
                            : `${(dim("asingleHeight", "singleHeight") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        CHASSIS & STRUCTURE
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalLength", "totalLength").toFixed(1)} cm`
                            : `${(dim("atotalLength", "totalLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("awheel", "wheel").toFixed(1)} cm`
                            : `${(dim("awheel", "wheel") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalWidth", "totalWidth").toFixed(1)} cm`
                            : `${(dim("atotalWidth", "totalWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aheightWithBins", "heightWithBins").toFixed(1)} cm`
                            : `${(dim("aheightWithBins", "heightWithBins") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        BIN OPTIONS
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
                      className={`grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-6 list-disc">
                        <li>Bin covers</li>
                        <li>Built-in retaining walls</li>
                        <li>Air cannons</li>
                        <li>Moisture probes</li>
                        <li>Wire mesh guarding</li>
                        <li>Bin vibrators</li>
                        <li>Bin extensions</li>
                        <li>Built-in scalping screens</li>
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          FEEDING & DOSIGN SYSTEM
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
                        <li>18" variable-speed dosing belt</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>
                          Vibrators in fine aggregate bin to ensure consistent
                          feed
                        </li>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>
                          24" feeding conveyor wide conveyor belt for smoother
                          low-speed transport
                        </li>
                        <li>
                          Rubber-coated head pulleys and CEMA-standard rollers
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          DURABILITY & SAFETY
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
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        {panelOption === "withPanels" ? (
                          <li>Aesthetic side panels for professional image</li>
                        ) : null}
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>Belt cleaners for longer belt lifespan</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Built-in skirtboards to contain material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tolva5Main.src}
                      alt=""
                      className="w-[120px] h-[600px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          CONTROL & OPERATION
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
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Remote monitoring system accessible from
                              computers, tablets, and smartphones.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                        <li>
                          Adaptable to existing asphalt plant control
                          infrastructure
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Seamless integration to central control systems
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          PORTABILITY
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
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        COMPONENTS & ELECTRICAL
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
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Maximum feeding capacity:</h1>
                        <p>Up to 300 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("awidth", "width").toFixed(1)} cm`
                          : `${(dim("awidth", "width") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="min-w-[155px] h-[175px] flex items-center justify-center">
                      <img
                        src={tolva1F.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[175px]">
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
                      <p
                        className="text-white text-lg"
                      >
                        {unit === "metric"
                          ? `${dim("aheight", "height").toFixed(1)} cm`
                          : `${(dim("aheight", "height") * cmToFeet).toFixed(1)} ft`}
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("alength", "length").toFixed(1)} cm`
                          : `${(dim("alength", "length") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[175px] min-w-[900px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva5L2.src}
                          alt="Dinámica con paneles"
                          className="h-[175px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva5L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[175px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        SINGLE UNIT DIMENSIONS
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleLength", "singleLength").toFixed(1)} cm`
                            : `${(dim("asingleLength", "singleLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleWidth", "singleWidth").toFixed(1)} cm`
                            : `${(dim("asingleWidth", "singleWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleHeight", "singleHeight").toFixed(1)} cm`
                            : `${(dim("asingleHeight", "singleHeight") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        CHASSIS & STRUCTURE
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalLength", "totalLength").toFixed(1)} cm`
                            : `${(dim("atotalLength", "totalLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("awheel", "wheel").toFixed(1)} cm`
                            : `${(dim("awheel", "wheel") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalWidth", "totalWidth").toFixed(1)} cm`
                            : `${(dim("atotalWidth", "totalWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aheightWithBins", "heightWithBins").toFixed(1)} cm`
                            : `${(dim("aheightWithBins", "heightWithBins") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        BIN OPTIONS
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
                      className={`grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-6 list-disc">
                        <li>Bin covers</li>
                        <li>Built-in retaining walls</li>
                        <li>Air cannons</li>
                        <li>Moisture probes</li>
                        <li>Wire mesh guarding</li>
                        <li>Bin vibrators</li>
                        <li>Bin extensions</li>
                        <li>Built-in scalping screens</li>
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          FEEDING & DOSIGN SYSTEM
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
                        <li>18" variable-speed dosing belt</li>
                        <li>Rubber-coated head pulley for reliable grip</li>
                        <li>
                          Vibrators in fine aggregate bin to ensure consistent
                          feed
                        </li>
                        <li>Fine material flow sensor with low-level alarm</li>
                        <li>
                          24" feeding conveyor wide conveyor belt for smoother
                          low-speed transport
                        </li>
                        <li>
                          Rubber-coated head pulleys and CEMA-standard rollers
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          DURABILITY & SAFETY
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
                        <li>
                          High-strength, reinforced structure for long-term
                          heavy-duty operation
                        </li>
                        {panelOption === "withPanels" ? (
                          <li>Aesthetic side panels for professional image</li>
                        ) : null}
                        <li>Bolted components with anti-corrosion coating</li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Galvanized bolts and electrostatic paint ensure
                              long-lasting durability and excellent adhesion.
                            </li>
                          </ul>
                        </li>
                        <li>Belt cleaners for longer belt lifespan</li>
                        <li>Dust-resistant housing protects control module.</li>
                        <li>Built-in skirtboards to contain material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img
                      src={tolva6Main.src}
                      alt=""
                      className="w-[100px] h-[600px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          CONTROL & OPERATION
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
                        <li>Fully automatic or manual operation</li>
                        <li>
                          Digital monitoring of all operating parameters, with
                          real-time supervision and historical data reports.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Remote monitoring system accessible from
                              computers, tablets, and smartphones.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alarm and interlock system for out-of-range
                          conditions.
                        </li>
                        <li>
                          Independent, intuitive controls designed for field
                          reliability.
                        </li>
                        <li>
                          Adaptable to existing asphalt plant control
                          infrastructure
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Seamless integration to central control systems
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                          PORTABILITY
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
                        <li>Designed for relocation</li>
                        <li>
                          Built-in fifth wheel means no lowboy is required.
                        </li>
                        <li className="list-none">
                          <ul className="list-disc ml-10">
                            <li>
                              Also transportable on lowboy or flatbed trailer if
                              preferred.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Mounted on standard transport chassis with one axle
                          and 16” highway-rated wheels.
                        </li>
                        <li>
                          Pull-type hitch with safety coupling and brake system.
                        </li>
                        <li>Setup requires no crane or hoisting equipment.</li>
                        <li>Bolt-on support legs for fast on-site assembly.</li>
                        <li>
                          DOT-compliant lighting and reflective markings for
                          transport visibility.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        COMPONENTS & ELECTRICAL
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
                      <li>
                        Industrial-grade motors, components, and Siemens wiring.
                      </li>
                      <li>Simplified wiring system for easy maintenance.</li>
                      <li>Weather-protected electrical connections.</li>
                      <li>Pulley-and-bushing drive system.</li>
                      <li>
                        External fuel lines, sensors, and signal cabling
                        pre-installed.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-36">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                    <div
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Maximum feeding capacity:</h1>
                        <p>Up to 360 TPH</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        OPERATING CONFIGURATION
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
                      <li>EPA</li>
                      <li>OSHA</li>
                      <li>DOT</li>
                      <li>UL wiring</li>
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("awidth", "width").toFixed(1)} cm`
                          : `${(dim("awidth", "width") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="w-[140px] h-[155px] flex items-center justify-center">
                      <img
                        src={tolva1F.src}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[155px]">
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
                      <p
                        className="text-white text-lg"
                      >
                        {unit === "metric"
                          ? `${dim("aheight", "height").toFixed(1)} cm`
                          : `${(dim("aheight", "height") * cmToFeet).toFixed(1)} ft`}
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
                      <p
                        className="text-white lg:text-lg text-base w-full text-center mx-4"
                      >
                        {unit === "metric"
                          ? `${dim("alength", "length").toFixed(1)} cm`
                          : `${(dim("alength", "length") * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[155px] min-w-[900px] flex justify-center items-center">
                      {panelOption === "withPanels" ? (
                        <img
                          src={tolva6L2.src}
                          alt="Dinámica con paneles"
                          className="h-[155px] w-auto"
                        />
                      ) : (
                        <img
                          src={tolva6L1.src}
                          alt="Dinámica sin paneles"
                          className="h-[155px] w-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        SINGLE UNIT DIMENSIONS
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Length:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleLength", "singleLength").toFixed(1)} cm`
                            : `${(dim("asingleLength", "singleLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleWidth", "singleWidth").toFixed(1)} cm`
                            : `${(dim("asingleWidth", "singleWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("asingleHeight", "singleHeight").toFixed(1)} cm`
                            : `${(dim("asingleHeight", "singleHeight") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Capacity:</h1>
                        <p>20 tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        CHASSIS & STRUCTURE
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
                      className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Total length (including hitch):</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalLength", "totalLength").toFixed(1)} cm`
                            : `${(dim("atotalLength", "totalLength") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Axle configuration: </h1>
                        <p>One Axle</p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Fifth-wheel hitch height:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("awheel", "wheel").toFixed(1)} cm`
                            : `${(dim("awheel", "wheel") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Total width:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("atotalWidth", "totalWidth").toFixed(1)} cm`
                            : `${(dim("atotalWidth", "totalWidth") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Height with bins in operation:</h1>
                        <p>
                          {unit === "metric"
                            ? `${dim("aheightWithBins", "heightWithBins").toFixed(1)} cm`
                            : `${(dim("aheightWithBins", "heightWithBins") * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        BIN OPTIONS
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
                      className={`grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <ul className="ml-6 list-disc">
                        <li>Grizzlies</li>
                        <li>Bin level indicators</li>
                        <li>Adjustable depth control gates</li>
                        <li>Cable trays</li>
                        <li>Bulkheads (available in full height)</li>
                        <li>Self-relieving feeder throats</li>
                        <li>Bin dividers</li>
                        <li>Walkways</li>
                      </ul>
                      <ul className="ml-6 list-disc">
                        <li>Bin covers</li>
                        <li>Built-in retaining walls</li>
                        <li>Air cannons</li>
                        <li>Moisture probes</li>
                        <li>Wire mesh guarding</li>
                        <li>Bin vibrators</li>
                        <li>Bin extensions</li>
                        <li>Built-in scalping screens</li>
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

export default BinPlanosSection;