import { useState } from "react";

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
    image: string;
    description: string;
    specs: { label: string; value: string }[];
    tags: string[];
}

interface TableSection {
    section: string;
    rows: { label: string; values: string[] }[];
}

interface PlantData {
    title: string;
    image: string;
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
                image: "https://placehold.co/600x400/png",
                description:
                    "Una opción más económica con configuraciones esenciales, sin comprometer la calidad de la mezcla.",
                specs: [
                    { label: "Capacidad", value: "10 ton" },
                    { label: "Garantía", value: "12 meses" },
                ],
                tags: ["El mejor precio en el mercado de plantas de asfalto de contraflujo", "Economía de operación", "Desempeño libre de problemas"],
            },
            {
                name: "Plus",
                image: "https://placehold.co/600x400/png",
                description: "Diseñada para un rendimiento superior con equipamiento avanzado.",
                specs: [
                    { label: "Capacidad", value: "10 ton" },
                    { label: "Garantía", value: "18 meses" },
                ],
                tags: ["Gran economía de compra", "Gran economía de operación", "Alto desempeño"],
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
                tags: ["Economía de compra", "Máxima economía de operación", "El mejor desempeño"],
            },
        ],
        tableData: [
            {
                section: "General",
                rows: [
                    { label: "Estructura", values: ["Robusta", "Muy robustas", "Muy robustas"] },
                    { label: "Disminución de producción por factores externos adversos", values: ["Disminución de producción", "Producción estable", "Producción muy estable"] },
                    { label: "Humedad máxima en agregados para producción nominal", values: ["3%", "3%", "5%"] },
                    { label: "Capacidad de incorporación de RAP", values: ["Opción adicional, hasta 30%", "Incluida, hasta 40%", "Incluida, hasta 50%"] },
                    { label: "Precalentador para combustibles alternos", values: ["Sí", "Sí", "Sí"] },
                    { label: "Variador de velocidad de sistema de giro para mayor incorporación de RAP", values: ["No, No", "Incluida, hasta 40%", "Sí"] },
                    { label: "Control de peso en elevador", values: ["No", "Sí", "Sí"] },
                    { label: "Arranque suave elevador", values: ["No", "No", "Sí"] },
                    { label: "Flancos estéticos", values: ["No", "No", "Sí"] },
                    { label: "Ejes y llantas", values: ["Desde dos ejes con 8 llantas", "Desde dos ejes con 8 llantas", "Tres ejes con 12 llantas"] },
                    { label: "Apertura automática del Damper", values: ["No", "Sí", "Sí"] },
                    { label: "Secuencia de pulsos automáticos de la casa de bolsas por presión interna", values: ["No", "Sí", "Sí"] },
                    { label: "Flete para tambor y tolvas", values: ["1", "1", "2"] },
                ],
            },


            {
                section: "Control",
                rows: [
                    { label: "Accesos remotos por celulares, tablets y computadoras", values: ["No", "Sí", "Sí"] },
                    { label: "Tipo de control", values: ["Electrónico industrial", "Totalmente computarizada", "Totalmente computarizada"] },
                    { label: "Terminal de control", values: ["Consola", "Consola, con pantalla touch", "Consola, con pantalla touch panoramica"] },
                    { label: "Asistencia por Inteligencia Artificial", values: ["No", "No", "Sí"] },
                ],
            },
            {
                section: "Unidad de tolvas",
                rows: [
                    { label: "Capacidad de cada tolva", values: ["10 Ton", "10 - 20Ton", "20 Ton"] },
                    { label: "Opción de tolva montada en el mismo chasis a tambor", values: ["Sí", "Sí", "No"] },
                    { label: "Capacidad de tolva montadas", values: ["6 Ton", "6 Ton", "-"] },
                    { label: "Vibrador de tolva de finos", values: ["No", "No", "Sí"] },
                ],
            },
            {
                section: "Quemador y extractor",
                rows: [
                    { label: "Autocarburación del quemador por sensores en la chimenea", values: ["No", "Sí", "Sí"] },
                    { label: "Quemador asistido por plasma", values: ["No", "No", "Sí"] },
                    { label: "Precalentador para combustibles alternos", values: ["Sí", "Sí", "Sí"] },
                    { label: "Silenciador de quemador", values: ["No", "No", "Sí"] },
                    { label: "Alabes de extractor aerodinámicos para operación silenciosa", values: ["No", "No", "Sí"] },
                    { label: "Sensores de gases para monitoreo ambiental de gases", values: ["No", "No", "Sí"] },

                ],
            },
            {
                section: "Garantías y mantenimiento ",
                rows: [
                    { label: "Garantía", values: ["12 meses", "18 meses", "24 meses"] },
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
                section: "General",
                rows: [
                    { label: "Estructura", values: ["Robusta", "Muy robustas", "Muy robustas"] },
                    { label: "Disminución de producción por factores externos adversos", values: ["Disminución de producción", "Producción estable", "Producción muy estable"] },
                    { label: "Humedad máxima en agregados para producción nominal", values: ["3%", "3%", "5%"] },
                    { label: "Capacidad de incorporación de RAP", values: ["Opción adicional, hasta 30%", "Incluida, hasta 40%", "Incluida, hasta 50%"] },
                    { label: "Precalentador para combustibles alternos", values: ["Sí", "Sí", "Sí"] },
                    { label: "Variador de velocidad de sistema de giro para mayor incorporación de RAP", values: ["No, No", "Incluida, hasta 40%", "Sí"] },
                    { label: "Control de peso en elevador", values: ["No", "Sí", "Sí"] },
                    { label: "Arranque suave elevador", values: ["No", "No", "Sí"] },
                    { label: "Flancos estéticos", values: ["No", "No", "Sí"] },
                    { label: "Ejes y llantas", values: ["Desde dos ejes con 8 llantas", "Desde dos ejes con 8 llantas", "Tres ejes con 12 llantas"] },
                    { label: "Apertura automática del Damper", values: ["No", "Sí", "Sí"] },
                    { label: "Secuencia de pulsos automáticos de la casa de bolsas por presión interna", values: ["No", "Sí", "Sí"] },
                    { label: "Flete para tambor y tolvas", values: ["1", "1", "2"] },
                ],
            },


            {
                section: "Control",
                rows: [
                    { label: "Accesos remotos por celulares, tablets y computadoras", values: ["No", "Sí", "Sí"] },
                    { label: "Tipo de control", values: ["Electrónico industrial", "Totalmente computarizada", "Totalmente computarizada"] },
                    { label: "Terminal de control", values: ["Consola", "Consola, con pantalla touch", "Consola, con pantalla touch panoramica"] },
                    { label: "Asistencia por Inteligencia Artificial", values: ["No", "No", "Sí"] },
                ],
            },
            {
                section: "Unidad de tolvas",
                rows: [
                    { label: "Capacidad de cada tolva", values: ["10 Ton", "10 - 20Ton", "20 Ton"] },
                    { label: "Opción de tolva montada en el mismo chasis a tambor", values: ["Sí", "Sí", "No"] },
                    { label: "Capacidad de tolva montadas", values: ["6 Ton", "6 Ton", "-"] },
                    { label: "Vibrador de tolva de finos", values: ["No", "No", "Sí"] },
                ],
            },
            {
                section: "Quemador y extractor",
                rows: [
                    { label: "Autocarburación del quemador por sensores en la chimenea", values: ["No", "Sí", "Sí"] },
                    { label: "Quemador asistido por plasma", values: ["No", "No", "Sí"] },
                    { label: "Precalentador para combustibles alternos", values: ["Sí", "Sí", "Sí"] },
                    { label: "Silenciador de quemador", values: ["No", "No", "Sí"] },
                    { label: "Alabes de extractor aerodinámicos para operación silenciosa", values: ["No", "No", "Sí"] },
                    { label: "Sensores de gases para monitoreo ambiental de gases", values: ["No", "No", "Sí"] },

                ],
            },
            {
                section: "Garantías y mantenimiento ",
                rows: [
                    { label: "Garantía", values: ["12 meses", "18 meses", "24 meses"] },
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
                                "relative rounded-xl p-6 text-left transition-all duration-300 border-2 cursor-pointer group",
                                isActive
                                    ? "border-industrial bg-industrial-surface shadow-lg"
                                    : "border-border bg-card hover:border-industrial-accent/40 hover:shadow-md"
                            )}
                        >
                            {isActive && (
                                <div className="absolute top-3 right-3 w-3 h-3 rounded-full" />
                            )}
                            <div className="flex flex-col items-center gap-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full md:w-56 h-36 object-contain"
                                />
                                <div className="flex-1">
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
                                            <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <span className="text-industrial-accent mt-0.5">•</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col flex-wrap gap-4 mt-4">
                                        {item.stats.map((s) => (
                                            <div key={s.label}>
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

            {/* ── productos ── */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "4rem",
                }}
            >
                {plant.models.map((model) => (
                    <div
                        key={model.name}
                        style={{
                            backgroundColor: colors.cardBg,
                            border: `1px solid ${colors.border}`,
                            borderRadius: "0.75rem",
                            overflow: "hidden",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                            transition: "box-shadow 0.2s",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: colors.industrialSurface,
                                padding: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "12rem",
                            }}
                        >
                            <img
                                src={model.image}
                                alt={model.name}
                                style={{ height: "100%", objectFit: "contain" }}
                                loading="lazy"
                            />
                        </div>
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
                                    fontSize: "0.875rem",
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
                                        justifyContent: "space-between",
                                        padding: "0.25rem 0",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    <span style={{ color: "#000000" }}>{s.label}</span>
                                    <span style={{ fontWeight: 600, color: colors.foreground }}>{s.value}</span>
                                </div>
                            ))}
                            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                                {model.tags.map((tag, i) => (
                                    <span key={i} style={{ fontSize: "0.875rem", color: "#000000" }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Button className="w-full mt-6 " style={{ width: "100%", marginTop: "1.5rem" }}>
                                Seleccionar modelo
                            </Button>
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