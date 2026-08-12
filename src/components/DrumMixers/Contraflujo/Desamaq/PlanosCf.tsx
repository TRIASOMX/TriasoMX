import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tolva3Main from "../../../../assets/images/DrumMixers/Contraflujo/Desamaq/CfDTi_Blueprint/Pla_Cf_Des_TI_VA.png";
import tolva3Blue from "../../../../assets/images/DrumMixers/Contraflujo/Desamaq/CfDTi_Blueprint/Bp_Pla_Cf_Des_TI_VA.png";
import tolva1L2 from "../../../../assets/images/DrumMixers/Contraflujo/Desamaq/CfDTi_Blueprint/Bp_Pla_Cf_Des_TI_VL.png";
import tolva1L1 from "../../../../assets/images/DrumMixers/Contraflujo/Desamaq/CfDTm_Blueprint/Bp_Pla_Cf_Des_TM_VL.png";
import tolva1F from "../../../../assets/images/DrumMixers/Contraflujo/Desamaq/CfDTi_Blueprint/Bp_Pla_Cf_Des_TI_VT.png";
import tolva1Main from "../../../../assets/images/DrumMixers/Contraflujo/Desamaq/CfDTm_Blueprint/Bp_Pla_Cf_Des_TM_VA.png";
import { useClipPathScrollTrigger } from "../../../../components/lib/useClipPathScrollTrigger.tsx";
gsap.registerPlugin(ScrollTrigger);

const toggleConfig = [
  {
    id: "1",
    dimensions: {
      lTotal: 16.25,
      rAltura: 1.4,
      aTotal: 2.8,
      aTransporte: 4.2,
      //Tolva montada
      lTotalMontada: 21.1,
      aTransporteMontada: 4.4,
      //Tambor
      tLongitud: 5.4864,
      tDiametro: 1.2192,
    },
  },
  {
    id: "2",
    dimensions: {
      lTotal: 16.55,
      rAltura: 1.4,
      aTotal: 2.9,
      aTransporte: 4.2,

      //Tolva montada
      lTotalMontada: 21.8,
      aTransporteMontada: 4.4,

      //Tambor
      tLongitud: 6.7056,
      tDiametro: 1.524,
    },
  },
  {
    id: "3",
    dimensions: {
      lTotal: 18.7,
      rAltura: 1.4,
      aTotal: 2.9,
      aTransporte: 4.2,

      //Tolva montada
      lTotalMontada: 22.4,
      aTransporteMontada: 4.4,

      //Tambor
      tLongitud: 7.3152,
      tDiametro: 1.6764,
    },
  },
  {
    id: "4",
    dimensions: {
      lTotal: 20,
      rAltura: 1.4,
      aTotal: 3,
      aTransporte: 4.2,

      //Tolva montada
      lTotalMontada: 22.9,
      aTransporteMontada: 4.4,

      //Tambor
      tLongitud: 8.8392,
      tDiametro: 1.8288,
    },
  },
];

const BinPlanosSection = () => {
  //tabs states
  const [activeTab, setActiveTab] = useState(3);

  const [panelOption, setPanelOption] = useState<
    "withPanels" | "withoutPanels"
  >("withPanels");

  const cmToFeet = 3.281;
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
    (item) => item.id === activeTab.toString(),
  );

  // Helper: elige la dimensión correcta según si tiene paneles o no
  type DimKey = keyof NonNullable<typeof activeData>["dimensions"];
  const dim = (withKey: DimKey, withoutKey: DimKey): number =>
    panelOption === "withPanels"
      ? (activeData?.dimensions[withKey] ?? 0)
      : (activeData?.dimensions[withoutKey] ?? 0);

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
    C5_1: false,
    C5_2: false,
    C5_3: false,
    C6_1: false,
    C6_2: false,
    C6_3: false,
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

  useEffect(() => {
    updateElements(unit);
  }, [unit, activeTab, panelOption]);

  const exteriorOptions = [
    {
      id: "withPanels",
      label: "Tolvas Independientes",
    },
    {
      id: "withoutPanels",
      label: "Tolvas montadas",
    },
  ];

  const modelOptions = [
    { id: 1, label: "40 TPH" },
    { id: 2, label: "80 TPH" },
    { id: 3, label: "120 TPH" },
    { id: 4, label: "160 TPH" },
  ];

  useClipPathScrollTrigger({
    enabled: activeTab === 3 && panelOption === "withPanels",

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
          className="text-white font-bold flex items-center justify-center rounded will-change-transform transform-gpu z-20 w-[300px] h-[560px]"
        >
          {panelOption === "withPanels" ? (
            <div>
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
          ) : (
            <div className="w-full"></div>
          )}
        </div>
      </div>

      <div
        ref={clipTargetRef}
        id="sectionNueva"
        className="bg-[url('/fondopatron.webp')] bg-repeat bg-top w-full flex flex-col items-center justify-start relative bg-black overflow-hidden z-10 min-h-screen"
      >
        <header
          id="planosBinUnits"
          className="mt-10 text-white"
          ref={otroElemento}
        >
          <h2 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Especificaciones
          </h2>
          <div className="flex items-center justify-center mt-10">
            <span className="mr-3" id="measure">
              UNIDAD DE MEDIDA:
            </span>
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
                  MÉTRICO
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="w-full px-8 lg:px-8 mt-14">
          {/* Contenedor de los botones */}
          <div id="options" ref={optionsRef} className="w-full">
            <div className="flex flex-row justify-between items-center px-4 md:hidden w-full max-w-7xl mx-auto mb-6">
              <label className="text-white block text-center">OPCIÓN:</label>

              <div className="relative">
                <select
                  value={panelOption}
                  onChange={(e) =>
                    setPanelOption(
                      e.target.value as "withPanels" | "withoutPanels",
                    )
                  }
                  className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                >
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
              <label className="text-white block text-center">EXTERIOR:</label>
            </div>
            <div className="hidden lg:flex justify-center gap-5 mb-6">
              {exteriorOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() =>
                    setPanelOption(option.id as "withPanels" | "withoutPanels")
                  }
                  className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300
                      ${
                        panelOption === option.id
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
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col justify-start items-start gap-0 sm:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          álabes
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
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
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Control y operación
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                        <li>
                          Controles en caseta de control para operación manual.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Componentes y sistema eléctrico
                        </h3>
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
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
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    {panelOption === "withPanels" ? (
                      <img
                        src={tolva3Blue.src}
                        alt="Dinámica con paneles"
                        className="w-[300px]"
                      />
                    ) : (
                      <img
                        src={tolva1Main.src}
                        alt="Dinámica sin paneles"
                        className="w-[300px]"
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-evenly h-full col-span-1 w-full gap-0 md:gap-10 order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          quemador
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between w-full">
                          <div>
                            <li>Quemador:</li>
                          </div>
                          <p>7.5 millones de BTU/hr</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>

                          <p>1611</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Motor:</li>
                          </div>
                          <p>5 hp</p>
                        </div>
                        <li>
                          Alimentado con sistema de control de aire total.
                        </li>
                        <li>
                          Disponibilidad de uso de todo tipo de combustibles.
                        </li>
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
                              Combustibles alternos
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
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    <div className=" text-white w-full font-normal flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Casa de bolsas
                        </h3>
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
                        className={`transition-all w-full duration-500 md:mb-0 overflow-hidden list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>
                          <p>5,250</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Área de filtrado:</li>
                          </div>
                          <p>704 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Aislante de fibra de vidrio:</li>
                          </div>

                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Bolsas:</li>
                          </div>
                          <p>64</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Resistencia y seguridad
                        </h3>
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura reforzada para trabajo pesado a largo
                          plazo.
                        </li>
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
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex items-center justify-end self-end w-[38%] h-[60px]">
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
                              activeData?.dimensions.aTotal?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.aTotal ?? 0) * 3.281
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
                      <p className="text-white text-base md:text-lg">
                        {unit === "metric"
                          ? `${
                              dim("aTransporte", "aTransporteMontada")?.toFixed(
                                2,
                              ) ?? ""
                            } m`
                          : `${(
                              dim("aTransporte", "aTransporteMontada") *
                              cmToFeet
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
                          ? `${
                              dim("lTotal", "lTotalMontada")?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              dim("lTotal", "lTotalMontada") * cmToFeet
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

                {/* Especificaciones adicionales */}
                <div className="w-full max-w-[1550px] flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start w-full md:mt-10 gap-0 md:gap-10">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Dimensiones del tambor
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>Longitud:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.tLongitud?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.tLongitud ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Diámetro:</span>
                              <p>
                                {unit === "metric"
                                  ? `${activeData?.dimensions.tDiametro?.toFixed(2) ?? ""} m`
                                  : `${(
                                      (activeData?.dimensions.tDiametro ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Chasis y estructura
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>
                                Longitud total (incluyendo quinta rueda):
                              </span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim("lTotal", "lTotalMontada")?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      dim("lTotal", "lTotalMontada") * cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Configuración del eje:</span>
                              <p>Un eje</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura de la quinta rueda:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.rAltura?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.rAltura ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Ancho total:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.aTotal?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.aTotal ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura para transporte:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim(
                                        "aTransporte",
                                        "aTransporteMontada",
                                      )?.toFixed(2) ?? ""
                                    } m`
                                  : `${(
                                      dim("aTransporte", "aTransporteMontada") *
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
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Rango de producción
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_1 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>3% humedad:</span>
                              <p>40 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>5% humedad:</span>
                              <p>30 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Incorporación de RAP:</span>
                              <p>30%</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Cumplimiento con normas industriales
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_2 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <li>NOM</li>
                            <li>DOT</li>
                            <li>SCT</li>
                            <li>SEMARNAT</li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                      <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Sistema de giro
                          </h3>
                          <button
                            className="block"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C4_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C4_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Accionado por dos motores de 10 HP.</li>
                          <li>
                            Sistema de accionamiento por roles de carga para
                            operación continua y confiable.
                          </li>
                          <li>
                            Aros y roles forjados, maquinados y tratados
                            térmicamente para mayor durabilidad.
                          </li>
                          <li>
                            Componentes maquinados con precisión para un
                            desempeño balanceado y resistente a la deformación.
                          </li>
                          <li>
                            Montaje sobre muelles para absorber variaciones de
                            carga y expansión térmica.
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Portabilidad
                          </h3>
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C5_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C5_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Diseñada para reubicación.</li>
                          {panelOption == "withoutPanels" ? (
                            <>
                              <li>
                                Tolvas triples montadas en un mismo chasis para
                                facilidad en transporte.
                              </li>

                              <li className="list-none">
                                <ul className="ml-2 lg:ml-6">
                                  <li
                                    className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                                  >
                                    Tolvas de 14 Tons de capacidad
                                  </li>
                                </ul>
                              </li>
                            </>
                          ) : (
                            ""
                          )}
                          <li>
                            La quinta rueda integrada elimina la necesidad de
                            cama baja (lowboy).
                          </li>
                          <li className="list-none">
                            <ul className="ml-2 lg:ml-6">
                              <li
                                className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                              >
                                También puede transportarse en lowboy o
                                plataforma (flatbed) si se prefiere.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Montada sobre chasis de transporte estándar con un
                            eje y rines de 16” para carretera.
                          </li>
                          <li>
                            Enganche tipo arrastre (pull-type) con acoplamiento
                            de seguridad y sistema de frenos.
                          </li>
                          <li>
                            La instalación no requiere grúa ni equipo de izaje.
                          </li>
                          <li>
                            Patas de soporte atornillables para montaje rápido
                            en sitio.
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

                {/* Caseta sección */}
              </div>
            )}
            {activeTab === 2 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col items-start justify-start gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          álabes
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
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
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Control y operación
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                        <li>
                          Controles en caseta de control para operación manual.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Componentes y sistema eléctrico
                        </h3>
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
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
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    {panelOption === "withPanels" ? (
                      <img
                        src={tolva3Blue.src}
                        alt="Dinámica con paneles"
                        className="w-[300px]"
                      />
                    ) : (
                      <img
                        src={tolva1Main.src}
                        alt="Dinámica sin paneles"
                        className="w-[300px]"
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-evenly h-full col-span-1 w-full gap-0 md:gap-10 order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          quemador
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <li>Quemador:</li>
                          </div>
                          <p>15 millones de BTU/hr</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>
                          <p>3,222</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Motor:</li>
                          </div>
                          <p>10 hp</p>
                        </div>
                        <li>
                          Alimentado con sistema de control de aire total.
                        </li>
                        <li>
                          Disponibilidad de uso de todo tipo de combustibles.
                        </li>
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
                              Combustibles alternos
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
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    <div className=" text-white w-full font-normal flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Casa de bolsas
                        </h3>
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
                        className={`transition-all w-full duration-500 md:mb-0 overflow-hidden list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>
                          <p>10,500</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Área de filtrado:</li>
                          </div>

                          <p>1,100 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Aislante de fibra de vidrio:</li>
                          </div>

                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Bolsas:</li>
                          </div>
                          <p>112</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Resistencia y seguridad
                        </h3>
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura reforzada para trabajo pesado a largo
                          plazo.
                        </li>
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
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex items-center justify-end self-end w-[38%] h-[60px]">
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
                              activeData?.dimensions.aTotal?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.aTotal ?? 0) * 3.281
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
                      <p className="text-white text-base md:text-lg">
                        {unit === "metric"
                          ? `${
                              dim("aTransporte", "aTransporteMontada")?.toFixed(
                                2,
                              ) ?? ""
                            } m`
                          : `${(
                              dim("aTransporte", "aTransporteMontada") *
                              cmToFeet
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
                          ? `${
                              dim("lTotal", "lTotalMontada")?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              dim("lTotal", "lTotalMontada") * cmToFeet
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
                {/* Especificaciones adicionales */}
                <div className="w-full max-w-[1550px] flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start w-full md:mt-10 gap-0 md:gap-10">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Dimensiones del tambor
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>Longitud:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.tLongitud?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.tLongitud ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Diámetro:</span>
                              <p>
                                {unit === "metric"
                                  ? `${activeData?.dimensions.tDiametro?.toFixed(2) ?? ""} mt`
                                  : `${(
                                      (activeData?.dimensions.tDiametro ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Chasis y estructura
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>
                                Longitud total (incluyendo quinta rueda):
                              </span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim("lTotal", "lTotalMontada")?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      dim("lTotal", "lTotalMontada") * cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Configuración del eje:</span>
                              <p>Un eje</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura de la quinta rueda:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.rAltura?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.rAltura ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Ancho total:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.aTotal?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.aTotal ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura para transporte:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim(
                                        "aTransporte",
                                        "aTransporteMontada",
                                      )?.toFixed(2) ?? ""
                                    } m`
                                  : `${(
                                      dim("aTransporte", "aTransporteMontada") *
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
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Rango de producción
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_1 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>3% humedad:</span>
                              <p>80 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>5% humedad:</span>
                              <p>60 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Incorporación de RAP:</span>
                              <p>30%</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Cumplimiento con normas industriales
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_2 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <li>NOM</li>
                            <li>DOT</li>
                            <li>SCT</li>
                            <li>SEMARNAT</li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                      <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Sistema de giro
                          </h3>
                          <button
                            className="block"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C4_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C4_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Accionado por dos motores de 15 HP.</li>
                          <li>
                            Sistema de accionamiento por roles de carga para
                            operación continua y confiable.
                          </li>
                          <li>
                            Aros y roles forjados, maquinados y tratados
                            térmicamente para mayor durabilidad.
                          </li>
                          <li>
                            Componentes maquinados con precisión para un
                            desempeño balanceado y resistente a la deformación.
                          </li>
                          <li>
                            Montaje sobre muelles para absorber variaciones de
                            carga y expansión térmica.
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Portabilidad
                          </h3>
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C5_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C5_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Diseñada para reubicación.</li>
                          {panelOption == "withoutPanels" ? (
                            <>
                              <li>
                                Tolvas triples montadas en un mismo chasis para
                                facilidad en transporte.
                              </li>

                              <li className="list-none">
                                <ul className="ml-2 lg:ml-6">
                                  <li
                                    className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                                  >
                                    Tolvas de 14 Tons de capacidad.
                                  </li>
                                </ul>
                              </li>
                            </>
                          ) : (
                            ""
                          )}
                          <li>
                            La quinta rueda integrada elimina la necesidad de
                            cama baja (lowboy).
                          </li>
                          <li className="list-none">
                            <ul className="ml-2 lg:ml-6">
                              <li
                                className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                              >
                                También puede transportarse en lowboy o
                                plataforma (flatbed) si se prefiere.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Montada sobre chasis de transporte estándar con un
                            eje y rines de 16” para carretera.
                          </li>
                          <li>
                            Enganche tipo arrastre (pull-type) con acoplamiento
                            de seguridad y sistema de frenos.
                          </li>
                          <li>
                            La instalación no requiere grúa ni equipo de izaje.
                          </li>
                          <li>
                            Patas de soporte atornillables para montaje rápido
                            en sitio.
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

                {/* Caseta sección */}
              </div>
            )}
            {activeTab === 3 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div
                    className="flex flex-col items-start justify-start gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-start gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                      <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1 w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            álabes
                          </h3>
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
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
                      <div className="flex flex-col items-start justify-start gap-4 text-white">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Control y operación
                          </h3>
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                            openSections.C1_2
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                        >
                          <li>
                            Operación automática o manual, según se requiera en
                            campo.
                          </li>
                          <li>
                            Controles independientes y de fácil manejo,
                            diseñados para confiabilidad en sitio.
                          </li>
                          <li>
                            Controles en caseta de control para operación
                            manual.
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Componentes y sistema eléctrico
                          </h3>
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
                        <ul
                          className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                            openSections.C3_1
                              ? "max-h-96 opacity-1 mb-4"
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
                            Conexiones eléctricas protegidas contra la
                            intemperie.
                          </li>
                          <li>Sistema de transmisión con poleas y bujes.</li>
                          <li>
                            Líneas de combustible externas, sensores y cableado
                            de señales preinstalados.
                          </li>
                          <li>
                            Elevador de mezcla asfáltica, de arrastre integrado
                            con sistema abisagrado.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    {panelOption === "withoutPanels" ? (
                      <img
                        src={tolva1Main.src}
                        alt="Dinámica sin paneles"
                        className="w-[300px]"
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div
                    className="flex flex-col items-start justify-between h-full gap-0 md:gap-10 col-span-1 w-full order-3 md:order-3"
                    id="column2"
                    ref={columnGrid2}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          quemador
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <li>Quemador:</li>
                          </div>

                          <p>23 millones de BTU/hr</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>
                          <p>4,833</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Motor:</li>
                          </div>
                          <p>15 hp</p>
                        </div>
                        <li>
                          Alimentado con sistema de control de aire total.
                        </li>
                        <li>
                          Disponibilidad de uso de todo tipo de combustibles
                        </li>
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
                              Combustibles alternos
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
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    <div className=" text-white w-full font-normal flex flex-col items-start justify-start gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Casa de bolsas
                        </h3>
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
                        className={`transition-all w-full duration-500 md:mb-0 overflow-hidden list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>
                          <p>14,000</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Área de filtrado:</li>
                          </div>

                          <p>1,692 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Aislante de fibra de vidrio:</li>
                          </div>

                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Bolsas:</li>
                          </div>
                          <p>154</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Resistencia y seguridad
                        </h3>
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura reforzada para trabajo pesado a largo
                          plazo.
                        </li>
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
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex items-center justify-end self-end w-[38%] h-[60px]">
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
                              activeData?.dimensions.aTotal?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.aTotal ?? 0) * 3.281
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
                      <p className="text-white text-base md:text-lg">
                        {unit === "metric"
                          ? `${
                              dim("aTransporte", "aTransporteMontada")?.toFixed(
                                2,
                              ) ?? ""
                            } m`
                          : `${(
                              dim("aTransporte", "aTransporteMontada") *
                              cmToFeet
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
                          ? `${
                              dim("lTotal", "lTotalMontada")?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              dim("lTotal", "lTotalMontada") * cmToFeet
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

                {/* Especificaciones adicionales */}
                <div className="w-full max-w-[1550px] flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start w-full md:mt-10 gap-0 md:gap-10">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Dimensiones del tambor
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>Longitud:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.tLongitud?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.tLongitud ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Diámetro:</span>
                              <p>
                                {unit === "metric"
                                  ? `${activeData?.dimensions.tDiametro?.toFixed(2) ?? ""} m`
                                  : `${(
                                      (activeData?.dimensions.tDiametro ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Chasis y estructura
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>
                                Longitud total (incluyendo quinta rueda):
                              </span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim("lTotal", "lTotalMontada")?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      dim("lTotal", "lTotalMontada") * cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Configuración del eje:</span>
                              <p>Dos ejes</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura de la quinta rueda:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.rAltura?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.rAltura ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Ancho total:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.aTotal?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.aTotal ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura para transporte:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim(
                                        "aTransporte",
                                        "aTransporteMontada",
                                      )?.toFixed(2) ?? ""
                                    } m`
                                  : `${(
                                      dim("aTransporte", "aTransporteMontada") *
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
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Rango de producción
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_1 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>3% humedad:</span>
                              <p>120 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>5% humedad:</span>
                              <p>90 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Incorporación de RAP:</span>
                              <p>30%</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Cumplimiento con normas industriales
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_2 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <li>NOM</li>
                            <li>DOT</li>
                            <li>SCT</li>
                            <li>SEMARNAT</li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                      <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Sistema de giro
                          </h3>
                          <button
                            className="block"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C4_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C4_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Accionado por dos motores de 20 HP.</li>
                          <li>
                            Sistema de accionamiento por roles de carga para
                            operación continua y confiable.
                          </li>
                          <li>
                            Aros y roles forjados, maquinados y tratados
                            térmicamente para mayor durabilidad.
                          </li>
                          <li>
                            Componentes maquinados con precisión para un
                            desempeño balanceado y resistente a la deformación.
                          </li>
                          <li>
                            Montaje sobre muelles para absorber variaciones de
                            carga y expansión térmica.
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Portabilidad
                          </h3>
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C5_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C5_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Diseñada para reubicación.</li>
                          {panelOption == "withoutPanels" ? (
                            <>
                              <li>
                                Tolvas triples montadas en un mismo chasis para
                                facilidad en transporte.
                              </li>

                              <li className="list-none">
                                <ul className="ml-2 lg:ml-6">
                                  <li
                                    className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                                  >
                                    Tolvas de 14 Tons de capacidad.
                                  </li>
                                </ul>
                              </li>
                            </>
                          ) : (
                            ""
                          )}
                          <li>
                            La quinta rueda integrada elimina la necesidad de
                            cama baja (lowboy).
                          </li>
                          <li className="list-none">
                            <ul className="ml-2 lg:ml-6">
                              <li
                                className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                              >
                                También puede transportarse en lowboy o
                                plataforma (flatbed) si se prefiere.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Montada sobre chasis de transporte estándar con dos
                            ejes y rines de 16” para carretera.
                          </li>
                          <li>
                            Enganche tipo arrastre (pull-type) con acoplamiento
                            de seguridad y sistema de frenos.
                          </li>
                          <li>
                            La instalación no requiere grúa ni equipo de izaje.
                          </li>
                          <li>
                            Patas de soporte atornillables para montaje rápido
                            en sitio.
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
              </div>
            )}
            {activeTab === 4 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center">
                  <div className="flex flex-col items-start justify-start gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          álabes
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
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
                    <div className="flex flex-col items-start justify-start gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Control y operación
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C1_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Operación automática o manual, según se requiera en
                          campo.
                        </li>
                        <li>
                          Controles independientes y de fácil manejo, diseñados
                          para confiabilidad en sitio.
                        </li>
                        <li>
                          Controles en caseta de control para operación manual.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Componentes y sistema eléctrico
                        </h3>
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C3_1
                            ? "max-h-96 opacity-1 mb-4"
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
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    {panelOption === "withPanels" ? (
                      <img
                        src={tolva3Blue.src}
                        alt="Dinámica con paneles"
                        className="w-[300px]"
                      />
                    ) : (
                      <img
                        src={tolva1Main.src}
                        alt="Dinámica sin paneles"
                        className="w-[300px]"
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-evenly h-full col-span-1 w-full gap-0 md:gap-10 order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          quemador
                        </h3>
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C2_1
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <li>Quemador:</li>
                          </div>

                          <p>30 millones de BTU/hr</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>
                          <p>6,444</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Motor:</li>
                          </div>
                          <p>20 hp</p>
                        </div>
                        <li>Alimentado con sistema de control de aire total</li>
                        <li>
                          Disponibilidad de uso de todo tipo de combustibles
                        </li>
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
                              Combustibles alternos
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
                        <li>Precalentador de combustible.</li>
                      </ul>
                    </div>
                    <div className=" text-white w-full font-normal flex flex-col gap-4">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Casa de bolsas
                        </h3>
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
                        className={`transition-all w-full duration-500 md:mb-0 overflow-hidden list-inside ${
                          openSections.C2_2
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <li>ACFM:</li>
                          </div>
                          <p>19,250</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Área de filtrado:</li>
                          </div>

                          <p>2,463 ft2</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Aislante de fibra de vidrio:</li>
                          </div>

                          <p>2"</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <li>Bolsas:</li>
                          </div>
                          <p>224</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                          Resistencia y seguridad
                        </h3>
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
                      <ul
                        className={`transition-all duration-500 md:mb-0 overflow-hidden ml-6 list-disc list-inside ${
                          openSections.C3_3
                            ? "max-h-96 opacity-1 mb-4"
                            : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura reforzada para trabajo pesado a largo
                          plazo.
                        </li>
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
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-start md:justify-center items-end my-10 overflow-x-auto">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex items-center justify-end self-end w-[38%] h-[60px]">
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
                              activeData?.dimensions.aTotal?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              (activeData?.dimensions.aTotal ?? 0) * 3.281
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
                      <p className="text-white text-base md:text-lg">
                        {unit === "metric"
                          ? `${
                              dim("aTransporte", "aTransporteMontada")?.toFixed(
                                2,
                              ) ?? ""
                            } m`
                          : `${(
                              dim("aTransporte", "aTransporteMontada") *
                              cmToFeet
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
                          ? `${
                              dim("lTotal", "lTotalMontada")?.toFixed(2) ?? ""
                            } m`
                          : `${(
                              dim("lTotal", "lTotalMontada") * cmToFeet
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
                {/* Especificaciones adicionales */}
                <div className="w-full max-w-[1550px] flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start w-full md:mt-10 gap-0 md:gap-10">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start w-full md:gap-10 h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-10">
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Dimensiones del tambor
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>Longitud:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.tLongitud?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.tLongitud ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Diámetro:</span>
                              <p>
                                {unit === "metric"
                                  ? `${activeData?.dimensions.tDiametro?.toFixed(2) ?? ""} m`
                                  : `${(
                                      (activeData?.dimensions.tDiametro ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Chasis y estructura
                            </h3>
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
                          <div
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C4_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>
                                Longitud total (incluyendo quinta rueda):
                              </span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim("lTotal", "lTotalMontada")?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      dim("lTotal", "lTotalMontada") * cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Configuración del eje:</span>
                              <p>Tres ejes</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura de la quinta rueda:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.rAltura?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.rAltura ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Ancho total:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      activeData?.dimensions.aTotal?.toFixed(
                                        2,
                                      ) ?? ""
                                    } m`
                                  : `${(
                                      (activeData?.dimensions.aTotal ?? 0) *
                                      cmToFeet
                                    ).toFixed(1)} ft`}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <span>Altura para transporte:</span>
                              <p>
                                {unit === "metric"
                                  ? `${
                                      dim(
                                        "aTransporte",
                                        "aTransporteMontada",
                                      )?.toFixed(2) ?? ""
                                    } m`
                                  : `${(
                                      dim("aTransporte", "aTransporteMontada") *
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
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Rango de producción
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_1 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_1
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <div className="flex justify-between">
                              <span>3% humedad:</span>
                              <p>160 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>5% humedad:</span>
                              <p>120 Tph</p>
                            </div>
                            <div className="flex justify-between">
                              <span>Incorporación de RAP:</span>
                              <p>30%</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-white font-normal flex flex-col gap-4">
                          <div className="w-full flex justify-between border-b border-b-white">
                            <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                              Cumplimiento con normas industriales
                            </h3>
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
                                className={`transition-transform duration-300 transform ${
                                  openSections.C5_2 ? "rotate-180" : ""
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
                            className={`transition-all duration-500 md:mb-0 overflow-hidden list-inside ${
                              openSections.C5_2
                                ? "max-h-96 opacity-1 mb-4"
                                : "max-h-0 opacity-0"
                            } md:max-h-full md:opacity-100 md:block`}
                          >
                            <li>NOM</li>
                            <li>DOT</li>
                            <li>SCT</li>
                            <li>SEMARNAT</li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 w-full h-full flex flex-col gap-0 md:gap-10">
                      <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Sistema de giro
                          </h3>
                          <button
                            className="block"
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C4_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C4_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Accionado por dos motores de 30 HP.</li>
                          <li>
                            Sistema de accionamiento por roles de carga para
                            operación continua y confiable.
                          </li>
                          <li>
                            Aros y roles forjados, maquinados y tratados
                            térmicamente para mayor durabilidad.
                          </li>
                          <li>
                            Componentes maquinados con precisión para un
                            desempeño balanceado y resistente a la deformación.
                          </li>
                          <li>
                            Montaje sobre muelles para absorber variaciones de
                            carga y expansión térmica.
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                        <div className="w-full flex justify-between border-b border-b-white">
                          <h3 className="font-bold lg:text-xl text-lg w-full pb-3 uppercase">
                            Portabilidad
                          </h3>
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
                              className={`transition-transform duration-300 transform ${
                                openSections.C5_3 ? "rotate-180" : ""
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
                          className={`transition-all duration-500 md:mb-0 overflow-hidden list-disc list-inside ${
                            openSections.C5_3
                              ? "max-h-96 opacity-1 mb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <li>Diseñada para reubicación.</li>
                          {panelOption == "withoutPanels" ? (
                            <>
                              <li>
                                Tolvas triples montadas en un mismo chasis para
                                facilidad en transporte.
                              </li>

                              <li className="list-none">
                                <ul className="ml-2 lg:ml-6">
                                  <li
                                    className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                                  >
                                    Tolvas de 14 Tons de capacidad.
                                  </li>
                                </ul>
                              </li>
                            </>
                          ) : (
                            ""
                          )}
                          <li>
                            La quinta rueda integrada elimina la necesidad de
                            cama baja (lowboy).
                          </li>
                          <li className="list-none">
                            <ul className="ml-2 lg:ml-6">
                              <li
                                className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white
                            before:bg-transparent"
                              >
                                También puede transportarse en lowboy o
                                plataforma (flatbed) si se prefiere.
                              </li>
                            </ul>
                          </li>

                          <li>
                            Montada sobre chasis de transporte estándar con tres
                            ejes y rines de 16” para carretera.
                          </li>
                          <li>
                            Enganche tipo arrastre (pull-type) con acoplamiento
                            de seguridad y sistema de frenos.
                          </li>
                          <li>
                            La instalación no requiere grúa ni equipo de izaje.
                          </li>
                          <li>
                            Patas de soporte atornillables para montaje rápido
                            en sitio.
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinPlanosSection;
