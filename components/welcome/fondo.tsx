'use client'
import React from 'react';
import { motion } from 'framer-motion';

// Array actualizado: Eliminamos el 'gradient' y agregamos 'glowColor' para el shadow
const syntaxElements = [
  { id: 1, symbol: '< />', left: '10%', duration: 18, delay: 0, scale: 0.8, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 2, symbol: '{ }', left: '25%', duration: 22, delay: 2, scale: 1.2, glowColor: 'rgba(255, 0, 85, 0.6)' }, 
  { id: 3, symbol: ';', left: '40%', duration: 15, delay: 5, scale: 0.9, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 4, symbol: '+', left: '55%', duration: 25, delay: 1, scale: 1.5, glowColor: 'rgba(99, 102, 241, 0.6)' }, 
  { id: 5, symbol: '()', left: '70%', duration: 19, delay: 3, scale: 1.0, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 6, symbol: '[ ]', left: '85%', duration: 21, delay: 6, scale: 0.7, glowColor: 'rgba(255, 0, 85, 0.6)' }, 
  { id: 7, symbol: '/', left: '15%', duration: 20, delay: 4, scale: 1.1, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 8, symbol: '=>', left: '50%', duration: 16, delay: 7, scale: 1.3, glowColor: 'rgba(99, 102, 241, 0.6)' }, 
  { id: 9, symbol: '||', left: '80%', duration: 24, delay: 2, scale: 0.8, glowColor: 'rgba(255, 255, 255, 0.5)' },
  { id: 10, symbol: '&&', left: '30%', duration: 17, delay: 8, scale: 1.0, glowColor: 'rgba(255, 0, 85, 0.6)' }, 
];

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0B0F19] overflow-hidden pointer-events-none select-none">
      
      <motion.div
        className="
          absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-75 min-h-75 rounded-full
          bg-[radial-gradient(circle,rgba(255,0,85,0.15)_0%,rgba(255,0,85,0)_70%)]
          blur-[80px]
          will-change-transform 
        "
        animate={{ x: ['0%', '10%', '0%'], y: ['0%', '15%', '0%'], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="
          absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] min-w-87.5 min-h-87.5 rounded-full
          bg-[radial-gradient(circle,rgba(67,56,202,0.12)_0%,rgba(67,56,202,0)_70%)]
          blur-[100px]
          will-change-transform
        "
        animate={{ x: ['0%', '-15%', '0%'], y: ['0%', '-10%', '0%'], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {syntaxElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute bottom-[-10%] font-mono text-white/70"
          style={{
            left: el.left,
            fontSize: `${24 * el.scale}px`,
            willChange: 'transform, filter', 
            filter: `drop-shadow(0px 0px 8px ${el.glowColor})`,
          }}
          animate={{
            y: ['0vh', '-120vh'],
            rotate: [0, 360],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.delay,
          }}
        >
          {el.symbol}
        </motion.div>
      ))}

      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] min-w-100 rounded-full bg-[radial-gradient(circle,rgba(255,0,85,0.04)_0%,transparent_70%)] blur-[50px]" />
      
    </div>
  );
};

export default Background;