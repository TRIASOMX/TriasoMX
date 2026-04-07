import { useState } from "react";
import p1 from "../../assets/images/AsphaltPlant/Productos/1.png"
import p2 from "../../assets/images/AsphaltPlant/Productos/2.png"
import p3 from "../../assets/images/AsphaltPlant/Productos/3.png"

function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
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
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold",
                "bg-black text-white hover:opacity-90 transition-opacity focus:outline-none",
                className
            )}
            style={{
                backgroundColor: "#000000",
                color: "#fff",
                border: "none",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    );
}

type PlantType = "contraflujo" | "flujo-paralelo";

interface ProductModel {
    name: string;
    image: any;
    description: string;
    specs: { label: string; value: string }[];
    tags: any[];
}

interface TableSection {
    section: string;
    rows: { label: string; values: string[] }[];
}

interface PlantData {
    title: string;
    image: any;
    features: string[];
    stats: { label: string; sub?: string }[];
    description: string;
    models: ProductModel[];
    tableData: TableSection[];
}

const data: Record<PlantType, PlantData> = {
    contraflujo: {
        title: "Contraflujo",
        image: "https://placehold.co/600x400/png",
        features: [
            "Calentamiento ecológico",
            "Recuperación total de finos",
            "Producción continua",
        ],
        stats: [
            { label: "50%", sub: "Recuperación de RAP" },
            { label: "40 – 600 Tph", sub: "Modelos para diferentes rangos de producción" },
            { label: "25%", sub: "Ahorro en combustibles" },
            { label: "5 – 20 RPM", sub: "Velocidad variable del tambor" },
        ],
        description:
            "Todas las plantas de contraflujo utilizan el mismo principio de diseño robusto, sistema de mezcla eficiente, lavadora para captura de finos, preparación para cajas de bolsas asfálticas para cumplir con las normas ecológicas y retorno uniforme de finos, con una estructura reforzada que asegura larga vida útil y bajo mantenimiento.",
        models: [
            {
                name: "Desamaq",
                image: p1.src,
                description:
                    "Una opción más económica con configuraciones esenciales, sin comprometer la calidad de la mezcla.",
                specs: [
                    { label: "Capacidad", value: "10 ton" },
                    { label: "Garantía", value: "12 meses" },
                ],
                tags: [  
                <> <span className="font-bold"> El mejor precio</span> <br /> <span className="text-xs text-[#5d5d5d]">en el mercado de plantas de asfalto de contraflujo</span> </>,
                    <> <span className="font-bold">Economía</span> <br /> <span className="text-xs text-[#5d5d5d]">de operación</span>  </>,
                    <> <span className="text-xs text-[#5d5d5d]">Desempeño</span> <br /> <span className="font-bold">libre de problemas </span> </>
                    ],
            },
            {
                name: "Plus",
                image: p2.src,
                description: "Diseñada para un rendimiento superior con equipamiento avanzado.",
                specs: [
                    { label: "Capacidad", value: "10 ton" },
                    { label: "Garantía", value: "18 meses" },
                ],
                tags: [  
                    <> <span className="font-bold"> Gran economía</span> <br /> <span className="text-xs text-[#5d5d5d]">de compra</span> </>,
                        <> <span className="font-bold">Gran economía</span> <br /> <span className="text-xs text-[#5d5d5d]">de operación</span>  </>,
                        <> <span className="font-bold">Alto</span> <br /> <span className="text-xs text-[#5d5d5d]">desempeño</span> </>
                        ],
            },
            {
                name: "Pro+",
                image: p3.src,
                description:
                    "Nuestro modelo más equipado y moderno, para una operación sin comparación.",
                specs: [
                    { label: "Capacidad", value: "20 ton" },
                    { label: "Garantía", value: "24 meses" },
                ],
                tags: [  
                    <> <span className="font-bold"> Economía</span> <br /> <span className="text-xs text-[#5d5d5d]">de compra</span> </>,
                        <> <span className="font-bold">Máxima economía</span> <br /> <span className="text-xs text-[#5d5d5d]">de operación</span>  </>,
                        <> <span className="font-bold">El mejor</span> <br /> <span className="text-xs text-[#5d5d5d]">desempeño</span> </>
                        ]
            },
        ],
        tableData: [
            {
                section: "Planta completa",
                rows: [
                    { label: "País de fabricación", values: ["México", "México", "México"] },
                    { label: "Vendedor", values: ["Fabricante Triaso", "Fabricante Triaso", "Fabricante Triaso"] },
                    { label: "Tipo de estructuras (1)", values: ["Robustas", "Robustas", "Muy robustas"] },
                ],
            },


            {
                section: "Tambor mezclador",
                rows: [
                    { label: "Capacidad de incorporación de RAP (carpeta reciclada)", values: ["Opcional (30%)", "40%", "50%"] },
                    { label: "Aislante térmico con recubrimiento de acero inoxidable", values: ["Sí", "Sí", "Sí"] },
                    { label: "Quemador (2)", values: ["Aire total", "Aire total", "Aire total"] },
                    { label: "Precalentador para combustibles alternos (3)", values: ["Sí", "Sí", "Sí"] },
                    { label: "Variador de velocidad de giro (4)", values: ["No", "No", "Sí"] },
                    { label: "Elevador montado en el chasis y abisagrado", values: ["Sí", "Sí", "Sí"] },
                    { label: "Registro y control de peso de mezcla cargada a camiones", values: ["No", "Sí", "Sí"] },
                    { label: "Elevador con convertidor de par (5)", values: ["No", "No", "Sí"] },
                    { label: "Autocarburación del quemador con sensor de oxígeno (6)", values: ["No", "Sí", "Sí"] },
                    { label: "Quemador asistido por plasma (7)", values: ["No", "No", "Sí"] },
                    { label: "Operación silenciosa (8)", values: ["No", "No", "Sí"] },
                    { label: "Flancos estéticos (9)", values: ["No", "No", "Sí"] },
                ],
            },
            {
                section: "Casa de bolsas",
                rows: [
                    { label: "Capacidad de aire en pies cúbicos (Acfm)", values: ["5,250 - 87,000", "5,250 - 87,000", "5,250 - 87,000"] },
                    { label: "Volumen del cuerpo de la casa de bolsas (10)", values: ["33 M3", "33 M3", "33 M3"] },
                    { label: "Cumplimiento de las inspecciones de SEMARNAT", values: ["Total", "Total", "Total"] },
                    { label: "Apertura automática del damper para control de gases (11)", values: ["No", "Sí", "Sí"] },
                    { label: "Pulsos automaticos por presión diferencial (12)", values: ["No", "Sí", "Sí"] },
                    { label: "Sensores de gases para monitoreo ambiental (13)", values: ["No", "No", "Sí"] },
                ],
            },
            {
                section: "Unidad de tolvas",
                rows: [
                    { label: "Tipo", values: ["Montadas o independientes", "Montadas o independientes", "Independientes"] },
                    { label: "Número de tolvas", values: ["3", "4", "4"] },
                    { label: "Capacidad de cada tolva", values: ["14 Ton", "14 Ton", "20 Ton"] },
                    { label: "Criba de sobretamaños", values: ["No", "Sí", "Sí"] },
                    { label: "Vibrador de tolva de finos", values: ["No", "Sí", "Sí"] },

                ],
            },
            {
                section: "Caseta de control",
                rows: [
                    { label: "Tamaño y tipo", values: ["Cómoda, montable", "Amplia, remolcable", "Amplia, remolcable"] },
                    { label: "Visibilidad a equipos de la planta, cargador y camiones", values: ["Amplia", "Amplia", "Amplia"] },
                    { label: "Sistema de control", values: ["Electrónico industrial", "Computarización total", "Computarización total"] },
                    { label: "Pantalla de operación", values: ["No", "Touch", "Touch panorámica"] },
                    { label: "Accesos remotos por celulares, tablets y computadoras", values: ["No", "Sí, amigable", "Sí, amigable"] },
                    { label: "Propietario del sistema operativo (14)", values: ["Triaso", "Triaso", "Triaso"] },
                    { label: "Operación manual, adicional al computarizado (15)  ", values: ["No necesario", "Sí", "Sí"] },
                ],
            },
            {
                section: "Fletes",
                rows: [
                    { label: "Tractocamiones para el tambor y tolvas", values: ["1", "1", "2"] },
                    { label: "Pickup para la caseta", values: ["1", "1", "1"] },
                    { label: "Altura libre del chasis para tránsito en brechas y rampas", values: ["Amplia", "Amplia", "Amplia"] },
                ],
            },
            {
                section: "Garantías y mantenimiento",
                rows: [
                    { label: "Garantía", values: ["18 meses", "18 meses", "24 meses"] },
                    { label: "Tipo de garantía (16)", values: ["Directa", "Directa", "Directa"] },
                    { label: "Costos y tiempos de mantenimiento", values: ["Bajos", "Bajos", "Bajos"] },
                ],
            },
            {
                section: "Simbología",
                rows: [
                    { label: "(1) Las estructuras robustas son muy necesarias en México por las malas condiciones de las carreteras y de los caminos rurales o brechas de acceso a los sitios.", values: [""] },
                    { label: "(2) Los quemadores de 'Aire Total' ahorran combustible al tener una combustión más eficiente. Favor de ver la comparativa anexa.", values: [""] },
                    { label: "(3) Calienta el combustible para menos viscosidad y quemarlo al 100%. Ahorra mucho combustible y no contamina la mezcla con residuos.", values: [""] },
                    { label: "(4) La velocidad variable es necesaria para incorporar hasta 50% de RAP, incrementar la producción con agregados secos, dar más tiempo de secado a agregados húmedos, mejorar aún más la homogeneidad de la mezcla producida, disminuir el consumo de combustible, optimizar la producción con agregados difíciles, etc.", values: [""]},
                    { label: "(5) El inicio de producción es más rápido cuando el elevador tiene bolas de mezcla endurecida del día anterior.", values:[""]},
                    { label: "Mide el exceso de oxigeno que sale por la chimenea para carburar automáticamente el quemador. Se ahorra combustible, se evita la emisión contaminante de Nox, y seelimina la necesidad de recarburar el quemador en cambios de ubicación de la planta de asfalto.", values: [""]},
                    { label: "(7) El combustible se atomiza a nivel molecular: Se logra un gran ahorro de combustible, y menos contaminantes a purificar en la casa de bolsas", values:[""]},
                    { label: "(8) Silenciador en el quemador y álabes aerodinámicos en el extractor: Se reduce mucho el ruido molesto a los habitantes vecinos.", values:[""]},
                    { label: "(9) Mejora la estética del tambor mezclador y de su empresa. Y constituye un refuerzo adicional a la estructura, convirtiéndola en extra reforzada", values:[""]},
                    { label: "(10) Las casas de bolsas más grandes tiene una menor velocidad de aire dentro de su cuerpo, con lo que logran un mejor filtrado. Esto porque la velocidad del aire es mayor dentro de una casa de bolsas chica, y el polvo se precipita sin control cuando alcanza una densidad crítica.  Esto causa un flitrado deficiente y un reintegro irregular de finos a la mezcla asfáltica, perjudicando su calidad.", values: [""]},
                    { label: "(11) La apertura automática del damper se ajusta en función de la presión interna de la casa de bolsas, manteniéndola en un rango estable de diferencia de presión.", values:[""]},
                    { label: "(12) Los pulsos varían automáticamente en función de la presión interna de la casa de bolsas, mantenniendo un rango estable de diferencia de presión y excelente filtrado. Otras marcas mantienen los pulsos fijos por tiempo, sin tomar en cuenta la presión interna de la casa de bolsas, con lo que el filtrado es deficiente.", values:[""]},
                    { label: "(13) Enfocados en los principales contaminantes regulados por SEMARNAT, para no dejarse sorprender por lecturas amañadas para obligar el paro de la planta: Monóxido de carbono (CO), óxidos de nitrógeno (Nox), dióxido de azufre (SO2), material particulado o polvo (PM) y oxígeno para verificación de combustión (O2)", values:[""]},
                    { label: "(14) Triaso puede modificar y adecuar el sistema a requerimiento del cliente.", values:[""]},
                    { label: "(15) Muy importante si falla algún componente de control, para que la planta no se quede parada varios días esperando las refacciones.", values:[""]},
                    { label: "(16) Directa: La empresa vendedora garantiza, resuelve y reemplaza directamente todos los componentes de la planta y los suministrados por terceros.  Indirecta: La empresa vendedora no garantiza ni reemplaza ningún componente. Hay que resolver la garantía con el fabricante de la planta o de los componentes.", values:[""]}
                ],
            },            


        ],
    },
    "flujo-paralelo": {
        title: "Flujo Paralelo",
        image: "https://placehold.co/600x400/png",
        features: [
            "Productividad superior de secadores",
            "Producción continua",
            "Fácil configuración modular",
            "Menor costo de componentes",
        ],
        stats: [
            { label: "40 – 300 Tph", sub: "Modelos para diferentes rangos de producción" },
            { label: "20%", sub: "Ahorro en combustibles" },
        ],
        description:
            "Todas las plantas de flujo paralelo utilizan el mismo principio de diseño robusto, sistema de mezcla eficiente, lavadora para captura de finos, preparación para cajas de bolsas asfálticas para cumplir con las normas ecológicas y retorno uniforme de finos, con una estructura reforzada que asegura larga vida útil y bajo mantenimiento.",
        models: [
            {
                name: "Desamaq",
                image: "https://placehold.co/600x400/png",
                description:
                    "Una opción más económica con configuraciones esenciales, sin comprometer la calidad de la mezcla.",
                specs: [
                    { label: "Capacidad", value: "10 ton" },
                    { label: "Garantía", value: "12 meses" },
                ],
                tags: ["El mejor precio", "Economía", "Libre de problemas"],
            },
            {
                name: "Plus",
                image: "https://placehold.co/600x400/png",
                description: "Diseñada para un rendimiento superior con equipamiento avanzado.",
                specs: [
                    { label: "Capacidad", value: "10 ton" },
                    { label: "Garantía", value: "18 meses" },
                ],
                tags: ["Gran economía", "Gran economía", "Alto"],
            },
            {
                name: "Pro+",
                image: "https://placehold.co/600x400/png",
                description:
                    "Nuestro modelo más equipado y moderno, para una operación sin comparación.",
                specs: [
                    { label: "Capacidad", value: "20 ton" },
                    { label: "Garantía", value: "24 meses" },
                ],
                tags: ["Economía", "Máxima economía", "El mejor"],
            },
        ],
        tableData: [
            {
                section: "Planta completa",
                rows: [
                    { label: "País de fabricación", values: ["México", "México", "México"] },
                    { label: "Vendedor", values: ["Fabricante Triaso", "Fabricante Triaso", "Fabricante Triaso"] },
                    { label: "Tipo de estructuras (1)", values: ["Robustas", "Robustas", "Muy robustas"] },
                ],
            },


            {
                section: "Tambor mezclador",
                rows: [
                    { label: "Aislante térmico con recubrimiento de acero inoxidable", values: ["Sí", "Sí", "Sí"] },
                    { label: "Quemador (2)", values: ["Aire total", "Aire total", "Aire total"] },
                    { label: "Precalentador para combustibles alternos (3)", values: ["Sí", "Sí", "Sí"] },
                    { label: "Elevador montado en el chasis y abisagrado", values: ["Sí", "Sí", "Sí"] },
                    { label: "Registro y control de peso de mezcla cargada a camiones", values: ["No", "Sí", "Sí"] },
                    { label: "Elevador con convertidor de par (4)", values: ["No", "No", "Sí"] },
                    { label: "Autocarburación del quemador con sensor de oxígeno (5)", values: ["No", "Sí", "Sí"] },
                    { label: "Quemador asistido por plasma (6)", values: ["No", "No", "Sí"] },
                    { label: "Operación silenciosa (7)", values: ["No", "No", "Sí"] },
                    { label: "Flancos estéticos (8)", values: ["No", "No", "Sí"] },
                ],
            },
            {
                section: "Control de emisiones",
                rows: [
                    { label: "Lavadora de polvos para operar con fosas de lodos", values: ["Sí", "Sí", "Sí"] },
                    { label: "Zonas en que puede operar", values: ["Rurales, sin vecinos", "Rurales, sin vecinos", "Rurales, sin vecinos"] },
                ],
            },
            {
                section: "Unidad de tolvas",
                rows: [
                    { label: "Tipo", values: ["Montadas o independientes", "Montadas o independientes", "Independientes"] },
                    { label: "Número de tolvas", values: ["3", "3", "3"] },
                    { label: "Capacidad de cada tolva", values: ["14 Ton", "14 Ton", "20 Ton"] },
                    { label: "Criba de sobretamaños", values: ["No", "Sí", "Sí"] },
                    { label: "Vibrador de tolva de finos", values: ["No", "Sí", "Sí"] },

                ],
            },
            {
                section: "Caseta de control",
                rows: [
                    { label: "Tamaño y tipo", values: ["Cómoda, montable", "Amplia, remolcable", "Amplia, remolcable"] },
                    { label: "Visibilidad a equipos de la planta, cargador y camiones", values: ["Amplia", "Amplia", "Amplia"] },
                    { label: "Sistema de control", values: ["Electrónico industrial", "Computarización total", "Computarización total"] },
                    { label: "Pantalla de operación", values: ["No", "Touch", "Touch panorámica"] },
                    { label: "Accesos remotos por celulares, tablets y computadoras", values: ["No", "Sí, amigable", "Sí, amigable"] },
                    { label: "Propietario del sistema operativo (9)", values: ["Triaso", "Triaso", "Triaso"] },
                    { label: "Operación manual, adicional al computarizado (10)  ", values: ["No necesario", "Sí", "Sí"] },
                ],
            },
            {
                section: "Fletes",
                rows: [
                    { label: "Tractocamiones para el tambor y tolvas", values: ["1", "1", "2"] },
                    { label: "Pickup para la caseta", values: ["1", "1", "1"] },
                    { label: "Altura libre del chasis para tránsito en brechas y rampas", values: ["Amplia", "Amplia", "Amplia"] },
                ],
            },
            {
                section: "Garantías y mantenimiento",
                rows: [
                    { label: "Garantía", values: ["18 meses", "18 meses", "24 meses"] },
                    { label: "Tipo de garantía (11)", values: ["Directa", "Directa", "Directa"] },
                    { label: "Costos y tiempos de mantenimiento", values: ["Bajos", "Bajos", "Bajos"] },
                ],
            },
            {
                section: "Simbología",
                rows: [
                    { label: "(1) Las estructuras robustas son muy necesarias en México por las malas condiciones de las carreteras y de los caminos rurales o brechas de acceso a los sitios.", values: [""] },
                    { label: "(2) Los quemadores de 'Aire Total' ahorran combustible al tener una combustión más eficiente. Favor de ver la comparativa anexa.", values: [""] },
                    { label: "(3) Calienta el combustible para menos viscosidad y quemarlo al 100%. Ahorra mucho combustible y no contamina la mezcla con residuos.", values: [""] },
                    { label: "(4) El inicio de producción es más rápido cuando el elevador tiene bolas de mezcla endurecida del día anterior.", values: [""]},
                    { label: "(5) Mide el exceso de oxigeno que sale por la chimenea para carburar automáticamente el quemador. Se ahorra combustible, se evita la emisión contaminante de Nox, y seelimina la necesidad de recarburar el quemador en cambios de ubicación de la planta de asfalto.", values:[""]},
                    { label: "(6) El combustible se atomiza a nivel molecular: Se logra un gran ahorro de combustible, y menos contaminantes a purificar en la casa de bolsas", values:[""]},
                    { label: "(7) Silenciador en el quemador y álabes aerodinámicos en el extractor: Se reduce mucho el ruido molesto a los habitantes vecinos.", values:[""]},
                    { label: "(8) Mejora la estética del tambor mezclador y de su empresa. Y constituye un refuerzo adicional a la estructura, convirtiéndola en extra reforzada", values:[""]},
                    { label: "(9) Triaso puede modificar y adecuar el sistema a requerimiento del cliente.", values: [""]},
                    { label: "(10) Muy importante si falla algún componente de control, para que la planta no se quede parada varios días esperando las refacciones.  El modelo Desamaq no tiene componentes de control.", values:[""]},
                    { label: "(11) Directa: La empresa vendedora garantiza, resuelve y reemplaza directamente todos los componentes de la planta y los suministrados por terceros. Indirecta: La empresa vendedora no garantiza ni reemplaza ningún componente. Hay que resolver la garantía con el fabricante de la planta o de los componentes.", values:[""]},
                ],
            },            


        ],
    },
};

const modelColumns = ["Desamaq", "Plus", "Pro+"];

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
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
    const [tableOpen, setTableOpen] = useState(false);

    const plant = data[active];

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <section
            style={{
                width: "100%",
                maxWidth: "72rem",
                margin: "0 auto",
                padding: "3rem 1rem",
                fontFamily: "sans-serif",
            }}
        >
            {/* Selector Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
                                "relative rounded-xl p-6 pt-20 text-left transition-all duration-300 border-2 cursor-pointer group",
                                isActive
                                    ? "border-industrial bg-industrial-surface shadow-lg"
                                    : "border-border bg-card hover:border-industrial-accent/40 hover:shadow-md"
                            )}
                        >
                            {/* Imagen flotante */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-40 h-32 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {isActive && (
                                <div className="absolute top-3 right-3 w-3 h-3 rounded-full" />
                            )}

                            {/* Contenido */}
                            <div className="flex flex-col items-center gap-6">
                                <div className="flex-1 text-center">
                                    <h3
                                        className={cn(
                                            "text-xl font-bold mb-3",
                                            isActive ? "text-industrial" : "text-foreground"
                                        )}
                                    >
                                        {item.title}
                                    </h3>

                                    <ul className="space-y-1">
                                        {item.features.map((f) => (
                                            <li key={f} className="text-sm text-muted-foreground flex items-start gap-2 justify-center">
                                                <span className="text-industrial-accent mt-0.5">•</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col flex-wrap gap-4 mt-4 items-center">
                                        {item.stats.map((s) => (
                                            <div key={s.label} className="text-center">
                                                <span className="text-lg font-bold text-industrial">{s.label}</span>
                                                {s.sub && (
                                                    <p className="text-xs text-muted-foreground max-w-[140px]">{s.sub}</p>
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
            <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "48rem", margin: "0 auto 3rem" }}>
                <h2
                    style={{
                        fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                        fontWeight: 700,
                        color: colors.foreground,
                        marginBottom: "1rem",
                        lineHeight: 1.3,
                    }}
                >
                    Contamos con tres modelos
                    <br />
                    de plantas de asfalto de {plant.title.toLowerCase()}:
                </h2>
                <p style={{ fontSize: "0.875rem", color: "#000000", lineHeight: 1.75, margin: 0 }}>
                    {plant.description}
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-[1.5rem] mb-[4rem]">
                {plant.models.map((model) => (
                    <div key={model.name} className="relative">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 ">
                            <img
                                src={model.image}
                                alt={model.name}
                                className="w-full h-28 object-cover overflow-visible"
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
                            <div style={{ padding: "1.5rem" }}>
                                <h4
                                    style={{
                                        fontSize: "1.125rem",
                                        fontWeight: 700,
                                        color: colors.foreground,
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {model.name}
                                </h4>

                                <p
                                    style={{
                                        fontSize: "0.750rem",
                                        color: "#5d5d5d",
                                        marginBottom: "1rem",
                                        lineHeight: 1.6,
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
                                            padding: "0.25rem 0",
                                            fontSize: "0.875rem",
                                        }}
                                    >   
                                        <span style={{ fontWeight: 600 }}>{s.value}</span>
                                        <span className="text-xs text-[#5d5d5d]">{s.label}</span>
                                        
                                    </div>
                                ))}

                                <div className="mt-4 flex flex-col gap-1">
                                    {model.tags.map((tag, i) => (
                                        <span key={i} className="text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Button className="w-full mt-6">
                                    Seleccionar modelo
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* tabla */}
            <div style={{ marginBottom: "2rem" }}>
                <h2
                    style={{
                        fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                        fontWeight: 700,
                        textAlign: "center",
                        color: "#000000",
                        marginBottom: "2rem",
                    }}
                >
                    Comparación de tambores de {plant.title.toLowerCase()}
                </h2>

                {/* parte de arriba tabla */}
                <div
                    style={{
                        display: "flex",
                        border: `1px solid ${colors.border}`,
                        borderRadius: tableOpen ? "0.5rem 0.5rem 0 0" : "0.5rem",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            padding: "0.75rem 1rem",
                            backgroundColor: colors.industrial,
                            color: colors.industrialForeground,
                            fontWeight: 600,
                            fontSize: "0.875rem",
                        }}
                    >
                        Características
                    </div>
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
                                tableOpen ? "rotate-180" : ""
                            )}
                        />
                    </button>
                </div>

                {/* body */}
                {tableOpen && (
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
                                            expandedSections[section.section] ? "rotate-180" : ""
                                        )}
                                    />
                                </button>

                                {expandedSections[section.section] &&
                                    section.rows.map((row) => (
                                        <div
                                            key={row.label}
                                            style={{
                                                display: "flex",
                                                borderBottom: `1px solid ${colors.border}`,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: 1,
                                                    padding: "0.75rem 1rem",
                                                    fontSize: "0.875rem",
                                                    color: "#000000",
                                                    backgroundColor: colors.cardBg,
                                                }}
                                            >
                                                {row.label}
                                            </div>
                                            {row.values.map((val, i) => (
                                                <div
                                                    key={i}
                                                    style={{
                                                        flex: 1,
                                                        padding: "0.75rem 1rem",
                                                        fontSize: "0.875rem",
                                                        color: colors.foreground,
                                                        textAlign: "center",
                                                        backgroundColor: colors.cardBg,
                                                    }}
                                                >
                                                    {val}
                                                </div>
                                            ))}
                                            <div style={{ width: "52px", backgroundColor: colors.cardBg }} />
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>


            {/* descripción final */}
            <div className="flex flex-col justify-center items-center py-10">
                <div>
                    <p>¿Necesita ayuda para decidirte? Compare ahora sus características.</p>
                </div>
                <div className="rounded-2xl border-2 border-black bg-white">
                    <p className="px-5 py-2"> Comparar más modelos</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 space-y-2 flex flex-col lg:flex-row md:flex-row  justify-between items-center">
                <div className="font-bold text-black text-2xl">
                    <h1>Con estos equipos usted podrá</h1>
                    <h1>abatir las costosas horas de</h1>
                    <h1>producción:</h1>
                </div>
                <div>
                    <ul className="list-disc">
                        <li>Menores tiempos en carga de camiones.</li>
                        <li>Optimización de jornadas de trabajo.</li>
                        <li>Ahorro de horas hombre.</li>
                        <li>Menos paros por maniobras logísticas.</li>
                        <li>Mejor control de flujos de material.</li>
                    </ul>
                </div>
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