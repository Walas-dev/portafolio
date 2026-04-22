import React from 'react'
import Button from '@/components/ui/Button'
import Animation from '@/components/ui/animationEntry'
const certificates = [
  {
    title: 'DHCA - Doliynk Cloud Management System',
    fecha: 'Noviembre 2026',
    texto: 'Certificación oficial de Dahua Technology que avala las competencias técnicas para la configuración y administración de sistemas de seguridad.',
    path: 'M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z'
  },
  {
    title: 'Introducción a la solución Omada de TP-Link',
    fecha: 'Febrero 2025',
    texto: 'Capacitación técnica sobre la implementación y gestión centralizada de redes empresariales utilizando el ecosistema SDN de TP-Link Omada.',
    path: 'M280 152L360 152L360 200L280 200L280 152zM272 96C245.5 96 224 117.5 224 144L224 208C224 234.5 245.5 256 272 256L288 256L288 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L160 352L160 384L144 384C117.5 384 96 405.5 96 432L96 496C96 522.5 117.5 544 144 544L240 544C266.5 544 288 522.5 288 496L288 432C288 405.5 266.5 384 240 384L224 384L224 352L416 352L416 384L400 384C373.5 384 352 405.5 352 432L352 496C352 522.5 373.5 544 400 544L496 544C522.5 544 544 522.5 544 496L544 432C544 405.5 522.5 384 496 384L480 384L480 352L576 352C593.7 352 608 337.7 608 320C608 302.3 593.7 288 576 288L352 288L352 256L368 256C394.5 256 416 234.5 416 208L416 144C416 117.5 394.5 96 368 96L272 96zM480 440L488 440L488 488L408 488L408 440L480 440zM224 440L232 440L232 488L152 488L152 440L224 440z'
  },
]

export default function certifications() {
  return (
 <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {certificates.map((c, index) => (
          <Animation key={index} index={index} >
            <div 
                className="group relative flex flex-col bg-[#0F0F17]/50 backdrop-blur-xl  border border-[#FD105E]/30 p-8 rounded-3xl hover:border-[#FD105E]/40 transition-all duration-500"
            >

                <div className="flex items-center gap-4 mb-6">
                <div className="size-14 flex items-center justify-center rounded-xl group-hover:bg-[#FD105E]/10 border border-white/5 shadow-inner">
                    <svg viewBox="0 0 640 640" className="size-7 text-slate-300 group-hover:text-[#FD105E]">
                    <path fill="currentColor" d={c.path}/>
                    </svg>
                </div>
                <div className="h-px grow bg-linear-to-r from-white/20 to-transparent"></div>
                </div>

                <div className='grow'>
                <h3 className="text-2xl font-bold text-[#FBF6EE] leading-tight group-hover:text-[#FD105E] transition-colors">
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
                        styleBt='px-6 py-2 rounded-full border border-[#FD105E]/30'
                        styleTx='text-[#FBF6EE] text-xs font-bold uppercase tracking-wider group-hover/btn:text-[#111111]'
                        colorElement='bg-[#FD105E]'
                    />                
                </div>
            </div>
          </Animation>
        ))}
      </div>
  )
}
