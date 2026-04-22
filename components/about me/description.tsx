import React from 'react'
import Button from '@/components/ui/Button'
const button = [
    {id:1, title:'Ver Certificaciones de Éxito', class:'bg-[#111111] text-[#FBF6EE] ', element:'bg-[#FD105E]/30'},
    {id:2, title:'Explorar Stack Tecnológico', class:' border-2 border-[#111111] text-[#111111] hover:text-[#FD105E] hover:border-[#FD105E]', element:'bg-[#111111]'},
]

export default function description() {
  return (
    <div className=' bg-[#FD105E] rounded-3xl flex flex-col justify-center col-span-2 p-8 md:p-12 shadow-2xl'>
        
            <div className='p-5 '>
                <h4 className='text-[1.5rem] md:text-xl font-extralight uppercase pb-2'>ingeniero de sistemas</h4>
                <h3 className='text-5xl md:text-8xl font-black text-[#FBF6EE] leading-none tracking-tighter'>
                    Williams <span className='text-[#111111] block md:inline'>Alas</span>
                </h3>
            </div>

            <div className='flex flex-col gap-3 px-7 py-5'>
                <div className='max-w-2xl space-y-4'>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#FBF6EE] leading-tight">
                            Escale su visión con <span className="text-[#111111]">ingeniería de alto impacto.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-[#FBF6EE] leading-relaxed font-light">
                            Transformo su infraestructura en un ecosistema de crecimiento imparable, 
                            diseñando el software que acelera su liderazgo en el mercado.
                        </p>
                </div>
                
            </div>

            <div className='flex gap-6 p-5 items-center '>
                {
                    button.map((b)=>(
                        <Button 
                                key={b.id} 
                            title={b.title}
                            styleBt={`${b.class} cursor-pointer px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300  hover:scale-105 text-xs font-bold uppercase `}
                            styleTx='font-bold uppercase tracking-wide'
                            colorElement={`${b.element}`}
                        />
                    ))
                }
            </div>

                

    </div>
  )
}
