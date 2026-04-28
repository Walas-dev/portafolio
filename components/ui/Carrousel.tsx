'use client'

import React from 'react';

interface CarruselProps {
  children: React.ReactNode;
  velocidad?: number;
}

export default function CarruselInfinito({ children, velocidad = 40 }: CarruselProps) {
  // Ajustamos a 6 repeticiones, suficiente para ultra-anchos
  const repeticiones = Array.from({ length: 6 });

  return (
    <div 
      className="relative flex overflow-hidden w-full py-4 group-pause cursor-pointer z-10"
      style={{
        maskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)'
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-infinite {
          animation: slide-infinite ${velocidad}s linear infinite;
          will-change: transform;
        }
        .group-pause:hover .animate-slide-infinite {
          animation-play-state: paused;
        }
      `}} />

      <div className="flex w-max shrink-0 items-center gap-4 sm:gap-6 md:gap-8 animate-slide-infinite">
        {/* Usamos dos bloques idénticos de repeticiones continuas */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6 md:gap-8">
          {repeticiones.map((_, i) => (
            <React.Fragment key={`mitad1-${i}`}>
              {children}
            </React.Fragment>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6 md:gap-8">
          {repeticiones.map((_, i) => (
            <React.Fragment key={`mitad2-${i}`}>
              {children}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}