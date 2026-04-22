'use client'
import React from 'react'
import Certifications from './certifications'

export default function page() {
  return (
    <div className='w-full pt-20 pb-15 px-6 md:px-16 bg-linear-to-b from-[#0F0F17] to-[#FD105E]'>
      <h3 className='font-bold text-[1.5rem] md:text-[2.5rem] mb-12 text-[#FBF6EE]'>
        <span className='text-[#FD105E] font-mono'>ls -l </span>Certificaciones
      </h3>

        <Certifications/>
    
    </div>
  )
}