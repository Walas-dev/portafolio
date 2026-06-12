'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import ViewerIMG from './Viewer'
import Animation from '@/components/common/animationEntry'
import {certificates} from '@/types/certificados'

export default function Certifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState("");

  const open = (ruta:string) =>{
    setCurrent(ruta);
    setIsModalOpen(true);
  }

  return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {certificates.map((c, index) => (
            <Animation key={index} index={index} >
              <div 
                  className="group relative flex flex-col bg-[#0F0F17]/50 backdrop-blur-xl  border border-portground/30 p-8 rounded-3xl hover:border-portground/40 transition-all duration-500"
              >
                  <div className="flex items-center gap-4 mb-6">
                  <div className="size-14 flex items-center justify-center rounded-xl group-hover:bg-portground/10 border border-white/5 shadow-inner">
                      <svg viewBox="0 0 640 640" className="size-7 text-slate-300 group-hover:text-portground">
                      <path fill="currentColor" d={c.path}/>
                      </svg>
                  </div>
                  <div className="h-px grow bg-linear-to-r from-white/20 to-transparent"></div>
                  </div>

                  <div className='grow'>
                  <h3 className="text-2xl font-bold text-[#FBF6EE] leading-tight group-hover:text-portground transition-colors">
                      {c.title}
                  </h3>
                  <span className="inline-block mt-2 text-sm text-[#F2C6C2]/40 uppercase ">
                      {c.fecha}
                  </span>
                  <p className="text-[#F2C6C2]/60 text-sm mt-4 leading-relaxed max-w-md">
                      {c.texto}
                  </p>
                  </div>

                  <div className='mt-8'>
                      <Button 
                          title='Ver Credencial'
                          onClick={()=>open(c.view)}
                          styleBt='px-6 py-2 rounded-full border border-portground/30'
                          styleTx='text-[#FBF6EE] text-xs font-bold uppercase tracking-wider group-hover/btn:text-[#111111]'
                          colorElement='bg-portground'
                      />                
                  </div>
              </div>
            </Animation>
          ))}
          <ViewerIMG
            isOpen={isModalOpen}
            onClose={()=>setIsModalOpen(false)}
            src={current}
          />
      </div>
  )
}