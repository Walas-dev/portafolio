'use client'

import { motion } from 'framer-motion'

export default function ContactBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="
          absolute left-1/2 top-1/2 h-120 w-120
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-teal/15 blur-[120px]
        "
      />

      <div
        className="
          absolute -right-40 top-1/4 h-96 w-96
          rounded-full bg-celadon/15 blur-[120px]
        "
      />
    
      <div
        className="
          absolute -left-32 bottom-0 h-80 w-80
          rounded-full bg-teal/10 blur-[110px]
        "
      />

      <svg
        className="
          absolute left-1/2 top-1/2 h-175 w-250 max-w-none
          -translate-x-1/2 -translate-y-1/2 opacity-40
        "
        viewBox="0 0 1000 700"
        fill="none"
      >
        <motion.path
          id="net-path-1"
          d="M120 210 L300 150 L500 250 L720 130 L880 210"
          stroke="currentColor"
          className="text-cream/10"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        <motion.path
          id="net-path-2"
          d="M180 480 L340 370 L500 450 L670 350 L830 470"
          stroke="currentColor"
          className="text-teal/20"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.2, ease: 'easeInOut' }}
        />

        <motion.path
          d="M300 150 L340 370"
          stroke="currentColor"
          className="text-cream/8"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
        />

        <motion.path
          d="M500 250 L500 450"
          stroke="currentColor"
          className="text-teal/15"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
        />

        <motion.path
          d="M720 130 L670 350"
          stroke="currentColor"
          className="text-cream/8"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
        />

        <circle cx="120" cy="210" r="3" className="fill-cream/20" />
        <circle cx="300" cy="150" r="4" className="fill-teal/40" />
        <circle cx="500" cy="250" r="5" className="fill-teal/50" />
        <circle cx="720" cy="130" r="4" className="fill-celadon/30" />
        <circle cx="880" cy="210" r="3" className="fill-cream/20" />
        <circle cx="180" cy="480" r="3" className="fill-cream/15" />
        <circle cx="340" cy="370" r="4" className="fill-teal/30" />
        <circle cx="500" cy="450" r="5" className="fill-teal/40" />
        <circle cx="670" cy="350" r="4" className="fill-celadon/30" />
        <circle cx="830" cy="470" r="3" className="fill-cream/15" />

        <motion.circle
          cx="500"
          cy="250"
          r="5"
          className="fill-teal"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
        <motion.circle
          cx="670"
          cy="350"
          r="4"
          className="fill-celadon"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
        />

        {/* NUEVO — paquetes de datos viajando por las rutas ya dibujadas */}
        <circle r="3" fill="currentColor" className="text-teal [filter:drop-shadow(0_0_6px_currentColor)]">
          <animateMotion dur="5s" begin="2s" repeatCount="indefinite">
            <mpath href="#net-path-1" />
          </animateMotion>
        </circle>
        <circle r="3" fill="currentColor" className="text-celadon [filter:drop-shadow(0_0_6px_currentColor)]">
          <animateMotion dur="6s" begin="2.6s" repeatCount="indefinite">
            <mpath href="#net-path-2" />
          </animateMotion>
        </circle>
      </svg>

      <motion.div
        className="
          absolute left-1/2 top-1/2 h-88 w-88
          -translate-x-1/2 -translate-y-1/2 rounded-full
          border border-cream/20
        "
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="
          absolute left-1/2 top-1/2 h-56 w-56
          -translate-x-1/2 -translate-y-1/2 rounded-full
          border border-teal/15
        "
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="
          absolute left-1/2 top-1/2 h-2 w-2
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-teal/80
        "
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="
          absolute bottom-16 left-1/2 h-px w-[70%]
          -translate-x-1/2 bg-linear-to-r
          from-transparent via-cream/5 to-transparent
        "
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay">
        <filter id="contact-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#contact-grain)" />
      </svg>
    </div>
  )
}