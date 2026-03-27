'use client'
import { motion } from 'framer-motion';

interface GradientGlowProps {
  children: React.ReactNode;
  colors?: string[]; 
  className?: string;
}

export default function GradientGlow({ 
  children, 
  colors = ['#1e40af', '#7e22ce', '#0891b2', '#1e40af'],  
  className = "" 
}: GradientGlowProps) {
  
  return (
    <div className={`relative group ${className}`}>
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundImage: [
            `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`,
            `linear-gradient(to bottom right, ${colors[1]}, ${colors[2]})`,
            `linear-gradient(to bottom right, ${colors[2]}, ${colors[3]})`,
            `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-2 -z-10 rounded-3xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}