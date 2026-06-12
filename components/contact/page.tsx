'use client'
import ConnectivitySection from './ConnectivitySection'
import { motion } from 'framer-motion';
import {title, enlace, animateContainer, animateTitle, animateP, animateB} from '@/types/contact'

export default function Page() {
  return (
    <div id="contacto" className='relative flex w-full min-h-screen items-center justify-center bg-linear-to-b from-portground/70 via-portground/75 to-portground/80 overflow-hidden'>
        <div className='absolute z-10 text-center text-white items-center justify-center flex flex-col px-6 sm:px-8 max-w-7xl mx-auto'>    
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
                    className='uppercase font-black text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] text-[#111111] leading-[0.95] tracking-tighter'
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
                className='text-[#111111]/80 mt-6 mb-8 sm:mb-10 sm:text-base md:text-xl font-semibold max-w-[90%] sm:max-w-2xl mx-auto'
            >
                    Tu visión merece el respaldo de expertos para alcanzar su máximo potencial. Unamos talentos ahora para materializar tus grandes objetivos y ver tu negocio crecer con solidez.
            </motion.p>
              
            <motion.div 
              variants={animateB}
              initial="oculto"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center'
            >
                {enlace.map((a)=>(
                  <a 
                    key={a.id}
                    href={a.ref}
                    target={a.ref.startsWith('mailto:') ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 rounded-full font-bold transition-all transform duration-300 hover:-translate-y-1.5 shadow-lg w-full sm:w-auto text-center
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