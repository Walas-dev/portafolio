'use client'
import React from 'react'
import ConnectivitySection from './ConnectivitySection'

const title = [{id:1, t:'Experimenta.'}, { id:2, t:'Lanza.'}, {id:3, t:'Escala.'}]
const enlace = [
  {id:1, a:'Hablemos por WhatsApp', ref:'https://wa.me/TUNUMERODEWHATSAPP', style:'bg-[#25D366]'},
  {id:2, a:'Envíame un Correo', ref:'mailto:tucorreo@gmail.com?subject=Propuesta%20de%20proyecto', style:'border border-[1px solid rgba(255, 255, 255, 0.3)] bg-transparent hover:bg-slate-800'}
]

export default function page() {
  return (
    <div className=' relative flex w-full min-h-screen items-center justify-center bg-linear-to-b from-blue-700 to-blue-950'>
      
        <div className='absolute z-10 text-center text-white '>    
                {title.map((e)=>(
                  
                    <h3 key={e.id} className='uppercase font-black text-[4.5rem] text-white not-first:-translate-y-4'>
                        {e.t}
                    </h3>
                ))}
              
              <p className='text-[#93c5fd] mb-10 font-[1.25rem] max-w-125'>
                ¿Listo para llevar tu idea al siguiente nivel? Hagamos equipo y empecemos a construir hoy mismo.
              </p>
              
              <div className='flex gap-4 flex-wrap'>
                {enlace.map((a)=>(
                  <a key={a.id}
                    href={a.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-3.5 px-8 rounded-lg  text-white font-bold decoration-0 inline-block transition-all transform-[0.2s] hover:-translate-y-1.5 duration-500
                        ${a.style}                      
                      `}
                  >
                    {a.a}  
                  </a>
                ))}

               
              </div>
        </div> 
            
            
    </div>
  )
}
