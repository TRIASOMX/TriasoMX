import { useState } from "react";

export interface GridItem {
  title: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
}

interface ProductGridProps {
  items: GridItem[];
}

function GridCard({
  item,
  expanded,
  onToggle,
  className = "",
}: {
  item: GridItem;
  expanded: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const fit = item.imageFit ?? "cover";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl  ${className}`}
    >
    
      <img
        src={item.image}
        alt={item.title}
        draggable={false}
        className="absolute inset-0 w-full h-full transition-transform duration-500"
        style={{
          objectFit: fit,
          objectPosition: "center",
          padding: fit === "contain" ? "2rem" : "0",
          transform: expanded ? "scale(0.9)" : "scale(1)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.2) 100%)",
          opacity: expanded ? 1 : 0,
        }}
      />

      <div className="absolute top-5 left-0 right-0 z-20 px-4 pb-1">
        <h3
          className="font-bold text-white leading-snug"
          style={{
            fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
          }}
        >
          {item.title}
        </h3>
      </div>

      <div
        className="absolute left-0 right-0 z-20 px-4 overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          bottom: "44px",
          maxHeight: expanded ? "180px" : "0px",
          opacity: expanded ? 1 : 0,
        }}
      >
        <p className="text-white/85 text-xs leading-relaxed pb-2 pt-1">
          {item.description}
        </p>
      </div>

      <button
        onClick={onToggle}
        className="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-1.5 px-4 py-2.5 text-white/90 text-xs font-medium transition-colors duration-200 hover:text-white active:opacity-75"
      >
        <span
          className="text-[9px] leading-none transition-transform duration-300"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▲
        </span>
        {expanded ? "mostrar menos" : "mostrar más"}
      </button>
    </div>
  );
}

export default function ProductGrid({ items }: ProductGridProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setExpandedIndex((prev) => (prev === i ? null : i));

  const [card0, card1, card2, card3] = items;

  return (
    <div className="w-full">

      <div className="flex flex-col gap-4 lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-72 md:h-80 md:row-span-2">
            <GridCard
              item={card0}
              expanded={expandedIndex === 0}
              onToggle={() => toggle(0)}
              className="h-full"
            />
          </div>
          <div className="h-64 md:h-auto">
            <GridCard
              item={card1}
              expanded={expandedIndex === 1}
              onToggle={() => toggle(1)}
              className="h-full"
            />
          </div>
          <div className="h-64 md:h-auto md:col-start-2">
            <GridCard
              item={card2}
              expanded={expandedIndex === 2}
              onToggle={() => toggle(2)}
              className="h-full"
            />
          </div>
        </div>
        <div className="h-64 md:h-72">
          <GridCard
            item={card3}
            expanded={expandedIndex === 3}
            onToggle={() => toggle(3)}
            className="h-full"
          />
        </div>
      </div>

      <div
        className="hidden lg:grid gap-4"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(7, minmax(80px, 1fr))",
        }}
      >
        <GridCard
          item={card0}
          expanded={expandedIndex === 0}
          onToggle={() => toggle(0)}
          className="col-start-1 row-start-1 row-end-6"
        />

        <GridCard
          item={card1}
          expanded={expandedIndex === 1}
          onToggle={() => toggle(1)}
          className="col-start-2 col-end-4 row-start-1 row-end-3"
        />

        <GridCard
          item={card2}
          expanded={expandedIndex === 2}
          onToggle={() => toggle(2)}
          className="col-start-2 col-end-4 row-start-3 row-end-6"
        />

        <GridCard
          item={card3}
          expanded={expandedIndex === 3}
          onToggle={() => toggle(3)}
          className="col-start-1 col-end-4 row-start-6 row-end-8"
        />
      </div>
    </div>
  );
}