'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Intro from './intro'
import Code from './code'
import SVG from '../common/iluminarSVG'
import Button from '../ui/Button';
import Fondo from './fondo';
import {enlaces, states, img} from '@/types/welcome'


export default function Page() {
    const email = "WALABALAZ.DEV@GMAIL.COM";
    const [copiado, setCopiado] = useState(false);

    const handleCopiarCorreo = async () => {
        try {
        await navigator.clipboard.writeText(email.toLowerCase());
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
        } catch (err) {
        console.error('Error al copiar: ', err);
        }
    };
    
    const [ronda, setRonda] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setRonda((r) => r + 1);
        }, 5500);

        return () => clearTimeout(timer);
    }, [ronda]);

    const ciclo = () => {
        setRonda(prev => prev + 1);
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 '>
            <section className='z-1 bg-linear-to-r from-transparent to-portground/80 rounded-3xl lg:rounded-l-none lg:rounded-r-4xl px-3 py-5 md:px-16 md:py-15'>
                {states.map((s) => (
                    <div key={s.id} className='relative'>
                        <ul className={` flex flex-wrap gap-3 sm:w-sm justify-center items-center rounded-2xl py-2 backdrop-blur-3xl drop-shadow-2xl drop-shadow-portground/50 bg-[#0F0F17]/20  ${s.state === false ? 'hidden' : ''}`}>
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${s.color} opacity-75`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${s.color}`}></span>
                            </span>
                            <h3 className='text-[#FBF6EE] font-bold uppercase'>{s.estado}</h3>
                        </ul>
                    </div>
                ))}
                
                <Intro />

                <div className='flex flex-col md:flex-row gap-5 my-3'>
                    {enlaces.map((e) => (
                        <Button 
                            key={e.id}
                            title={e.enlace.startsWith('Ver') ? e.enlace : (copiado ? "¡CORREO COPIADO!" : email)
                            }
                            styleBt={`${e.class} cursor-pointer px-6 py-3 rounded-full hover:scale-105 text-xs font-bold uppercase `}
                            styleTx='font-bold uppercase tracking-wide'
                            colorElement={e.element}
                            onClick={e.enlace.startsWith('Ver') ? ()=>{}:handleCopiarCorreo}
                            href={e.ref}
                        >
                            <AnimatePresence mode="wait">
                                {!copiado ? (
                                    <motion.svg
                                        key="copy"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className={`w-6 h-6 text-inherit ${e.id !== 2 ? 'hidden': 'visible'} z-1`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </motion.svg>
                                    ) : (
                                    <motion.svg
                                        key="check"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className={`w-6 h-6 text-inherit ${e.id !== 2 ? 'hidden': 'visible'} z-1`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />       
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </Button> 
                    ))}
                </div>
                <div className='flex gap-3 my-8'>
                    {img.map((i, index) => (
                        <a key={i.id} href="">
                            <SVG
                                delay={0.5 * index}
                                pathDirection={i.path}
                                ronda={ronda}
                                onComplete={index === img.length - 1 ? ciclo : () => {}}
                            />
                        </a>
                    ))}
                </div>
            </section>
            <Code />
            <Fondo/>
        </div>
    )
}