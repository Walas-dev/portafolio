import {contenido} from '@/types/about'
export default function atributes() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 gap-3 h-full w-full'>
        {contenido.map((c)=>(
            <div key={c.id} className=" 
                relative overflow-hidden flex flex-col items-center justify-center p-6 rounded-3xl uppercase group cursor-pointer min-h-70
                bg-gray-500/8 backdrop-blur-md border border-gray-600/30  shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300
                hover:bg-linear-to-br from-portground/20 to-slate-900/40 hover:border-portground/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,16,94,0.15)] 
                ">
                <svg xmlns="http://www.w3.org/2000/svg" className='size-18 md:size-20 text-slate-300 group-hover:text-portground transition-colors duration-300 mb-3' viewBox="0 0 640 640">
                    <path fill="currentColor" d={c.p}/>
                </svg>
                <h4 className='font-mono text-xs text-slate-400 group-hover:text-portground/70 transition-colors duration-300'>{c.title}</h4>
                <h3 className='font-bold text-base md:text-lg text-[#F2C6C2]/80 group-hover:text-[#FBF6EE] text-center mt-1'>{c.subTitle}</h3>
            </div>            
        ))}
    </section>
  )
}
