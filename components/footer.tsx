import React from 'react'

const links = [
    {id:1, link:'LinkedIn', url:''},
    {id:2, link:'Github', url:''},
    {id:3, link:'Twitter', url:''}
]

export default function footer() {
  return (
    <div className='flex flex-wrap w-full bg-white/5 border-t border-gray-600  items-center  p-6'>
      <p className='flex w-[60%] justify-start lg:justify-end '>
        © 2025 Williams Alas. Todos los derechos reservados
      </p>
        <ul className='flex gap-5 justify-center lg:justify-end w-[40%] '>
            {links.map((l)=>(
                <a key={l.id} href="">
                    {l.link}
                </a>
            ))}
        </ul>
    </div>
  )
}
