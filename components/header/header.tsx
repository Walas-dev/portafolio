'use client'
import { motion, useScroll, useMotionValueEvent, AnimatePresence,} from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import ButtonHeader from './Content/buttonHeader'
import { sections } from '@/components/header/types/header'
import NavItem from './Content/navItem'
import TitleHeader from './Content/titleHeader'
import Hamburger from './Content/hamburger'
import NavTitle from './Content/navTitle'

export default function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const HEADER_HEIGHT = { closed: 72, open: 'min(78vh, 680px)',}

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (previous === undefined) return
    if (Math.abs(latest - previous) > 5) {
      setMenuOpen(false)
    }
    setHidden(latest > previous && latest > 120)
    setScrolled(latest > 50)
  })

  return (
    <motion.header ref={headerRef} animate={{ y: hidden ? -140 : 0,}} transition={{ duration: 0.35, ease: 'easeOut',}}
      className=" fixed left-0 top-0 z-50 flex w-full justify-center px-3 sm:px-5 pointer-events-none "
    >
      <motion.div initial={false}
        animate={{ width: menuOpen ? 'min(92vw, 520px)' : 'min(92vw, 430px)', height: menuOpen ? HEADER_HEIGHT.open : HEADER_HEIGHT.closed, borderRadius: menuOpen ? 28 : 999, marginTop: scrolled ? 10 : 16, }}
        transition={{ width: { duration: menuOpen ? 0.55 : 0.5, ease: [0.22, 1, 0.36, 1], }, height: { duration: menuOpen ? 0.65 : 0.6, ease: [0.22, 1, 0.36, 1], },
            borderRadius: { duration: menuOpen ? 0.6 : 0.55, ease: [0.22, 1, 0.36, 1], }, marginTop: { duration: 0.3, ease: 'easeOut', }, }} style={{ transformOrigin: 'top right', 
        }} 
        className=" pointer-events-auto relative overflow-hidden border border-white/10 bg-mahogany/90 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.35)] "
      >
          <div className=" flex h-18 shrink-0 items-center justify-between gap-3 px-3 sm:px-4">
            <TitleHeader setMenuOpen={setMenuOpen}/>
            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          </div>

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25, delay: 0.2, ease: 'easeOut', }} 
                className=" flex h-[calc(100%-72px)] min-h-0 flex-col "
              >
                <div className=" mx-5 h-px shrink-0 bg-linear-to-r from-transparent via-cream/10 to-transparent "/>
                  <NavTitle/>
                  <nav className=" min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2 scrollbar-thin [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
                      {sections.map((s) => (
                          <NavItem key={s.id} s={s} active={active} setActive={setActive} setMenuOpen={setMenuOpen}/>
                      ))}
                  </nav>
                  <ButtonHeader setMenuOpen={setMenuOpen}/>
              </motion.div>
            )}
          </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}