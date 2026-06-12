'use client'
import {redes} from '@/types/footer'

export default function Footer() {
  return (
    <footer className='w-full backdrop-blur-lg  p-6 flex flex-col items-center gap-4 z-1'>      
      <ul className='flex gap-6 justify-center'>
        {redes.map((s) => (
          <li key={s.id}>
            <a
              href={s.ref}
              target={"_blank"}
              rel="noopener noreferrer"
              className={`flex items-center justify-center ${s.fondo} rounded-full p-2 transition-transform duration-300 hover:scale-110`}
              aria-label={s.red}
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 640 640">
                <path d={s.p} fill="currentColor"/>
              </svg>
            </a>
          </li>
        ))}
      </ul>

      <p className='text-center text-gray-400 text-sm md:text-base font-light'>
        © 2026 Williams Alas - Ingeniero de Sistemas
      </p>
    </footer>
  );
}