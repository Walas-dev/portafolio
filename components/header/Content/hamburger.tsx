import { motion } from 'framer-motion'
import React from 'react'

interface HamburgerProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ setMenuOpen, menuOpen }: HamburgerProps) => {
  return (
    <button 
      type="button" 
      onClick={() => setMenuOpen((prev) => !prev)} 
      aria-expanded={menuOpen} 
      aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      className=" relative flex size-10 shrink-0 items-center justify-center rounded-full border border-cream/10 bg-cream/5 transition-all duration-300 hover:border-teal/30 hover:bg-teal/10 sm:size-11 "
    >
      <span className="relative block size-5">
        <motion.span
          animate={ menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 } }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], }}
          className=" absolute left-0 top-1/2 h-px w-5 origin-center rounded-full bg-cream "
        />
        <motion.span
          animate={ menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 } }
          transition={{ duration: 0.2 }}
          className=" absolute left-0 top-1/2 h-px w-5 rounded-full bg-cream "
        />
        <motion.span
          animate={ menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 } }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], }}
          className=" absolute left-0 top-1/2 h-px w-5 origin-center rounded-full bg-cream "
        />
      </span>
    </button>
  )
}

export default Hamburger