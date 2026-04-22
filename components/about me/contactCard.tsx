import React from 'react'

export default function contactCard() {
  return (
    <div className='flex flex-col h-full gap-6 items-center justify-center text-center bg-slate-900 rounded-3xl  p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-[#FD105E]/30 relative overflow-hidden'>
        <h4 className='text-3xl font-extrabold'>
            ¿Listo para <span className="text-[#FD105E]">Dominar tu Mercado?</span>
        </h4>
            <p className='font-light text-[#FBF6EE] text-center leading-relaxed max-w-sm'>
            Transforme su infraestructura en una ventaja competitiva imparable. 
            Especialista en arquitecturas de alto rendimiento y sistemas de misión crítica.
        </p>
        <div className='mt-4 bg-[#FD105E] px-8 py-4 rounded-2xl flex items-center gap-3 font-bold uppercase text-slate-900 cursor-pointer group hover:scale-105 transition-all duration-300 ease-out '>
                Iniciar Consultoría de Éxito
            <svg xmlns="http://www.w3.org/2000/svg" className='size-7 rotate-30 group-hover:translate-x-1 transition-transform group-hover:rotate-0 duration-300 ease-in-out' viewBox="0 0 640 640"><path fill='#ffff' d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"/></svg>
        </div>    
    </div>
  )
}
