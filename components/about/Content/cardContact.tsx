'use client'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { handleSmoothScroll } from '@/components/common/types/scroll'

export default function ContactCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const isInView = useInView(ref, {
    margin: '-40% 0px -40% 0px',
    once: false,
  })

  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia('(hover: none)').matches
    )
  }, [])

  const isActive = isTouchDevice
    ? isInView
    : isHovered

  return (
    <div ref={ref} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} data-active={isActive}
      className=" group relative flex min-h-115 size-full flex-col overflow-hidden rounded-3xl border border-cream
     bg-espresso dark:bg-teal p-8 text-cream transition-all duration-700 data-[active=true]:border-mahogany/30 data-[active=true]:shadow-[0_0_40px_rgba(48,16,20,0.15)] md:p-9 " 
    >
      <div
        className=" pointer-events-none absolute inset-0 opacity-[0.13] bg-[radial-gradient(circle_at_2px_2px,rgba(237,244,237,0.18)_1px,transparent_0)]"
        style={{
          backgroundSize: '24px 24px',
        }}
      />
      <svg className=" pointer-events-none absolute right-6 top-6 h-32 w-32 rotate-12 text-cream dark:text-mahogany opacity-[0.10]
          transition-all duration-700 group-data-[active=true]:rotate-45 group-data-[active=true]:opacity-[0.18] "
          viewBox="0 0 100 100" fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6"/>
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5"/>
      </svg>
      <div className=" relative z-10 flex items-start justify-between ">
        <div className=" rounded-2xl border border-cream/15 dark:border-mahogany/15 bg-cream/10 dark:bg-mahogany/10 p-3.5 text-cream dark:text-mahogany backdrop-blur-md
          transition-transform duration-500 group-data-[active=true]:-rotate-3 group-data-[active=true]:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </div>
        <div className=" flex items-center gap-2 rounded-full border border-cream/15 dark:border-mahogany/15 bg-cream/10 dark:bg-mahogany/10 px-3 py-1.5 backdrop-blur-sm ">
          <span className="relative flex h-2 w-2">
            <span
              className=" absolute inline-flex h-full w-full animate-ping rounded-full bg-cream opacity-75 "
            />
            <span
              className=" relative inline-flex h-2 w-2 rounded-full bg-cream"
            />
          </span>
          <span className=" font-mono text-[9px] font-bold uppercase tracking-widest text-cream/75 dark:text-mahogany/75 " >
            Disponible
          </span>
        </div>
      </div>
      <div className="relative z-10 mt-auto pt-8">
        <p className=" mb-3 font-mono text-xs uppercase tracking-[0.2em] text-celadon/65 dark:text-mahogany/65 transition-colors duration-500 group-data-[active=true]:text-cream " >
          ¿Tienes un reto?
        </p>
        <h3 className=" font-heading text-4xl font-black leading-[0.9] tracking-[-0.04em] md:text-5xl ">
          Hablemos de
          <span className="block text-teal dark:text-mahogany">
            tu proyecto.
          </span>
        </h3>
        <a href="#contacto" onClick={(e) => handleSmoothScroll(e, '#contacto')}
          className=" mt-8 flex w-full items-center justify-between rounded-2xl border border-teal/20 dark:border-mahogany/20
           px-6 py-4 font-bold text-cream transition-all duration-500 hover:border-teal/40 dark:hover:border-mahogany/40 
           hover:bg-teal/10 dark:hover:bg-mahogany/10 active:scale-[0.98]  group-data-[active=true]:border-teal/30 dark:group-data-[active=true]:border-mahogany/30 "
        >
          <span className="text-sm tracking-wide">
            Ir a Contacto
          </span>
          <svg xmlns="http://www.w3.org/2000/svg"  className=" size-5 transition-transform duration-500 
            group-data-[active=true]:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}