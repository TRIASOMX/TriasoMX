import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import render from "../../assets/images/AsphaltPlant/render.webp"

import icon1 from "../../assets/images/AsphaltPlant/lowM.svg";
import icon2 from "../../assets/images/AsphaltPlant/highP.svg";
import icon3 from "../../assets/images/AsphaltPlant/highQ.svg";
import icon4 from "../../assets/images/AsphaltPlant/ecoS.svg";
import icon5 from "../../assets/images/AsphaltPlant/highPorta.svg";
import icon6 from "../../assets/images/AsphaltPlant/ecoL.svg";
import icon7 from "../../assets/images/AsphaltPlant/upT.svg";
import icon8 from "../../assets/images/AsphaltPlant/cont.svg";
import icon9 from "../../assets/images/AsphaltPlant/lowF.svg";

const items = [
    { text: "MANTENIMIENTO MINIMO", img: icon1 },
    {
        text: "ALTA PRODUCTIVIDAD",
        img: icon2,
    },
    {
        text: "MEZCLA ASFÁLTICA DE ALTA CALIDAD",
        img: icon3,
    },
    {
        text: "CUMPLIMIENTO DE NORMAS ECOLÓGICAS ",
        img: icon4,
    },
    {
        text: "COMPLETAMENTE MÓVIL",
        img: icon5,
    },
    {
        text: "LARGA VIDA ÚTIL Y ECONÓMICA",
        img: icon6,
    },
    {
        text: "HASTA 50% DE RAP",
        img: icon7,
    },
    {
        text: "OPERACIÓN CONTINUA",
        img: icon8,
    },
    {
        text: "BAJO CONSUMO DE COMBUSTIBLE",
        img: icon9,
    },
];

gsap.registerPlugin(ScrollTrigger);

interface CardData {
    bg: string;
    scrollWeight: number;
    content: React.ReactNode;
}

interface Item {
    text: string;
    img: ImageMetadata;
}

const Tagline = ({ word, light = false }: { word: string; light?: boolean }) => (
    <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-10 gap-2 ${light ? "text-white" : "text-[#393939]"}`}>
        <p className="text-sm sm:text-base lg:text-xl font-bold">La planta de asfalto más</p>
        <p className="text-2xl sm:text-3xl lg:text-5xl font-bold">{word}</p>
    </div>
);

const CARDS: CardData[] = [
    {
        bg: "bg-[#fffaea]",
        scrollWeight: 0.8,
        content: (
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 lg:mb-6">
                    Desde 10 hasta 600 Tph
                </h1>
                <p className="text-sm sm:text-base">Plantas de asfalto ideales para cada trabajo;</p>
                <p className="text-sm sm:text-base">desde los más <span className="text-xs">pequeños</span></p>
                <p className="text-sm sm:text-base">hasta los <span className="font-bold text-lg sm:text-xl">grandes</span></p>

                <div className="space-y-2 lg:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed mt-4">
                    <h2 className="font-bold text-sm sm:text-base">
                        Sabemos que la operación de muchos equipos depende de la confiabilidad de su planta de asfalto
                    </h2>
                    <p className="text-xs sm:text-sm lg:text-base">
                        Por eso nos enfocamos en ofrecer esta planta de asfalto, que sobre todo está diseñada y fabricada para una producción continua sin costosas fallas imprevistas y un diseño superior para realzar el nombre de nuestros clientes.
                    </p>
                </div>

                <Tagline word="MODERNA" />
            </div>
        ),
    },
    {
        bg: "bg-white",
        scrollWeight: 1.2,
        content: (
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 space-y-4 lg:space-y-5">
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 place-items-center gap-3 sm:gap-5 lg:gap-8 w-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center text-center w-full ${
                                items.length % 3 !== 0 && index >= items.length - (items.length % 3)
                                    ? "last:col-span-1"
                                    : ""
                            }`}
                        >
                            <img src={item.img.src} alt="" className="w-12 sm:w-16 lg:w-28" />
                            <p className="text-[10px] sm:text-xs lg:text-base font-bold leading-tight mt-1">{item.text}</p>
                        </div>
                    ))}
                </div>

                <Tagline word="EQUIPADA" />
            </div>
        ),
    },
    {
        bg: "bg-[#14427c]",
        scrollWeight: 2.0,
        content: (
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex flex-col justify-start items-start">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 lg:mb-6 text-white">
                        Somos expertos en lo que hacemos
                    </h1>
                    <p className="text-white text-sm sm:text-base">
                        Con la experiencia que tenemos con más de <span className="font-bold">300</span> plantas de
                    </p>
                    <p className="text-white text-sm sm:text-base">
                        de asfalto fabricadas, hasta inicios de este <span className="font-bold">2026</span>
                    </p>
                </div>

                <div className="flex flex-col justify-end items-end mt-6 lg:mt-10">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl italic mb-4 lg:mb-6 text-white">
                        Con <span className="font-bold">Triaso</span>
                    </h1>
                    <p className="text-white text-xs sm:text-sm lg:text-base text-right">conviértase en el proveedor preferido de mezcla asfáltica</p>
                    <p className="text-white text-xs sm:text-sm lg:text-base text-right">para todos los proyectos de pavimentación en su región</p>
                </div>

                <Tagline word="CONFIABLE" light />
            </div>
        ),
    },
    {
        bg: "bg-[#393939]",
        scrollWeight: 1.0,
        content: (
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 lg:mb-6 text-white">
                    100% fabricantes
                </h2>
                <p className="text-white font-bold text-sm sm:text-base">Con nosotros usted trabaja directamente con el</p>
                <p className="text-white font-bold text-sm sm:text-base">fabricante -sin intermediarios ni distribuidores.</p>

                <div className="space-y-2 lg:space-y-4 text-white mt-4 text-sm sm:text-base">
                    <p className="font-bold text-xs sm:text-sm lg:text-base">Producimos la mayoría de los componentes directamente — no dependemos de subcontratistas, con lo que obtenemos ventajas significativas:</p>
                    <ul className="list-disc pl-5 text-xs sm:text-sm lg:text-base space-y-1">
                        <li>Precios competitivos sin intermediarios</li>
                        <li>Conocimiento técnico amplio y al detalle, que asegura un servicio excepcional al cliente.</li>
                        <li>Personalización para adaptarse a las necesidades específicas de cada cliente.</li>
                        <li>Disponibilidad inmediata de refacciones.</li>
                    </ul>
                </div>
                <Tagline word="PRODUCTIVA" light />
            </div>
        ),
    },
];


const getOffset = () => {
    if (typeof window === "undefined") return 80;
    if (window.innerWidth < 640) return 40;
    if (window.innerWidth < 1024) return 80;
    return 80;
};

export default function DominoCards() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const cards = cardRefs.current;
        const image = imageRef.current;
        const vh = window.innerHeight;
        const OFFSET = getOffset();

        const totalScrollPx = CARDS.reduce((sum, c) => sum + c.scrollWeight, 0) * vh;

        cards.forEach((card, i) => {
            gsap.set(card, {
                top: i * OFFSET,
                y: i === 0 ? 0 : vh,
                zIndex: i + 1,
            });
            // Update card height for responsive offset
            card.style.height = `calc(100vh - ${i * OFFSET}px)`;
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: `+=${totalScrollPx}`,
                pin: true,
                scrub: true,
                anticipatePin: 1,
                onLeave: () => {
                    if (!image) return;
                    image.style.position = "absolute";
                    image.style.bottom = "2rem";
                },
                onEnterBack: () => {
                    if (!image) return;
                    image.style.position = "fixed";
                    image.style.bottom = "1.5rem";
                },
            },
        });

        let accumulated = 0;
        cards.forEach((card, i) => {
            if (i === 0) {
                accumulated += CARDS[i].scrollWeight;
                return;
            }
            tl.to(card, { y: 0, ease: "power2.out", duration: CARDS[i].scrollWeight }, accumulated);
            accumulated += CARDS[i].scrollWeight;
        });

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, []);

    return (
        <section className="relative w-full">
            <div
                ref={wrapperRef}
                id="stack-wrapper"
                className="relative w-full overflow-hidden"
                style={{ height: "100vh" }}
            >
                {/* Render image - smaller on mobile, hidden on very small screens if needed */}
                <div
                    ref={imageRef}
                    className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-auto max-w-4xl"
                >
                    <img src={render.src} alt="Planta de asfalto" className="w-full h-auto" />
                </div>

                {/* ── CARDS ── */}
                <div className="relative w-full h-full">
                    {CARDS.map((card, index) => (
                        <article
                            key={index}
                            ref={(el) => { if (el) cardRefs.current[index] = el; }}
                            className="stack-card absolute left-0 w-full"
                            data-index={index}
                        >
                            <div
                                className={`
                                    w-full h-full rounded-t-2xl sm:rounded-t-3xl shadow-xl
                                    px-4 sm:px-8 md:px-14 lg:px-20 
                                    py-6 sm:py-8 md:py-12 lg:py-16
                                    overflow-y-auto
                                    ${card.bg}
                                `}
                            >
                                {card.content}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}