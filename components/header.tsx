'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";


const sections = [
  { id: 1, section: "Enfoque", ref: "#", p:'M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z' },
  { id: 2, section: "Stack", ref: "#", p:'M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z' },
  { id: 3, section: "Certificados", ref: "#", p:'M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z' },
  { id: 4, section: "Contacto", ref: "#" , p:'M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z'},
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (!prev) return;

    if (latest > prev && latest > 120) setHidden(true);
    else setHidden(false);

    setScrolled(latest > 50);
  });

  return (
    <motion.header
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.3 }}
      className=" w-full sticky top-0 z-50 flex justify-center"
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? 10 : 14,
          paddingBottom: scrolled ? 10 : 14,
        }}
        className={`mt-4 flex items-center justify-between 
        bg-[#0F0F17]/70 backdrop-blur-xl 
        border border-white/10
        shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        px-6 rounded-full 
        transition-[width] duration-300 ease-in-out
        ${scrolled ? "w-[95%] md:w-[66%] lg:w-[60%]" : "w-[98%] md:w-[70%] lg:w-[66%]"}`}
      >

        <div className="text-white font-semibold tracking-wide flex items-center gap-1 text-xl md:text-2xl">
          <Image
            src="/Group 15.svg"
            alt="Logo W"
            width={50}
            height={30}
          />
          <div className="hidden md:block">
            <span className="text-rose-400 font-bold">illiams</span> Alas
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={s.ref}
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
              className="group flex items-center gap-3 px-2 py-1 rounded-md transition"
            >
          
              <svg className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300" viewBox="0 0 640 640">
                  <path
                    d={s.p}
                    className={`
                      transition-colors duration-300
                      ${
                        active === s.id
                          ? "fill-white"
                          : "fill-white/50 group-hover:fill-white"
                      }
                    `}
                  />
              </svg>

              <span className={` text-base md:text-lg transition-colors duration-300
                  ${
                    active === s.id
                      ? "text-white "
                      : "text-white/60 group-hover:text-white"
                  }
                `}
              >
                {s.section}
              </span>
            </a>
          ))}
        </nav>

        {/* Hambuerguesa para Mobile */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Dropdown Menu para Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 w-[95%] left-1/2 -translate-x-1/2 md:hidden"
          >
            <div className="bg-[#0F0F17]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex flex-col gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={s.ref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl transition hover:bg-white/5"
                >
                  <svg className="w-6 h-6 fill-rose-500" viewBox="0 0 640 640">
                    <path d={s.p} />
                  </svg>
                  <span className="text-white text-lg font-medium">{s.section}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}