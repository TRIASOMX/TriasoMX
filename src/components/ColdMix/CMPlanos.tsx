import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import M1 from "../../assets/images/ColdMix/Planos/M2.webp";
import M2 from "../../assets/images/ColdMix/Planos/M3.webp";
import FW from "../../assets/images/ColdMix/Planos/FW.webp";
import FL from "../../assets/images/ColdMix/Planos/PlaMFMspVT.webp"
import A2GLA from "../../assets/images/ColdMix/Planos/2GLA.webp";
import A2GLW from "../../assets/images/ColdMix/Planos/2GLW.webp";
import A2GWA from "../../assets/images/ColdMix/Planos/2GWA.webp";
import A2GWW from "../../assets/images/ColdMix/Planos/2GWW.webp";
import A2TLA from "../../assets/images/ColdMix/Planos/2TLA.webp";
import A2TWA from "../../assets/images/ColdMix/Planos/2TWA.webp";
import A2TWW from "../../assets/images/ColdMix/Planos/2TWW.webp";
import A3GLA from "../../assets/images/ColdMix/Planos/3GLA.webp";
import A3GLW from "../../assets/images/ColdMix/Planos/3GLW.webp";
import A3GWA from "../../assets/images/ColdMix/Planos/3GWA.webp";
import A3GWW from "../../assets/images/ColdMix/Planos/3GWW.webp";
import A3TLA from "../../assets/images/ColdMix/Planos/3TLA.webp";
import A3TLW from "../../assets/images/ColdMix/Planos/3TLW.webp";
import A3TWA from "../../assets/images/ColdMix/Planos/3TWA.webp";
import A3TWW from "../../assets/images/ColdMix/Planos/3TWW.webp";
import tolva3Main from "../../assets/images/ColdMix/Planos/CMain.webp";
import { useClipPathScrollTrigger } from "../lib/useClipPathScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const toggleConfig = [
  {
    id: "2-withPanels-groundLevel-legs",
    dimensions: {
      width: 268.22,
      height: 381.0,
      length: 1463.0,
      config: "On-Legs",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120.0,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "2-withPanels-groundLevel-wheels",
    dimensions: {
      width: 268.22,
      height: 381.0,
      length: 1463.0,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120.0,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "2-withPanels-truckLevel-legs",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 1894.58,
      config: "On-Legs",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365.0,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "2-withPanels-truckLevel-wheels",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 1894.58,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365.0,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "2-withoutPanels-groundLevel-legs",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 1280,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "2-withoutPanels-groundLevel-wheels",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 1463,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "2-withoutPanels-truckLevel-legs",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 1887.27,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "2-withoutPanels-truckLevel-wheels",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 1887.27,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withPanels-groundLevel-legs",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 1826,
      config: "On-Legs",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withPanels-groundLevel-wheels",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 1826,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withoutPanels-groundLevel-legs",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 1591,
      config: "On-Legs",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withoutPanels-groundLevel-wheels",
    dimensions: {
      width: 268.22,
      height: 381,
      length: 1826,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 120,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withPanels-truckLevel-legs",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 2359,
      config: "On-Legs",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withPanels-truckLevel-wheels",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 2359,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withoutPanels-truckLevel-legs",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 2297,
      config: "On-Legs",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365,
      feeding: 45.72,
      collector: 60.96,
    },
  },
  {
    id: "3-withoutPanels-truckLevel-wheels",
    dimensions: {
      width: 284.5,
      height: 458,
      length: 2297,
      config: "One Axle",
      wheel: 140.0,
      totalHeight: 458.0,
      dischargeHeight: 365,
      feeding: 45.72,
      collector: 60.96,
    },
  },
];

const CMPlanos = () => {
  //logica de cambio de imagenes
  const [activeVersion, setActiveVersion] = useState("withPanels");
  const [dischargeVersion, setDischargeVersion] = useState("groundLevel");
  const [mountedVersion, setMountedVersion] = useState("legs");
  //tabs states
  const [activeTab, setActiveTab] = useState(3);
  // valor de cm a pies
  const cmToFeet = 0.0328084;
  //combinaciones de las imagenes
  const imageMap = {
    "2-withPanels-groundLevel-legs": A2GLA,
    "2-withPanels-groundLevel-wheels": A2GWA,
    "2-withPanels-truckLevel-legs": A2TLA,
    "2-withPanels-truckLevel-wheels": A2TWA,
    "2-withoutPanels-groundLevel-legs": A2GLW,
    "2-withoutPanels-groundLevel-wheels": A2GWW,
    "2-withoutPanels-truckLevel-legs": A2TLA,
    "2-withoutPanels-truckLevel-wheels": A2TWW,
    "3-withPanels-groundLevel-legs": A3GLA,
    "3-withPanels-groundLevel-wheels": A3GWA,
    "3-withoutPanels-groundLevel-legs": A3GLW,
    "3-withoutPanels-groundLevel-wheels": A3GWW,
    "3-withPanels-truckLevel-legs": A3TLA,
    "3-withPanels-truckLevel-wheels": A3TWA,
    "3-withoutPanels-truckLevel-legs": A3TLW,
    "3-withoutPanels-truckLevel-wheels": A3TWW,
  };
  const key = `${activeTab}-${activeVersion}-${dischargeVersion}-${mountedVersion}`;
  const selectedImage = imageMap[key as keyof typeof imageMap];
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

  const activeData = toggleConfig.find((item) => item.id === key);
  //SWITCH LOGIC
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  // Función para alternar unidades
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
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

  const binUnitOptions = [
    { id: 2, label: "2 UNIDADES" },
    { id: 3, label: "3 UNIDADES" },
  ];

  const dischargeOptions = [
    { id: "groundLevel", label: "A nivel del suelo" },
    { id: "truckLevel", label: "A nivel del camión" },
  ];

  const mountedOptions = [
    { id: "legs", label: "Patas" },
    { id: "wheels", label: "Ruedas" },
  ];

  const exteriorOptions = [
    { id: "withPanels", label: "Con flancos estéticos" },
    { id: "withoutPanels", label: "Sin flancos estéticos" },
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
      <div className="h-[150vh] lg:h-[90vh] relative flex items-center justify-center bg-bgMain w-full">
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
             z-20 w-[90px] min-h-[740px]"
        >
          <img
            src={M2.src}
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
        <header id="planosCold" className="mt-10 text-white" ref={otroElemento}>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">
            Especificaciones:
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
            {/* MOBILE */}
            <div className="md:hidden flex flex-col gap-6 px-4 w-full max-w-7xl mx-auto">

              {/* BIN UNITS */}
              <div className="flex justify-between items-center">
                <label className="text-white">UNIDAD DE TOLVAS</label>
                <div className="relative">
                  <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(Number(e.target.value))}
                    className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
                 appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {binUnitOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
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

              {/* DISCHARGE */}
              <div className="flex justify-between items-center">
                <label className="text-white">DESCARGA:</label>
                <div className="relative">
                  <select
                    value={dischargeVersion}
                    onChange={(e) => setDischargeVersion(e.target.value as any)}
                    className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
                 appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {dischargeOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
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

              {/* MOUNTED ON */}
              <div className="flex justify-between items-center">
                <label className="text-white">MONTADO SOBRE:</label>
                <div className="relative">
                  <select
                    value={mountedVersion}
                    onChange={(e) => setMountedVersion(e.target.value as any)}
                    className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
                 appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {mountedOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
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

              {/* EXTERIOR */}
              <div className="flex justify-between items-center">
                <label className="text-white">FLANCOS:</label>
                <div className="relative">
                  <select
                    value={activeVersion}
                    onChange={(e) => setActiveVersion(e.target.value as any)}
                    className="w-full px-5 py-3 pr-12 rounded-full bg-white text-gray-900 text-sm font-medium
                 appearance-none focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {exteriorOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
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
            </div>
            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 w-full">

              {/* BIN UNITS */}
              <div>
                <h1 className="text-white text-center mb-10">UNIDAD DE TOLVAS</h1>
                <div className="grid grid-cols-2 gap-3 justify-items-center">
                  {binUnitOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setActiveTab(opt.id)}
                      className={`px-4 py-2 text-sm font-medium border rounded-full max-w-[100px]
            ${activeTab === opt.id
                          ? "text-gray-900 bg-white border-white"
                          : "text-white bg-transparent border-white"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* DISCHARGE */}
              <div>
                <h1 className="text-white text-center mb-10">DESCARGA</h1>
                <div className="flex flex-col gap-3 items-center">
                  {dischargeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDischargeVersion(opt.id)}
                      className={`px-4 py-2 text-sm font-medium border rounded-full w-2/3
            ${dischargeVersion === opt.id
                          ? "text-gray-900 bg-white border-white"
                          : "text-white bg-transparent border-white"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* MOUNTED ON */}
              <div>
                <h1 className="text-white text-center mb-10">MONTADO SOBRE</h1>
                <div className="grid grid-cols-2 gap-3 justify-items-center">
                  {mountedOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setMountedVersion(opt.id)}
                      className={`px-4 py-2 text-sm font-medium border rounded-full max-w-[100px]
            ${mountedVersion === opt.id
                          ? "text-gray-900 bg-white border-white"
                          : "text-white bg-transparent border-white"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* EXTERIOR */}
              <div className="flex flex-col items-center">
                <h1 className="text-white text-center mb-5">FLANCOS</h1>
                <div className="flex flex-col gap-6 w-3/4">
                  {exteriorOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setActiveVersion(opt.id)}
                      className={`px-4 py-2 text-sm font-medium border rounded-full
            ${activeVersion === opt.id
                          ? "text-black bg-white border-white"
                          : "text-white bg-transparent border-white"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Contenido de los tabs */}
          <div
            className="w-full mt-20 mb-10"
            id="tabsSection"
            ref={nextSectionRef}
          >
            {activeTab === 2 && (
              <div
                className="flex flex-col items-center justify-center"
                ref={containerRef}
              >
                <div className="flex flex-col md:grid md:grid-cols-4 justify-center items-center w-full">
                  <div className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1">
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3 ">
                          Sistema de alimentación y dosificacióN                        </h1>
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
                        <li>Sensor de flujo para material fino con alarma de nivel bajo</li>
                        <li>
                          Transportador de alimentación de 24" con banda ancha para un traslado más estable a baja velocidad
                        </li>
                        <li>
                          Poleas de cabeza recubiertas de hule y rodillos estándar CEMA
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Resistencia y seguridad
                        </h1>
                        <button
                          aria-label="See more about durability and safety"
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
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo plazo.
                        </li>
                        {activeVersion === "withPanels" ? (
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
                        <li>Limpiadores de banda para prolongar su vida útil.</li>
                        <li>Carcasa resistente al polvo que protege el módulo de control.</li>
                        <li>Solapas laterales integradas para mantener el material dentro de la banda.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Sistema de mezcla del pugmill
                        </h1>
                        <button
                          aria-label="See more about the Pugmill Mixing System"
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
                        <li>Mezclador horizontal de doble eje</li>
                        <li>Revestimientos de acero de alta resistencia</li>
                        <li>Paletas intercambiables</li>
                        <li>Tiempo de mezclado ajustable</li>
                        <li>Compuerta de descarga directo a montones o camiones</li>
                        <li>Motor eléctrico de 10–125 HP</li>
                        <li>Transmisión con reductor de velocidad</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full h-full order-1 md:order-2">
                    <img src={M1.src} alt="" className="w-[115px] h-auto" />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full col-span-1 w-full order-3 md:order-3">
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Control y operacióN
                        </h1>
                        <button
                          aria-label="See more about control and operation of the system"
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
                          Componentes y sistema eléctrico
                        </h1>
                        <button
                          aria-label="See more about the components and electrical composition"
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
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Portabilidad
                        </h1>
                        <button
                          aria-label="See more about the portability of the system"
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc ${openSections.C2_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="ml-6">Diseñado para reubicación y movimiento frecuente.</li>

                        {mountedVersion !== "legs" ? (
                          <li>
                            <ul className="list-disc ml-6">
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
                              <li>
                                La instalación no requiere grúa ni equipo de izaje.

                              </li>
                              <li>
                                Patas de soporte atornilladas, para un armado rápido en sitio.

                              </li>
                              <li>
                                Sistema de luces y señalamientos para transporte conforme a normas de carretera.
                              </li>
                            </ul>
                          </li>
                        ) : (
                          <li>
                            <ul className="list-disc ml-6">
                              <li>
                                Montado sobre un chasis estándar sostenido por patas</li>
                              <li>
                                Patas de soporte atornilladas, para un armado rápido en sitio.

                              </li>
                              <li>Montaje rápido sin cimientos</li>
                            </ul>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Inyección de emulsión y aditivos
                      </h1>
                      <button
                        aria-label="See more about Emulsion and Additives Injection"
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
                      <li>Bomba de asfalto/emulsión con variador de frecuencia</li>
                      <li>Caudalímetro para dosificación precisa</li>
                      <li>Tanque opcional de agua/aditivos con bomba</li>
                      <li>Sistema integrado de tubería y filtración</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-10 lg:px-36">
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
                      className={`list-disc text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
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
                          ? `${((activeData?.dimensions.width ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.width ?? 0) * cmToFeet).toFixed(1)} ft`}

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
                    <div className="h-[250px] min-w-[180px] flex items-center justify-center">
                      {mountedVersion === "wheels" ? (
                        <img
                          src={FW.src}
                          alt="Mounted on wheels"
                          className="h-[250px] w-auto"
                        />
                      ) : (
                        <img
                          src={FL.src}
                          alt="Mounted on legs"
                          className="h-[250px] w-auto"
                        />
                      )}
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
                          ? `${((activeData?.dimensions.height ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.height ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                          ? `${((activeData?.dimensions.length ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[250px] min-w-[800px] flex justify-center items-center">
                      <img
                        src={selectedImage.src}
                        alt="Dinámica con paneles"
                        className="h-[250px] min-w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Dimensiones
                      </h1>
                      <button
                        aria-label="See more about the Tank Dimensions"
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
                      className={`transition-all duration-500 md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 overflow-hidden list-inside ${openSections.C4_1
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud:</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.length ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
                  
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.width ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.width ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura:</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.height ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.height ?? 0) * cmToFeet).toFixed(1)} ft`}
                         
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Estructura y chasis
                      </h1>
                      <button
                        aria-label="See more about the Chassis and structure"
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
                      className={`transition-all duration-500 md:mb-0 text-sm lg:text-base ml-2 lg:ml-6 overflow-hidden list-inside ${openSections.C4_2
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 md:block`}
                    >
                      <div className="flex justify-between">
                        <h1>Longitud total (incluido el enganche):</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.length ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Configuración de los ejes: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.config ?? ""} `
                            : `${activeData?.dimensions.config ?? 0} `}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura del enganche de quinta rueda:</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.wheel ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.wheel ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura total:</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.totalHeight ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.totalHeight ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura de descarga (desde el suelo):</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.dischargeHeight ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.dischargeHeight ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Sistema de alimentación y descarga
                      </h1>
                      <button
                        aria-label="See more about the feeding and discharge system"
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
                      className={`w-full justify-center text-sm lg:text-base ml-2 lg:ml-6 items-center transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <div className="flex justify-between">
                        <h1>Ancho de la cinta de alimentación:</h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.feeding ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.feeding ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho de la cinta colectora: </h1>
                        <p>
                           {unit === "metric"
                          ? `${((activeData?.dimensions.collector ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.collector ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                    className="flex flex-col items-start justify-start mt-10 md:mt-0 gap-0 md:gap-10 h-full w-full order-2 md:order-1"
                    id="column1"
                    ref={columnGrid1}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 text-white col-span-1 w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Sistema de alimentación y dosificación</h1>
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
                        <li>Sensor de flujo para material fino con alarma de nivel bajo</li>
                        <li>
                          Transportador de alimentación de 24" con banda ancha para un traslado más estable a baja velocidad
                        </li>
                        <li>
                          Poleas de cabeza recubiertas de hule y rodillos estándar CEMA
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Resistencia y seguridad
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_2
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>
                          Estructura extra reforzada para trabajo pesado a largo plazo.
                        </li>
                        {activeVersion === "withPanels" ? (
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
                        <li>Limpiadores de banda para prolongar su vida útil.</li>
                        <li>Carcasa resistente al polvo que protege el módulo de control.</li>
                        <li>Solapas laterales integradas para mantener el material dentro de la banda.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Sistema de mezcla del pugmill
                        </h1>
                        <button
                          aria-label="See more about the Pugmill Mixing System"
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
                            className={`transition-transform duration-300 transform ${openSections.C1_3 ? "rotate-180" : ""
                              }`}
                          >
                            <path
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc list-inside ${openSections.C1_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li>Mezclador horizontal de doble eje</li>
                        <li>Revestimientos de acero de alta resistencia</li>
                        <li>Paletas intercambiables</li>
                        <li>Tiempo de mezclado ajustable</li>
                        <li>Compuerta de descarga directo a montones o camiones</li>
                        <li>Motor eléctrico de 10–125 HP</li>
                        <li>Transmisión con reductor de velocidad</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-start justify-center w-full min-h-[900px] order-1 md:order-2"></div>
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
                          aria-label="See more about the Control and Operation of the system"
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
                          Componentes y sistema eléctrico
                        </h1>
                        <button
                          aria-label="See more about the components and electrical composition of the system"
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
                    <div className="flex flex-col items-start justify-center gap-4 text-white w-full">
                      <div className="w-full flex justify-between border-b border-b-white">
                        <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                          Portabilidad
                        </h1>
                        <button
                          aria-label="See more about the portability of the system"
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
                        className={`transition-all duration-500 md:mb-0 overflow-hidden text-sm lg:text-base ml-2 lg:ml-6 list-disc ${openSections.C2_3
                          ? "max-h-96 opacity-1 mb-4"
                          : "max-h-0 opacity-0"
                          } md:max-h-full md:opacity-100 md:block`}
                      >
                        <li className="ml-6">Diseñado para reubicación y movimiento frecuente.</li>

                        {mountedVersion !== "legs" ? (
                          <li>
                            <ul className="list-disc ml-6">
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
                              <li>
                                La instalación no requiere grúa ni equipo de izaje.
                              </li>
                              <li>
                                Patas de soporte atornilladas, para un armado rápido en sitio.
                              </li>
                              <li>
                                Sistema de luces y señalamientos para transporte conforme a normas de carretera.
                              </li>
                            </ul>
                          </li>
                        ) : (
                          <li>
                            <ul className="list-disc ml-6">
                              <li>
                                Montado sobre un chasis estándar apoyado en patas
                              </li>
                              <li>
                                Patas de soporte atornilladas, para un armado rápido en sitio.

                              </li>
                              <li>Montaje rápido sin necesidad de cimientos</li>
                            </ul>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-stretch items-start mt-0 md:mt-10">
                  <div className="flex flex-col items-start justify-start gap-4 text-white col-span-1">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-base w-full pb-3">
                        Inyección de emulsión y aditivos
                      </h1>
                      <button
                        aria-label="See more about the Emulsion and Additives injection"
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
                      <li>Bomba de asfalto/emulsión con variador de frecuencia</li>
                      <li>Caudalímetro para dosificación precisa</li>
                      <li>Tanque opcional de agua/aditivos con bomba</li>
                      <li>Sistema integrado de tubería y filtración</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start gap-4 text-white col-span-2 px-0 md:px-10 lg:px-36">
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
                      className={`list-disc text-sm lg:text-base ml-2 lg:ml-6 transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C3_2
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
                          ? `${((activeData?.dimensions.width ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.width ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[220px] min-w-[140px] flex items-center justify-center">
                      {mountedVersion === "legs" ? (
                        <img
                          src={FL.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <img
                          src={FW.src}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end w-[90px] h-[220px]">
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
                          ? `${((activeData?.dimensions.height ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.height ?? 0) * cmToFeet).toFixed(1)} ft`}

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
                          ? `${((activeData?.dimensions.length ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
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
                    <div className="h-[220px] min-w-[800px] flex justify-center items-center">
                      <img
                        src={selectedImage.src}
                        alt="Dinámica con paneles"
                        className="h-[220px] w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start w-full md:mt-10 md:gap-10">
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        Dimensiones
                      </h1>
                      <button
                        aria-label="See more about the dimensions of the system"
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
                        <h1>Longitud:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.length ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.width ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.width ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.height ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.height ?? 0) * cmToFeet).toFixed(1)} ft`}
                          
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        Chasis y estructura
                      </h1>
                      <button
                        aria-label="See more about the chassis and structure of the system"
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
                        <h1>Longitud total (incluido el enganche):</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.length ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.length ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Configuración de los ejes: </h1>
                        <p>
                          {unit === "metric"
                            ? `${activeData?.dimensions.config ?? ""} `
                            : `${activeData?.dimensions.config ?? 0}`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura del enganche de quinta rueda:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.wheel ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.wheel ?? 0) * cmToFeet).toFixed(1)} ft`}
  
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura total:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.totalHeight ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.totalHeight ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Altura de descarga:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.dischargeHeight ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.dischargeHeight ?? 0) * cmToFeet).toFixed(1)} ft`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white font-normal col-span-1 flex flex-col gap-4">
                    <div className="w-full flex justify-between border-b border-b-white">
                      <h1 className="font-bold lg:text-xl text-lg w-full pb-3">
                        FEEDING & DISCHARGE SYSTEM
                      </h1>
                      <button
                        aria-label="See more about the feeding and discharge of the system"
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
                      className={`flex flex-col w-full justify-around items-start transition-all duration-500 md:mb-0 overflow-hidden list-inside ${openSections.C4_3
                        ? "max-h-96 opacity-1 mb-4"
                        : "max-h-0 opacity-0"
                        } md:max-h-full md:opacity-100 `}
                    >
                      <div className="flex justify-between">
                        <h1>Sistema de alimentación y descarga:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.feeding ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.feeding ?? 0) * cmToFeet).toFixed(1)} ft`}

                        </p>
                      </div>
                      <div className="flex justify-between">
                        <h1>Ancho de la cinta de alimentación:</h1>
                        <p>
                          {unit === "metric"
                          ? `${((activeData?.dimensions.collector ?? 0) / 100).toFixed(2)} mt`
                          : `${((activeData?.dimensions.collector ?? 0) * cmToFeet).toFixed(1)} ft`}
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

export default CMPlanos;
