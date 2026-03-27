import React from 'react'

import { Stack } from '../../types/Stacks'

interface Content {
  parametros: Stack[];
}

export default function StacksC({ parametros }: Content) {
  return (
    <div className='flex justify-around items-center text-center gap-5'>
      {parametros.map((i) => (
        <div key={i.id} className={`CARDS grid size-27 rounded-xl justify-center items-center transition-all hover:-translate-1.5 ${i.fondo}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='size-14'><path fill={i.color} d={i.p} /></svg>
        </div>
      ))}
    </div>
  )
}
