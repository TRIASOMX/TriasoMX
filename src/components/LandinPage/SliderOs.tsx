import { useState, useEffect } from "react";

interface SliderItem {
  id: number;
  title: string;
  svg: React.ReactNode;
}

const items: SliderItem[] = [
  {
    id: 1,
    title: "Informes históricos en la nube",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18L11 21L16 16" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Seguridad y fiabilidad",
    svg: (
      <svg fill="#14427c" width="100" height="100" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" stroke="#14427c" strokeWidth="0.00256">
        <path d="M80.573 123L80.1 98.915C79.513 69.071 91.715 45.5 120 45.5l13.944.014c30.548.588 41.343 23.594 41.93 53.447l.473 24.039h7.646c4.416 0 8.007 3.586 8.007 8.01v84.98c0 4.43-3.585 8.01-8.007 8.01H72.007c-4.416 0-8.007-3.586-8.007-8.01v-84.98c0-4.43 3.585-8.01 8.007-8.01h8.566zm16.39 0h62.657c.033-5.473.104-12.555-.05-20.33l-.078-4.024c-.414-21.015-2.663-34.678-25.194-35.11l-12.405-.358c-28.124-.56-25.578 26.864-25.397 36.052l.08 4.024.387 19.746zM176 143.316c0-2.384-1.547-4.316-3.46-4.316H83.46c-1.911 0-3.46 1.936-3.46 4.316v60.368c0 2.384 1.547 4.316 3.46 4.316h89.08c1.911 0 3.46-1.936 3.46-4.316v-60.368z" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Conversión automática de unidades",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
        <path fill="none" stroke="#14437d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12c0-4.243 0-6.364 1.318-7.682C5.636 3 7.758 3 12 3c4.243 0 6.364 0 7.682 1.318C21 5.636 21 7.758 21 12c0 4.243 0 6.364-1.318 7.682C18.364 21 16.242 21 12 21c-4.243 0-6.364 0-7.682-1.318C3 18.364 3 16.242 3 12m4 3.625h3.5m3.25-5.5h3.5m-3.5-2.5h3.5m-10.5 1.25h2m0 0h2m-2 0v-2m0 2v2m5.35 6.25l1.414-1.414m0 0l1.415-1.414m-1.415 1.414L14.1 14.296m1.414 1.415l1.415 1.414" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Inteligencia artificial que protege tu equipo",
    svg: (
      <svg width="60" height="60" viewBox="0 0 24 24" strokeWidth="2.2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7C12 8.65685 13.3431 10 15 10" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.6102 8.96898C21.4612 9.70251 22 12C22 12.7031 21.8186 13.3638 21.5 13.9379" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 22C12.8954 22 12 21.1046 12 20" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 20.5L22 22" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 18.5C16 19.8807 17.1193 21 18.5 21C19.1916 21 19.8175 20.7192 20.2701 20.2654C20.7211 19.8132 21 19.1892 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5Z" stroke="#14427c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Menos operadores, control total",
    svg: (
      <svg fill="#14427c" width="100" height="100" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" stroke="#14427c" strokeWidth="0.00256">
        <path d="M80.573 123L80.1 98.915C79.513 69.071 91.715 45.5 120 45.5l13.944.014c30.548.588 41.343 23.594 41.93 53.447l.473 24.039h7.646c4.416 0 8.007 3.586 8.007 8.01v84.98c0 4.43-3.585 8.01-8.007 8.01H72.007c-4.416 0-8.007-3.586-8.007-8.01v-84.98c0-4.43 3.585-8.01 8.007-8.01h8.566zm16.39 0h62.657c.033-5.473.104-12.555-.05-20.33l-.078-4.024c-.414-21.015-2.663-34.678-25.194-35.11l-12.405-.358c-28.124-.56-25.578 26.864-25.397 36.052l.08 4.024.387 19.746zM176 143.316c0-2.384-1.547-4.316-3.46-4.316H83.46c-1.911 0-3.46 1.936-3.46 4.316v60.368c0 2.384 1.547 4.316 3.46 4.316h89.08c1.911 0 3.46-1.936 3.46-4.316v-60.368z" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Un inicio de sesión único para cada operador por turno",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512">
        <path fill="#14437d" fillRule="evenodd" d="M213.333 42.667c41.238 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111c-41.237 0-74.666-33.429-74.666-74.667c0-39.862 31.238-72.43 70.57-74.556zM64 426.667h204.794A116.6 116.6 0 0 1 256.478 384H106.667v-34.133l.11-4.142c2.057-38.365 32.515-68.392 69.223-68.392h74.667l3.908.114c13.218.773 25.499 5.438 35.767 12.943a117.5 117.5 0 0 1 36.613-24.868c-19.998-19.144-46.814-30.855-76.288-30.855H176l-4.617.096C111.668 237.253 64 287.834 64 349.867zm117.333-309.334c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m192 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96m62.763 62.763l-84.095 84.094l-41.428-41.428l18.856-18.856l22.572 22.572l65.239-65.238z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Monitorización remota en la nube",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="#14437d">
        <g fill="none" stroke="#14437d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M3.5 4v13.5a3 3 0 0 0 3 3H20" />
          <path d="m6.5 15l4.5-4.5l3.5 3.5L20 8.5" />
        </g>
      </svg>
    ),
  },
];

function useVisibleCount() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visible;
}

export default function Slider() {
  const [index, setIndex] = useState(0);
  const visibleCount = useVisibleCount();
  
  const maxIndex = Math.max(0, items.length - visibleCount);
  const navigate = (dir: "left" | "right") => {
    if (dir === "left" && index > 0) {
        setIndex((prev) => prev - 1);
    }
    if (dir === "right" && index < maxIndex) {
        setIndex((prev) => prev + 1);
    }
  };

  const goTo = (i: number) => {
    setIndex(i);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-none px-2" 
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="flex flex-col items-center justify-start gap-3 text-center rounded-2xl p-6 h-full">
                <div className="flex items-center justify-center w-24 h-24">
                  {item.svg}
                </div>
                <p className="font-bold text-white text-base leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => navigate("left")}
          disabled={index === 0}
          aria-label="Anterior"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-white/50"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slider number ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-700 ${
                i === index ? "w-7 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => navigate("right")}
          disabled={index === maxIndex}
          aria-label="Siguiente"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-white/50"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}