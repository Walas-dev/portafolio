"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, Target } from 'framer-motion';

// ==========================================
// 1. INTERFACES (TypeScript al rescate)
// ==========================================

interface FiguraProps {
  id: string;
  forma: 'rectangulo' | 'circulo' | 'pildora';
  clasesBase: string;
  animacionEntrada: Target;
}

interface SeccionData {
  texto: string;
  colorPrincipal: string;
  bgClases: string;
  estadoInicial: Target;
  estadoFinal: Target;
  figuras: FiguraProps[]; // Ahora las figuras son obligatorias (puedes pasar un array vacío)
}

// ==========================================
// 2. DATOS (La fuente de la verdad)
// ==========================================

const secciones: SeccionData[] = [
  { 
    texto: 'Ingenio.', 
    colorPrincipal: '#F59E0B', 
    bgClases: 'bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full',
    estadoInicial: { x: -50, opacity: 0 }, 
    estadoFinal: { x: 0, opacity: 1 },
    figuras: [
      {
        id: 'fig-ing-1',
        forma: 'rectangulo',
        clasesBase: 'w-20 h-20 -left-24 top-0 rounded-2xl',
        animacionEntrada: { y: 0, opacity: 1, rotate: 12 }
      },
      {
        id: 'fig-ing-2',
        forma: 'circulo',
        clasesBase: 'w-12 h-12 left-48 -bottom-10 rounded-full',
        animacionEntrada: { y: 0, opacity: 1, scale: 1 }
      }
    ]
  },
  { 
    texto: 'Vanguardia.', 
    colorPrincipal: '#A855F7', 
    bgClases: 'bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 skew-y-12',
    estadoInicial: { scale: 0.5, opacity: 0 }, 
    estadoFinal: { scale: 1, opacity: 1 },
    figuras: [
      {
        id: 'fig-van-1',
        forma: 'pildora',
        clasesBase: 'w-10 h-32 -left-16 -top-10 rounded-full',
        animacionEntrada: { y: 0, opacity: 1, rotate: -45 }
      }
    ]
  },
  { 
    texto: 'Tecnología.', 
    colorPrincipal: '#06B6D4', 
    bgClases: 'bg-gradient-to-t from-cyan-500/20 to-blue-500/20 rotate-45',
    estadoInicial: { rotateX: 90, opacity: 0 }, 
    estadoFinal: { rotateX: 0, opacity: 1 },
    figuras: [
      {
        id: 'fig-tec-1',
        forma: 'rectangulo',
        clasesBase: 'w-24 h-16 left-60 top-12 rounded-xl',
        animacionEntrada: { y: 0, opacity: 1, rotate: 180 }
      },
      {
        id: 'fig-tec-2',
        forma: 'rectangulo',
        clasesBase: 'w-16 h-16 -left-20 bottom-0 rounded-xl',
        animacionEntrada: { y: 0, opacity: 1, rotate: -25 }
      }
    ]
  }
  // Puedes agregar el resto de tus palabras aquí siguiendo el mismo patrón...
];

// ==========================================
// 3. COMPONENTES HIJOS
// ==========================================

// --- Fondo Dinámico (Tu código original optimizado) ---
const FondoDinamico = ({ 
  indice, total, progresoScroll, bgClases, colorPrincipal 
}: { 
  indice: number, total: number, progresoScroll: MotionValue<number>, bgClases: string, colorPrincipal: string 
}) => {
  const pico = indice / (total - 1);
  const margen = 1 / (total - 1); 
  
  const inicioFondo = pico - (margen * 0.7); 
  const finFondo = pico + (margen * 0.7);    
  const opacidadFondo = useTransform(progresoScroll, [inicioFondo, pico, finFondo], [0, 1, 0]);
  const escalaFondo = useTransform(progresoScroll, [inicioFondo, pico, finFondo], [0.6, 1.2, 0.6]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        style={{ opacity: opacidadFondo, scale: escalaFondo }}
        className={`absolute w-[45vw] h-[45vw] blur-3xl ${bgClases}`}
      />
      {/* Líneas guía centrales (opcionales, puedes quitarlas si ya no las necesitas) */}
      <motion.div style={{ opacity: opacidadFondo }} className="absolute w-full flex items-center px-12 z-10">
        <div className="flex-1 h-px border-b border-dashed opacity-30" style={{ borderColor: colorPrincipal }} />
        <div className="w-2 h-2 rounded-full mx-6 shadow-lg shadow-current" style={{ backgroundColor: colorPrincipal, color: colorPrincipal }} />
        <div className="flex-1 h-px border-b border-dashed opacity-30" style={{ borderColor: colorPrincipal }} />
      </motion.div>
    </div>
  );
};

// --- EL NUEVO COMPONENTE MAGICO: Figura con Glow ---
const FiguraConGlow = ({ 
  figura, indice, total, progresoScroll, colorGradiente 
}: {
  figura: FiguraProps, indice: number, total: number, progresoScroll: MotionValue<number>, colorGradiente: string
}) => {
  // Calculamos el punto de alineación perfecta (centro del viewport)
  const pico = indice / (total - 1);
  // Un margen súper estricto (0.05 = 5%). ¡Solo brilla cuando está centrado!
  const margen = 0.05; 
  
  // Interpolación: 0% opacity -> 100% en el centro -> 0% opacity
  const opacidadGlow = useTransform(
    progresoScroll, 
    [pico - margen, pico, pico + margen], 
    [0, 1, 0]
  );

  return (
    <motion.div
      // La figura entra siempre desde abajo (y=50) e invisible
      initial={{ y: 50, opacity: 0, scale: 0.8 }} 
      whileInView={figura.animacionEntrada}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      viewport={{ margin: "-20% 0px -20% 0px" }} // Entra un poco antes que el texto
      className={`absolute flex items-center justify-center z-10 ${figura.clasesBase}`}
    >
      {/* 1. Capa visual de la figura (Glassmorphism) */}
      <div className="relative w-full h-full bg-white/5 backdrop-blur-md border border-white/20 rounded-inherit shadow-xl z-10" />

      {/* 2. Capa del Glow (Controlado por el scroll) */}
      <motion.div
        className="absolute -inset-2 rounded-inherit z-0 blur-xl mix-blend-screen"
        style={{ 
          backgroundColor: colorGradiente,
          opacity: opacidadGlow // Aquí está la magia reactiva al scroll
        }}
      />
      
      {/* Opcional: Un borde interno brillante que también reacciona */}
      <motion.div
        className="absolute inset-0 rounded-inherit border-2 z-20 pointer-events-none"
        style={{ 
          borderColor: colorGradiente,
          opacity: opacidadGlow 
        }}
      />
    </motion.div>
  );
};

// ==========================================
// 4. COMPONENTE PRINCIPAL
// ==========================================

export default function SeccionSoy() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  
  // Extraemos el progreso del scroll del contenedor principal
  const { scrollYProgress } = useScroll({
    target: contenedorRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={contenedorRef} className="relative w-full bg-[#0F1115]" style={{ height: `${secciones.length * 100}vh` }}>
      
      {/* FONDOS FIJOS (Se animan en base al scroll) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        {secciones.map((sec, i) => (
          <FondoDinamico 
            key={`bg-${i}`} 
            indice={i} 
            total={secciones.length} 
            progresoScroll={scrollYProgress} 
            bgClases={sec.bgClases}
            colorPrincipal={sec.colorPrincipal} 
          />
        ))}
      </div>

      {/* CONTENIDO SUPERPUESTO */}
      <div className="absolute top-0 w-full flex text-6xl font-bold font-sans z-20">
        
        {/* Lado Izquierdo: "Soy" Estático */}
        <div className="sticky top-0 flex h-screen w-1/2 items-center justify-end pr-10 pointer-events-none">
          <h3 className="text-white drop-shadow-2xl tracking-tight">Soy</h3>
        </div>

        {/* Lado Derecho: Palabras y Figuras Dinámicas */}
        <div className="flex w-1/2 flex-col">
          {secciones.map((sec, i) => (
            <div key={`text-${i}`} className="relative flex h-screen items-center justify-start pl-10 pointer-events-none">
              
              {/* Contenedor relativo para posicionar las figuras alrededor del texto */}
              <div className="relative">
                
                {/* Texto Animado */}
                <motion.span
                  initial={sec.estadoInicial}
                  whileInView={sec.estadoFinal}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  // El túnel del 20% central que ya tenías (¡muy buen truco, por cierto!)
                  viewport={{ margin: "-40% 0px -40% 0px" }} 
                  className="block drop-shadow-2xl relative z-30"
                  style={{ color: sec.colorPrincipal }}
                >
                  {sec.texto}
                </motion.span>

                {/* Renderizado de las Figuras Geométricas */}
                {sec.figuras.map((fig) => (
                  <FiguraConGlow 
                    key={fig.id}
                    figura={fig}
                    indice={i}
                    total={secciones.length}
                    progresoScroll={scrollYProgress}
                    colorGradiente={sec.colorPrincipal}
                  />
                ))}

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}