"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface FilaTextoProps {
  texto: string;
  direccion: 'izq' | 'der';
  progresoScroll: MotionValue<number>;
  velocidad?: number;
  indice: number;    
  totalFilas: number;
}

const FilaTexto = ({ texto, direccion, progresoScroll, velocidad = 1, indice, totalFilas }: FilaTextoProps) => {
  const rangoSalida = direccion === 'izq' 
    ? ['0%', `-${50 * velocidad}%`] 
    : [`-${50 * velocidad}%`, '0%'];

  const x = useTransform(progresoScroll, [0, 1], rangoSalida);

  const inicioZonaActiva = 0.25;
  const finZonaActiva = 0.75;
  const rangoZona = finZonaActiva - inicioZonaActiva;
  
  const margen = rangoZona / totalFilas;
  
  const picoDeLuz = inicioZonaActiva + (indice + 0.5) * margen;

  const opacidadScroll = useTransform(
    progresoScroll,
    [picoDeLuz - margen, picoDeLuz, picoDeLuz + margen],
    [0.15, 1, 0.15]
  );

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap py-2 md:py-4">
      <motion.div style={{ x }} className="flex gap-8 items-center will-change-transform">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            
            <motion.span 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white font-sans uppercase tracking-tighter transition-colors duration-300"
              style={{ opacity: opacidadScroll }}
            >
              {texto}
            </motion.span>

            <span 
              className="text-6xl md:text-8xl lg:text-9xl font-black font-sans uppercase tracking-tighter text-transparent"
              style={{ WebkitTextStroke: '2px rgba(253, 16, 94)' }}
            >
              {texto}
            </span>

          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};




export default function SeccionSoyMarquee() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: contenedorRef,
    offset: ['start end', 'end start'] 
  });

  const palabras = ['Ingenio', 'Vanguardia', 'Escalabilidad', 'Solución', 'Optimización', 'Diseño Creativo', 'Ingeniería de Alto Impacto'];

  return (
    <section 
      ref={contenedorRef} 
      className="relative w-full min-h-screen sm:min-h-[180vh] md:min-h-[230vh] 2xl:min-h-[160vh] flex flex-col justify-center overflow-hidden"
    >

      <div className="relative z-10 flex flex-col gap-2 md:gap-6 -rotate-2 scale-110">
        {palabras.map((palabra, indice) => (
          <FilaTexto 
            key={palabra}
            texto={palabra}
            direccion={indice % 2 === 0 ? 'izq' : 'der'}
            progresoScroll={scrollYProgress}
            velocidad={1 + (indice * 0.1)} 
            indice={indice}
            totalFilas={palabras.length} 
          />
        ))}
      </div>
    </section>
  );
}