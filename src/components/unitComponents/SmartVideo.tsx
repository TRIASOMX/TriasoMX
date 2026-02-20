import React, { useRef, useEffect, useState } from 'react';

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
  isPosterHighPriority = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    setIsMobile(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting && !isVideoLoaded) {
          setIsVideoLoaded(true);
        }

        const shouldAutoplay = !isMobile || (isMobile && autoplayOnMobile);

        if (isVideoLoaded && shouldAutoplay) {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {});
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        }
      });
    }, { threshold: 0.5 });

    observer.observe(video);
    return () => video && observer.unobserve(video);
  }, [isMobile, isVideoLoaded, autoplayOnMobile]);

  const currentWidth = isMobile ? width : (desktopWidth ?? width);
  const currentHeight = isMobile ? height : (desktopHeight ?? height);

  const showControls = isMobile && !autoplayOnMobile;
  const isMuted = !isMobile || autoplayOnMobile;

  return (
    <div
      className={`smart-video-container ${className}`}
      style={{ position: 'relative', width: currentWidth, height: currentHeight }}
    >
      {poster && !isPlaying && showControls === false && (
        <img
          src={poster}
          aria-hidden="true"
          fetchPriority={isPosterHighPriority ? 'high' : 'auto'}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            opacity: isPlaying ? 0 : 1,
            transition: 'opacity 0.3s ease',
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
        width="100%"
        height="100%"
        controls={showControls}
        muted={isMuted}
        loop={isLoop}
        playsInline
        preload="none"
        style={{
          objectFit: 'cover',
          display: 'block',
          background: "#f4f5f6",
          position: 'relative',
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default SmartVideo;