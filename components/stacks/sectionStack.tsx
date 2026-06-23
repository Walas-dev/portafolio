'use client'
import React, { useRef } from 'react'
import { useInView } from 'framer-motion';
import {sectionStack} from '@/types/stacks'

export default function SectionStack({ title, children }: sectionStack) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.5 });

    return (
        <div 
            ref={ref}
            className={`
                SECCION-STACK flex flex-col rounded-3xl w-[98%] px-3 py-5 lg:px-6 lg:py-15 gap-3 lg:flex-row items-center justify-around
                backdrop-blur-xl border-2
                transition-all duration-700 ease-in-out
                ${isInView 
                    ? 'bg-portground/5 border-portground/50' 
                    : 'bg-gray-500/10 border-gray-500/25' 
                }
            `}
        >
            <div className='lg:w-[25%]'>
                <h3 className={`font-bold text-[2rem] sm:text-[3rem] text-center bg-clip-text text-transparent
                    transition-colors duration-700 ease-in-out
                    ${isInView ? 'bg-portground' : 'bg-white/50'}
                    `}
                >
                    {title}
                </h3>
            </div>

            <div className={`CARROUSEL w-full flex-1 lg:w-[65%] py-3 overflow-hidden relative
                transition-all duration-700 ease-in-out
                ${isInView ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}
            `}>
                {children}
            </div>
        </div>
    )
}