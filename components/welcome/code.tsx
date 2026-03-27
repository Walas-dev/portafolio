import React from 'react'
import ShadowColor from '../common/shadowMultiColor'
import{ TypewriterText} from './write'


const puntos = [
    {id:1 , style:'bg-rose-500 size-4 rounded-full'},
    {id:2, style:'bg-yellow-500 size-4 rounded-full'},
    {id:3, style:'bg-green-500 size-4 rounded-full'}
]


export default function code() {

  return (
    <div className='py-8 px-12 size-full'>
      <ShadowColor>
        <section className='bg-linear-to-t from-slate-950 via-slate-950 to-neutral-950 w-full h-full rounded-2xl '>
          <div className='header flex items-center bg-gray-900 p-2 rounded-t-xl'>
              <div className='puntos flex gap-2 w-[10%]'>
                  {puntos.map((p)=>(
                    <div key={p.id} className={p.style}/>
                  ))}
              </div>

              <div className='w-[80%] text-center'>
                  <h2> ./system_core-tsx</h2>
              </div>
          </div>

          <div className='content'>
            <div className='bg-[#0d1117] p-6 font-mono text-sm leading-6 flex gap-4 rounded-b-2xl'>              
                <div className='text-slate-600 text-right select-none pr-2 border-r border-white/5 mb-5'>
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <pre className='text-slate-300 overflow-x-auto font-mono'>
                    <code>
                        <p><span className='text-rose-400'>class</span> <span className='text-yellow-200'>SystemsEngineer</span> <span className='text-rose-400'>implements</span> <span className='text-cyan-400'>Innovator</span> {'{'}</p>
                        <p>  <span className='text-rose-400'>readonly</span> <span className='text-blue-300'>mission</span> = <span className='text-green-300'>{`"Transforming ideas into reality"`}</span>;</p>
                        <p>  <span className='text-rose-400'>private</span> <span className='text-blue-300'>status</span> = <span className='text-green-300'>{`"AVAILABLE_FOR_IMPACT_PROJECTS"`}</span>;</p>
                        <br />

                        <p>  <span className='text-rose-400'>private</span> <span className='text-blue-300'>coreSkills</span> = {'{'}</p>
                        <p>    <span className='text-blue-300'>software</span>: [<span className='text-green-300'>{`"Microservices"`}</span>, <span className='text-green-300'>{`"Frontend"`}</span>],</p>
                        <p>    <span className='text-blue-300'>hardware</span>: [<span className='text-green-300'>{`"Smart CCTV"`}</span>, <span className='text-green-300'>{`"IP Security"`}</span>, <span className='text-green-300'>{`"Networks"`}</span>]</p>
                        <p>  {'}'};</p>
                        <br />

                        <p>  <span className='text-rose-400'>constructor</span>(<span className='text-rose-400'>private</span> <span className='text-blue-300'>vision</span>: <span className='text-cyan-400'>string</span> = <span className='text-green-300'>{'"Global Innovation"'}</span>) {'{'}</p>
                        <p>    <span className='text-blue-400'>console</span>.<span className='text-yellow-200'>log</span>(<span className='text-green-300'>{'"Ready to scale: "'}</span> + <span className='text-blue-300'>this</span>.<span className='text-blue-300'>vision</span>);</p>
                        <p>  {'}'}</p>
                        <br />

                        <p>  <span className='text-rose-400'>public</span> <span className='text-yellow-200'>getPhilosophy</span>() {'{'}</p>
                        <p>    <span className='text-rose-400'>const</span> <span className='text-blue-300'>passion</span> = <span className='text-rose-400'>true</span>;</p>
                        <p>    <span className='text-rose-400'>const</span> <span className='text-blue-300'>excellence</span> = <span className='text-green-300'>{`"Non-negotiable"`}</span>;</p>
                        <br />
                        <p>    <span className='text-rose-400'>if</span> (passion && excellence) {'{'}</p>
                        <p>      <span className='text-slate-500'>{'// Elevando el estándar de la industria'}</span></p>
                        <p>      <span className='text-rose-400'>return</span> <TypewriterText/>;</p>
                        <p>    {'}'}</p>
                        <p>  {'}'}</p>
                        <br />

                        <p>  <span className='text-rose-400'>public</span> <span className='text-yellow-200'>optimizeSystems</span>(<span className='text-blue-300'>reqs</span>: <span className='text-cyan-400'>any</span>) {'{'}</p>
                        <p>    <span className='text-rose-400'>return</span> {'{'} performance: <span className='text-green-300'>{'"Maximum"'}</span>, security: <span className='text-green-300'>{'"High-Priority"'}</span> {'}'};</p>
                        <p>  {'}'}</p>
                        <br />

                        <p>  <span className='text-slate-500'>{'/* * STATUS: Ejecutando soluciones de alto impacto'}</span></p>
                        <p><span className='text-slate-500'>   * LOCATION: Cloud & Physical Infrastructure */</span></p>
                        <p>  <span className='text-rose-400'>public</span> <span className='text-yellow-200'>init</span>() {'{'}</p>
                        <p>    <span className='text-blue-400'>console</span>.<span className='text-yellow-200'>log</span>(<span className='text-blue-300'>this</span>.<span className='text-yellow-200'>getPhilosophy</span>());</p>
                        <p>  {'}'}</p>

                        <p>{'}'}</p>
                    </code>
                </pre>
            </div>
          </div>    
        </section>
      </ShadowColor>
    </div>
  )
}
