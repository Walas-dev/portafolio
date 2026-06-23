"use client";
import { useRef } from "react";
import { contenido } from '@/types/about';
import { useInView } from 'framer-motion';

// 1. CREAMOS LA TARJETA COMO UN SUB-COMPONENTE
// Ahora cada tarjeta tiene su propio 'ref' y su propio 'isIn' independiente
const Card = ({ c }: { c: any }) => {
  const ref2 = useRef<HTMLDivElement>(null);
  const isIn = useInView(ref2, { amount: 0.5 });

  return (
    <div 
        ref={ref2}
        className={`
            relative overflow-hidden flex flex-col items-center justify-center p-6 rounded-3xl uppercase cursor-pointer min-h-70 
            transition-all duration-500 ease-out
            
            ${isIn 
                ? 'bg-linear-to-br from-portground/20 to-slate-900/40 border border-portground/50 shadow-[0_10px_40px_rgba(255,16,94,0.15)]' 
                : 'bg-gray-500/8 backdrop-blur-md border border-gray-600/30 shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
            }
        `}
    >
        <svg xmlns="http://www.w3.org/2000/svg" 
             className={`size-18 md:size-20 transition-colors duration-500 mb-3 ${isIn ? 'text-portground' : 'text-slate-300'}`} 
             viewBox="0 0 640 640">
            <path fill="currentColor" d={c.p}/>
        </svg>
        
        <h4 className={`font-mono text-xs transition-colors duration-500 ${isIn ? 'text-portground/70' : 'text-slate-400'}`}>
            {c.title}
        </h4>
        
        <h3 className={`font-bold text-base md:text-lg text-center mt-1 transition-colors duration-500 ${isIn ? 'text-[#FBF6EE]' : 'text-[#F2C6C2]/80'}`}>
            {c.subTitle}
        </h3>
    </div>
  );
};

// 2. EL COMPONENTE PRINCIPAL
// Simplemente mapea el contenido y llama a la tarjeta
export default function Atributes() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2 gap-3 h-full w-full'>
        {contenido.map((c) => (
            <Card key={c.id} c={c} />
        ))}
    </section>
  )
}