import React from 'react'

import img1 from "../../assets/images/Relief/TriasoOS7.webp"
import img2 from "../../assets/images/Relief/5.webp"

export default function ReliefLastSection() {
    return (
        <div className='w-full min-h-[1315.09'>
           
            <div className='flex justify-center items-center bg-[#393939] p-4 md:p-10'>
                <div className='max-w-7xl mx-auto px-8 text-center'>
                    <h1 className='text-white font-bold text-3xl'>Security and access</h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-center'>
                <div className='bg-[#14427c] flex flex-col justify-center items-center w-full p-10'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='text-white font-bold text-2xl'>Operation System</h1>
                        <h2 className='text-white font-semibold text-xl'>Unique login</h2>
                        <h2 className='text-white font-semibold text-xl'>for each operator on shift</h2>
                        <div className='pt-5'>
                            <ul className='list-disc text-white text-start pl-5'>
                                <li>Connection without the need for internet, with access to automatic backups</li>
                                <li>Manual operation always available, with storage of operating data.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-redBg flex flex-col justify-center items-center w-full p-10'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='text-white font-bold text-2xl'>Visualization system</h1>
                        <h2 className='text-white font-semibold text-xl'>Unlimited access</h2>
                        <h2 className='text-white font-semibold text-xl'>for asphalt plant visualization</h2>
                        <div className='pt-5'>
                            <ul className='list-disc text-white text-start pl-5'>
                                <li>Connection through internet</li>
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
                            <h1 className='font-bold text-4xl text-[#393939]'>Control system upgrades</h1>
                        </div>

                        <div className='space-y-5 text-center md:text-left'>
                            <p className='text-[#14427c] text-base md:text-xl font-semibold'>
                                We transform outdated operation systems into modern, clear platforms, bringing your plant up to today’s standards with greater efficiency, reliability, and control.
                            </p>
                            <p className='text-[#393939] text-base md:text-xl font-semibold'>
                                We know every client has unique needs; we adapt each control system—from access points to function integration—aligning it with their specific requirements.
                            </p>
                        </div>

                        <div className='flex justify-center items-center'>
                            <h2 className='font-bold text-3xl md:text-4xl text-[#393939] w-full md:w-3/4 text-center leading-tight'>
                                Available for monitoring of all Triaso equipment
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
                                Provides the freedom to access detailed, real-time analysis from anywhere and on any device. Decision-making becomes faster, better-founded, and completely independent of physical location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}