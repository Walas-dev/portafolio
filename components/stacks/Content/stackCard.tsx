'use client'

import { motion } from 'framer-motion'
import type { Stack } from '../types/stacks'

function getContrastColor(hex?: string) {
  if (!hex) return '#edf4ed'

  const c = hex.replace('#', '')

  if (c.length !== 6) return '#edf4ed'

  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)

  const luminance =
    (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance > 0.6 ? '#301014' : '#edf4ed'
}

export default function StackCard({
  item, index
}: {
  item: Stack
  index:number
}) {
  const foreground = getContrastColor(item.color)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
      className="z-10 group relative overflow-hidden rounded-2xl md:rounded-3xl min-h-38.75 md:min-h-55 p-4 md:p-7
        flex flex-col justify-between shadow-lg transition-shadow duration-300 hover:shadow-2xl
      "
      style={{
        backgroundColor: item.color ?? '#444',
        color: foreground,
      }}
    >
      
      <div
        className=" Capa absolute inset-0 pointer-events-none opacity-20
         bg-black transition-opacity duration-300 group-hover:opacity-10
        "
      />

     
      <div
        className="Glow absolute -right-12 -top-12 w-32 h-32 rounded-full blur-3xl opacity-30
         bg-cream pointer-events-none transition-transform duration-500 group-hover:scale-150"
      />

      
      <div
        className=" relative z-10 flex items-start justify-between"
      >
        <span
          className=" font-mono text-[10px] uppercase tracking-[0.2em] opacity-60"
        >
          technology
        </span>

        <span
          className=" font-mono text-xs opacity-50"
        >
          #{String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div
        className=" relative z-10 flex items-center justify-center flex-1 py-6"
      >
        <svg
          viewBox="0 0 640 640"
          className=" w-12 h-12 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ color: foreground }}
          aria-hidden
        >
          <path
            fill="currentColor"
            d={item.p}
          />
        </svg>
      </div>

      <div
        className=" relative z-10 flex items-end justify-between gap-4"
      >
        <h4
          className=" font-heading text-xl md:text-3xl font-bold tracking-tight"
        >
          {item.stack}
        </h4>

        <span
          className=" font-mono text-xs opacity-50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        >
          ↗
        </span>
      </div>
    </motion.article>
  )
}