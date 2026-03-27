import React from 'react'

const certificate = [
    {color:'#D21A2C', fondo: 'bg-[#D21A2C]/20', borde:'border-[#D21A2C]/50', text:'text-[#D21A2C]/80', btn:'bg-[#D21A2C]/10', hover:' hover:border-[#D21A2C]/60', hover2:'hover:bg-[#D21A2C]/20',  p: 'M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z', title:'DHCA - Doliynk Cloud Management System', fecha:'Noviembre 2026', texto:'Certificación oficial de Dahua Technology que avala las competencias técnicas para la configuración y administración de sistemas de seguridad mediante su plataforma en la nube DoLynk.'},
    {color: '#41B6E6', fondo:'bg-[#41B6E6]/20', borde:'border-[#41B6E6]/50', text:'text-[#41B6E6]/80', btn:'bg-[#41B6E6]/10', hover:' hover:border-[#41B6E6]/60', hover2:'hover:bg-[#41B6E6]/20', p: 'M280 152L360 152L360 200L280 200L280 152zM272 96C245.5 96 224 117.5 224 144L224 208C224 234.5 245.5 256 272 256L288 256L288 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L160 352L160 384L144 384C117.5 384 96 405.5 96 432L96 496C96 522.5 117.5 544 144 544L240 544C266.5 544 288 522.5 288 496L288 432C288 405.5 266.5 384 240 384L224 384L224 352L416 352L416 384L400 384C373.5 384 352 405.5 352 432L352 496C352 522.5 373.5 544 400 544L496 544C522.5 544 544 522.5 544 496L544 432C544 405.5 522.5 384 496 384L480 384L480 352L576 352C593.7 352 608 337.7 608 320C608 302.3 593.7 288 576 288L352 288L352 256L368 256C394.5 256 416 234.5 416 208L416 144C416 117.5 394.5 96 368 96L272 96zM480 440L488 440L488 488L408 488L408 440L480 440zM224 440L232 440L232 488L152 488L152 440L224 440z', title:'Introducción a la solución Omada de TP-Linck', fecha:'Febrero 2025', texto:'Capacitación técnica sobre la implementación y gestión centralizada de redes empresariales utilizando el ecosistema SDN (Software-Defined Networking) de TP-Link Omada.'},
]

export default function ceritifiction() {
  return (
    <div className='py-10 w-full'>
        <div className='flex flex-col px-10 bg-gray-900 py-8'>
             <h3 className='font-bold text-[1.3rem] md:text-[2.3rem] pb-6'><span className='text-blue-600'>ls -l </span>Certificaciones</h3>
            
                <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6'>
                    {certificate.map((c, index)=>(
                        <div key={index} className={`flex flex-col border border-slate-600 p-6 rounded-2xl hover:bg-[#1a1a2e] transition-all duration-300 ${c.hover} hover:translate-0.5`}>
                          
                          <div className='grow'>
                            <div className={`size-20 border rounded-xl p-2 mb-4 ${c.fondo} ${c.borde}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"> <path fill={c.color} d={c.p}/></svg>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-2xl font-bold text-white leading-tight">{c.title}</h3>
                            <h4 className="text-lg text-gray-500 mt-1">{c.fecha}</h4>
                            <p className="text-gray-400 text-sm mt-3 mb-6">{c.texto}</p>
                          </div>

                            <div className='flex justify-start'>
                              <button className={` ${c.btn} border ${c.hover} ${c.hover2} transition-all duration-300 px-6 py-2 rounded-xl font-semibold ${c.text} text-sm`}>
                                ver credencial
                              </button>
                            </div>
                        </div>
                      ))}
                </div>

        </div>

        
    </div>
  )
}

