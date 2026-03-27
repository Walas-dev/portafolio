import React from 'react'

const soy = [
  { Dinamico: 'Ingenio.' },
  { Dinamico: 'Vanguardia.' },
  { Dinamico: 'Tecnología.' },
  { Dinamico: 'Solución.' },
  { Dinamico: 'Estructura.' },
  { Dinamico: 'Systems Engineer.' },
]



export default function page() {
  return (
    
      <div className='flex w-full items-start bg-slate-950 py-[10vh] text-6xl font-bold font-sans'>
      <h3 className='sticky top-0 flex h-screen w-1/2 items-center justify-end pr-4 text-slate-300'>
        Soy 
      </h3>
      <div className='flex w-1/2 flex-col'>
        {
          soy.map((ing)=>(
            <div key={ing.Dinamico} className='flex h-screen items-center justify-start pl-4 text-cyan-400'>
              <span>{ing.Dinamico}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
