import React from 'react'

export default function Motto() {
  return (
    <div className='bg-linear-to-br from-amber-600/20 to-slate-900/40 backdrop-blur-sm rounded-3xl flex flex-col items-start p-8 border border-amber-500/20 relative overflow-hidden h-full'>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-amber-500/40 mb-auto" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>

        <div className="mt-auto">
            <h3 className="text-white text-3xl md:text-4xl font-black leading-none tracking-tight">
                SOFTWARE <br /> 
                <span className="text-amber-500 text-4xl md:text-5xl italic font-serif tracking-normal leading-tight">
                    Sin Límites.
                </span>
            </h3>
            
            <div className="h-1 w-12 bg-amber-500 mt-5 mb-4 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            
            <p className="text-slate-300 font-bold text-xs uppercase tracking-[0.2em]">
                Arquitectura de Alto Rendimiento
            </p>
        </div>

    </div>
  )
}
