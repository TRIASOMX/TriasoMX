import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/images/Relief/TriasoOS2.webp";
import img2 from "../../assets/images/Relief/TriasoOS4.webp";
import img3 from "../../assets/images/Relief/TriasoOS3.webp";

gsap.registerPlugin(ScrollTrigger);

export default function ReliefFourthSection() {
    //animación 
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    //dropdowns
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);




    //animación
    useEffect(() => {
        if (!sectionRef.current || !titleRef.current || !contentRef.current) return
        if (window.innerWidth < 768) return;

        const ctx = gsap.context(() => {
            gsap.set(sectionRef.current, {
                backgroundColor: "#f4f5f6",
            });

            gsap.set(titleRef.current, {
                y: 50,
                color: "#000",
            });

            gsap.set(contentRef.current, {
                opacity: 0,
                y: 40,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=120%",
                    scrub: 1.5,
                    pin: true,
                    markers:false,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            })
                .to(sectionRef.current, {
                    backgroundColor: "#89adff",
                    ease: "none",
                })
                .to(
                    titleRef.current,
                    {
                        y: 60,
                        ease: "none",
                    },
                    0
                )
                .to(
                    contentRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        ease: "none",
                    },
                    0.3
                );
        }, sectionRef);


        const handleLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
            ctx.revert();
        }
    }, []);


    useEffect(() => {
        dropdownRefs.current.forEach((el, index) => {
            if (!el) return;
            if (openIndex === index) {
                el.style.maxHeight = el.scrollHeight + "px";
            } else {
                el.style.maxHeight = "0px";
            }
        });
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => clearTimeout(timer);
    }, [openIndex]);


    return (
        <div className="">
            {/* dropdowns */}
            <div>
                <div className='bg-gradient-to-r from-[#010106] to-[#2f2db7]'>
                    <div className='flex flex-col items-center justify-around md:flex-row lg:flex-row max-w-7xl mx-auto px-8 py-10 gap-4'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-bold text-3xl text-white'>Ejecución sencilla de diseños de mezcla</h2>
                            <p className='font-bold text-base md:text-lg text-[#d9d9d9] w-full md:w-4/5'>Nuestros sistemas de control están diseñados para simplificar la producción de mezcla asfáltica para pavimentación, desde mezclas tibias hasta mezclas en caliente, sin sacrificar el control ni la precisión.</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <button
                                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                                className="flex items-center gap-2 text-white transition-transform duration-300"
                            >
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0303 13.0303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.9697 11.9697C15.2626 11.6768 15.7374 11.6768 16.0303 11.9697C16.3232 12.2626 16.3232 12.7374 16.0303 13.0303Z" fill="#ffffff"></path></svg>

                                </span>
                            </button>
                        </div>
                    </div>



                    <div
                        ref={(el) => {
                            dropdownRefs.current[0] = el;
                        }}
                        className="w-full max-w-7xl mx-auto px-8 lg:px-0 md:px-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        style={{ maxHeight: "0px" }}
                    >
                        <div className='text-[#d9d9d9] space-y-2 px-4 text-base md:text-lg'>
                            <h2>El operador solo necesita definir la receta de la mezcla:</h2>
                            <ul className='list-disc pl-5'>
                                <li>Temperatura objetivo de la mezcla</li>
                                <li>Capacidad de producción (Tph)</li>
                                <li>Parámetros del diseño de mezcla:</li>
                            </ul>

                            <ul className='list-disc pl-8'>
                                <li>Porcentaje de RAP</li>
                                <li>Porcentaje de agregados vírgenes
                                </li>
                                <li>Contenido de asfalto
                                </li>
                                <li>Aditivos</li>
                            </ul>
                            <p className='text-base md:text-lg'>Una vez ingresados, el sistema administra y coordina automáticamente todo el proceso, produciendo la mezcla asfáltica exactamente como se especificó mediante la adaptación en tiempo real de la velocidad de rotación del secador-mezclador, la intensidad del quemador y la dosificación de materiales.
                            </p>
                            <p className='text-base md:text-lg pb-5'>Reducimos la intervención manual, minimizamos la dependencia del operador y garantizamos resultados consistentes y repetibles en una amplia variedad de diseños de mezcla, incluidas aplicaciones con alto contenido de RAP.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-[#040404] to-[#707070]'>
                    <div className='flex flex-col items-center justify-between md:flex-row lg:flex-row max-w-7xl mx-auto px-8 py-10'>
                        <div className="w-full flex justify-start order-2 md:order-1">
                            <button
                                onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                                className="flex items-center gap-2 text-white transition-transform duration-300"
                            >
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0303 13.0303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.9697 11.9697C15.2626 11.6768 15.7374 11.6768 16.0303 11.9697C16.3232 12.2626 16.3232 12.7374 16.0303 13.0303Z" fill="#ffffff"></path></svg>

                                </span>
                            </button>
                        </div>

                        <div className='flex flex-col gap-3 order-1 md:order-2'>
                            <h2 className='font-bold text-3xl text-white text-end'>Almacenamiento de diseño de mezcla</h2>
                            <h2 className='font-bold text-2xl text-white text-end'>Almacenamiento de diseños de mezcla para más de 10,000 recetas.</h2>
                            <div className='space-y-3 w-full'>
                                <p className='font-bold text-sm md:text-base text-[#d9d9d9] text-end w-full'>No dependemos de métodos primitivos para la aplicación de diseños de mezcla.</p>
                                <p className='font-bold text-sm md:text-base text-[#d9d9d9] text-end'>En cambio, nos enfocamos en una ejecución moderna, rápida y sencilla para la producción de mezcla asfáltica.</p>
                                <p className='font-bold text-sm md:text-base text-[#d9d9d9] text-end'>Los diseños de mezcla son fáciles de ejecutar y administrar para cada uno de sus clientes.</p>
                            </div>

                        </div>

                    </div>

                    <div
                        ref={(el) => {
                            dropdownRefs.current[1] = el;
                        }}
                        className="w-full max-w-7xl mx-auto px-8 lg:px-0 md:px-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        style={{ maxHeight: "0px" }}
                    >
                        <div className='text-[#d9d9d9] space-y-2 px-4 pb-5 text-base md:text-lg'>
                            <ul className='list-disc'>
                                <li>Los diseños de mezcla pueden duplicarse, editarse o versionarse.</li>
                                <li>Cada diseño de mezcla incluye límites automáticos o reglas de validación.</li>
                                <li>Los diseños de mezcla pueden asignarse a clientes o proyectos específicos.</li>
                                <li>El sistema garantiza resultados consistentes y repetibles entre distintos operadores y turnos.</li>
                                <li>La ejecución de la mezcla es asistida por el operador o completamente automática.</li>
                                <li>El sistema almacena historial de producción y datos de desempeño por diseño de mezcla.</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-[#751919] to-[#e02a2a]'>
                    <div className='flex flex-col items-center justify-around md:flex-row lg:flex-row max-w-7xl mx-auto px-8 py-10 gap-4'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-bold text-3xl text-white'>Operación manual</h2>
                            <p className='font-bold text-base md:text-lg text-white w-full md:w-4/5'>Nuestras plantas de asfalto permiten operación manual en cualquier momento, asegurando la continuidad de producción cuando las condiciones de operación lo requieran.</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <button
                                onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                                className="flex items-center gap-2 text-white transition-transform duration-300"
                            >
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0303 13.0303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L11.25 14.1893V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V14.1893L14.9697 11.9697C15.2626 11.6768 15.7374 11.6768 16.0303 11.9697C16.3232 12.2626 16.3232 12.7374 16.0303 13.0303Z" fill="#ffffff"></path></svg>

                                </span>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={(el) => {
                            dropdownRefs.current[2] = el;
                        }}
                        className="w-full max-w-7xl mx-auto px-8 lg:px-0 md:px-0 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        style={{ maxHeight: "0px" }}
                    >
                        <div className='pl-0 lg:pl-12 md:pl-12 space-y-5 px-8 text-lg pb-5'>
                            <p className='text-white'>A diferencia de los sistemas que restringen la intervención manual, nuestras plantas de asfalto están diseñadas para ofrecer control manual total además de automatización avanzada.</p>
                            <p className='font-bold text-white'>Mantenga produciendo mezcla asfáltica <span className=' text-white'>, incluso si algún componente electrónico necesita reemplazo.</span></p>
                            <ul className='list-disc pl-5'>
                                <li className='text-white'>Diseñadas para mantener la continuidad de producción bajo condiciones de operación cambiantes.</li>
                            </ul>
                            <p className='font-bold text-white'>Cambio fluido entre operación automática y manual.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center space-y-5 py-14">
                <div className="flex flex-col justify-center items-center px-4">
                    <h1 className=" font-bold text-2xl md:text-4xl text-center">
                        El funcionamiento de la planta depende de un número menor de operarios,
                    </h1>
                    <h1 className="font-bold text-2xl md:text-4xl text-center">
                        sin que ello afecte al control ni a la calidad de la producción.
                    </h1>
                </div>

                <p className="text-[#393939] font-semibold text-base md:text-xl px-4 w-full md:w-4/5 text-center">
                    No dependa tanto de operadores especializados que se consideran indispensables; ahora cualquier operador no especializado puede aprender rápidamente a manejar su planta y será supervisado.
                </p>
            </div>

            {/* sección animación */}
            <div
                 ref={sectionRef}
                className="relative min-h-screen flex flex-col px-8 py-20 bg-[#86aaff]"
            >
                <h1
                     ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-center mb-0 md:mb-12"
                >
                    Asistencia Triaso® Relief
                </h1>
                <div
                     ref={contentRef}
                    className="flex-1 flex items-center justify-center pt-0 md:pt-10"
                >
                    <div className=" max-w-7xl mx-auto text-center space-y-4 md:space-y-10">
                        <h1 className="text-3xl font-bold text-black">
                            La asistencia de inteligencia artificial más moderna
                        </h1>
                        <h2 className="text-xl font-semibold text-[#393939]">para la operación de plantas de asfalto.</h2>
                        <img src={img3.src} alt="Triaso OS" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#89adff] to-[#f4f5f6]">
                <div className="max-w-7xl mx-auto flex justify-start px-8 ">
                    <div className="space-y-4 md:space-y-10">
                        <h1 className="uppercase font-bold text-black text-4xl md:text-5xl">Haga cualquier pregunta</h1>
                        <p ><span className="text-[#393939] font-semibold  text-3xl md:text-4xl">sobre la operación de su planta de asfalto y  </span><span className="font-bold text-black text-4xl md:text-5xl">reciba asistencia <span className="font-bold text-black text-4xl md:text-5xl">práctica inmediata.</span></span></p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 pt-10 space-y-5">
                <h2 className="font-semibold text-base md:text-xl text-[#393939]">Incluido en todas nuestras plantas de asfalto, este sistema proporciona asistencia rápida y moderna para la operación de la planta, permitiendo a los operadores obtener orientación clara con solo escribir sus preguntas.</h2>
                <div className="flex flex-col justify-center items-center px-4">
                    <ul className="list-disc text-[#14427c]">
                        <li>Identifica de inmediato la ubicación de las fallas en los equipos.</li>
                        <li>Identifica automáticamente el sistema o componente afectado.</li>
                        <li>Explique la causa de las alarmas y las condiciones de funcionamiento.</li>
                        <li>Guíe a los operadores paso a paso a través de las medidas correctivas.</li>
                        <li>Proporcionar recomendaciones operativas basadas en el estado de la planta.</li>
                        <li>Colaborar en la ejecución del diseño de la mezcla y la puesta a punto de la producción.</li>
                        <li>Ayuda a tomar decisiones sobre el funcionamiento manual y automático.</li>
                        <li>Ayude a reducir el tiempo de inactividad agilizando la resolución de problemas.</li>
                        <li>Proporcione explicaciones claras sobre el funcionamiento de la planta y las alertas.</li>
                        <li>Ayudar a los operadores sin necesidad de tener un profundo conocimiento del sistema.</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4 pt-14">

                <div>
                    <h1 className="font-bold text-3xl text-start text-[#393939] w-full md:w-4/6">El sistema de control utiliza tres pasos para alertar al operador y proteger el equipo:</h1>
                    <div className="flex flex-row">
                        <div className="w-40 h-0.5 bg-[#DE3B21]"></div>
                        <div className="w-40 h-0.5 bg-[#D9D9D9]"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 py-10 items-center justify-center">
                    <div>
                        <img src={img2.src} alt="Triaso OS" className="rounded-2xl" />
                    </div>


                    <div className="flex flex-col justify-center mt-6 items-center space-y-5">

                        <div className="flex md:flex-row lg:flex-row items-start justify-center bg-white p-5 rounded-2xl shadow-md gap-3">
                            <div className="w-full md:w-4/5">
                                <h2 className="font-semibold text-xl text-[#393939]">Primera acción</h2>
                                <p className="font-thin text-sm md:text-lg text-[#393939]">El operador es alertado cuando un parámetro comienza a salir del rango ideal.</p>
                            </div>
                            <svg fill="#ca1c1c" width="40" height="40" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number10</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM17.757 22.536h-2.469v-9.305c-0.901 0.841-1.964 1.463-3.188 1.867v-2.234c0.644-0.211 1.344-0.612 2.099-1.202s1.273-1.278 1.555-2.064h2.003v12.938z"></path> </g></svg>
                        </div>


                        <div className="flex md:flex-row lg:flex-row items-start justify-center bg-white p-5 rounded-2xl shadow-md gap-3">
                            <div className="w-full md:w-4/5">
                                <h2 className="font-semibold text-xl text-[#393939]">Segunda acción</h2>
                                <p className="font-thin text-sm md:text-lg text-[#393939]">El operador puede corregirlo manualmente o permitir que la Inteligencia Artificial lo ajuste automáticamente.</p>
                            </div>
                            <svg fill="#c91c1c" width="40" height="40" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number11</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM20.342 20.426v2.297h-8.656c0.093-0.867 0.374-1.688 0.843-2.465 0.468-0.776 1.393-1.807 2.774-3.090 1.111-1.037 1.793-1.74 2.045-2.109 0.34-0.51 0.51-1.014 0.51-1.512 0-0.551-0.147-0.975-0.441-1.271s-0.7-0.444-1.219-0.444c-0.512 0-0.92 0.156-1.223 0.467s-0.478 0.827-0.523 1.549l-2.469-0.247c0.146-1.359 0.605-2.335 1.378-2.928s1.739-0.888 2.898-0.888c1.27 0 2.268 0.343 2.994 1.028s1.089 1.538 1.089 2.557c0 0.58-0.104 1.132-0.312 1.656s-0.537 1.074-0.988 1.647c-0.299 0.38-0.839 0.929-1.621 1.644-0.781 0.714-1.276 1.188-1.484 1.422s-0.376 0.463-0.505 0.686h4.91z"></path> </g></svg>
                        </div>

                        <div className="flex md:flex-row lg:flex-row items-start justify-center bg-white p-5 rounded-2xl shadow-md gap-3">
                            <div className="w-full md:w-4/5">
                                <h2 className="font-semibold text-xl text-[#393939]">Tercera acción</h2>
                                <p className="font-thin text-sm md:text-lg text-[#393939]">Si el problema no se resuelve y los valores permanecen fuera de rango, el sistema apaga automáticamente los componentes necesarios para proteger el equipo.</p>
                            </div>
                            <svg fill="#c91c1c" width="40" height="40" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="mr-5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number12</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM18.995 21.357c-0.826 0.797-1.854 1.194-3.086 1.194-1.166 0-2.133-0.335-2.9-1.005-0.769-0.67-1.214-1.545-1.337-2.627l2.391-0.289c0.076 0.607 0.281 1.071 0.616 1.393 0.333 0.321 0.738 0.482 1.213 0.482 0.51 0 0.939-0.194 1.289-0.582 0.348-0.387 0.522-0.909 0.522-1.566 0-0.621-0.167-1.115-0.501-1.479-0.335-0.364-0.742-0.545-1.223-0.545-0.317 0-0.695 0.062-1.136 0.184l0.272-1.997c0.668 0.018 1.178-0.127 1.529-0.434s0.526-0.715 0.526-1.224c0-0.433-0.128-0.777-0.385-1.035-0.258-0.257-0.599-0.386-1.025-0.386-0.421 0-0.779 0.146-1.077 0.438s-0.479 0.72-0.544 1.281l-2.281-0.386c0.158-0.782 0.397-1.407 0.717-1.875s0.765-0.835 1.336-1.103 1.212-0.401 1.921-0.401c1.213 0 2.186 0.387 2.918 1.161 0.604 0.633 0.905 1.348 0.905 2.145 0 1.131-0.619 2.034-1.858 2.708 0.739 0.158 1.33 0.513 1.772 1.063 0.443 0.551 0.664 1.215 0.664 1.994 0.001 1.132-0.412 2.095-1.238 2.891z"></path> </g></svg>

                        </div>


                    </div>

                </div>


            </div>

        </div>
    );
}
