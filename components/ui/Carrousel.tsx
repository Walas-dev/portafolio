'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface CarruselProps {
  children: React.ReactNode;
  velocidad?: number;
}

export default function CarruselInfinito({ children, velocidad = 40 }: CarruselProps) {
  // 1. Clonamos el contenido 8 veces por mitad para asegurar que rebase 
  // cualquier monitor ultra-ancho y NUNCA se vea el final.
  const repeticiones = Array.from({ length: 8 });

  return (
    <div 
      className="relative flex overflow-hidden w-full py-4"
      style={{
        // 2. MÁSCARA DE DESVANECIMIENTO: 
        // Hace que los extremos izquierdo y derecho sean transparentes.
        maskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)'
      }}
    >
      {/* 3. LA MAGIA DEL BUCLE "COMO MANTEQUILLA":
        - w-max: Evita el aplastamiento. La fila medirá miles de píxeles.
        - gap-8: Mantiene el espaciado matemáticamente perfecto.
        - x: ["0%", "-50%"]: Mueve todo el contenedor exactamente a la mitad y se reinicia.
      */}
      <motion.div
        className="flex w-max shrink-0 items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: velocidad,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* MITAD 1 (El 50% inicial) */}
        <div className="flex shrink-0 items-center gap-8">
          {repeticiones.map((_, i) => (
            <React.Fragment key={`mitad1-${i}`}>
              {children}
            </React.Fragment>
          ))}
        </div>

        {/* MITAD 2 (El clon exacto para que el salto al -50% sea invisible) */}
        <div className="flex shrink-0 items-center gap-8">
          {repeticiones.map((_, i) => (
            <React.Fragment key={`mitad2-${i}`}>
              {children}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}