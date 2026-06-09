import React from 'react'
import { Stack } from '../../types/stacks'

interface Content {
  parametros: Stack[];
}

export default function StacksC({ parametros }: Content) {
  return (
    <>
      {parametros.map((i) => (
        <React.Fragment key={i.id}>
          <div className={`CARDS relative flex w-24 h-24 md:w-28 md:h-28 rounded-xl justify-center items-center transition-all
             group cursor-pointer hover:scale-110 duration-300 bg-gray-100/8 bg-portground/10`}>
            

            <div className="relative flex w-full h-full items-center justify-center z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                aria-hidden
                className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300 text-portground/50 ease-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75"
              >
                <path fill="currentColor" d={i.p} />
              </svg>

              <span
                className="absolute inset-0 flex items-center justify-center px-2 text-center font-bold text-[#FBF6EE] text-[0.7rem] md:text-sm 
                drop-shadow-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none"
                style={{ lineHeight: 1.1 }}
              >
                {i.stack}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}
