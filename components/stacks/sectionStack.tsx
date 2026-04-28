import React, { ReactNode } from 'react'

interface Content {
    title: string;
    colorTitle: string;
    fondo: string;
    children: ReactNode;
}


export default function sectionStack({ title, colorTitle, fondo, children }: Content) {
    return (
        <div className={`SECCION-STACK flex flex-col rounded-3xl border-slate-700 transition-all border px-3 py-5 md:px-6 md:py-15 gap-3 md:flex-row items-center justify-around ${fondo}`}>
            <div className='md:w-[25%]'>
                <h3 className={`font-bold text-[2rem] sm:text-[3rem] ${colorTitle}  bg-clip-text text-transparent`}>{title}</h3>
            </div>

            <div className='CARROUSEL w-full flex-1 md:w-[65%] py-3 overflow-hidden relative'>
                {children}
            </div>
        </div>
    )
}
