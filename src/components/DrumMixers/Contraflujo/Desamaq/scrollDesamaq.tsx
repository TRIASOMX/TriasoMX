import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(): void {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.fromTo(
      ".hero-img",
      { scale: 1.0 },
      {
        scale: 1.1,
        scrollTrigger: {
          trigger: ".hero-img",
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".side-img",
      { y: 200,
        scale:1.2
       },

      {
        scale:1.2,
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

    gsap.fromTo(
      ".dhero-img",
      { scale: 1.0 },
      {
        scale: 1.1,
        scrollTrigger: {
          trigger: ".hero-img",
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".dside-img",
      { y: 200,
        scale:1.2
       },

      {
        scale:1.2,
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
      ".dfade-img",
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

  gsap.fromTo(
    ".reveal",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    
      scrollTrigger: {
        trigger: ".reveal",
        start: "top 90%",
        toggleActions: "play none none none",
        scrub:true
      },
    }
  );
}
