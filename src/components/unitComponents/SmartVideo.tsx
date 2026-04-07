import React, { useRef, useEffect, useState } from "react";

interface SmartVideoProps {
  src: string;
  poster?: any;
  width?: string | number;
  height?: string | number;
  className?: string;
  classVideo?: string;
  autoplayOnMobile?: boolean;
  isLoop?: boolean;
  desktopWidth?: string | number;
  desktopHeight?: string | number;
  /**
   * Aspect ratio del video, e.g. "16/9", "4/3", "1/1", "9/16"
   * Si se define, se usa en lugar de height para reservar el espacio
   * y evitar el salto al cargar el video.
   * @default undefined
   */
  aspectRatio?: string;
  /**
   * @default false
   */
  isPosterHighPriority?: boolean;
}

const SmartVideo: React.FC<SmartVideoProps> = ({
  src,
  poster,
  width = "100%",
  height = "auto",
  className = "",
  classVideo = "",
  autoplayOnMobile = false,
  isLoop = false,
  desktopHeight,
  desktopWidth,
  aspectRatio,
  isPosterHighPriority = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoLoaded) {
            setIsVideoLoaded(true);
          }
          const shouldAutoplay = !isMobile || (isMobile && autoplayOnMobile);
          if (isVideoLoaded && shouldAutoplay) {
            if (entry.intersectionRatio >= 0.5) {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);

              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                    setHasPlayedOnce(true);
                  })
                  .catch(() => {});
              }
            } else if (entry.intersectionRatio <= 0.1) {
              video.pause();
              timeoutRef.current = setTimeout(() => {
                setIsPlaying(false);
              }, 800);
            }
          }
        });
      },
      { threshold: [0.05, 0.5] },
    );
    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isMobile, isVideoLoaded, autoplayOnMobile]);

  const currentWidth = isMobile ? width : (desktopWidth ?? width);
  const currentHeight = isMobile ? height : (desktopHeight ?? height);

  const showControls = isMobile && !autoplayOnMobile;
  const isMuted = !isMobile || autoplayOnMobile;

  // Si se pasa aspectRatio, se usa para reservar el espacio del contenedor.
  // Si no, se usa height como antes para no romper usos existentes.
  const containerStyle: React.CSSProperties = aspectRatio
    ? {
        position: "relative",
        width: currentWidth,
        aspectRatio,
        overflow: "hidden", // 👈 evita que el video absolute se desborde
      }
    : {
        position: "relative",
        width: currentWidth,
        height: currentHeight,
      };

  // Cuando hay aspectRatio, el video ocupa todo el contenedor.
  // Sin aspectRatio, se comporta como antes.
  const videoStyle: React.CSSProperties = aspectRatio
    ? {
        objectFit: "cover",
        display: "block",
        background: "#f4f5f6",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }
    : {
        objectFit: "cover",
        display: "block",
        background: "#f4f5f6",
        position: "relative",
        zIndex: 0,
      };

  return (
    <div
      className={`smart-video-container ${className}`}
      style={containerStyle}
    >
      {poster && showControls === false && (
        <img
          src={poster}
          aria-hidden="true"
          fetchPriority={isPosterHighPriority ? "high" : "auto"}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            opacity: hasPlayedOnce ? 0 : 1,
            transition: "opacity 0.4s ease",
            zIndex: 1,
          }}
          alt=""
        />
      )}

      <video
        className={classVideo}
        ref={videoRef}
        poster={showControls ? poster : undefined}
        src={isVideoLoaded ? src : undefined}
        controls={showControls}
        muted={isMuted}
        loop={isLoop}
        playsInline
        preload="none"
        style={videoStyle}
      />
    </div>
  );
};

export default SmartVideo;