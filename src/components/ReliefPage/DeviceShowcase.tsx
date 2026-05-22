import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DeviceShowcaseProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

function MobileCarousel({
  images,
  labels,
}: {
  images: string[];
  labels: string[];
}) {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (index: number) => {
      setActive((index + images.length) % images.length);
    },
    [images.length]
  );

  // Auto-play cada 3 s
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [images.length]);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  // Touch / pointer swipe
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 40) {
      go(active + (delta < 0 ? 1 : -1));
      resetAuto();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* Stage con perspectiva tipo "cover flow" */}
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setIsDragging(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "pan-y",
        }}
      >
        {images.map((src, i) => {
          // Calcula offset relativo al activo: -1, 0, +1, …
          const total = images.length;
          let offset = i - active;
          // Wrap para que el offset más corto se use (carrusel circular)
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const isAdjacent = Math.abs(offset) === 1;
          const isHidden = Math.abs(offset) > 1;

          const translateX = offset * 68; // % del contenedor
          const scale = isActive ? 1 : isAdjacent ? 0.72 : 0.5;
          const opacity = isActive ? 1 : isAdjacent ? 0.45 : 0;
          const zIndex = isActive ? 10 : isAdjacent ? 5 : 1;
          const blur = isActive ? 0 : isAdjacent ? 2 : 8;

          return (
            <div
              key={i}
              onClick={() => {
                if (!isActive) {
                  go(i);
                  resetAuto();
                }
              }}
              style={{
                position: "absolute",
                width: "62vw",
                maxWidth: "320px",
                transform: `translateX(${translateX}%) scale(${scale})`,
                opacity: isHidden ? 0 : opacity,
                zIndex,
                filter: `blur(${blur}px)`,
                transition: isDragging
                  ? "none"
                  : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.45s ease, filter 0.45s ease",
                cursor: isActive ? "grab" : "pointer",
                transformOrigin: "center center",
              }}
            >
              <img
                src={src}
                alt={labels[i]}
                draggable={false}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  // Sombra más pronunciada en el activo
                  filter: isActive
                    ? "drop-shadow(0 24px 40px rgba(0,0,0,0.35))"
                    : "none",
                  borderRadius: "8px",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              go(i);
              resetAuto();
            }}
            style={{
              width: i === active ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              border: "none",
              background: i === active ? "#1a1a1a" : "rgba(0,0,0,0.2)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.35s cubic-bezier(0.25,1,0.5,1), background 0.35s",
            }}
            aria-label={`Ir a ${labels[i]}`}
          />
        ))}
      </div>
    </div>
  );
}
function DesktopShowcase({
  image1,
  image2,
  image3,
  image4,
}: DeviceShowcaseProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;
    const img4 = img4Ref.current;

    if (!wrapper || !img1 || !img2 || !img3 || !img4) return;

    gsap.set([img2, img3], { x: "-120vw", opacity: 0 });
    gsap.set(img4, { x: "120vw", opacity: 0 });
    gsap.set(img1, { opacity: 1, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,
      },
    });

    tl.to(img2, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0.15);
    tl.to(img3, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0.28);
    tl.to(img4, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0.42);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", height: "150vh", width: "100%" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "clamp(300px, 60vw, 1000px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Monitor */}
          <div
            ref={img1Ref}
            style={{ width: "100%", willChange: "transform, opacity", zIndex: 1 }}
          >
            <img
              src={image1}
              alt="Panel de control desktop"
              style={{ width: "100%", height: "auto", display: "block" }}
              draggable={false}
            />
          </div>

          {/* Teléfono 1 */}
          <div
            ref={img2Ref}
            style={{
              position: "absolute",
              bottom: "2%",
              left: "-2%",
              width: "clamp(150px, 11%, 130px)",
              willChange: "transform, opacity",
              zIndex: 3,
            }}
          >
            <img
              src={image2}
              alt="Mobile - Mapa de plantas"
              style={{ width: "100%", height: "auto", display: "block" }}
              draggable={false}
            />
          </div>

          {/* Teléfono 2 */}
          <div
            ref={img3Ref}
            style={{
              position: "absolute",
              bottom: "2%",
              left: "15%",
              width: "clamp(150px, 11%, 130px)",
              willChange: "transform, opacity",
              zIndex: 3,
            }}
          >
            <img
              src={image3}
              alt="Mobile - Quick View"
              style={{ width: "100%", height: "auto", display: "block" }}
              draggable={false}
            />
          </div>

          {/* Tablet */}
          <div
            ref={img4Ref}
            style={{
              position: "absolute",
              bottom: "2%",
              right: "-6%",
              width: "clamp(260px, 50%, 400px)",
              willChange: "transform, opacity",
              zIndex: 3,
            }}
          >
            <img
              src={image4}
              alt="Vista tablet"
              style={{ width: "100%", height: "auto", display: "block" }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DeviceShowcase({
  image1,
  image2,
  image3,
  image4,
}: DeviceShowcaseProps) {
  const isMobile = useIsMobile();

  const images = [image1, image2, image3, image4];
  const labels = ["Desktop", "Mobile – Mapa", "Mobile – Quick View", "Tablet"];

  if (isMobile) {
    return <MobileCarousel images={images} labels={labels} />;
  }

  return (
    <DesktopShowcase
      image1={image1}
      image2={image2}
      image3={image3}
      image4={image4}
    />
  );
}