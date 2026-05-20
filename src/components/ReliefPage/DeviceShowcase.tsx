import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DeviceShowcaseProps {
  image1: string; 
  image2: string; 
  image3: string; 
  image4: string; 
}

export default function DeviceShowcase({
  image1,
  image2,
  image3,
  image4,
}: DeviceShowcaseProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;
    const img4 = img4Ref.current;

    if (!wrapper || !sticky || !img1 || !img2 || !img3 || !img4) return;

    // Initial states
    gsap.set([img2, img3], { x: "-120vw", opacity: 0 });
    gsap.set(img4, { x: "120vw", opacity: 0 });
    gsap.set(img1, { opacity: 1, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,   // El wrapper tall es el trigger
        start: "top top",
        end: "bottom bottom", // El wrapper tiene 300vh así que scrollea 3 pantallas
        scrub: 1.4,
        // NO usamos pin aquí — el sticky lo manejamos con CSS position:sticky
      },
    });

    // Paso 2 — teléfonos entran desde la izquierda
    tl.to(img2, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0.15);
    tl.to(img3, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0.28);

    // Paso 3 — tablet entra desde la derecha
    tl.to(img4, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0.42);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    /*
      WRAPPER: altura grande para crear el "espacio de scroll".
      300vh = 3 pantallas de scroll para completar la animación.
      No tiene overflow:hidden para que GSAP funcione bien.
    */
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        height: "150vh",
        width: "100%",
      }}
    >
      {/*
        STICKY: se queda fijo mientras el wrapper hace scroll.
        Esto reemplaza pin:true de GSAP y evita conflictos con ancestros.
      */}
      <div
        ref={stickyRef}
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

        {/* Layout: [teléfonos] [monitor] [tablet] */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(8px, 1.5vw, 28px)",
            width: "100%",
            maxWidth: "1400px",
            padding: "0 2vw",
            boxSizing: "border-box",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "clamp(6px, 1vh, 16px)",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <div
              ref={img2Ref}
              style={{
                width: "clamp(80px, 9vw, 148px)",
             
                willChange: "transform, opacity",
              }}
            >
              <img
                src={image2}
                alt="Mobile - Mapa de plantas"
                style={{ width: "100%", height: "auto", display: "block" }}
                draggable={false}
              />
            </div>

            <div
              ref={img3Ref}
              style={{
                width: "clamp(80px, 9vw, 148px)",
               
                willChange: "transform, opacity",
              }}
            >
              <img
                src={image3}
                alt="Mobile - Quick View"
                style={{ width: "100%", height: "auto", display: "block" }}
                draggable={false}
              />
            </div>
          </div>

          {/* CENTRO — Monitor dominante */}
          <div
            ref={img1Ref}
            style={{
              flex: "0 0 auto",
              width: "clamp(300px, 46vw, 700px)",
              willChange: "transform, opacity",
              zIndex: 2,
            }}
          >
            <img
              src={image1}
              alt="Panel de control desktop"
              style={{ width: "100%", height: "auto", display: "block" }}
              draggable={false}
            />
          </div>

          {/* DERECHA — Tablet */}
          <div
            ref={img4Ref}
            style={{
              width: "clamp(160px, 20vw, 340px)",
              flexShrink: 0,
              willChange: "transform, opacity",
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