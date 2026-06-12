'use client'
import Certifications from './certifications'

export default function page() {
  return (
    <div id="certificados" className='w-full pt-20 pb-15 px-6 md:px-16 bg-linear-to-b from-transparent to-portground/70 z-1'>
      <h3 className='font-bold text-[1.5rem] md:text-[2.5rem] mb-12 text-[#FBF6EE]'>
        <span className='text-portground font-mono'>ls -l </span>Certificaciones
      </h3>

        <Certifications/>
    </div>
  )
}