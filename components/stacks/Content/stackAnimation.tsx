'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Stack } from '../types/stacks'

function getContrastColor(hex?: string) {
  if (!hex) return '#edf4ed'
  const c = hex.replace('#', '')
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6 ? '#301014' : '#edf4ed'
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

interface Props {
  items: Stack[]
  onActiveChange?: (item: Stack) => void
}

export default function StackCascade({ items, onActiveChange }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((a) => (a + 1) % items.length)
    }, 2200)
    return () => clearInterval(t)
  }, [items.length])

  useEffect(() => {
    onActiveChange?.(items[activeIndex])
  }, [activeIndex, items, onActiveChange])

  if (!items || items.length === 0) return null // guard extra

  const VISIBLE = isMobile ? 3 : 4
  const OFFSET_X = isMobile ? 14 : 26
  const OFFSET_Y = isMobile ? 10 : 18
  const ROTATE_STEP = 9
  const SCALE_STEP = 0.1
  const TILE = isMobile ? 56 : 84

  return (
    <div className="relative flex items-center gap-4 md:gap-8">
      <div className="relative h-10 md:h-14 min-w-[100px] md:min-w-[160px] flex items-center justify-center md:justify-end">
        <AnimatePresence mode="wait">
          <motion.span
            key={items[activeIndex].id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="font-heading text-lg md:text-2xl font-semibold text-cream whitespace-nowrap"
          >
            {items[activeIndex].stack}
          </motion.span>
        </AnimatePresence>
      </div>

      <div
        className="relative"
        style={{ width: TILE + OFFSET_X * VISIBLE, height: TILE + OFFSET_Y * VISIBLE }}
      >
        {items.map((item, i) => {
          const n = items.length
          const rel = (i - activeIndex + n) % n
          const visible = rel < VISIBLE
          const x = rel * OFFSET_X
          const y = -rel * OFFSET_Y
          const rotate = rel * ROTATE_STEP
          const scale = 1 - rel * SCALE_STEP
          const opacity = visible ? Math.max(0, 1 - rel * 0.24) : 0
          const bg = item.color ?? '#999999' 

          return (
            <motion.div
              key={item.id}
              initial={false}
              className="absolute bottom-0 left-0 rounded-2xl flex items-center justify-center shadow-xl"
              style={{ width: TILE, height: TILE, backgroundColor: bg }}
              animate={{ x, y, rotate, scale, opacity, zIndex: 100 - rel }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            >
              <svg
                viewBox="0 0 640 640"
                className="w-1/2 h-1/2"
                style={{ color: getContrastColor(item.color) }}
                aria-hidden
              >
                <path fill="currentColor" d={item.p} />
              </svg>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}