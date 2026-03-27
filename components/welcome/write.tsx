'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const VARIANTS = [
    "está de moda.",
    "es un arte.",
    "es mi pasión.",
];

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
    <span className="text-green-300">
      {`"Porque ser Ingeniero, `}
      <span className="text-green-300">
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-0.5 h-4 bg-blue-400 ml-1 align-middle"
        />
      </span>
      {`"`}
    </span>
  );
};