import { useState, useEffect } from "react";
import {
  Truck,
  CalendarClock,
  Clock,
  PackageCheck,
  Workflow,
} from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

//Contraflujo
import p1 from "../../assets/images/DrumMixers/Contraflujo/CDesamac.webp";
import p2 from "../../assets/images/DrumMixers/Contraflujo/Cplus.webp";
import p3 from "../../assets/images/DrumMixers/Contraflujo/Cpro.webp";

//Flujo paralelo
import p4 from "../../assets/images/DrumMixers/FlujoParalelo/Desamaq/FDesamac.webp";
import p5 from "../../assets/images/DrumMixers/FlujoParalelo/Plus/FPlus.webp";
import p6 from "../../assets/images/DrumMixers/FlujoParalelo/Pro/FPpro.webp";

//Opciones
import hero1 from "../../assets/images/DrumMixers/Gallery/DM1.webp";
import hero2 from "../../assets/images/AsphaltPlant/FP.webp";

//Modales
import drumMixerImg from "../../assets/images/AsphaltPlant/ImgModales/drum-mixer.webp";
import burnersImg from "../../assets/images/AsphaltPlant/ImgModales/Burners.webp";
import fuelPreImg from "../../assets/images/AsphaltPlant/ImgModales/FPH2.webp";
import triasoImg from "../../assets/images/AsphaltPlant/ImgModales/TriasoOS6.webp";
import bagHouseImg from "../../assets/images/AsphaltPlant/ImgModales/bagHouses1.webp";
import boquillasImg from "../../assets/images/AsphaltPlant/ImgModales/BoquillasVL.webp";
import maintenanceImg from "../../assets/images/AsphaltPlant/ImgModales/maintenance1.webp";
import flancosImg from "../../assets/images/AsphaltPlant/ImgModales/FEPlaC_1.webp";
import quemadorSil from "../../assets/images/AsphaltPlant/ImgModales/Silenciador.webp";
import produccionImg from "../../assets/images/AsphaltPlant/ImgModales/segre1.webp";
import plasmaImg from "../../assets/images/AsphaltPlant/ImgModales/PlasmaAsistido.webp";

function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

//ICONO (REEMPLAZAR LUEGO)
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ width: "1.25rem", height: "1.25rem", display: "inline-block" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Button({
  children,
  className,
  route,
}: {
  children: React.ReactNode;
  className?: string;
  route?: string;
}) {
  return (
    <a
      href={route}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold",
        "bg-black text-white hover:opacity-90 transition-opacity focus:outline-none",
        className,
      )}
      style={{
        backgroundColor: "#000000",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

type PlantType = "contraflujo" | "flujo-paralelo";

interface ProductModel {
  name: string;
  image: any;
  description: React.ReactNode;
  specs: { label: string; value: string }[];
  tags: any[];
  route?: string;
}

interface TableSection {
  section: string;
  rows: { label: string; values: string[] }[];
}

interface PlantData {
  title: string;
  image: any;
  features: string[];
  stats: { label: string; sub?: string; note?: string }[];
  description: string;
  models: ProductModel[];
  tableData: TableSection[];
}

interface SymbolItem {
  title: string;
  description: string;
  image: string;
}

const data: Record<PlantType, PlantData> = {
  contraflujo: {
    title: "Contraflujo",
    image: hero1.src,
    features: [
      "Casa de bolsas",
      "- Completamente ecológica",
      "Recuperación total de finos",
      "Producción continua",
    ],
    stats: [
      {
        label: "50%",
        sub: "Incorporación de RAP",
        note: "con lo que se ahorra 35% de costo por M3",
      },
      {
        label: "40 – 600 Tph",
        sub: "Modelos para diferentes rangos de producción",
      },
      { label: "25%", sub: "de ahorros en combustibles" },
      { label: "5 – 20 RPM", sub: "Velocidad de rotación variable del tambor" },
    ],
    description:
      "Todas las plantas de contraflujo utilizan el mismo principio de diseño robusto, sistema de mezcla eficiente, lavadora para captura de finos, preparación para cajas de bolsas asfálticas para cumplir con las normas ecológicas y retorno uniforme de finos, con una estructura reforzada que asegura larga vida útil y bajo mantenimiento.",
    models: [
      {
        name: "Desamaq",
        image: p1.src,
        route: "/TamborMezcla/Contraflujo/ContraDesamaq",
        description: (
          <>
            Una <span className="text-black">opción más económica</span> con
            configuraciones esenciales, sin comprometer la calidad de la mezcla.
          </>
        ),
        specs: [
          { label: "Capacidad", value: "10 ton" },
          { label: "Garantía", value: "12 meses" },
        ],
        tags: [
          <>
            {" "}
            <span className="font-bold text-base">
              {" "}
              El mejor precio
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">
              en el mercado de plantas de asfalto de contraflujo
            </span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">Economía</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de operación</span>{" "}
          </>,
          <>
            {" "}
            <span className="text-sm text-[#5d5d5d]">
              Desempeño
            </span> <br />{" "}
            <span className="font-bold text-base">
              libre de problemas{" "}
            </span>{" "}
          </>,
        ],
      },
      {
        name: "Plus",
        image: p2.src,
        route: "/TamborMezcla/Contraflujo/ContraPlus",
        description: (
          <>
            Diseñada para un
            <span className="text-black"> rendimiento superior </span>con
            equipamiento avanzado.
          </>
        ),
        specs: [
          { label: "Capacidad", value: "10 ton" },
          { label: "Garantía", value: "18 meses" },
        ],
        tags: [
          <>
            {" "}
            <span className="font-bold text-base">
              {" "}
              Gran economía
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de compra</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">
              Gran economía
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de operación</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">Alto</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">desempeño</span>{" "}
          </>,
        ],
      },
      {
        name: "Pro+",
        image: p3.src,
        description: (
          <>
            Nuestro modelo más
            <span className="text-black"> equipado y moderno</span>, para una
            operación sin comparación.
          </>
        ),
        route: "/DrumMixers",
        specs: [
          { label: "Capacidad", value: "20 ton" },
          { label: "Garantía", value: "24 meses" },
        ],
        tags: [
          <>
            {" "}
            <span className="font-bold text-base"> Economía</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de compra</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">
              Máxima economía
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de operación</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">El mejor</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">desempeño</span>{" "}
          </>,
        ],
      },
    ],
    tableData: [
      {
        section: "Planta completa",
        rows: [
          {
            label: "País de fabricación",
            values: ["México", "México", "México"],
          },
          {
            label: "Vendedor",
            values: [
              "Fabricante Triaso",
              "Fabricante Triaso",
              "Fabricante Triaso",
            ],
          },
          {
            label: "Tipo de estructuras (1)",
            values: ["Robustas", "Robustas", "Muy robustas"],
          },
        ],
      },

      {
        section: "Tambor mezclador",
        rows: [
          {
            label: "Capacidad de incorporación de RAP (carpeta reciclada)",
            values: ["Opcional (30%)", "40%", "50%"],
          },
          {
            label: "Aislante térmico con recubrimiento de acero inoxidable",
            values: ["Sí", "Sí", "Sí"],
          },
          {
            label: "Quemador (2)",
            values: ["Aire total", "Aire total", "Aire total"],
          },
          {
            label: "Precalentador para combustibles alternos (3)",
            values: ["Sí", "Sí", "Sí"],
          },
          {
            label: "Variador de velocidad de giro (4)",
            values: ["No", "No", "Sí"],
          },
          {
            label: "Elevador montado en el chasis y abisagrado",
            values: ["Sí", "Sí", "Sí"],
          },
          {
            label: "Registro y control de peso de mezcla cargada a camiones",
            values: ["No", "Sí", "Sí"],
          },
          {
            label: "Elevador con convertidor de par (5)",
            values: ["No", "No", "Sí"],
          },
          {
            label: "Autocarburación del quemador con sensor de oxígeno (6)",
            values: ["No", "Sí", "Sí"],
          },
          {
            label: "Quemador asistido por plasma (7)",
            values: ["No", "No", "Sí"],
          },
          { label: "Operación silenciosa (8)", values: ["No", "No", "Sí"] },
          { label: "Flancos estéticos (9)", values: ["No", "No", "Sí"] },
        ],
      },
      {
        section: "Casa de bolsas",
        rows: [
          {
            label: "Capacidad de aire en pies cúbicos (Acfm)",
            values: ["5,250 - 87,000", "5,250 - 87,000", "5,250 - 87,000"],
          },
          {
            label: "Volumen del cuerpo de la casa de bolsas (10)",
            values: ["33 M3", "33 M3", "33 M3"],
          },
          {
            label: "Cumplimiento de las inspecciones de SEMARNAT",
            values: ["Total", "Total", "Total"],
          },
          {
            label: "Apertura automática del damper para control de gases (11)",
            values: ["No", "Sí", "Sí"],
          },
          {
            label: "Pulsos automaticos por presión diferencial (12)",
            values: ["No", "Sí", "Sí"],
          },
          {
            label: "Sensores de gases para monitoreo ambiental (13)",
            values: ["No", "No", "Sí"],
          },
        ],
      },
      {
        section: "Unidad de tolvas",
        rows: [
          {
            label: "Tipo",
            values: [
              "Montadas o independientes",
              "Montadas o independientes",
              "Independientes",
            ],
          },
          { label: "Número de tolvas", values: ["3", "4", "4"] },
          {
            label: "Capacidad de cada tolva",
            values: ["14 Ton", "14 Ton", "20 Ton"],
          },
          { label: "Criba de sobretamaños", values: ["No", "Sí", "Sí"] },
          { label: "Vibrador de tolva de finos", values: ["No", "Sí", "Sí"] },
        ],
      },
      {
        section: "Caseta de control",
        rows: [
          {
            label: "Tamaño y tipo",
            values: [
              "Cómoda, montable",
              "Amplia, remolcable",
              "Amplia, remolcable",
            ],
          },
          {
            label: "Visibilidad a equipos de la planta, cargador y camiones",
            values: ["Amplia", "Amplia", "Amplia"],
          },
          {
            label: "Sistema de control",
            values: [
              "Electrónico industrial",
              "Computarización total",
              "Computarización total",
            ],
          },
          {
            label: "Pantalla de operación",
            values: ["No", "Touch", "Touch panorámica"],
          },
          {
            label: "Accesos remotos por celulares, tablets y computadoras",
            values: ["No", "Sí, amigable", "Sí, amigable"],
          },
          {
            label: "Propietario del sistema operativo (14)",
            values: ["Triaso", "Triaso", "Triaso"],
          },
          {
            label: "Operación manual, adicional al computarizado (15)  ",
            values: ["No necesario", "Sí", "Sí"],
          },
        ],
      },
      {
        section: "Fletes",
        rows: [
          {
            label: "Tractocamiones para el tambor y tolvas",
            values: ["1", "1", "2"],
          },
          { label: "Pickup para la caseta", values: ["1", "1", "1"] },
          {
            label: "Altura libre del chasis para tránsito en brechas y rampas",
            values: ["Amplia", "Amplia", "Amplia"],
          },
        ],
      },
      {
        section: "Garantías y mantenimiento",
        rows: [
          { label: "Garantía", values: ["18 meses", "18 meses", "24 meses"] },
          {
            label: "Tipo de garantía (16)",
            values: ["Directa", "Directa", "Directa"],
          },
          {
            label: "Costos y tiempos de mantenimiento",
            values: ["Bajos", "Bajos", "Bajos"],
          },
        ],
      },
    ],
  },
  "flujo-paralelo": {
    title: "Flujo Paralelo",
    image: hero2.src,
    features: [
      "Lavadora para control de emisiones",
      "Producción continua",
      "Menor complejidad mecánica",
      "Menor numero de componentes",
    ],
    stats: [
      {
        label: "40 – 360 Tph",
        sub: "Modelos para diferentes rangos de producción",
      },
      { label: "20%", sub: "de ahorro en combustibles" },
    ],
    description:
      "Todas las plantas de flujo paralelo utilizan el mismo principio de diseño robusto, sistema de mezcla eficiente, lavadora para captura de finos, preparación para cajas de bolsas asfálticas para cumplir con las normas ecológicas y retorno uniforme de finos, con una estructura reforzada que asegura larga vida útil y bajo mantenimiento.",
    models: [
      {
        name: "Desamaq",
        image: p4.src,
        route: "/TamborMezcla/Paralelo/ParaleloDesamaq",
        description: (
          <>
            Una opción
            <span className="text-black"> más económica </span>con
            configuraciones esenciales, sin comprometer la calidad de la mezcla.
          </>
        ),
        specs: [
          { label: "Capacidad", value: "10 ton" },
          { label: "Garantía", value: "12 meses" },
        ],
        tags: [
          <>
            {" "}
            <span className="font-bold text-base">
              {" "}
              El mejor precio
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">
              en el mercado de plantas de asfalto de flujo paralelo
            </span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">Economía</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de operación</span>{" "}
          </>,
          <>
            {" "}
            <span className="text-sm text-[#5d5d5d]">
              Desempeño
            </span> <br />{" "}
            <span className="font-bold text-base">
              libre de problemas{" "}
            </span>{" "}
          </>,
        ],
      },
      {
        name: "Plus",
        image: p5.src,
        route: "/TamborMezcla/Paralelo/ParaleloPlus",
        description: (
          <>
            Diseñada para un
            <span className="text-black"> rendimiento superior </span>con
            equipamiento avanzado.
          </>
        ),
        specs: [
          { label: "Capacidad", value: "10 ton" },
          { label: "Garantía", value: "18 meses" },
        ],
        tags: [
          <>
            {" "}
            <span className="font-bold text-base">
              {" "}
              Gran economía
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de compra</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">
              Gran economía
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de operación</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">Alto</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">desempeño</span>{" "}
          </>,
        ],
      },
      {
        name: "Pro+",
        image: p6.src,
        route: "/TamborMezcla/Paralelo/ParaleloPro",
        description: (
          <>
            Nuestro modelo más
            <span className="text-black"> equipado y moderno </span>, para una
            operación sin comparación.
          </>
        ),
        specs: [
          { label: "Capacidad", value: "20 ton" },
          { label: "Garantía", value: "24 meses" },
        ],
        tags: [
          <>
            {" "}
            <span className="font-bold text-base"> Economía</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de compra</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">
              Máxima economía
            </span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">de operación</span>{" "}
          </>,
          <>
            {" "}
            <span className="font-bold text-base">El mejor</span> <br />{" "}
            <span className="text-sm text-[#5d5d5d]">desempeño</span>{" "}
          </>,
        ],
      },
    ],
    tableData: [
      {
        section: "Planta completa",
        rows: [
          {
            label: "País de fabricación",
            values: ["México", "México", "México"],
          },
          {
            label: "Vendedor",
            values: [
              "Fabricante Triaso",
              "Fabricante Triaso",
              "Fabricante Triaso",
            ],
          },
          {
            label: "Tipo de estructuras (1)",
            values: ["Robustas", "Robustas", "Muy robustas"],
          },
        ],
      },

      {
        section: "Tambor mezclador",
        rows: [
          {
            label: "Aislante térmico con recubrimiento de acero inoxidable",
            values: ["Sí", "Sí", "Sí"],
          },
          {
            label: "Quemador (2)",
            values: ["Aire total", "Aire total", "Aire total"],
          },
          {
            label: "Precalentador para combustibles alternos (3)",
            values: ["Sí", "Sí", "Sí"],
          },
          {
            label: "Elevador montado en el chasis y abisagrado",
            values: ["Sí", "Sí", "Sí"],
          },
          {
            label: "Registro y control de peso de mezcla cargada a camiones",
            values: ["No", "Sí", "Sí"],
          },
          {
            label: "Elevador con convertidor de par (4)",
            values: ["No", "No", "Sí"],
          },
          {
            label: "Autocarburación del quemador con sensor de oxígeno (5)",
            values: ["No", "Sí", "Sí"],
          },
          {
            label: "Quemador asistido por plasma (6)",
            values: ["No", "No", "Sí"],
          },
          { label: "Operación silenciosa (7)", values: ["No", "No", "Sí"] },
          { label: "Flancos estéticos (8)", values: ["No", "No", "Sí"] },
        ],
      },
      {
        section: "Control de emisiones",
        rows: [
          {
            label: "Lavadora de polvos para operar con fosas de lodos",
            values: ["Sí", "Sí", "Sí"],
          },
          {
            label: "Zonas en que puede operar",
            values: [
              "Rurales, sin vecinos",
              "Rurales, sin vecinos",
              "Rurales, sin vecinos",
            ],
          },
        ],
      },
      {
        section: "Unidad de tolvas",
        rows: [
          {
            label: "Tipo",
            values: [
              "Montadas o independientes",
              "Montadas o independientes",
              "Independientes",
            ],
          },
          { label: "Número de tolvas", values: ["3", "3", "3"] },
          {
            label: "Capacidad de cada tolva",
            values: ["14 Ton", "14 Ton", "20 Ton"],
          },
          { label: "Criba de sobretamaños", values: ["No", "Sí", "Sí"] },
          { label: "Vibrador de tolva de finos", values: ["No", "Sí", "Sí"] },
        ],
      },
      {
        section: "Caseta de control",
        rows: [
          {
            label: "Tamaño y tipo",
            values: [
              "Cómoda, montable",
              "Amplia, remolcable",
              "Amplia, remolcable",
            ],
          },
          {
            label: "Visibilidad a equipos de la planta, cargador y camiones",
            values: ["Amplia", "Amplia", "Amplia"],
          },
          {
            label: "Sistema de control",
            values: [
              "Electrónico industrial",
              "Computarización total",
              "Computarización total",
            ],
          },
          {
            label: "Pantalla de operación",
            values: ["No", "Touch", "Touch panorámica"],
          },
          {
            label: "Accesos remotos por celulares, tablets y computadoras",
            values: ["No", "Sí, amigable", "Sí, amigable"],
          },
          {
            label: "Propietario del sistema operativo (9)",
            values: ["Triaso", "Triaso", "Triaso"],
          },
          {
            label: "Operación manual, adicional al computarizado (10)  ",
            values: ["No necesario", "Sí", "Sí"],
          },
        ],
      },
      {
        section: "Fletes",
        rows: [
          {
            label: "Tractocamiones para el tambor y tolvas",
            values: ["1", "1", "2"],
          },
          { label: "Pickup para la caseta", values: ["1", "1", "1"] },
          {
            label: "Altura libre del chasis para tránsito en brechas y rampas",
            values: ["Amplia", "Amplia", "Amplia"],
          },
        ],
      },
      {
        section: "Garantías y mantenimiento",
        rows: [
          { label: "Garantía", values: ["18 meses", "18 meses", "24 meses"] },
          {
            label: "Tipo de garantía (11)",
            values: ["Directa", "Directa", "Directa"],
          },
          {
            label: "Costos y tiempos de mantenimiento",
            values: ["Bajos", "Bajos", "Bajos"],
          },
        ],
      },
    ],
  },
};

export const symbols: Record<PlantType, Record<number, SymbolItem>> = {
  contraflujo: {
    1: {
      title: "Estructuras robustas",
      description:
        "Las estructuras robustas son muy necesarias en México por las malas condiciones de las carreteras y de los caminos rurales o brechas de acceso a los sitios.",
      image: drumMixerImg.src,
    },

    2: {
      title: "Quemador de Aire Total",
      description:
        "Los quemadores de 'Aire Total' ahorran combustible al tener una combustión más eficiente. Favor de ver la comparativa anexa.",
      image: burnersImg.src,
    },

    3: {
      title: "Calentador de combustible",
      description:
        "Calienta el combustible para menos viscosidad y quemarlo al 100%. Ahorra mucho combustible y no contamina la mezcla con residuos.",
      image: fuelPreImg.src,
    },

    4: {
      title: "Velocidad variable",
      description:
        "La velocidad variable es necesaria para incorporar hasta 50% de RAP, incrementar la producción con agregados secos, dar más tiempo de secado a agregados húmedos, mejorar la homogeneidad de la mezcla, disminuir el consumo de combustible y optimizar la producción.",
      image: "https://placehold.co/600x400/png",
    },

    5: {
      title: "Inicio rápido de producción",
      description:
        "El inicio de producción es más rápido cuando el elevador tiene bolas de mezcla endurecida del día anterior.",
      image: produccionImg.src,
    },

    6: {
      title: "Sensor de oxígeno",
      description:
        "Mide el exceso de oxígeno que sale por la chimenea para carburar automáticamente el quemador. Se ahorra combustible y se evita la emisión contaminante.",
      image: "https://placehold.co/600x400/png",
    },

    7: {
      title: "Atomización molecular",
      description:
        "El combustible se atomiza a nivel molecular logrando un gran ahorro de combustible y menos contaminantes.",
      image: plasmaImg.src,
    },

    8: {
      title: "Reducción de ruido",
      description:
        "Silenciador en el quemador y álabes aerodinámicos en el extractor para reducir el ruido.",
      image: quemadorSil.src,
    },

    9: {
      title: "Refuerzo estructural",
      description:
        "Mejora la estética del tambor mezclador y refuerza adicionalmente la estructura.",
      image: flancosImg.src,
    },

    10: {
      title: "Casa de bolsas grande",
      description:
        "Las casas de bolsas más grandes logran mejor filtrado debido a menor velocidad del aire.",
      image: bagHouseImg.src,
    },

    11: {
      title: "Damper automático",
      description:
        "La apertura automática del damper se ajusta en función de la presión interna.",
      image: "https://placehold.co/600x400/png",
    },

    12: {
      title: "Pulsos automáticos",
      description:
        "Los pulsos varían automáticamente según la presión interna.",
      image: boquillasImg.src,
    },

    13: {
      title: "Monitoreo de emisiones",
      description: "Control de contaminantes regulados por SEMARNAT.",
      image: "https://placehold.co/600x400/png",
    },

    14: {
      title: "Sistema personalizable",
      description:
        "Triaso puede modificar el sistema según requerimientos del cliente.",
      image: triasoImg.src,
    },

    15: {
      title: "Sistema de respaldo",
      description: "Evita que la planta se detenga si falla algún componente.",
      image: "https://placehold.co/600x400/png",
    },

    16: {
      title: "Garantía directa",
      description:
        "La empresa vendedora garantiza y reemplaza directamente los componentes.",
      image: maintenanceImg.src,
    },
  },
  "flujo-paralelo": {
    1: {
      title: "Estructuras robustas",
      description:
        "Las estructuras robustas son muy necesarias en México por las malas condiciones de las carreteras y de los caminos rurales o brechas de acceso a los sitios.",
      image: drumMixerImg.src,
    },

    2: {
      title: "Quemador de Aire Total",
      description:
        "Los quemadores de 'Aire Total' ahorran combustible al tener una combustión más eficiente. Favor de ver la comparativa anexa.",
      image: burnersImg.src,
    },

    3: {
      title: "Calentador de combustible",
      description:
        "Calienta el combustible para menos viscosidad y quemarlo al 100%. Ahorra mucho combustible y no contamina la mezcla con residuos.",
      image: fuelPreImg.src,
    },

    4: {
      title: "Inicio rápido de producción",
      description:
        "El inicio de producción es más rápido cuando el elevador tiene bolas de mezcla endurecida del día anterior.",
      image: produccionImg.src,
    },

    5: {
      title: "Sensor de oxígeno",
      description:
        "Mide el exceso de oxígeno que sale por la chimenea para carburar automáticamente el quemador. Se ahorra combustible y se evita la emisión contaminante.",
      image: "https://placehold.co/600x400/png",
    },

    6: {
      title: "Atomización molecular",
      description:
        "El combustible se atomiza a nivel molecular logrando un gran ahorro de combustible y menos contaminantes.",
      image: plasmaImg.src,
    },

    7: {
      title: "Reducción de ruido",
      description:
        "Silenciador en el quemador y álabes aerodinámicos en el extractor para reducir el ruido.",
      image: quemadorSil.src,
    },

    8: {
      title: "Refuerzo estructural",
      description:
        "Mejora la estética del tambor mezclador y refuerza adicionalmente la estructura.",
      image: flancosImg.src,
    },

    9: {
      title: "Propietario del sistema operativo",
      description:
        "Triaso puede modificar y adecuar el sistema a requerimiento del cliente.",
      image: triasoImg.src,
    },

    10: {
      title: "Operación manual, adicional al computarizado",
      description:
        "Las casas de bolsas más grandes logran mejor filtrado debido a menor velocidad del aire.",
      image: bagHouseImg.src,
    },
    11: {
      title: "Tipo de garantía",
      description:
        "Directa: La empresa vendedora garantiza, resuelve y reemplaza directamente todos los componentes de la planta y los suministrados por terceros. Indirecta: La empresa vendedora no garantiza ni reemplaza ningún componente. Hay que resolver la garantía con el fabricante de la planta o de los componentes.",
      image: maintenanceImg.src,
    },
  },
};

const modelColumns = ["Desamaq", "Plus", "Pro+"];

const beneficios = [
  {
    Icon: Truck,
    title: "Menores tiempos en carga de camiones",
    description:
      "Descarga rápida de la planta al camión, con la mezcla lista en el momento y control total del sistema de apertura, cierre y automatización. Menos esperas en patio y menos camiones formados por turno.",
  },
  {
    Icon: CalendarClock,
    title: "Optimización de jornadas de trabajo",
    description:
      "Arranques a tiempo, sin paros por fallas imprevistas, permitiendo planear turnos, entregas y avance de obra con certeza. La jornada se aprovecha por completo, reduce personal necesario y el tiempo para tareas manuales, reflejándose directamente en el costo por tonelada.",
  },
  {
    Icon: Workflow,
    title: "Mejor control de flujos de material",
    description:
      "Control total del flujo de material desde la alimentación hasta la descarga en camión. Menos desperdicio, menos retrabajo, más margen.",
  },
];

// REEMPLAZAR A VALORES
const colors = {
  industrial: "#000000",
  industrialAccent: "#f59e0b",
  industrialSurface: "#f0f4f8",
  border: "#e2e8f0",
  cardBg: "#ffffff",
  mutedText: "#64748b",
  foreground: "#0f172a",
  industrialForeground: "#ffffff",
};

export default function ProductSelector() {
  const [active, setActive] = useState<PlantType>("contraflujo");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [tableOpen, setTableOpen] = useState(false);
  const [symbolModal, setSymbolModal] = useState<SymbolItem | null>(null);

  const isMobile = useIsMobile();
  const isTableVisible = tableOpen;

  const plant = data[active];

  // Animación línea por línea (escalera, de abajo a arriba) en la descripción
  // de los cards de beneficios al hacer hover — solo desktop.
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".beneficio-card");
      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const wrap = card.querySelector<HTMLElement>(".beneficio-desc-wrap");
        const p = card.querySelector<HTMLElement>(".beneficio-desc");
        if (!wrap || !p) return;

        const split = SplitText.create(p, {
          type: "lines",
          mask: "lines",
          linesClass: "beneficio-line",
        });

        gsap.set(p, { opacity: 1 });
        gsap.set(wrap, { height: 0 });
        gsap.set(split.lines, { yPercent: 120, autoAlpha: 0 });

        const tl = gsap.timeline({ paused: true });
        tl.to(wrap, { height: "auto", duration: 0.45, ease: "power2.out" }, 0);
        tl.to(
          split.lines,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.09,
          },
          0.1,
        );

        const enter = () => tl.play();
        const leave = () => tl.reverse();
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
          tl.kill();
          split.revert();
          gsap.set(wrap, { clearProps: "height" });
        });
      });

      return () => cleanups.forEach((fn) => fn());
    });

    return () => mm.revert();
  }, []);

  const getSymbol = (number: string) => {
    return symbols[active][Number(number)] || null;
  };

  const renderLabel = (label: string) => {
    const match = label.match(/\((\d+)\)/);

    if (!match) return label;

    const number = match[1];
    const cleanText = label.replace(/\(\d+\)/, "");

    return (
      <>
        {cleanText}
        <button
          onClick={() => {
            const symbol = getSymbol(number);
            setSymbolModal(symbol);
          }}
          style={{
            marginLeft: "4px",
            verticalAlign: "middle",
            color: "#FFD047",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </button>
      </>
    );
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section
      style={{
        width: "100%",
        margin: "40px auto",
        padding: "3rem 1rem",
        fontFamily: "sans-serif",
      }}
    >
      {/* Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-6 mb-6 md:mb-16 max-w-[72rem] mx-auto">
        {(Object.keys(data) as PlantType[]).map((key) => {
          const item = data[key];
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActive(key);
                setTableOpen(false);
                setExpandedSections({});
              }}
              className={cn(
                "w-full relative rounded-xl px-6 pt-10 md:pt-20 pb-4 md:pb-6 text-left transition-all duration-300 border-2 cursor-pointer group",
                isActive
                  ? "bg-[#14427c] border-[#14427c] text-white shadow-lg"
                  : "border-border bg-card hover:border-industrial-accent/40 hover:shadow-md",
              )}
            >
              {/* Imagen flotante */}
              <div className="absolute -top-36 left-1/2 -translate-x-1/2 z-10 w-[70%] md:w-[88%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-fill drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {isActive && (
                <div className="absolute top-3 right-3 w-3 h-3 rounded-full" />
              )}

              {/* Contenido */}
              <div className="flex flex-col items-center justify-start md:gap-6">
                <div className="flex-1 text-start">
                  <h3 className="text-xl md:text-3xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <ul className="hidden md:block space-y-1 w-full justify-start">
                    {item.features.map((f) => {
                      const isSub = f.startsWith("- ");
                      const text = isSub ? f.slice(2) : f;
                      return (
                        <li
                          key={f}
                          className={cn(
                            "text-xs md:text-base text-muted-foreground flex items-start gap-2 justify-start w-full text-left",
                            isSub && "ml-5 md:text-sm opacity-90",
                          )}
                        >
                          <span className="mt-0.5">{isSub ? "◦" : "•"}</span>
                          {text}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="hidden md:flex flex-col flex-wrap gap-4 mt-4 items-start">
                    {item.stats.map((s) => (
                      <div key={s.label} className="text-start">
                        <span className="text-base md:text-2xl font-bold text-industrial">
                          {s.label}
                        </span>
                        {s.sub && (
                          <p className="text-xs md:text-base text-muted-foreground w-full">
                            {s.sub}
                          </p>
                        )}
                        {s.note && (
                          <p className="text-[0.65rem] md:text-sm italic text-muted-foreground w-full">
                            {s.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {/* ── desc ── */}
      <div
        style={{
          textAlign: "center",
          width: "100%",
          margin: "0 auto 4rem",
          maxWidth: "90rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
            fontWeight: 700,
            color: colors.foreground,
            marginBottom: "1rem",
            lineHeight: 1,
          }}
        >
          Contamos con tres modelos
          <br />
          de plantas de asfalto de {plant.title.toLowerCase()}:
        </h2>
        <p
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            color: "#000000",
            lineHeight: 1.45,
            margin: 0,
          }}
        >
          {plant.description}
        </p>
      </div>
      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
        }}
        className="flex md:grid md:grid-cols-3 gap-6 md:gap-[1.5rem] mb-[4rem]
                   overflow-x-auto md:overflow-visible
                   snap-x snap-mandatory
                   pt-14 md:pt-0
                   scroll-smooth"
      >
        {plant.models.map((model) => (
          <div
            key={model.name}
            className="relative shrink-0 snap-center w-[78%] sm:w-[55%] md:w-auto"
          >
            <div className="absolute -top-12 left-0 w-full h-24 z-10">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-contain object-top"
                loading="lazy"
              />
            </div>

            <div
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.2s",
                paddingTop: "3rem",
              }}
            >
              <div className="p-3 md:p-6">
                <h4
                  className="text-xl md:text-3xl"
                  style={{
                    fontWeight: 700,
                    color: colors.foreground,
                    marginBottom: "0.5rem",
                  }}
                >
                  {model.name}
                </h4>

                <p
                  className="text-sm font-bold text-grisPPP"
                  style={{
                    color: "#5d5d5d",
                    marginBottom: "0.80rem",
                    lineHeight: 1.25,
                  }}
                >
                  {model.description}
                </p>

                {model.specs.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0.15rem 0",
                    }}
                  >
                    <span
                      className="text-base md:text-lg"
                      style={{ fontWeight: 600 }}
                    >
                      {s.value}
                    </span>
                    <span className="text-sm text-[#5d5d5d]">{s.label}</span>
                  </div>
                ))}

                <div className="mt-2 md:mt-4 flex flex-col gap-2">
                  {model.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <Button
                  className="w-full mt-2 md:mt-6"
                  route={model.route || "#"}
                >
                  Seleccionar modelo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* tabla */}
      <div
        className="py-10 md:py-20"
        style={{ marginBottom: "2rem", maxWidth: "90rem", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
            fontWeight: 700,
            textAlign: "center",
            color: "#000000",
            marginBottom: "2rem",
            lineHeight: 1.25,
          }}
        >
          Comparación de tambores de {plant.title.toLowerCase()}
        </h2>

        <div
          style={{
            overflowX: isMobile ? "visible" : "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div style={{ minWidth: isMobile ? "auto" : "600px" }}>
            <div
              style={{
                display: "flex",
                border: `1px solid ${colors.border}`,
                borderRadius: isTableVisible ? "0.5rem 0.5rem 0 0" : "0.5rem",
                overflow: "hidden",
              }}
            >
              {modelColumns.map((col) => (
                <div
                  key={col}
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    backgroundColor: colors.industrial,
                    color: colors.industrialForeground,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textAlign: "center",
                  }}
                >
                  {col}
                </div>
              ))}
              <button
                onClick={() => setTableOpen(!tableOpen)}
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: colors.industrial,
                  color: colors.industrialForeground,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  transition: "background-color 0.2s",
                }}
              >
                <ChevronDown
                  className={cn(
                    "transition-transform",
                    tableOpen ? "rotate-180" : "",
                  )}
                />
              </button>
            </div>

            {/* body */}
            {isTableVisible && (
              <div
                style={{
                  border: `1px solid ${colors.border}`,
                  borderTop: "none",
                  borderRadius: "0 0 0.5rem 0.5rem",
                  overflow: "hidden",
                }}
              >
                {plant.tableData.map((section) => (
                  <div key={section.section}>
                    {/* separadores */}
                    <button
                      onClick={() => toggleSection(section.section)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.75rem 1rem",
                        backgroundColor: colors.industrialSurface,
                        borderBottom: `1px solid ${colors.border}`,
                        cursor: "pointer",
                        border: "none",
                        borderTop: "none",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: "#000000",
                        }}
                      >
                        {section.section}
                      </span>
                      <ChevronDown
                        className={cn(
                          "transition-transform",
                          expandedSections[section.section] ? "rotate-180" : "",
                        )}
                      />
                    </button>

                    {expandedSections[section.section] &&
                      section.rows.map((row) => (
                        <div
                          key={row.label}
                          style={{
                            borderBottom: `1px solid ${colors.border}`,
                            backgroundColor: colors.cardBg,
                          }}
                        >
                          <div
                            style={{
                              padding: "0.75rem 1rem 0.25rem",
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "#000000",
                            }}
                          >
                            {renderLabel(row.label)}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              paddingBottom: "0.75rem",
                            }}
                          >
                            {row.values.map((val, i) => (
                              <div
                                key={i}
                                style={{
                                  flex: 1,
                                  padding: "0 1rem",
                                  fontSize: "0.875rem",
                                  color: colors.foreground,
                                  textAlign: "center",
                                }}
                              >
                                {val}
                              </div>
                            ))}
                            <div style={{ width: "52px" }} />
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* modal */}
      {symbolModal && (
        <div
          onClick={() => setSymbolModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%), url(${symbolModal.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",

              padding: "2rem",
              borderRadius: "1rem",
              maxWidth: "700px",
              width: "100%",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",

              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              {symbolModal.title}
            </h3>

            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {symbolModal.description}
            </p>

            <button
              onClick={() => setSymbolModal(null)}
              style={{
                marginTop: "1.5rem",
                background: "white",
                color: "black",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                border: "none",
                alignSelf: "flex-start",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      {/* descripción final */}
      <div className="flex flex-col justify-center items-center py-4 md:py-10">
        <div>
          <p className="text-base md:text-lg">
            ¿Necesita ayuda para decidirte? Compare ahora sus características.
          </p>
        </div>
        <br />
        <div className="rounded-2xl border-2 border-black bg-white">
          <p className="px-5 py-2"> Comparar más modelos</p>
        </div>
      </div>
      <div className="max-w-7xl px-0 md:px-8 space-y-2 flex flex-col justify-between items-center py-10 md:py-20">
        <div className="font-bold text-black w-full">
          <h1 className="text-lg md:text-5xl">
            Con estos equipos usted podrá abatir las costosas horas de
            producción:
          </h1>
        </div>
      </div>
      <div
        className="flex md:grid md:grid-cols-3 gap-6 px-4 md:px-8 pb-4
                   overflow-x-auto md:overflow-visible
                   snap-x snap-mandatory scroll-smooth w-full"
      >
        {beneficios.map((b, i) => (
          <div
            key={i}
            className="beneficio-card group shrink-0 snap-center w-[80%] sm:w-[55%] md:w-auto
                       md:h-[65vh] flex flex-col overflow-hidden
                       rounded-2xl bg-white p-6 md:p-8
                       transition-colors duration-500 hover:bg-redBg"
          >
            <b.Icon className="w-10 md:w-16 h-10 md:h-16 shrink-0 text-black group-hover:text-white transition-colors duration-500" />

            <div className="mt-auto">
              <h3 className="text-lg md:text-4xl font-bold text-black group-hover:text-white transition-colors duration-500">
                {b.title}
              </h3>
              <div className="beneficio-desc-wrap overflow-hidden h-auto md:h-0">
                <p
                  className="beneficio-desc text-xs md:text-xl font-bold text-black group-hover:text-white
                             pt-2 opacity-100 md:opacity-0"
                >
                  {b.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* animación indicador */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .rotate-180 {
          transform: rotate(180deg);
        }
        .transition-transform {
          transition: transform 0.2s;
        }
      `}</style>
    </section>
  );
}
