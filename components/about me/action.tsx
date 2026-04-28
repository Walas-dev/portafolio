"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Interfaz para los datos
interface CardData {
    id: number;
    title: string;
    subtitle: string;
    detail: string;
    path: string;
}

const cardHover: CardData[] = [
    {id:1, title:'CONSTRUIR ARQUITECTURA', subtitle:'INGENIERÍA_DESDE_CERO', detail:'Materializa tu visión tecnológica con cimientos inquebrantables. Diseño y desarrollo el núcleo de tu sistema a la medida, entregándote una plataforma robusta, escalable y lista para dominar el mercado.', path:'M163.3 320.1L232.7 200.2C227.1 188 223.9 174.4 223.9 160C223.9 107 266.9 64 319.9 64C372.9 64 415.9 107 415.9 160C415.9 174.3 412.8 187.9 407.1 200.2L451.5 276.9C428.4 302.9 397.8 322 363.1 330.7L320 255.9L251.9 373.5C273.4 380.3 296.2 384 320 384C390.7 384 453.8 351.3 494.9 300C506 286.2 526.1 284 539.9 295C553.7 306 555.9 326.2 544.9 340C492.2 405.8 411 448 320.1 448C284.7 448 250.7 441.6 219.4 429.9L162.7 527.7C158 535.8 151 542.4 142.6 546.6L87.2 574.3C82.2 576.8 76.3 576.5 71.6 573.6C66.9 570.7 64 565.5 64 560L64 504.6C64 496.2 66.2 487.9 70.5 480.5L130.5 376.8C117.7 365.6 105.9 353.3 95.2 340C84.1 326.2 86.4 306.1 100.2 295C114 283.9 134.1 286.2 145.2 300C150.9 307.1 157 313.8 163.4 320.1zM445.1 471.9C477.6 458.9 507.5 440.9 534 419L569.6 480.5C573.8 487.8 576.1 496.1 576.1 504.6L576.1 560C576.1 565.5 573.2 570.7 568.5 573.6C563.8 576.5 557.9 576.8 552.9 574.3L497.5 546.6C489.1 542.4 482.1 535.8 477.4 527.7L445.1 471.9zM320 192C337.7 192 352 177.7 352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192z'},
    {id:2, title:'GESTIONAR NUBE', subtitle:'orquestación de recursos', detail:'Escala tu infraestructura con libertad absoluta. Optimiza tus recursos de forma inteligente para garantizar una disponibilidad del 99.99% y un rendimiento máximo en cada despliegue global.', path:'M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z'},
    {id:3, title:'Analizar Seguridad', subtitle:'integridad activa', detail:'Fortalece la confianza de tus clientes con una arquitectura blindada. Implementa protocolos avanzados de Zero Trust para asegurar la integridad total y permanente de tus activos digitales.', path:'M112 320C112 205.1 205.1 112 320 112C383.1 112 439.6 140.1 477.8 184.5C486.4 194.6 501.6 195.7 511.6 187.1C521.6 178.5 522.8 163.3 514.2 153.3C467.3 98.6 397.7 64 320 64C178.6 64 64 178.6 64 320L64 360C64 373.3 74.7 384 88 384C101.3 384 112 373.3 112 360L112 320zM570.5 267.1C567.8 254.1 555 245.8 542.1 248.6C529.2 251.4 520.8 264.1 523.6 277C526.5 290.9 528.1 305.3 528.1 320.1L528.1 360.1C528.1 373.4 538.8 384.1 552.1 384.1C565.4 384.1 576.1 373.4 576.1 360.1L576.1 320.1C576.1 302 574.2 284.3 570.6 267.2zM320 144C301 144 282.6 147 265.5 152.6C250.3 157.6 246.8 176.3 257.2 188.5C264.3 196.8 276 199.3 286.6 196.4C297.2 193.5 308.4 192 320 192C390.7 192 448 249.3 448 320L448 344.9C448 370.1 446.5 395.2 443.6 420.2C441.9 434.8 453 448 467.8 448C479.6 448 489.7 439.4 491.1 427.7C494.4 400.3 496.1 372.7 496.1 345L496.1 320.1C496.1 222.9 417.3 144.1 320.1 144.1zM214.7 212.7C205.6 202.1 189.4 201.3 180.8 212.3C157.7 242.1 144 279.4 144 320L144 344.9C144 369.1 141.4 393.3 136.2 416.8C132.8 432.4 144.1 447.9 160.1 447.9C170.6 447.9 180 440.9 182.3 430.6C188.7 402.5 192 373.8 192 344.8L192 319.9C192 292.7 200.5 267.5 214.9 246.8C222.1 236.4 222.9 222.2 214.7 212.6zM320 224C267 224 224 267 224 320L224 344.9C224 380.8 219.4 416.4 210.2 451C206.4 465.3 216.9 480 231.7 480C241.2 480 249.6 473.8 252.1 464.6C262.6 425.6 268 385.4 268 344.9L268 320C268 291.3 291.3 268 320 268C348.7 268 372 291.3 372 320L372 344.9C372 381.2 368.5 417.3 361.6 452.8C358.9 466.7 369.3 480 383.4 480C393.6 480 402.4 473 404.4 463C412.1 424.2 416 384.7 416 344.9L416 320C416 267 373 224 320 224zM344 320C344 306.7 333.3 296 320 296C306.7 296 296 306.7 296 320L296 344.9C296 404.8 285 464.2 263.5 520.1L257.6 535.4C252.8 547.8 259 561.7 271.4 566.4C283.8 571.1 297.7 565 302.4 552.6L308.3 537.3C331.9 475.9 344 410.7 344 344.9L344 320z'},
    {id:4, title:'incrementa Rendimiento', subtitle:'Optimización de latencia', detail:'Brinda experiencias hiperveloces. Refina cada línea de código y consulta de red para entregar respuestas en milisegundos, elevando la retención y la satisfacción de tus usuarios a su máximo nivel.', path:'M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM144 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm144-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm80 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM512 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z'},
];



export default function ActionCardCarrusel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHovered) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % cardHover.length);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [isHovered]);

    const activeItem = cardHover[currentIndex];

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         
            className='relative size-full p-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex flex-col items-center justify-between rounded-3xl transition-colors hover:bg-slate-800 overflow-hidden min-h-85'
        >
            <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10">
                <AnimatePresence mode="wait">
                    {/* Al separar en dos motion.div, podemos darles direcciones opuestas */}
                    <div key={activeItem.id} className="flex flex-col items-center w-full gap-6">
                        
                        {/* 1. ANIMACIÓN DEL ÍCONO (Entra desde arriba) */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className='grow flex h-24 items-center justify-center'
                        >
                            <svg viewBox="0 0 640 512" className="size-24">
                                <path fill='#FD105E' d={activeItem.path} />
                            </svg>
                        </motion.div>
                        
                        {/* 2. ANIMACIÓN DE LOS TEXTOS (Entran desde abajo) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className='flex flex-col text-center gap-0.5 text-white'
                        >
                            <h3 className='text-2xl font-extrabold uppercase'>{activeItem.title}</h3>
                            <h4 className='italic font-light uppercase text-slate-300'>{activeItem.subtitle}</h4>
                        </motion.div>

                    </div>
                </AnimatePresence>
            </div>

         
            <div className='absolute top-70 lg:top-80 flex flex-col items-center gap-2 z-10'>
                <div className='bg-[#FD105E] h-2 w-24 rounded-2xl'/>
                <div className='bg-[#FD105E] h-2 w-12 rounded-2xl'/>
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        // Degradado oscuro abajo, transparente arriba. z-20 lo pone sobre el contenido.
                        className="absolute inset-0 bg-slate-900/70  backdrop-blur-sm z-20 flex items-center justify-center pb-12 px-8"
                    >
                        {/* El texto dentro del cristal hace la animación de entrar desde abajo */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            className="text-center text-sm text-slate-200 font-medium leading-relaxed drop-shadow-lg"
                        >
                            {activeItem.detail}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}