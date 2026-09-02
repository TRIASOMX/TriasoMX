import { useEffect, useRef, useState } from "react";

export type GalleryVideo = {
  id: number;
  videoId: string;
  title: string;
  description: string;
};

function VideoCard({ video }: { video: GalleryVideo }) {
  const [playing, setPlaying] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // hqdefault existe siempre para un video público; maxresdefault no está
  // disponible en subidas viejas (devuelve un placeholder gris con 404).
  const thumbSrc = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;

  // Si la miniatura ya venía en caché, onLoad no vuelve a dispararse tras hidratar.
  useEffect(() => {
    if (imgRef.current?.complete) setThumbLoaded(true);
  }, []);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-grisPP/20 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden bg-grisSubP">
        {/* Poster de baja resolución: carga casi instantánea y sirve de fondo
            mientras entra la miniatura en alta (o el iframe al reproducir). */}
        <img
          src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full scale-110 object-cover blur-md ${
            !playing && !thumbLoaded ? "animate-pulse" : ""
          }`}
        />
        {!playing && (
          <>
            <img
              ref={imgRef}
              src={thumbSrc}
              alt={`Miniatura del video: ${video.title}`}
              loading="lazy"
              decoding="async"
              onLoad={() => setThumbLoaded(true)}
              onError={() => setThumbLoaded(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                thumbLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Reproducir video: ${video.title}`}
              className="group absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/25"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-redBg text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </>
        )}
        {playing && (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h2 className="text-lg font-bold text-grisT">{video.title}</h2>
        <p className="text-sm text-grisPPP">{video.description}</p>
      </div>
    </article>
  );
}

export default function VideoGallery({ videos }: { videos: GalleryVideo[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
