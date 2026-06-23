

import {button} from '@/types/about'
import Link from "next/link";
export default function description() {

  return (
    <div className='bg-portground rounded-3xl flex flex-col justify-center w-full p-6 sm:p-8 md:p-12 shadow-2xl h-full'>        
        <div>
            <h4 className='text-[1.5rem] md:text-xl font-extralight uppercase pb-2'>ingeniero de sistemas</h4>
            <h3 className='text-6xl md:text-8xl font-black text-[#FBF6EE] leading-none tracking-tighter'>
                Williams <span className='text-[#111111] block md:inline'>Alas</span>
            </h3>
        </div>

        <div className='flex flex-col gap-3 p-3'>
            <div className='max-w-2xl space-y-4'>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#FBF6EE] leading-tight">
                        Escale su visión con <span className="text-[#111111]">ingeniería de alto impacto.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-[#FBF6EE] leading-relaxed font-light">
                        Transformo su infraestructura en un ecosistema de crecimiento imparable, 
                        diseñando el software que acelera su liderazgo en el mercado.
                    </p>
            </div>                
        </div>

        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-6 px-1 md:px-5 py-5 items-stretch sm:items-center'>
            {button.map((b) => (
                <Link 
                    key={b.id} 
                    href={b.href}
                    className={`
                        relative overflow-hidden cursor-pointer group/btn tracking-wider 
                        transition-all duration-300 flex items-center justify-center gap-3 rounded-full
                        w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 hover:scale-105 text-xs font-bold uppercase
                        ${b.class}
                    `}
                >
                    <span className="relative z-10 transition-colors duration-500 font-bold uppercase tracking-wide text-center">
                        {b.title}
                    </span>

                    <div className={`
                        absolute top-1/2 -translate-y-1/2 aspect-square rounded-full 
                        transition-all duration-500 ease-in-out
                        w-0 right-0 left-auto
                        group-hover/btn:w-[150%] group-hover/btn:left-0 group-hover/btn:right-auto
                        ${b.element}
                    `} />
                </Link>
            ))}
        </div>
    </div>
  )
}