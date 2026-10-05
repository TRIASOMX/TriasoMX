import React from "react";


interface Props {
  dlls: number;
  // paridad: number;
  pesos: number;
  onChange: (field: string, value: number) => void;
}

const handleWheelScroll = (e: React.WheelEvent<HTMLInputElement>) => {
  e.preventDefault();
}

export default function ValorPlanta({ dlls, pesos, onChange }: Props) {
  return (
    <section className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">Valor de la planta de asfalto</h3>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md ">Valor del equipo (USD) </span> 
        <input
          type="number"
          value={dlls || "" }
          min="0"
          onWheel={handleWheelScroll}
          onChange={(e) => onChange("dlls", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </label>
{/* 
      <label className="flex flex-col gap-1 text-sm">
         <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md ">Paridad (MXN / USD) </span>
        <input
          type="number"
          value={paridad || "" }
          min="0"
          step="0.01"
          onChange={(e) => onChange("paridad", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </label> */}

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md ">Valor total</span>
        <input
          value={pesos.toLocaleString("es-US") + " dollars"}
          disabled
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
