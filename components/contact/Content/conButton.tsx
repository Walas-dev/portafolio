'use client'

import { motion } from 'framer-motion'
import { enlace, animateB } from '@/components/contact/types/contact'

export default function ContactActions() {
  return (
    <motion.div
      variants={animateB}
      initial="oculto"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.5,
      }}
      className=" mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4 "
    >
      {enlace.map((item) => (
        <a
          key={item.id}
          href={item.ref}
          target={
            item.ref.startsWith('mailto:')
              ? '_self'
              : '_blank'
          }
          rel="noopener noreferrer"
          className={` w-full rounded-full px-8 py-3.5 text-center text-sm font-bold transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:px-10
            ${
              item.id === 1
                ? ` bg-cream text-mahogany hover:bg-celadon`
                : ` border border-cream/30 text-cream hover:border-teal hover:bg-cream/10`
            }
          `}
        >
          {item.a}
        </a>
      ))}
    </motion.div>
  )
}