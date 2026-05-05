import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(): void {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
            ".hero-img",
            { scale: 1.3 },
            {
                scale: 1.1,
                scrollTrigger: {
                    trigger: ".hero-img",
                    start: "top 80%",
                    end: "top 20%",
                    markers:false,
                    scrub: true,
                },
            }
        );
        gsap.fromTo(
            ".side-img",
            { scale: 1.2 },
            {
                scale:1.1,
                y: 0,
                scrollTrigger: {
                    trigger: ".side-img",
                    start: "top 85%",
                    end: "top 40%",
                    scrub: true,
                },
                ease: "none",
            }
        );

        gsap.fromTo(
            ".fade-img",
            { y: 60 },
            {
                y: -100,
                scrollTrigger: {
                    trigger: ".fade-img",
                    start: "top 90%",
                    end: "top 40%",
                    scrub: true,
                },
                ease: "none",
            }
        );
    });
}
