import React from 'react'
import { Stack } from '../../types/Stacks'
import Animation from '@/components/ui/animationEntry';

interface Content {
  parametros: Stack[];
}

export default function StacksC({ parametros }: Content) {
  return (
    <div className='flex justify-around items-center text-center gap-5'>
      {parametros.map((i) => (
        <Animation key={i.id} index={i.id}>
          <div key={i.id} className={`CARDS relative grid size-27 rounded-xl justify-center items-center transition-all group shadow cursor-pointer hover:-translate-0.5 ${i.fondo}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='size-14'><path fill={i.color} d={i.p} /></svg>
            <div className={` size-27 rounded-xl transition-all duration-100 group-hover:translate-1 absolute inset-0 group-hover:inset-shadow-2xs bg-transparent ${i.fondo2}`}/>
            <div className={` size-27 rounded-xl transition-all duration-100 group-hover:-translate-1 absolute inset-0 group-hover:shadow bg-transparent  ${i.fondo3}`}/>
          </div>
        </Animation>
      ))}
    </div>
  )
}
