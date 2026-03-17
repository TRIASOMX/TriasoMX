import React, { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: "none" }}
    >
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "#14427c", letterSpacing: "0.2em" }}
      >
        Scroll
      </span>


      <div
        className="relative flex items-start justify-center rounded-full border-2"
        style={{
          width: 24,
          height: 38,
          borderColor: "#14427c",
        }}
      >

        <div
          className="rounded-full"
          style={{
            width: 4,
            height: 8,
            backgroundColor: "#14427c",
            marginTop: 5,
            animation: "scrollDot 1.6s ease-in-out infinite",
          }}
        />
      </div>

      <div className="flex flex-col items-center" style={{ gap: 2 }}>
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: `chevronFade 1.6s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0,
            }}
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#14427c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>

      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0); opacity: 1; }
          60%  { transform: translateY(10px); opacity: 0; }
          61%  { transform: translateY(0); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes chevronFade {
          0%   { opacity: 0; }
          50%  { opacity: 0.9; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}