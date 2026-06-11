import React from 'react'

import img1 from "../../assets/images/Relief/TriasoOS7.webp"
import img2 from "../../assets/images/Relief/5.webp"

export default function ReliefLastSection() {
    return (
        <div className='w-full min-h-[1315.09'>
           
            <div className='flex justify-center items-center bg-[#393939] p-4 md:p-10'>
                <div className='max-w-7xl mx-auto px-8 text-center'>
                    <h1 className='text-white font-bold text-3xl'>Seguridad y acceso</h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-center'>
                <div className='bg-[#14427c] flex flex-col justify-center items-center w-full p-10'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='text-white font-bold text-2xl'>Sistema de operación</h1>
                        <h2 className='text-white font-semibold text-xl'>Inicio de sesión único </h2>
                        <h2 className='text-white font-semibold text-xl'>para cada operador en turno</h2>
                        <div className='pt-5'>
                            <ul className='list-disc text-white text-start pl-5'>
                                <li>Conexión sin necesidad de internet, con acceso a respaldos automáticos.</li>
                                <li>Operación manual siempre disponible, con almacenamiento de datos de operación.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-redBg flex flex-col justify-center items-center w-full p-10'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='text-white font-bold text-2xl'>Sistema de visualización</h1>
                        <h2 className='text-white font-semibold text-xl'>Acceso ilimitado para visualización</h2>
                        <h2 className='text-white font-semibold text-xl'>de la planta de asfalto</h2>
                        <div className='pt-5'>
                            <ul className='list-disc text-white text-start pl-5'>
                                <li>Conexión a través de internet</li>
                                <li>Visualización a todo dato rastreable de su planta de asfalto.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className='relative w-full flex justify-center items-center py-20 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${img2.src || img2})` }}
            >
     
                <div className="absolute inset-0 bg-white/80 z-0" />
                <div className='relative w-full z-10'>
                    <div className='max-w-7xl mx-auto px-8 space-y-8'>
                        
                        <div className='text-center'>
                            <h1 className='font-bold text-4xl text-[#393939]'>Modernización de sistemas de control</h1>
                        </div>

                        <div className='space-y-5 text-center md:text-left'>
                            <p className='text-[#14427c] text-base md:text-xl font-semibold'>
                                Transformamos sistemas de operación obsoletos en plataformas modernas y claras, llevando su planta a los estándares actuales con mayor eficiencia, confiabilidad y control.
                            </p>
                            <p className='text-[#393939] text-base md:text-xl font-semibold'>
                                Sabemos que cada cliente tiene necesidades únicas; adaptamos cada sistema de control —desde los puntos de acceso hasta la integración de funciones— alineándolo con sus requerimientos específicos.
                            </p>
                        </div>

                        <div className='flex justify-center items-center'>
                            <h2 className='font-bold text-3xl md:text-4xl text-[#393939] w-full md:w-3/4 text-center leading-tight'>
                                Disponible para monitoreo de todos los equipos Triaso®
                            </h2>
                        </div>


                        <div className='w-full max-w-4xl mx-auto  rounded-lg overflow-hidden '>
                            <img 
                                src={img1.src} 
                                alt="TRIASO OS on different systems" 
                                className="w-full h-full object-cover"
                                loading="lazy"
                                width={img1.width} 
                                height={img1.height}
                            />
                        </div>

                        <div>
                            <p className='font-semibold text-lg lg:text-2xl md:text-2xl text-[#393939] text-center md:text-left'>
                                Brindamos la libertad de acceder a análisis detallados en tiempo real desde cualquier lugar y en cualquier dispositivo. La toma de decisiones se vuelve más rápida, mejor fundamentada y completamente independiente de la ubicación física.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}