"use client";
import { useState, useEffect, useRef } from "react";
import { contenido } from '@/types/about';

export default function Atributes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    
    if (isTouchDevice && isVisible) {
      let currentIndex = 0;
      setActiveIndex(currentIndex); 
      
      const timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % contenido.length;
        setActiveIndex(currentIndex);
      }, 2000);

      return () => clearInterval(timer);
    } else if (!isVisible) {
      setActiveIndex(null);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2 gap-3 h-full w-full'>
        {contenido.map((c, index) => {
            const isLit = activeIndex === index;

            return (
                <div 
                    key={c.id} 
                    // En PC sigue funcionando al instante con el ratón
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`
                        relative overflow-hidden flex flex-col items-center justify-center p-6 rounded-3xl uppercase cursor-pointer min-h-70 
                        transition-all duration-500 ease-out
                        
                        ${isLit 
                            ? 'bg-linear-to-br from-portground/20 to-slate-900/40 border border-portground/50 -translate-y-1 shadow-[0_10px_40px_rgba(255,16,94,0.15)]' 
                            : 'bg-gray-500/8 backdrop-blur-md border border-gray-600/30 shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
                        }
                    `}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         className={`size-18 md:size-20 transition-colors duration-500 mb-3 ${isLit ? 'text-portground' : 'text-slate-300'}`} 
                         viewBox="0 0 640 640">
                        <path fill="currentColor" d={c.p}/>
                    </svg>
                    
                    <h4 className={`font-mono text-xs transition-colors duration-500 ${isLit ? 'text-portground/70' : 'text-slate-400'}`}>
                        {c.title}
                    </h4>
                    
                    <h3 className={`font-bold text-base md:text-lg text-center mt-1 transition-colors duration-500 ${isLit ? 'text-[#FBF6EE]' : 'text-[#F2C6C2]/80'}`}>
                        {c.subTitle}
                    </h3>
                </div>            
            )
        })}
    </section>
  )
}