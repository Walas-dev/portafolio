'use client'

import { motion } from 'framer-motion'
import { animateP } from '@/components/contact/types/contact'

export default function ContactP() {
  return (
    <motion.p
      variants={animateP}
      initial="oculto"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.5,
      }}
      className=" mt-7 max-w-xl text-center font-body text-sm font-light leading-7 text-cream/55 sm:text-base sm:leading-7 md:text-lg md:leading-8 "
    >
      Tu visión merece el respaldo de expertos para alcanzar
      su máximo potencial. Unamos talentos para materializar
      tus objetivos y construir algo que pueda evolucionar.
    </motion.p>
  )
}