import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../assets/images/FuelPreHeaters/Gallery/PREH1.webp"
import img2 from "../../assets/images/FuelPreHeaters/FPH1.webp"
import img3 from "../../assets/images/FuelPreHeaters/FPH4.webp"

gsap.registerPlugin(ScrollTrigger);

type Highlight = { word: string; color: string };

interface BaseCard {
  id: number;
  title: string;
}

interface VideoCard extends BaseCard {
  type: "video";
  videoSrc: string;
  highlightWords: Highlight[];
  body: string;
}

interface ProductCard extends BaseCard {
  type: "product";
  imageSrc: string;
  body: string;
}

interface FeatureCard extends BaseCard {
  type: "feature";
  imageSrc: string;
  paragraphs: string[];
  bullet?: string;
  footer?: string;
}

interface ProtectionCard extends BaseCard {
  type: "protection";
  imageSrc: string;
  body: string;
}

type CardData = VideoCard | ProductCard | FeatureCard | ProtectionCard;

const HIGHLIGHT = "#58a25f";

const CARDS: CardData[] = [
  {
    id: 1,
    type: "video",
    videoSrc: "/Videos/Webm/bprov1.webm",
    title: "Sin humo, sin residuos, sin fallas prematuras",
    highlightWords: ["humo", "residuos", "fallas"].map((word) => ({ word, color: HIGHLIGHT })),
    body: "El combustible sin calentar suele provocar una combustión incompleta, generando humo y dejando gotas sin quemar. Contaminando la mezcla asfáltica, reduciendo la vida del pavimento, los gases residuales contaminan fuertemente, muy visiblemente y de olores. El precalentamiento elimina todos estos problemas.",
  },
  {
    id: 2,
    type: "product",
    imageSrc: img1.src,
    title: "Use combustibles de bajo costo sin sacrificar eficiencia",
    body: "La combustión con combustibles pesados o económicos es más difícil sin precalentamiento. Con el precalentador de combustible, los quemadores pueden utilizar combustibles más económicos y aun así lograr una combustión limpia, reduciendo los costos de operación sin afectar el desempeño.",
  },
  {
    id: 3,
    type: "feature",
    imageSrc: img2.src,
    title: "Calentamiento eléctrico",
    paragraphs: [
      "El precalentador de combustible utiliza un sistema de resistencias eléctricas en línea capaz de elevar la temperatura del combustible a la temperatura necesaria.",
      "Este calentamiento rápido y ajustable, reduce la viscosidad del combustible a menos de 70 SSU, asegurando una correcta atomización y una combustión limpia, sin retrasos ni fuentes externas de calor.",
    ],
    bullet:
      "Se ajusta la temperatura para que el combustible reduzca su viscosidad a 70 SSU, la cuál es medida por un viscosímetro de paso integrado.",
    footer: "Con esto usted ahorra mucho dinero",
  },
  {
    id: 4,
    type: "protection",
    imageSrc: img3.src,
    title: "Protege los componentes de su planta",
    body: "La combustión incompleta genera acumulación de hollín en el quemador, obstrucciones en los filtros de mangas e incluso posibles daños en el tambor mezclador. El precalentador asegura una combustión completa, manteniendo el sistema limpio y reduciendo significativamente las necesidades de mantenimiento.",
  },
];

const INDICATOR_COLORS = ["#ffffff", "#000000", "#000000", "#000000"];
const DEPTH_SCALE_STEP = 0.035;
const DEPTH_Y_STEP = 10;
const SCRUB = 1.2;
const MOBILE_BLUR_PX = 10;

const depthStyle = (depth: number) => ({
  scale: 1 - depth * DEPTH_SCALE_STEP,
  y: depth * DEPTH_Y_STEP,
  borderRadius: depth === 0 ? 0 : 14,
});

function HighlightTitle({
  title,
  highlights,
  className = "",
}: {
  title: string;
  highlights: Highlight[];
  className?: string;
}) {
  const colorMap = Object.fromEntries(highlights.map((h) => [h.word, h.color]));
  const words = title.split(" ");

  return (
    <h2 className={className}>
      {words.map((w, i) => {
        const clean = w.replace(/[,.:;!?]/g, "");
        const punct = w.slice(clean.length);
        const color = colorMap[clean];
        return (
          <span key={i} style={color ? { color } : undefined}>
            {clean}
            {punct}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </h2>
  );
}

const TITLE_CLASS =
  "text-2xl sm:text-3xl md:text-4xl md:font-black tracking-tight leading-tight";
const BODY_CLASS = "mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed";
const CONTAINER_CLASS =
  "w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-12";

function SplitLayout({
  bg,
  reverse = false,
  media,
  children,
}: {
  bg: string;
  reverse?: boolean;
  media: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`w-full h-full flex items-center ${bg}`}>
      <div className={CONTAINER_CLASS}>
        {!reverse && media}
        <div className="flex-1 text-gray-900">{children}</div>
        {reverse && media}
      </div>
    </div>
  );
}

const ProductImage = ({ src, alt, sizes }: { src: string; alt: string; sizes: string }) => (
  <div className={`flex-shrink-0 ${sizes}`}>
    <img src={src} alt={alt} className="w-full h-auto object-contain drop-shadow-2xl" />
  </div>
);

/* ====== DESKTOP CONTENT (sin cambios visibles) ====== */

function VideoCardContent({ card }: { card: VideoCard }) {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <video
        src={card.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-2xl text-white">
          <HighlightTitle
            title={card.title}
            highlights={card.highlightWords}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
          />
          <p className={`${BODY_CLASS} text-white/75`}>{card.body}</p>
        </div>
      </div>
    </div>
  );
}

function ProductCardContent({ card }: { card: ProductCard }) {
  return (
    <SplitLayout
      bg="bg-[#f2f2f0]"
      media={<ProductImage src={card.imageSrc} alt={card.title} sizes="w-44 sm:w-60 md:w-72 lg:w-[55%]" />}
    >
      <h2 className={`${TITLE_CLASS} font-black`}>{card.title}</h2>
      <p className={`${BODY_CLASS} text-gray-600 font-thin`}>{card.body}</p>
    </SplitLayout>
  );
}

function FeatureCardContent({ card }: { card: FeatureCard }) {
  return (
    <SplitLayout
      bg="bg-[#eeecea]"
      media={<ProductImage src={card.imageSrc} alt={card.title} sizes="w-32 sm:w-44 md:w-56 lg:w-[55%]" />}
    >
      <h2 className={`${TITLE_CLASS} font-black`}>{card.title}</h2>
      {card.paragraphs.map((p, i) => (
        <p key={i} className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {p}
        </p>
      ))}
      {card.bullet && (
        <ul className="mt-3 sm:mt-4 list-disc list-inside text-sm sm:text-base text-gray-600">
          <li className="leading-relaxed">{card.bullet}</li>
        </ul>
      )}
      {card.footer && (
        <p className="mt-4 sm:mt-6 text-sm sm:text-base font-semibold text-gray-800">
          {card.footer}
        </p>
      )}
    </SplitLayout>
  );
}

function ProtectionCardContent({ card }: { card: ProtectionCard }) {
  return (
    <SplitLayout
      bg="bg-[#f5f5f3]"
      reverse
      media={
        <div className="flex-shrink-0 w-full sm:w-64 md:w-80 lg:w-96">
          <img
            src={card.imageSrc}
            alt={card.title}
            className="w-full h-48 sm:h-64 md:h-72 lg:h-[55%] rounded-xl object-cover shadow-2xl"
          />
        </div>
      }
    >
      <h2 className={`${TITLE_CLASS} font-black`}>{card.title}</h2>
      <p className={`${BODY_CLASS} text-gray-600`}>{card.body}</p>
    </SplitLayout>
  );
}

const CARD_RENDERERS = {
  video: VideoCardContent,
  product: ProductCardContent,
  feature: FeatureCardContent,
  protection: ProtectionCardContent,
} as const;

function CardContent({ card }: { card: CardData }) {
  const Renderer = CARD_RENDERERS[card.type] as React.FC<{ card: CardData }>;
  return <Renderer card={card} />;
}

/* ====== MOBILE CONTENT (nuevo) ======
   - Imagen/video centrado y anclado al fondo de la tarjeta
   - Texto se desliza desde abajo
   - Al desplegarse el texto, se aplica blur al fondo (imagen)
*/

const MOBILE_BG: Record<CardData["type"], string> = {
  video: "bg-black",
  product: "bg-[#f2f2f0]",
  feature: "bg-[#eeecea]",
  protection: "bg-[#f5f5f3]",
};

function MobileCardContent({
  card,
  mediaRef,
  textRef,
}: {
  card: CardData;
  mediaRef: (el: HTMLDivElement | null) => void;
  textRef: (el: HTMLDivElement | null) => void;
}) {
  const isVideo = card.type === "video";
  const textColor = isVideo ? "text-white" : "text-gray-900";
  const bodyColor = isVideo ? "text-white/80" : "text-gray-900";

  return (
    <div className={`relative w-full h-full overflow-hidden ${MOBILE_BG[card.type]}`}>
      {/* Capa media anclada y centrada */}
      <div
        ref={mediaRef}
        className="absolute inset-0 flex items-center justify-center will-change-[filter]"
        style={{ filter: "blur(0px)" }}
      >
        {isVideo ? (
          <video
            src={(card as VideoCard).videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={(card as ProductCard | FeatureCard | ProtectionCard).imageSrc}
            alt={card.title}
            className="max-w-[80%] max-h-[60%] object-contain drop-shadow-2xl"
          />
        )}
      </div>

      {/* Overlay oscurecedor sutil para el video */}
      {isVideo && <div className="absolute inset-0 bg-black/40 pointer-events-none" />}

      {/* Panel de texto que sube desde abajo */}
      <div
        ref={textRef}
        className="relative inset-x-0 bottom-0 px-5 pt-6 pb-10 will-change-transform"
        style={{
          transform: "translateY(100%)",
          opacity: 0,
          background: isVideo
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0) 100%)"
            : "",
        }}
      >
        <div className={textColor}>
          {isVideo ? (
            <HighlightTitle
              title={card.title}
              highlights={(card as VideoCard).highlightWords}
              className="text-2xl font-black tracking-tight leading-tight"
            />
          ) : (
            <h2 className="text-2xl font-black tracking-tight leading-tight">{card.title}</h2>
          )}

          {card.type === "feature" ? (
            <>
              {card.paragraphs.map((p, i) => (
                <p key={i} className={`mt-3 text-sm leading-relaxed ${bodyColor}`}>
                  {p}
                </p>
              ))}
              {card.bullet && (
                <ul className={`mt-3 list-disc list-inside text-sm ${bodyColor}`}>
                  <li className="leading-relaxed">{card.bullet}</li>
                </ul>
              )}
              {card.footer && (
                <p className="mt-4 text-sm font-semibold text-gray-800">{card.footer}</p>
              )}
            </>
          ) : (
            <p className={`mt-4 text-sm leading-relaxed ${bodyColor}`}>
              {(card as VideoCard | ProductCard | ProtectionCard).body}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function StackScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  // refs específicos del layout móvil
  const mobileMediaRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileTextRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const dots = dotsRef.current.filter(Boolean) as HTMLDivElement[];
      const total = cards.length;

      const animateDots = (activeIndex: number) =>
        dots.forEach((dot, i) =>
          gsap.to(dot, {
            height: i === activeIndex ? 32 : 8,
            opacity: i === activeIndex ? 1 : 0.4,
            duration: 0.35,
            ease: "power2.out",
          })
        );

      cards.forEach((card, i) =>
        gsap.set(card, {
          ...depthStyle(i),
          yPercent: 0,
          zIndex: total - i,
          transformOrigin: "top center",
        })
      );

      dots.forEach((dot, i) =>
        gsap.set(dot, { height: i === 0 ? 32 : 8, opacity: i === 0 ? 1 : 0.4 })
      );

      // === Stack scroll (igual para mobile y desktop) ===
      for (let i = 0; i < total - 1; i++) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: `top+=${i * window.innerHeight} top`,
            end: `top+=${(i + 1) * window.innerHeight} top`,
            scrub: SCRUB,
            onEnter: () => animateDots(i + 1),
            onLeaveBack: () => animateDots(i),
          },
        });

        tl.to(cards[i], { yPercent: -105, ease: "none" }, 0);

        for (let j = i + 1; j < total; j++) {
          tl.to(cards[j], { ...depthStyle(j - (i + 1)), ease: "none" }, 0);
        }
      }

      // === Animaciones SOLO mobile: texto sube + blur en imagen ===
      const mm = gsap.matchMedia();
      mm.add("(max-width: 639px)", () => {
        const medias = mobileMediaRef.current.filter(Boolean) as HTMLDivElement[];
        const texts = mobileTextRef.current.filter(Boolean) as HTMLDivElement[];

        const triggers: ScrollTrigger[] = [];

        texts.forEach((textEl, i) => {
          const mediaEl = medias[i];
          if (!textEl || !mediaEl) return;

          // Estado inicial
          gsap.set(textEl, { yPercent: 100, opacity: 0 });
          gsap.set(mediaEl, { filter: "blur(0px)" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              // Anima durante el primer 60% de la "ventana" de la tarjeta
              start: `top+=${(i - 0.4) * window.innerHeight} top`,
              end: `top+=${(i + 0.2) * window.innerHeight} top`,
              scrub: SCRUB,
            },
          });

          tl.to(textEl, { yPercent: 0, opacity: 1, ease: "none" }, 0)
            .to(
              mediaEl,
              { filter: `blur(${MOBILE_BLUR_PX}px)`, ease: "none" },
              0
            );

          if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
        });

        return () => {
          triggers.forEach((t) => t.kill());
        };
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${CARDS.length * 100}vh` }}
      className="relative w-full"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ willChange: "transform, border-radius" }}
          >
            {/* Desktop: layout original */}
            <div className="hidden sm:block w-full h-full">
              <CardContent card={card} />
            </div>

            {/* Mobile: nuevo layout con imagen anclada + texto que sube */}
            <div className="lg:hidden md:hidden w-full h-full relative">
              <MobileCardContent
                card={card}
                mediaRef={(el) => { mobileMediaRef.current[i] = el; }}
                textRef={(el) => { mobileTextRef.current[i] = el; }}
              />
            </div>
          </div>
        ))}

        <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-[6px]">
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { dotsRef.current[i] = el; }}
              className="w-[3px] rounded-full"
              style={{ backgroundColor: INDICATOR_COLORS[i], height: 8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
