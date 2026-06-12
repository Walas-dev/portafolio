'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {syntaxElements} from '@/types/welcome'

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