'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {VARIANTS} from '@/components/hero/types/hero'

export const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = VARIANTS[index];
      
      setDisplayText((current) => {
        if (!isDeleting) {
          const nextText = fullText.substring(0, current.length + 1);
          if (nextText === fullText) {
            setSpeed(2000); 
            setIsDeleting(true);
          } else {
            setSpeed(100);
          }
          return nextText;
        } 
        else {
          const nextText = fullText.substring(0, current.length - 1);
          if (nextText === '') {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % VARIANTS.length);
            setSpeed(500); 
          } else {
            setSpeed(50);
          }
          return nextText;
        }
      });
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <span className="inline-flex items-center dark:text-cream text-mahogany">
      {displayText}
      
      <motion.span 
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ 
            duration: 0.9,
            repeat: Infinity,
            times: [0, 0.5, 0.5, 1] 
        }}
        className="w-1.25 h-[0.9em] dark:bg-cream bg-mahogany ml-1 md:ml-2 rounded-sm" 
      />
    </span>
  );
};