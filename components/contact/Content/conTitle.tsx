'use client'

import { motion } from 'framer-motion'
import {
  title,
  animateContainer,
  animateTitle,
} from '@/components/contact/types/contact'

export default function ContactTitle() {
  return (
    <motion.div
      variants={animateContainer}
      initial="oculto"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.5,
      }}
      className="flex w-full max-w-4xl flex-col items-center"
    >

      <div className="mb-7 flex w-full items-center justify-center gap-4">
        
        <span className="h-px w-12 sm:w-20 bg-cream/15" />

        <div className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal/70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-teal" />
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-cream/40 sm:text-[10px]">
            contact / open_channel
          </span>
        </div>

        <span className="h-px w-12 sm:w-20 bg-cream/15" />

      </div>

      <div className="flex flex-col items-center text-center">
        {title.map((item) => (
          <motion.h3
            key={item.id}
            variants={animateTitle}
            className=" font-heading text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cream sm:text-5xl md:text-6xl lg:text-7xl "
          >
            {item.t}
          </motion.h3>
        ))}
      </div>


      <div className="mt-7 flex items-center gap-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cream/25">
          secure_connection
        </span>

        <span className="h-px w-8 bg-teal/30" />

        <span className="font-mono text-[9px] tracking-[0.2em] text-teal/60">
          01
        </span>
      </div>

    </motion.div>
  )
}