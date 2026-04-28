'use client'
import React from 'react'
import ConnectivitySection from './ConnectivitySection'
import { motion, Variants } from 'framer-motion';

const title = [{id:1, t:'Construyamos el futuro.'}, { id:2, t:'de tu empresa.'}]
const enlace = [
  {
    id: 1, 
    a: 'Hablemos por WhatsApp', 
    ref: 'https://wa.me/TUNUMERODEWHATSAPP', 
    style: 'bg-[#111111] text-[#FBF6EE] hover:bg-[#111111]/90' 
  },
  {
    id: 2, 
    a: 'Envíame un Correo', 
    ref: 'mailto:tucorreo@gmail.com?subject=Propuesta%20de%20proyecto', 
    style: 'border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FD105E]'
  }
]

const animateContainer: Variants = {
  oculto: { opacity: 0, y: 40, filter: "blur(5px)" }, // Entra desde abajo con un ligero desenfoque (muy premium)
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } // Curva de animación suave
  }
}

const animateTitle: Variants = {
  oculto: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay: 0.4 }
  }
}

const animateP: Variants = {
  oculto: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, delay: 0.6 } }
}


const animateB: Variants = {
  oculto: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "tween", stiffness: 200, damping: 15, delay:0.8, ease: "easeInOut"} 
  }
};

export default function Page() {
  return (
    <div className='relative flex w-full min-h-screen items-center justify-center bg-[#FD105E] overflow-hidden'>
      
        <div className='absolute z-10 text-center text-white items-center justify-center flex flex-col px-4'>    
                
                <motion.div
                  variants={animateContainer} 
                  initial="oculto" 
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                   
                >
                  {title.map((e)=>(
              
                      <motion.h3
                        key={e.id}
                        variants={animateTitle}
                        className='uppercase font-black text-5xl sm:text-6xl md:text-[5.5rem] text-[#111111] leading-[0.95] tracking-tighter'
                      >
                        {e.t}
                      </motion.h3>
                  ))}             
                </motion.div>
              
            
              <motion.p 
                variants={animateP} 
                initial="oculto" 
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className='text-[#111111]/80 mt-6 mb-10 text-base sm:text-lg md:text-xl font-semibold max-w-2xl'
              >
                    Tu visión merece el respaldo de expertos para alcanzar su máximo potencial. Unamos talentos ahora para materializar tus grandes objetivos y ver tu negocio crecer con solidez.
              </motion.p>
              
              <motion.div 
                variants={animateB}
                initial="oculto"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className='flex gap-4 flex-wrap justify-center'
              >
                {enlace.map((a)=>(
                  <a 
                    key={a.id}
                    href={a.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-4 px-10 rounded-full font-bold transition-all transform duration-300 hover:-translate-y-1.5 shadow-lg
                        ${a.style}                      
                      `}
                  >
                    {a.a}  
                  </a>
                ))}
              </motion.div>
        </div> 
            
            <div className="opacity-40">
                <ConnectivitySection />
            </div>
    </div>
  )
}