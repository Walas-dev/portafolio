import {contenido} from '@/types/about'

export default function Atributes() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2 gap-3 h-full w-full'>
        {contenido.map((c)=>(
            <div key={c.id} className=" 
                relative overflow-hidden flex flex-col items-center justify-center p-6 rounded-3xl uppercase group cursor-pointer min-h-70
                bg-gray-500/8 backdrop-blur-md border border-gray-600/30 shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300
                
                hover:bg-linear-to-br hover:from-portground/20 hover:to-slate-900/40 hover:border-portground/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,16,94,0.15)]
                
                any-hover:none:bg-linear-to-br any-hover:none:from-portground/20 any-hover:none:to-slate-900/40 any-hover:none:border-portground/50 any-hover:none:shadow-[0_10px_40px_rgba(255,16,94,0.15)]
                ">
                
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className='size-18 md:size-20 text-slate-300 transition-colors duration-300 mb-3 group-hover:text-portground any-hover:none:text-portground' 
                  viewBox="0 0 640 640"
                >
                    <path fill="currentColor" d={c.p}/>
                </svg>
                
                <h4 className='font-mono text-xs text-slate-400 transition-colors duration-300 group-hover:text-portground/70 any-hover:none:text-portground/70'>
                  {c.title}
                </h4>
                
                <h3 className='font-bold text-base md:text-lg text-[#F2C6C2]/80 transition-colors duration-300 group-hover:text-[#FBF6EE] any-hover:none:text-[#FBF6EE] text-center mt-1'>
                  {c.subTitle}
                </h3>
            </div>            
        ))}
    </section>
  )
}