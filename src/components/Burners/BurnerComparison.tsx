import { useState } from "react";

type Tab = "a" | "b";

interface ComparisonData {
  parcial: string[];
  total: string[];
}

const tabContent: Record<Tab, ComparisonData> = {
  a: {
    parcial: [
      "Mezcla de aire incompleta antes de la combustión",
      "Mayor producción de CO y NOx",
      "Llama más larga y luminosa",
      "Menor eficiencia térmica",
      "Requiere más espacio de combustión",
    ],
    total: [
      "Mezcla completa de aire y combustible",
      "Emisiones de CO y NOx reducidas",
      "Llama corta, azul y estable",
      "Mayor eficiencia térmica",
      "Diseño compacto y preciso",
    ],
  },
  b: {
    parcial: [
      "Mayor consumo de combustible",
      "Mantenimiento más frecuente",
      "Vida útil menor",
      "Control de temperatura menos preciso",
      "Mayor huella de carbono",
    ],
    total: [
      "Menor consumo de combustible",
      "Mantenimiento reducido",
      "Mayor durabilidad",
      "Control de temperatura preciso y uniforme",
      "Huella de carbono significativamente menor",
    ],
  },
};

function FeatureList({
  items,
  highlight = false,
}: {
  items: string[];
  highlight?: boolean;
}) {
  return (
    <ul className="space-y-3 p-0 list-none">
      {items.map((item, i) => (
        <li key={i} className="relative pl-4 text-sm text-gray-600 leading-relaxed">
          <span
            className={`absolute left-0 font-bold ${
              highlight ? "text-red-700" : "text-gray-400"
            }`}
          >
            •
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BurnerComparison() {
  const [activeTab, setActiveTab] = useState<Tab>("a");
  const { parcial, total } = tabContent[activeTab];

  return (
    <section className="max-w-3xl mx-auto px-6 py-8 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
        ¿Cuáles son las diferencias entre quemadores de &ldquo;aire parcial&rdquo; y
        &ldquo;aire total&rdquo;?
      </h2>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Ventajas clave que hacen a los quemadores de aire total más eficientes y más amigables
        con el medio ambiente que los de aire parcial
      </p>

      {/* Tab buttons */}
      <div role="tablist" aria-label="Comparación de quemadores" className="flex">
        {(["a", "b"] as Tab[]).map((tab, i) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab}`}
            id={`tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={[
              "w-10 h-10 text-sm font-bold border border-gray-300 cursor-pointer transition-colors",
              i === 0 ? "rounded-tl" : "",
              i === (["a", "b"].length - 1) ? "rounded-tr" : "",
              activeTab === tab
                ? "bg-red-700 text-white border-red-700"
                : "bg-white text-gray-500 hover:bg-gray-100",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="bg-white border border-gray-300 rounded-tr rounded-b-lg p-8"
      >
        <div className="grid grid-cols-[1fr_1px_1fr] gap-6 items-start">
          {/* Columna izquierda */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-700 inline-block">
              Quemadores de aire parcial
            </h3>
            <FeatureList items={parcial} />
          </div>

          {/* Divisor */}
          <div className="bg-gray-200 self-stretch" aria-hidden="true" />

          {/* Columna derecha */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-700 inline-block">
              Quemadores de aire total
            </h3>
            <FeatureList items={total} highlight />
          </div>
        </div>
      </div>
    </section>
  );
}