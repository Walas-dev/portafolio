import React from 'react'

const button = [
    {id:1, title:'Ver Certificaciones de Éxito', class:'bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-bold uppercase tracking-wide hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg'},
    {id:2, title:'Explorar Stack Tecnológico', class:'border-2 border-slate-800 text-slate-900 px-8 py-4 rounded-2xl flex items-center gap-3 font-bold uppercase tracking-wide hover:bg-slate-700 hover:text-white hover:scale-105 hover:border-transparent transition-all duration-300'},
]

export default function description() {
  return (
    <div className=' bg-amber-700 rounded-3xl flex flex-col justify-center col-span-2 p-8 md:p-12 shadow-2xl border border-amber-600/30'>
        
            <div className='p-5 '>
                <h4 className='text-[1.5rem] md:text-xl font-extralight uppercase pb-2'>ingeniero de sistemas</h4>
                <h3 className='text-5xl md:text-8xl font-black text-white leading-none tracking-tighter'>
                    Williams <span className='text-slate-900 block md:inline'>Alas</span>
                </h3>
            </div>

            <div className='flex flex-col gap-3 px-7 py-5'>
                <div className='max-w-2xl space-y-4'>
                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            Escale su visión con <span className="text-slate-900">ingeniería de alto impacto.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-amber-50/90 leading-relaxed font-light">
                            Transformo su infraestructura en un ecosistema de crecimiento imparable, 
                            diseñando el software que acelera su liderazgo en el mercado.
                        </p>
                </div>
                
            </div>

            <div className='flex gap-6 p-5 items-center '>
                {
                    button.map((b)=>(
                        <div key={b.id} className={b.class}>
                            {b.title}
                        </div>
                    ))
                }
            </div>

                

    </div>
  )
}
