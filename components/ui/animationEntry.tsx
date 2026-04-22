'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion'; 

const itemVariants: Variants = {
  // El estado "oculto" sirve tanto para el inicio como para cuando sale de pantalla
  oculto: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95,
    visibility: "hidden",
    // Le ponemos una transición rápida de salida para que no tarde en desaparecer
    transition: { duration: 0.2, ease: "easeOut" } 
  },
  visible: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1,
    visibility: "visible", 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      mass: 1,
      delay: index * 0.15 
    }
  })
};

interface animateProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export default function animationEntry ({ children, index, className }: animateProps) {
 return (
    <motion.div 
      custom={index}
      variants={itemVariants}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: "0px 0px -10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
