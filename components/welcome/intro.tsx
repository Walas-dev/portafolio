'use client'
import React, {   useState, useEffect  } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {content} from '@/types/welcome'

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
                        <h2 className='font-bold text-5xl sm:text-7xl md:text-[6rem] leading-tight flex flex-wrap items-center'>
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
                                className='sm:ml-4 text-portground'
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
                        <p className='text-white/50 text-[1.3rem]  leading-relaxed'>
                            {activeItem.p}
                        </p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
  )
}