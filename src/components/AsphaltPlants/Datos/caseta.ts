import type { TableSection } from "../../unitComponents/tablaComponente"

export const casetasColumns = ["Remolcable", "Montable"];

export const casetasData: TableSection[] = [
  {
    section: "Transporte",
    rows: [
      { label: "Tipo de traslado",      values: ["Remolque independiente", "Con la planta"] },
      { label: "Tractocamiones",        values: ["1", "0 (va en la planta)"] },
      { label: "Facilidad en brechas",  values: ["Alta", "Media"] },
    ],
  },
  {
    section: "Operación",
    rows: [
      { label: "Pantalla touch",        values: ["Sí", "No"] },
      { label: "Acceso remoto",         values: ["Sí", "Sí"] },
      { label: "Sistema de control",    values: ["Computarización total", "Electrónico industrial"] },
    ],
  },
];
