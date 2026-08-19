'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cardHover } from '@/components/about/types/about'

export default function ActionCardCarrusel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % cardHover.length
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered])

  const activeItem = cardHover[currentIndex]

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      className=" group relative flex min-h-115 w-full flex-col overflow-hidden rounded-3xl border
       border-cream/10 bg-[#89c0a9] dark:bg-[#151012] p-7 text-mahogany dark:text-cream transition-all duration-500 hover:border-teal/30 md:p-8 "
    >
      <div className=" pointer-events-none absolute inset-0 opacity-[0.13] dark:bg-[radial-gradient(circle_at_1px_1px,#edf4ed_1.4px,transparent_0)] bg-[radial-gradient(circle_at_1.5px_1.5px,#301014_1.8px,transparent_0)]"
        style={{ backgroundSize: '24px 24px', }}
      />

      <div className=" pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-teal/10
          blur-[100px] transition-transform duration-700 group-hover:scale-125 " />

      <div className="relative z-10 flex items-center justify-between">
        <span className=" font-mono text-[10px] uppercase tracking-[0.3em] text-espresso dark:text-cream/40 ">
          SYSTEM_CAPABILITIES
        </span>

        <span className=" font-mono text-[10px] text-espresso dark:text-teal ">
          {String(currentIndex + 1).padStart(2, '0')}
          /
          {String(cardHover.length).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div key={activeItem.id} initial={{ opacity: 0, scale: 0.85, y: 20, }} animate={{ opacity: 1, scale: 1, y: 0, }}
            exit={{ opacity: 0, scale: 0.85, y: -20, }} transition={{ duration: 0.4, }}
          >
            <svg viewBox="0 0 640 640" className=" size-20 text-espresso dark:text-celadon drop-shadow-[0_0_25px_rgba(121,183,145,0.2)] md:size-24 " >
              <path fill="currentColor" d={activeItem.path}/>
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={activeItem.id} initial={{ opacity: 0, y: 15, }} animate={{ opacity: 1, y: 0, }}
            exit={{ opacity: 0, y: -15, }} transition={{ duration: 0.35, }}
          >
            <p className=" mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-espresso dark:text-teal " >
              {activeItem.subtitle}
            </p>
            <h3 className=" font-heading text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-4xl " >
              {activeItem.title}
            </h3>
            <p className=" mt-4 text-xs leading-6 text-espresso/65 dark:text-cream/45 " >
              {activeItem.detail}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center gap-2">
          {cardHover.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} aria-label={`Mostrar capacidad ${index + 1}`}
              className={` h-1.5 rounded-full transition-all duration-300 ${ index === currentIndex 
                ? 'w-10 bg-espresso dark:bg-teal' : 'w-3 bg-mahogany/20 dark:bg-cream/20 hover:bg-cream/40'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}