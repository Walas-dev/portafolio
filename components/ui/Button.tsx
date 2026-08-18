import {elements} from '@/components/ui/types/Button'
import Link from "next/link";

export default function Button({title, styleBt, styleTx, children, colorElement, onClick, href}:elements) {
  const BaseClass=`
     relative overflow-hidden cursor-pointer 
     group/btn tracking-wider transition-all
     duration-300 flex items-center justify-center
     gap-3 rounded-full
     ${styleBt}
     `;

  const Content = (
    <>
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
    </>
  );

  if (href) {
      return (
       <Link 
        href={`${href}` || '#'}
        target={href.startsWith('#') ? '_self' : '_blank'}
        rel={!href.startsWith('#') ? 'noopener noreferrer' : undefined}
        className={BaseClass} 
        onClick={onClick}
       >
            {Content}
        </Link> 
      )
  }

  return (
        <button className={BaseClass} onClick={onClick}>
            {Content}
        </button> 
    )
}
