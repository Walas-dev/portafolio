'use client'
import React from 'react';
import { motion } from 'framer-motion'; 
import {animateProps, itemVariants} from '@/types/common'

export default function AnimationEntry ({ children, index, className }: animateProps) {
 return (
    <motion.div 
      custom={index}
      variants={itemVariants}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}