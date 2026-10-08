import React, { useEffect, useState } from "react";
import SmartVideo from "./SmartVideo";

type SmartVideoProps = React.ComponentProps<typeof SmartVideo>;

interface ResponsiveVideoProps extends SmartVideoProps {
  /** Video que se carga en mobile (≤768px). `src` se usa en desktop. */
  mobileSrc: string;
  /** Poster para mobile. Si no se pasa, se usa `poster`. */
  mobilePoster?: any;
  /** Aspect ratio para mobile, e.g. "9/16". Si no se pasa, se usa `aspectRatio`. */
  mobileAspectRatio?: string;
}

// Mismo breakpoint que SmartVideo para que ambos decidan igual qué es mobile.
const MOBILE_QUERY = "(max-width: 768px)";

type Device = "mobile" | "desktop";

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({
  src,
  poster,
  aspectRatio,
  mobileSrc,
  mobilePoster,
  mobileAspectRatio,
  ...rest
}) => {
  const [device, setDevice] = useState<Device | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(MOBILE_QUERY);

    setDevice(mediaQuery.matches ? "mobile" : "desktop");

    const handleChange = (e: MediaQueryListEvent) =>
      setDevice(e.matches ? "mobile" : "desktop");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const mPoster = mobilePoster ?? poster;
  const mAspectRatio = mobileAspectRatio ?? aspectRatio;

  // Antes de saber el dispositivo (SSR / primer render) no se monta ningún
  // <video>, para no descargar el equivocado. Se reserva el espacio y se
  // muestra el poster correcto solo con CSS.
  if (device === null) {
    const hasAspect = Boolean(aspectRatio || mAspectRatio);
    const toCss = (v: string | number) => (typeof v === "number" ? `${v}px` : v);
    const mWidth = rest.width ?? "100%";
    const placeholderStyle = {
      position: "relative",
      "--w-m": toCss(mWidth),
      "--w-d": toCss(rest.desktopWidth ?? mWidth),
      overflow: "hidden",
      background: "#f4f5f6",
      ...(hasAspect
        ? {
            "--ar-m": mAspectRatio ?? "auto",
            "--ar-d": aspectRatio ?? "auto",
          }
        : { height: rest.height ?? "auto" }),
    } as unknown as React.CSSProperties;

    const imgStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      pointerEvents: "none",
    };

    return (
      <div
        className={`smart-video-container [width:var(--w-m)] min-[769px]:[width:var(--w-d)] ${
          hasAspect
            ? "[aspect-ratio:var(--ar-m)] min-[769px]:[aspect-ratio:var(--ar-d)]"
            : ""
        } ${rest.className ?? ""}`}
        style={placeholderStyle}
      >
        {mPoster && (
          <img
            src={mPoster}
            alt=""
            aria-hidden="true"
            className="min-[769px]:hidden"
            style={imgStyle}
          />
        )}
        {poster && (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="hidden min-[769px]:block"
            fetchPriority={rest.isPosterHighPriority ? "high" : "auto"}
            style={imgStyle}
          />
        )}
      </div>
    );
  }

  const isMobile = device === "mobile";

  // `key` fuerza remount al cruzar el breakpoint, así el video nuevo
  // arranca desde cero con su propio poster.
  return (
    <SmartVideo
      key={device}
      {...rest}
      src={isMobile ? mobileSrc : src}
      poster={isMobile ? mPoster : poster}
      aspectRatio={isMobile ? mAspectRatio : aspectRatio}
    />
  );
};

export default ResponsiveVideo;
