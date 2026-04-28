"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, Target } from 'framer-motion';

// ==========================================
// 1. INTERFACES Y TIPADOS
// ==========================================

interface FiguraParams {
  x: number;             // Posición horizontal en vw (-50 a 50)
  yStart: number;        // Desde dónde entra abajo (px)
  yEnd: number;          // Hasta dónde sube arriba (px)
  rotacionInicial: number;
  rotacionFinal: number;
  tamaño: string;        // Clases de Tailwind (ej: 'w-24 h-24')
  borderRadius: string;  // Clases de Tailwind para la forma
  
  // --- Para SVG (Opcionales) ---
  esSVG?: boolean;
  pathSVG?: string;
  viewBox?: string;
}

interface SeccionData {
  texto: string;
  colorPrincipal: string;
  bgClases: string;
  estadoInicial: Target;
  estadoFinal: Target;
  figuras: FiguraParams[];
}

// ==========================================
// 2. BASE DE DATOS DE LA SECCIÓN (Ecosistema Coherente)
// ==========================================

const secciones: SeccionData[] = [
  { 
    texto: 'Ingenio.', colorPrincipal: '#F59E0B', bgClases: 'bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full',
    estadoInicial: { x: -50, opacity: 0 }, estadoFinal: { x: 0, opacity: 1 },
    // FORMA: CÍRCULOS (Ideas, fluidez)
    figuras: [
      { x: -35, yStart: 500, yEnd: -300, rotacionInicial: 0, rotacionFinal: 0, tamaño: 'w-32 h-32', borderRadius: 'rounded-full' },
      { x: -15, yStart: 700, yEnd: -100, rotacionInicial: 0, rotacionFinal: 0, tamaño: 'w-12 h-12', borderRadius: 'rounded-full' },
      { x: 5,   yStart: 100, yEnd: -400, rotacionInicial: 0, rotacionFinal: 0, tamaño: 'w-20 h-20', borderRadius: 'rounded-full' },
      { x: 25,  yStart: 800, yEnd: -200, rotacionInicial: 0, rotacionFinal: 0, tamaño: 'w-8 h-8',   borderRadius: 'rounded-full' },
      { x: 40,  yStart: 600, yEnd: -500, rotacionInicial: 0, rotacionFinal: 0, tamaño: 'w-24 h-24', borderRadius: 'rounded-full' }
    ]
  },
  { 
    texto: 'Vanguardia.', colorPrincipal: '#A855F7', bgClases: 'bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 skew-y-12',
    estadoInicial: { scale: 0.5, opacity: 0 }, estadoFinal: { scale: 1, opacity: 1 },
    // FORMA: CÁPSULAS / TRAZOS (Movimiento, velocidad, futuro)
    figuras: [
      { x: -40, yStart: 600, yEnd: -200, rotacionInicial: 45, rotacionFinal: 115, tamaño: 'w-[2px] h-32', borderRadius: 'rounded-full opacity-70' },
      { x: -32, yStart: -600, yEnd: -50, rotacionInicial: 0, rotacionFinal: -90,  tamaño: 'w-[2px] h-12', borderRadius: 'rounded-full opacity-60' },
      { x: -20, yStart: 400, yEnd: -400, rotacionInicial: -15, rotacionFinal: 45, tamaño: 'w-[2px] h-32', borderRadius: 'rounded-full opacity-80' },
      { x: 10,  yStart: -400, yEnd: -100, rotacionInicial: 180, rotacionFinal: 360, tamaño: 'w-[4px] h-18', borderRadius: 'rounded-full opacity-50' },
      { x: 10,  yStart: 700, yEnd: -100, rotacionInicial: 90, rotacionFinal: 180, tamaño: 'w-[4px] h-24', borderRadius: 'rounded-full opacity-90' },
      { x: 35,  yStart: 200, yEnd: -500, rotacionInicial: 30, rotacionFinal: -90, tamaño: 'w-[2px] h-25', borderRadius: 'rounded-full opacity-60' },
      { x: 45,  yStart: 700, yEnd: -400, rotacionInicial: 15, rotacionFinal: 80,  tamaño: 'w-[3px] h-20', borderRadius: 'rounded-full opacity-80' }
    ]
  },
  { 
    texto: 'Tecnología.', colorPrincipal: '#06B6D4', bgClases: 'bg-gradient-to-t from-cyan-500/20 to-blue-500/20 rotate-45',
    estadoInicial: { rotateX: 90, opacity: 0 }, estadoFinal: { rotateX: 0, opacity: 1 },
   figuras: [
      { x: -30, yStart: -400, yEnd: -80, rotacionInicial: 0, rotacionFinal: 120, tamaño: 'w-20 h-20', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" },
      { x: -40, yStart: -500, yEnd: -220, rotacionInicial: 45, rotacionFinal: 180, tamaño: 'w-16 h-16', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" },
      { x: 35,  yStart: -500, yEnd: -220, rotacionInicial: 15, rotacionFinal: 90, tamaño: 'w-32 h-32', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" },
      { x: 45,  yStart: 0, yEnd: -20, rotacionInicial: -45, rotacionFinal: 45, tamaño: 'w-16 h-16', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" },
      { x: 28,  yStart: 600, yEnd: -50, rotacionInicial: 90, rotacionFinal: 270, tamaño: 'w-24 h-24', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" },
      { x: 15,  yStart: 600, yEnd: 200, rotacionInicial: 0, rotacionFinal: 180, tamaño: 'w-16 h-16', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" },
      { x: -25, yStart: 500, yEnd: 100, rotacionInicial: -90, rotacionFinal: 0, tamaño: 'w-24 h-24', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" }
    ]
  },
  { 
    texto: 'Solución.', colorPrincipal: '#10B981', bgClases: 'bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 rounded-3xl',
    estadoInicial: { y: 50, opacity: 0 }, estadoFinal: { y: 0, opacity: 1 },
    // FORMA: DIAMANTES / ROMBOS SUAVES (Claridad, joyas, valor. Giran desde una base de 45 grados)
    figuras: [
      { x: -30, yStart: 500, yEnd: -400, rotacionInicial: 45, rotacionFinal: 135, tamaño: 'w-24 h-24', borderRadius: 'rounded-2xl' },
      { x: -10, yStart: 700, yEnd: -200, rotacionInicial: 45, rotacionFinal: -45, tamaño: 'w-12 h-12', borderRadius: 'rounded-xl' },
      { x: 15,  yStart: 400, yEnd: -500, rotacionInicial: 45, rotacionFinal: 225, tamaño: 'w-28 h-28', borderRadius: 'rounded-[2rem]' },
      { x: 35,  yStart: 800, yEnd: -100, rotacionInicial: 45, rotacionFinal: -45, tamaño: 'w-16 h-16', borderRadius: 'rounded-xl' },
      { x: 45,  yStart: 300, yEnd: -600, rotacionInicial: 45, rotacionFinal: 135, tamaño: 'w-8 h-8',   borderRadius: 'rounded-md' }
    ]
  },
  { 
    texto: 'Estructura.', colorPrincipal: '#CBD5E1', bgClases: 'bg-gradient-to-r from-slate-400/20 to-gray-500/20 border-8 border-white/5',
    estadoInicial: { y: -50, opacity: 0 }, estadoFinal: { y: 0, opacity: 1 },
    // CUADRADOS: Entradas macizas como bloques que encajan
    figuras: [
      { x: -40, yStart: 700, yEnd: -400, rotacionInicial: 0, rotacionFinal: 90,   tamaño: 'w-28 h-28', borderRadius: 'rounded-none' },
      // Cae como un ladrillo
      { x: -15, yStart: -800, yEnd: 100, rotacionInicial: 15, rotacionFinal: 60,  tamaño: 'w-24 h-24', borderRadius: 'rounded-none' },
      { x: 10,  yStart: 800, yEnd: -200, rotacionInicial: 0, rotacionFinal: -90,  tamaño: 'w-16 h-16', borderRadius: 'rounded-none' },
      // Cae desde arriba
      { x: 35,  yStart: -600, yEnd: 300, rotacionInicial: 45, rotacionFinal: 225, tamaño: 'w-32 h-32', borderRadius: 'rounded-none' }
    ]
  },
  { 
    texto: 'Systems Engineer.', colorPrincipal: '#FD105E', bgClases: 'bg-gradient-to-b from-[#FD105E]/20 to-rose-900/20 rounded-full blur-2xl',
    estadoInicial: { filter: 'blur(10px)', opacity: 0, scale: 1.1 }, estadoFinal: { filter: 'blur(0px)', opacity: 1, scale: 1 },
    // FORMA: TRIÁNGULOS SVG (Dirección, dinamismo, el final del recorrido)
    figuras: [
      //arriba
      { x: -5,  yStart: 200, yEnd: -600, rotacionInicial: 90, rotacionFinal: 450,  tamaño: 'w-24 h-24', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M12 2L2 22h20L12 2z" },
      { x: -29, yStart: -300, yEnd: -100, rotacionInicial: 45, rotacionFinal: 180,  tamaño: 'w-24 h-24', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5L5 55h5L100 50z" },
      { x: -38, yStart: -500, yEnd: -100, rotacionInicial: -20, rotacionFinal: 360,  tamaño: 'w-32 h-32', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5L5 55h5L100 50z" },
      { x: 35,  yStart: -400, yEnd: -100, rotacionInicial: 0, rotacionFinal: 360, tamaño: 'w-32 h-32', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5L5 55h5L50 50z" },
      { x: 43,  yStart: -500, yEnd: -100, rotacionInicial: -45, rotacionFinal: 135, tamaño: 'w-24 h-24', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M12 2L2 22h20L12 2z" },
      //abajo
      { x: -40, yStart: 600, yEnd: -95, rotacionInicial: 45, rotacionFinal: 360,  tamaño: 'w-40 h-40', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5L5 55h5L100 50z" },
      { x: -30, yStart: 600, yEnd: -150, rotacionInicial: -125, rotacionFinal: 180,  tamaño: 'w-28 h-28', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5L5 55h5L100 50z" },
      { x: -36, yStart: 600, yEnd: -350, rotacionInicial: 0, rotacionFinal: -260,  tamaño: 'w-12 h-12', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5L5 55h5L100 50z" },
      { x: -15, yStart: 400, yEnd: -500, rotacionInicial: 45, rotacionFinal: -315, tamaño: 'w-12 h-12', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M12 2L2 22h20L12 2z" },
      { x: 10,  yStart: 800, yEnd: -200, rotacionInicial: 90, rotacionFinal: 450,  tamaño: 'w-32 h-32', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M12 2L2 22h20L12 2z" },
      { x: 35,  yStart: 500, yEnd: -200, rotacionInicial: 90, rotacionFinal: 450,  tamaño: 'w-64 h-64', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M12 2L2 22h20L12 2z" },
      { x: 40, yStart: 950, yEnd: -350, rotacionInicial: 15, rotacionFinal: -260,  tamaño: 'w-32 h-32', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M50 5L5 55h5L100 50z" },
      { x: 45,  yStart: 700, yEnd: -400, rotacionInicial: 180, rotacionFinal: 540, tamaño: 'w-20 h-20', borderRadius: 'rounded-none', esSVG: true, viewBox: "0 0 100 100", pathSVG: "M12 2L2 22h20L12 2z" }
    ]
  },
];


// ==========================================
// 3. COMPONENTES HIJOS (CÓDIGO LIMPIO)
// ==========================================

interface FiguraFlotanteProps {
  fig: FiguraParams;
  progresoScroll: MotionValue<number>;
  inicioFondo: number;
  finFondo: number;
  opacidadFondo: MotionValue<number>;
  resplandorActivado: MotionValue<number>;
  colorPrincipal: string;
}

const FiguraFlotante: React.FC<FiguraFlotanteProps> = ({
  fig, progresoScroll, inicioFondo, finFondo, opacidadFondo, resplandorActivado, colorPrincipal
}) => {
  const yPos = useTransform(progresoScroll, [inicioFondo, finFondo], [fig.yStart, fig.yEnd]);
  const rotate = useTransform(progresoScroll, [inicioFondo, finFondo], [fig.rotacionInicial, fig.rotacionFinal]);

  // --- RENDERIZADO CONDICIONAL: SVG vs DIV NORMAL ---

  if (fig.esSVG && fig.pathSVG) {
    return (
      <motion.div
        style={{ 
          opacity: opacidadFondo, 
          y: yPos, 
          rotate: rotate,
          x: `${fig.x}vw`
        }}
        className={`absolute flex items-center justify-center ${fig.tamaño}`}
      >
        <svg viewBox={fig.viewBox || "0 0 24 24"} className="w-full h-full" style={{ fill: 'rgba(255,255,255,0.05)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}>
          <path d={fig.pathSVG} />
        </svg>
        <motion.svg viewBox={fig.viewBox || "0 0 24 24"} className="absolute inset-0 w-full h-full"
          style={{
            opacity: resplandorActivado,
            fill: 'transparent',
            stroke: colorPrincipal,
            strokeWidth: 2,
            filter: `drop-shadow(0px 0px 10px ${colorPrincipal})`
          }}
        >
          <path d={fig.pathSVG} />
        </motion.svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ 
        opacity: opacidadFondo,
        y: yPos, 
        rotate: rotate,
        x: `${fig.x}vw`
      }}
      className={`absolute border border-white/10 backdrop-blur-md bg-white/5 ${fig.tamaño} ${fig.borderRadius} flex items-center justify-center`}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: resplandorActivado,
          boxShadow: `0px 0px 40px 5px ${colorPrincipal}`,
          border: `2px solid ${colorPrincipal}`,
          borderRadius: 'inherit'
        }}
      />
    </motion.div>
  );
};

interface FondoDinamicoProps {
  indice: number;
  total: number;
  progresoScroll: MotionValue<number>;
  datos: SeccionData;
}

const FondoDinamico: React.FC<FondoDinamicoProps> = ({ indice, total, progresoScroll, datos }) => {
  const pico = indice / (total - 1);
  const margen = 1 / (total - 1); 
  
  const inicioFondo = pico - (margen * 0.8); 
  const finFondo = pico + (margen * 0.8);    
  
  const opacidadFondo = useTransform(progresoScroll, [inicioFondo, pico, finFondo], [0, 1, 0]);
  const escalaFondo = useTransform(progresoScroll, [inicioFondo, pico, finFondo], [0.6, 1.2, 0.6]);

  const zonaAlineacion = 0.03; 
  const resplandorActivado = useTransform(
    progresoScroll, 
    [pico - zonaAlineacion, pico, pico + zonaAlineacion], 
    [0, 1, 0]
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
      <motion.div
        style={{ opacity: opacidadFondo, scale: escalaFondo }}
        className={`absolute w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] blur-3xl ${datos.bgClases}`}
      />

      {datos.figuras?.map((fig, idx) => (
        <FiguraFlotante
          key={`figura-${indice}-${idx}`}
          fig={fig}
          progresoScroll={progresoScroll}
          inicioFondo={inicioFondo}
          finFondo={finFondo}
          opacidadFondo={opacidadFondo}
          resplandorActivado={resplandorActivado}
          colorPrincipal={datos.colorPrincipal}
        />
      ))}

      <motion.div 
        style={{ opacity: resplandorActivado, scaleX: resplandorActivado }}
        className="absolute w-full flex items-center px-12 z-10 transition-all duration-300"
      >
        <div className="flex-1 h-px border-b border-dashed opacity-50" style={{ borderColor: datos.colorPrincipal }} />
        <div className="w-2 h-2 rounded-full mx-6 shadow-[0_0_15px_currentColor]" style={{ backgroundColor: datos.colorPrincipal, color: datos.colorPrincipal }} />
        <div className="flex-1 h-px border-b border-dashed opacity-50" style={{ borderColor: datos.colorPrincipal }} />
      </motion.div>

    </div>
  );
};

// ==========================================
// 4. COMPONENTE PRINCIPAL
// ==========================================

export default function SeccionSoy() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: contenedorRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={contenedorRef} className="relative w-full bg-[#0F1115]" style={{ height: `${secciones.length * 100}vh` }}>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        {secciones.map((sec, i) => (
          <FondoDinamico 
            key={`bg-${i}`} 
            indice={i} 
            total={secciones.length} 
            progresoScroll={scrollYProgress} 
            datos={sec} 
          />
        ))}
      </div>

      <div className="absolute top-0 w-full flex text-4xl sm:text-6xl md:text-8xl font-bold font-sans z-20 pointer-events-none">
        
        <div className="sticky top-0 flex h-screen w-2/5 md:w-1/2 items-center justify-end pr-4 md:pr-10">
          <h3 className="text-white drop-shadow-xl tracking-tight">Soy</h3>
        </div>

        <div className="flex w-3/5 md:w-1/2 flex-col">
          {secciones.map((sec, i) => (
            <div key={`text-${i}`} className="flex h-screen items-center justify-start pl-4 md:pl-10">
              <motion.span
                initial={sec.estadoInicial}       
                whileInView={sec.estadoFinal}     
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ margin: "-40% 0px -40% 0px" }} 
                className="block drop-shadow-2xl"
                style={{ color: sec.colorPrincipal }}
              >
                {sec.texto}
              </motion.span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}