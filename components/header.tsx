import React from 'react'
import Image from 'next/image'

const sections = [
    {id:1, section:'Sobre mi', ref:''},
    {id:2, section:'Stack', ref:''},
    {id:3, section:'Experiencia', ref:''},
    {id:4, section:'git_Proyectos', ref:''}
]

export default function header() {
  return (
    <div className='flex w-full p-6 items-center justify-around '>
        <div className='flex bg-[#2a2b3a] shadow-2xl gap-8 px-5 py-3 rounded-4xl items-center'>
            <section className='flex items-center gap-1'>
                <Image
                    src={'/vercel.svg'}
                    alt='img_header'
                    width={30}
                    height={30}
                />
                <p>./WALAS.DEV</p>
            </section>
            
            <section className='w-0 invisible lg:w-auto lg:visible'>
            <ul className='flex gap-10'>
                {sections.map((s)=>(
                        <a key={s.id} href="">
                            {s.section}
                        </a>
                ))}
            </ul>
            </section>

            <section>
                <a href="" className='flex gap-3 rounded-4xl bg-blue-950 py-2 px-4 hover:bg-blue-950/50 transition-colors duration-200'>
                    <Image
                        src={'/vercel.svg'}
                        alt='img_cv'
                        width={15}
                        height={15}
                    />
                    <p>CV.pdf</p>
                </a>
            </section>
        </div>
    </div>
  )
}
