import React from 'react'
import { Stack } from '../../types/Stacks'
import Animation from '@/components/ui/animationEntry';

interface Content {
  parametros: Stack[];
}

export default function StacksC({ parametros }: Content) {
  return (
    <>
      {parametros.map((i) => (
        <Animation key={i.id} index={i.id}>
          <div className={`CARDS relative flex w-24 h-24 md:w-28 md:h-28 rounded-xl justify-center items-center transition-all group cursor-pointer hover:scale-110 duration-300 ${i.fondo}`}>
            <div className={`w-full h-full rounded-xl transition-all duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5 absolute inset-0 bg-transparent ${i.fondo2} -z-10`}/>
            <div className={`w-full h-full rounded-xl transition-all duration-300 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 absolute inset-0 bg-transparent ${i.fondo3} -z-10`}/>

            <div className="flex flex-col items-center justify-center relative w-full h-full z-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-12 h-12 md:w-14 md:h-14 transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-75'>
                <path fill={i.color} d={i.p} />
              </svg>
              
              <span className="absolute bottom-2 md:bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#FBF6EE] font-bold text-[0.7rem] md:text-sm text-center drop-shadow-md translate-y-3 group-hover:translate-y-0 px-1 w-full" style={{lineHeight: 1.1}}>
                {i.stack}
              </span>
            </div>
          </div>
        </Animation>
      ))}
    </>
  )
}
