import { useState } from "react";

export interface TableRow {
  label: string;
  values: string[];
}

export interface TableSection {
  section: string;
  rows: TableRow[];
}

export interface ComparisonTableProps {
  modelColumns: string[];
  tableData: TableSection[];
  title?: string;
  footnoteSection?: string;
}


export default function ComparisonTable({
  modelColumns,
  tableData,
  title,
  footnoteSection = "Simbología",
}: ComparisonTableProps) {
  const [tableOpen, setTableOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) =>
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  const mainSections = tableData.filter((s) => s.section !== footnoteSection);
  const footnoteSec  = tableData.find((s) => s.section === footnoteSection);

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
          {title}
        </h2>
      )}

      <div
        className={`flex border border-gray-200 overflow-hidden transition-all ${
          tableOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <div className="flex-1 px-4 py-3 bg-black  text-white font-semibold text-sm">
          Características
        </div>

        {modelColumns.map((col) => (
          <div
            key={col}
            className="flex-1 px-4 py-3 bg-black text-white font-semibold text-sm text-center"
          >
            {col}
          </div>
        ))}

        <button
          onClick={() => setTableOpen((o) => !o)}
          aria-expanded={tableOpen}
          aria-label={tableOpen ? "Colapsar tabla" : "Expandir tabla"}
          className="px-4 py-3 bg-black text-white hover:bg-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-5 h-5 transition-transform duration-200 ${tableOpen ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
      {tableOpen && (
        <div className="border border-t-0 border-gray-200 rounded-b-lg overflow-hidden">

          {mainSections.map((section) => {
            const isExpanded = !!expandedSections[section.section];
            return (
              <div key={section.section}>
                <button
                  onClick={() => toggleSection(section.section)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between px-4 py-3
                             bg-gray-100 hover:bg-gray-200 transition-colors
                             border-b border-gray-200 text-left"
                >
                  <span className="font-semibold text-sm text-gray-900">
                    {section.section}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isExpanded &&
                  section.rows.map((row, rowIdx) => (
                    <div
                      key={row.label}
                      className={`flex border-b border-gray-200 last:border-b-0 ${
                        rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex-1 px-4 py-3 text-sm text-gray-800">
                        {row.label}
                      </div>
                      {row.values.map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 px-4 py-3 text-sm text-gray-700 text-center"
                        >
                          <span>{val}</span>
                        </div>
                      ))}
                      <div className="w-[52px]" />
                    </div>
                  ))}
              </div>
            );
          })}

          {footnoteSec && (
            <div>
              <button
                onClick={() => toggleSection(footnoteSec.section)}
                aria-expanded={!!expandedSections[footnoteSec.section]}
                className="w-full flex items-center justify-between px-4 py-3
                           bg-gray-100 hover:bg-gray-200 transition-colors
                           border-b border-gray-200 text-left"
              >
                <span className="font-semibold text-sm text-gray-900">
                  {footnoteSec.section}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    expandedSections[footnoteSec.section] ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {expandedSections[footnoteSec.section] && (
                <ul className="px-6 py-4 space-y-2 bg-white">
                  {footnoteSec.rows.map((row, i) => (
                    <li key={i} className="text-xs text-gray-600 leading-relaxed">
                      {row.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
}