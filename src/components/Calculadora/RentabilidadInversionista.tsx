interface Props {
  anual: number;
  meses: number;
  reventa: number;
  rentaMensual: number;
  onChange: (field: string, value: number) => void;
}

export default function RentabilidadInversionista({
  anual,
  meses,
  reventa,
  rentaMensual,
  onChange,
}: Props) {
  return (
    <section className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-black">
        Ingresos para el inversionista
      </h3>

      <label className="flex flex-col gap-1 text-sm">
         <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Rendimiento anual (%) </span>
        <input
          type="number"
          value={anual || "" }
          min="0"
          onChange={(e) => onChange("anual", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Plazo (meses)</span>
        <input
          type="number"
          value={meses || ""}
          min="0"
          onChange={(e) => onChange("meses", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Valor de reventa (%)</span>
        <input
          type="number"
          value={reventa || ""}
          min="0"
          onChange={(e) => onChange("reventa", Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-semibold text-sm text-gray-800 lg:text-lg md:text-md">Renta mensual</span>
        <input
          value={rentaMensual.toLocaleString("es-US") + " dollars"}
          disabled
          className="border border-gray-200 bg-gray-100 rounded-lg px-3 py-2"
        />
      </label>
    </section>
  );
}
