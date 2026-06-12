"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {cardHover} from '@/types/about';

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
            className='flex flex-col size-full p-8 bg-gray-500/8 backdrop-blur-md border border-gray-600/30 hover:border-portground/50  rounded-3xl transition-colors hover:bg-slate-800 overflow-hidden min-h-100'
        >
            <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10">
                <AnimatePresence mode="wait">
                    <div key={activeItem.id} className="flex flex-col items-center w-full gap-6">
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
            <div className=' flex flex-col items-center gap-2 z-10 -translate-y-10'>
                <div className='bg-portground h-2 w-24 rounded-2xl'/>
                <div className='bg-portground h-2 w-12 rounded-2xl'/>
            </div>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-linear-to-l from-portground/10 to-slate-950/40 backdrop-blur-md z-20 flex items-center justify-center pb-12 px-8"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            className="text-center text-md font-light text-slate-200 leading-relaxed drop-shadow-lg"
                        >
                            {activeItem.detail}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}