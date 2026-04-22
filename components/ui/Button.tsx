import React, { ReactNode } from 'react'

export interface elements {
    title:string;
    styleBt:string;
    styleTx:string;
    children?: ReactNode;
    colorElement:string;

}

export default function Button({title, styleBt, styleTx, children, colorElement}:elements) {
  return (
    <button className={`relative overflow-hidden cursor-pointer group/btn tracking-wider transition-all duration-300 flex items-center justify-center gap-3 
             rounded-full ${styleBt}`}
     >
        <span className={`relative z-10 transition-colors duration-500 
             ${styleTx}`}
        >
            {title}
        </span>

        {children}

        <div className={`
            absolute top-1/2 -translate-y-1/2 aspect-square rounded-full 
            transition-all duration-500 ease-in-out
            w-0 right-0 left-auto
            group-hover/btn:w-[150%] group-hover/btn:left-0 group-hover/btn:right-auto
            ${colorElement}
            `}
        >

        </div>
    </button>
  )
}
