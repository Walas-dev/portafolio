'use client'
import React, {   useState, useEffect  } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const content = [
    {id:1, title:'Sistemas Diseñados para', span:'el Crecimiento Infinito', p:'Construyo arquitecturas de microservicios que evolucionan con tu negocio. Convierte la complejidad técnica en una ventaja competitiva escalable y de alto rendimiento.'},
    {id:2, title:'Simplificando el Futuro de', span:'Tu Infraestructura', p:'Diseño soluciones robustas que eliminan cuellos de botella técnicos. Arquitectura inteligente para que tu única preocupación sea el éxito de tu producto.'},
    {id:3, title:'Arquitectura Que Da Vida', span:'A Tus Ideas', p:'Fusiono ingeniería de precisión con desarrollo front-end de alto rendimiento. Transformo tu visión técnica en sistemas operativos impecables y listos para el mercado.'},
    {id:4, title:'Sistemas de Seguridad e', span:'Inteligencia Electrónica', p:'Protejo tus activos mediante el despliegue de infraestructura de videovigilancia IP y monitoreo avanzado. Seguridad física respaldada por precisión técnica.'},
    {id:5, title:'Continuidad Operativa y', span:'Resiliencia Técnica', p:'Garantizo que tu tecnología nunca se detenga. Soporte especializado, mantenimiento preventivo y optimización de redes para una operatividad sin interrupciones.'}
];

export default function Intro() {
    
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % content.length);
        }, 7500);
        return () => clearInterval(timer);
    }, []);
    
    const activeItem = content[index];

  return (
        <div className='my-10 gap-1'>
        <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={activeItem.id}
                    exit={{ opacity: 0, x: 50, filter: 'blur(10px)', transition: { duration: 1.0 } }}
                    className="w-full flex flex-col gap-6"
                >
                    <div className='flex flex-wrap gap-x-4 gap-y-2'>
                        <h2 className='font-bold text-5xl sm:text-7xl md:text-8xl leading-tight flex flex-wrap items-center'>
                            <motion.span
                                initial={{ opacity: 0, x: -60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {activeItem.title}
                            </motion.span>
                            
                            <motion.span 
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                className='sm:ml-4 bg-linear-to-r from-[#FD105E] to-[#F2C6C2] bg-clip-text text-transparent'
                            >
                                {activeItem.span}
                            </motion.span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                    >
                        <p className='text-[#FBF6EE] text-[1.3rem]  leading-relaxed'>
                            {activeItem.p}
                        </p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
  )
}
