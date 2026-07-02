'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { SectionType, sections } from '@/types/header'
import { handleSmoothScroll } from "@/types/scroll";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (!prev) return;

    if (Math.abs(latest - prev) > 5) {
      setMenuOpen(false);
    }

    setHidden(latest > prev && latest > 120);
    setScrolled(latest > 50);
  });

  const NavItem = ({ s, isMobile = false }: { s: SectionType, isMobile?: boolean }) => {
    const isActive = active === s.id;
    return (
      <Link
        href={s.href}
        onMouseEnter={() => !isMobile && setActive(s.id)}
        onMouseLeave={() => !isMobile && setActive(null)}
        onClick={(e) => handleSmoothScroll(e, s.href, ()=>isMobile && setMenuOpen(false))}
        className={`group flex items-center transition ${
          isMobile ? "gap-4 px-6 py-4 rounded-2xl hover:bg-white/5" : "gap-3 px-2 py-1 rounded-md"
        }`}
      >
        <svg className={`transition-all duration-300 ${isMobile ? "w-6 h-6" : "w-6 h-6 lg:w-7 lg:h-7"}`} viewBox="0 0 640 640">
          <path
            d={s.p}
            className={`transition-all duration-500 ease-in-out ${
              isActive ? "fill-white" : "fill-white/50 group-hover:fill-white"
            }`}
          />
        </svg>
        <span
          className={`transition-all duration-500 font-medium ${
            isMobile ? "text-lg" : "text-base lg:text-lg"
          } ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}
        >
          {s.section}
        </span>
      </Link>
    );
  };

  return (
    <motion.header
      ref={headerRef} 
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.3 }}
      className="w-full sticky top-0 z-50 flex justify-center"
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? 10 : 14,
          paddingBottom: scrolled ? 10 : 14,
        }}
        className={`mt-4 flex items-center justify-between 
        bg-[#0F0F17]/70 backdrop-blur-xl 
        border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        px-6 rounded-full transition-[width] duration-300 ease-in-out
        ${scrolled ? "w-[95%] lg:w-[75%] xl:w-[65%]" : "w-[95%] lg:w-[80%] xl:w-[70%]"}`}
      >

        <div className="relative text-white font-semibold flex items-center gap-1 text-xl lg:text-2xl">
          <Image src="/l.svg"
            alt="Logo" 
            className="size-10"
            width={40}
            height={40}
           />
          
          <div className="hidden sm:block">
            <span className="text-rose-400 font-bold">illiams</span> Alas
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {sections.map((s) => (
             <NavItem key={s.id} s={s} />
          ))}
        </nav>

        <button 
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-6 h-0.5 bg-white rounded-full"
          />
        </button>

      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-21 lg:top-24 w-[95%] left-1/2 -translate-x-1/2 lg:hidden"
          >
            <div className="bg-[#0F0F17]/90 backdrop-blur-xl border border-white/10 rounded-3xl  flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              {sections.map((s) => (
                <NavItem key={s.id} s={s} isMobile />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}