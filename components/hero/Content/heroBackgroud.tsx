"use client";
import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.7, 0.15],
          backgroundPosition: ["0px 0px", "30px 30px"] 
        }}
        transition={{ 
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          backgroundPosition: { duration: 8, repeat: Infinity, ease: "linear" } 
        }}
        className="absolute inset-0 w-full h-full text-mahogany dark:text-cream"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 2px)',
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
};

export default HeroBackground;
