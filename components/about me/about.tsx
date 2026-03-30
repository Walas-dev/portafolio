'use client'
//import Image from 'next/image'
import React from 'react'
import GlobalScene from './global';


const cardHover = [
    {id:1, title:'CONSTRUIR ARQUITECTURA', subtitle:'INGENIERÍA_DESDE_CERO', content:'Materializa tu visión tecnológica con cimientos inquebrantables. Diseño y desarrollo el núcleo de tu sistema a la medida, entregándote una plataforma robusta, escalable y lista para dominar el mercado.', path:'M163.3 320.1L232.7 200.2C227.1 188 223.9 174.4 223.9 160C223.9 107 266.9 64 319.9 64C372.9 64 415.9 107 415.9 160C415.9 174.3 412.8 187.9 407.1 200.2L451.5 276.9C428.4 302.9 397.8 322 363.1 330.7L320 255.9L251.9 373.5C273.4 380.3 296.2 384 320 384C390.7 384 453.8 351.3 494.9 300C506 286.2 526.1 284 539.9 295C553.7 306 555.9 326.2 544.9 340C492.2 405.8 411 448 320.1 448C284.7 448 250.7 441.6 219.4 429.9L162.7 527.7C158 535.8 151 542.4 142.6 546.6L87.2 574.3C82.2 576.8 76.3 576.5 71.6 573.6C66.9 570.7 64 565.5 64 560L64 504.6C64 496.2 66.2 487.9 70.5 480.5L130.5 376.8C117.7 365.6 105.9 353.3 95.2 340C84.1 326.2 86.4 306.1 100.2 295C114 283.9 134.1 286.2 145.2 300C150.9 307.1 157 313.8 163.4 320.1zM445.1 471.9C477.6 458.9 507.5 440.9 534 419L569.6 480.5C573.8 487.8 576.1 496.1 576.1 504.6L576.1 560C576.1 565.5 573.2 570.7 568.5 573.6C563.8 576.5 557.9 576.8 552.9 574.3L497.5 546.6C489.1 542.4 482.1 535.8 477.4 527.7L445.1 471.9zM320 192C337.7 192 352 177.7 352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192z'},
    {id:2, title:'GESTIONAR NUBE', subtitle:'orquestación de recursos', content:'Escala tu infraestructura con libertad absoluta. Optimiza tus recursos de forma inteligente para garantizar una disponibilidad del 99.99% y un rendimiento máximo en cada despliegue global.', path:''},
    {id:3, title:'Analizar Segurirdad', subtitle:'integridad activa', content:'Fortalece la confianza de tus clientes con una arquitectura blindada. Implementa protocolos avanzados de Zero Trust para asegurar la integridad total y permanente de tus activos digitales.', path:'M112 320C112 205.1 205.1 112 320 112C383.1 112 439.6 140.1 477.8 184.5C486.4 194.6 501.6 195.7 511.6 187.1C521.6 178.5 522.8 163.3 514.2 153.3C467.3 98.6 397.7 64 320 64C178.6 64 64 178.6 64 320L64 360C64 373.3 74.7 384 88 384C101.3 384 112 373.3 112 360L112 320zM570.5 267.1C567.8 254.1 555 245.8 542.1 248.6C529.2 251.4 520.8 264.1 523.6 277C526.5 290.9 528.1 305.3 528.1 320.1L528.1 360.1C528.1 373.4 538.8 384.1 552.1 384.1C565.4 384.1 576.1 373.4 576.1 360.1L576.1 320.1C576.1 302 574.2 284.3 570.6 267.2zM320 144C301 144 282.6 147 265.5 152.6C250.3 157.6 246.8 176.3 257.2 188.5C264.3 196.8 276 199.3 286.6 196.4C297.2 193.5 308.4 192 320 192C390.7 192 448 249.3 448 320L448 344.9C448 370.1 446.5 395.2 443.6 420.2C441.9 434.8 453 448 467.8 448C479.6 448 489.7 439.4 491.1 427.7C494.4 400.3 496.1 372.7 496.1 345L496.1 320.1C496.1 222.9 417.3 144.1 320.1 144.1zM214.7 212.7C205.6 202.1 189.4 201.3 180.8 212.3C157.7 242.1 144 279.4 144 320L144 344.9C144 369.1 141.4 393.3 136.2 416.8C132.8 432.4 144.1 447.9 160.1 447.9C170.6 447.9 180 440.9 182.3 430.6C188.7 402.5 192 373.8 192 344.8L192 319.9C192 292.7 200.5 267.5 214.9 246.8C222.1 236.4 222.9 222.2 214.7 212.6zM320 224C267 224 224 267 224 320L224 344.9C224 380.8 219.4 416.4 210.2 451C206.4 465.3 216.9 480 231.7 480C241.2 480 249.6 473.8 252.1 464.6C262.6 425.6 268 385.4 268 344.9L268 320C268 291.3 291.3 268 320 268C348.7 268 372 291.3 372 320L372 344.9C372 381.2 368.5 417.3 361.6 452.8C358.9 466.7 369.3 480 383.4 480C393.6 480 402.4 473 404.4 463C412.1 424.2 416 384.7 416 344.9L416 320C416 267 373 224 320 224zM344 320C344 306.7 333.3 296 320 296C306.7 296 296 306.7 296 320L296 344.9C296 404.8 285 464.2 263.5 520.1L257.6 535.4C252.8 547.8 259 561.7 271.4 566.4C283.8 571.1 297.7 565 302.4 552.6L308.3 537.3C331.9 475.9 344 410.7 344 344.9L344 320z'},
    {id:4, title:'acelerar rendimiento', subtitle:'Optimización de latencia', content:'Brinda experiencias hiperveloces. Refina cada línea de código y consulta de red para entregar respuestas en milisegundos, elevando la retención y la satisfacción de tus usuarios a su máximo nivel.', path:''},
]

export default function about() {
    return (
        <div className='flex-wrap flex pt-15 pb-10 justify-center'>

            <div className='grid grid-cols-3 gap-3 px-3 py-5 md:px-10 '>

                <section className='grid grid-cols-3 col-span-3 gap-2'>

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
                                
                                  <div className='bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-bold uppercase tracking-wide hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg'>
                                        Ver Certificaciones de Éxito
                                    </div>
                                    <div className='border-2 border-slate-800 text-slate-900 px-8 py-4 rounded-2xl flex items-center gap-3 font-bold uppercase tracking-wide hover:bg-slate-700 hover:text-white hover:scale-105 transition-all duration-300'>
                                        Explorar Stack Tecnológico
                                    </div>
                            </div>

                              

                    </div>

                    <section className='grid grid-cols-2 gap-3 h-full'>

                        <div className=" relative overflow-hidden bg-slate-800/40 backdrop-blur-md  border border-slate-600/30  shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-3xl uppercase flex flex-col items-center justify-center p-6  transition-all duration-300  hover:bg-slate-700/50 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(245,158,11,0.15)]  group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-16 md:size-20 text-slate-300 group-hover:text-amber-500 transition-colors duration-300 mb-3' viewBox="0 0 640 640">
                                <path fill="currentColor" d="M267.8 296.8C268.9 296.8 269.9 296.5 270.8 295.9C271.7 295.3 272.4 294.5 272.8 293.5C275 283.7 280.2 274.9 287.7 268.2C288.9 267.4 289.4 265.7 289.4 264.1C289.3 263.4 289.1 262.8 288.8 262.2C288.5 261.6 287.9 261.1 287.4 260.8L170.5 192.5L245.1 149C246.6 148.2 247.8 147 248.7 145.5C249.6 144 250.1 142.4 250.1 140.7C250.1 139 249.7 137.3 248.8 135.8C247.9 134.3 246.6 133.1 245.1 132.4L222.7 119.6C221.2 118.8 219.6 118.4 217.9 118.4C216.2 118.4 214.6 118.8 213.1 119.6L113 177.6C111.5 178.4 110.3 179.6 109.4 181.1C108.5 182.6 108 184.2 108 185.9L108 301C108 302.7 108.4 304.4 109.3 305.9C110.2 307.4 111.5 308.6 113 309.3L135.4 322.1C136.9 323 138.6 323.4 140.4 323.3C142.8 323.4 145.2 322.5 147 320.8C148.8 318.9 149.8 316.4 149.9 313.8L149.9 228.5L265.8 296.4C266.4 296.7 267.2 296.8 267.9 296.8zM419.4 441.7C417.7 441.8 416 442.2 414.4 442.9L339.9 486L339.9 351.8C339.9 348.9 337 346 333.7 347.2C324.3 350 314.2 350.2 304.7 347.6C304 347.4 303.2 347.4 302.5 347.5C301.8 347.6 301.1 347.9 300.5 348.4C299.9 348.9 299.4 349.4 299.1 350.1C298.8 350.8 298.6 351.5 298.6 352.2L298.6 485.5L224.1 442.4C222.6 441.5 220.9 441.1 219.1 441.2C216.6 441.2 214.2 442.2 212.4 444C210.6 445.8 209.6 448.2 209.6 450.7L209.6 476.8C209.6 478.5 210 480.2 210.9 481.7C211.8 483.2 213.1 484.4 214.6 485.1L314.8 542.7C316.3 543.6 318 544 319.8 543.9C321.5 543.9 323.2 543.5 324.8 542.7L425 485.1C426.5 484.3 427.7 483.1 428.6 481.6C429.5 480.1 430 478.5 430 476.8L430 450.7C429.2 446.1 424.6 441.6 419.6 441.6zM382.1 142C394.8 142 405.1 131.7 405.1 119C405.1 106.3 394.8 96 382.1 96C369.4 96 359.1 106.3 359.1 119C359.1 131.7 369.4 142 382.1 142zM445.7 131.9C433 131.9 422.7 142.2 422.7 154.9C422.7 167.6 433 177.9 445.7 177.9C458.4 177.9 468.7 167.6 468.7 154.9C468.7 142.2 458.4 131.9 445.7 131.9zM508.9 215.6C521.6 215.6 531.9 205.3 531.9 192.6C531.9 179.9 521.6 169.6 508.9 169.6C496.2 169.6 485.9 179.9 485.9 192.6C485.9 205.3 496.2 215.6 508.9 215.6zM445.7 206.4C433 206.4 422.7 216.7 422.7 229.4C422.7 242.1 433 252.4 445.7 252.4C458.4 252.4 468.7 242.1 468.7 229.4C468.7 216.7 458.4 206.4 445.7 206.4zM382.1 289.6C386.6 289.6 391.1 288.3 394.9 285.7C398.7 283.1 401.6 279.6 403.4 275.4C405.2 271.2 405.6 266.6 404.7 262.1C403.8 257.6 401.6 253.5 398.4 250.3C395.2 247.1 391.1 244.9 386.6 244C382.1 243.1 377.5 243.6 373.3 245.3C369.1 247 365.5 250 363 253.8C360.5 257.6 359.1 262 359.1 266.6C359.1 269.6 359.7 272.6 360.9 275.4C362.1 278.2 363.8 280.7 365.9 282.9C368 285.1 370.6 286.7 373.4 287.9C376.2 289.1 379.2 289.7 382.2 289.7L382.2 289.7zM320 326C324.5 326 329 324.6 332.8 322.1C336.6 319.6 339.5 316 341.3 311.8C343.1 307.6 343.5 303 342.6 298.5C341.7 294 339.5 289.9 336.3 286.7C333.1 283.5 329 281.3 324.5 280.4C320 279.5 315.4 280 311.2 281.7C307 283.4 303.4 286.4 300.9 290.2C298.4 294 297 298.4 297 303C297 306 297.6 309 298.7 311.8C299.8 314.6 301.5 317.1 303.7 319.3C305.9 321.5 308.4 323.1 311.2 324.3C314 325.5 317 326.1 320 326.1L320 326.1zM508.9 243.6C504.3 243.6 499.9 244.9 496.1 247.5C492.3 250.1 489.4 253.6 487.6 257.8C485.8 262 485.4 266.6 486.3 271.1C487.2 275.6 489.4 279.7 492.6 282.9C495.8 286.1 499.9 288.3 504.4 289.2C508.9 290.1 513.5 289.6 517.7 287.9C521.9 286.2 525.5 283.2 528 279.4C530.5 275.6 531.9 271.2 531.9 266.6C531.9 260.5 529.5 254.7 525.2 250.3C520.9 245.9 515 243.6 508.9 243.6L508.9 243.6zM508.9 315.9C504.3 315.9 499.9 317.2 496.1 319.8C492.3 322.4 489.4 325.9 487.6 330.1C485.8 334.3 485.4 338.9 486.3 343.4C487.2 347.9 489.4 352 492.6 355.2C495.8 358.4 499.9 360.6 504.4 361.5C508.9 362.4 513.5 361.9 517.7 360.2C521.9 358.5 525.5 355.5 528 351.7C530.5 347.9 531.9 343.5 531.9 338.9C531.9 332.8 529.5 327 525.2 322.6C520.9 318.2 515 315.9 508.9 315.9L508.9 315.9z"/></svg>
                            <h4 className='font-mono text-xs text-slate-400 group-hover:text-amber-400/70 transition-colors duration-300'>orchestration</h4>
                            <h3 className='font-bold text-base md:text-lg text-white text-center mt-1'>active clusters</h3>
                        </div>

                        <div className=" relative overflow-hidden bg-slate-800/40 backdrop-blur-md  border border-slate-600/30  shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-3xl uppercase flex flex-col items-center justify-center p-6  transition-all duration-300  hover:bg-slate-700/50 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(245,158,11,0.15)]  group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-16 md:size-20 text-slate-300 group-hover:text-amber-500 transition-colors duration-300 mb-3' viewBox="0 0 640 640">
                                <path fill="currentColor" d="M73.4 182.6C60.9 170.1 60.9 149.8 73.4 137.3C85.9 124.8 106.2 124.8 118.7 137.3L278.7 297.3C291.2 309.8 291.2 330.1 278.7 342.6L118.7 502.6C106.2 515.1 85.9 515.1 73.4 502.6C60.9 490.1 60.9 469.8 73.4 457.3L210.7 320L73.4 182.6zM288 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L288 512C270.3 512 256 497.7 256 480C256 462.3 270.3 448 288 448z"/>
                            </svg>
                            <h4 className='font-mono text-xs text-slate-400 group-hover:text-amber-400/70 transition-colors duration-300'>pipeline</h4>
                            <h3 className='font-bold text-base md:text-lg text-white text-center mt-1'>stable ci/cd</h3>
                        </div>

                        <div className=" relative overflow-hidden bg-slate-800/40 backdrop-blur-md  border border-slate-600/30  shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-3xl uppercase flex flex-col items-center justify-center p-6  transition-all duration-300  hover:bg-slate-700/50 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(245,158,11,0.15)]  group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-16 md:size-20 text-slate-300 group-hover:text-amber-500 transition-colors duration-300 mb-3' viewBox="0 0 640 640">
                                <path fill="currentColor" d="M296.5 69.2C311.4 62.3 328.6 62.3 343.5 69.2L562.1 170.2C570.6 174.1 576 182.6 576 192C576 201.4 570.6 209.9 562.1 213.8L343.5 314.8C328.6 321.7 311.4 321.7 296.5 314.8L77.9 213.8C69.4 209.8 64 201.3 64 192C64 182.7 69.4 174.1 77.9 170.2L296.5 69.2zM112.1 282.4L276.4 358.3C304.1 371.1 336 371.1 363.7 358.3L528 282.4L562.1 298.2C570.6 302.1 576 310.6 576 320C576 329.4 570.6 337.9 562.1 341.8L343.5 442.8C328.6 449.7 311.4 449.7 296.5 442.8L77.9 341.8C69.4 337.8 64 329.3 64 320C64 310.7 69.4 302.1 77.9 298.2L112 282.4zM77.9 426.2L112 410.4L276.3 486.3C304 499.1 335.9 499.1 363.6 486.3L527.9 410.4L562 426.2C570.5 430.1 575.9 438.6 575.9 448C575.9 457.4 570.5 465.9 562 469.8L343.4 570.8C328.5 577.7 311.3 577.7 296.4 570.8L77.9 469.8C69.4 465.8 64 457.3 64 448C64 438.7 69.4 430.1 77.9 426.2z"/>
                            </svg>
                            <h4 className='font-mono text-xs text-slate-400 group-hover:text-amber-400/70 transition-colors duration-300'>data_lake</h4>
                            <h3 className='font-bold text-base md:text-lg text-white text-center mt-1'>geo-syn active</h3>
                        </div>

                        <div className=" relative overflow-hidden bg-slate-800/40 backdrop-blur-md  border border-slate-600/30  shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-3xl uppercase flex flex-col items-center justify-center p-6  transition-all duration-300  hover:bg-slate-700/50 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(245,158,11,0.15)]  group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-16 md:size-20 text-slate-300 group-hover:text-amber-500 transition-colors duration-300 mb-3' viewBox="0 0 640 640">
                                <path fill="currentColor" d="M320 64L128 136v192c0 121.5 81.9 235.6 192 272 110.1-36.4 192-150.5 192-272V136L320 64zm144 264c0 100.1-61.1 193.3-144 225.4-82.9-32.1-144-125.3-144-225.4V170.4l144-54 144 54V328z"/>
                            </svg>
                            <h4 className='font-mono text-xs text-slate-400 group-hover:text-amber-400/70 transition-colors duration-300'>Cybersecurity</h4>
                            <h3 className='font-bold text-base md:text-lg text-white text-center mt-1'>Zero Trust Shield</h3>
                        </div>

                    </section>

                </section>

                <section className='TEXT grid grid-cols-4 gap-1.5  col-span-3'>

                    <div className='bg-linear-to-br from-amber-600/20 to-slate-900/40 backdrop-blur-sm rounded-3xl flex flex-col items-start p-8 border border-amber-500/20 relative overflow-hidden h-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-amber-500/40 mb-auto" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>

                        <div className="mt-auto">
                            <h3 className="text-white text-3xl md:text-4xl font-black leading-none tracking-tight">
                                SOFTWARE <br /> 
                                <span className="text-amber-500 text-4xl md:text-5xl italic font-serif tracking-normal leading-tight">
                                    Sin Límites.
                                </span>
                            </h3>
                            
                            <div className="h-1 w-12 bg-amber-500 mt-5 mb-4 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                            
                            <p className="text-slate-300 font-bold text-xs uppercase tracking-[0.2em]">
                                Arquitectura de Alto Rendimiento
                            </p>
                        </div>

                    </div>

                    <div className='relative overflow-hidden bg-transparent rounded-3xl flex flex-col gap-3 items-start justify-center p-8 border border-white/10 shadow-2xl h-full min-h-100'>

                        <div className="absolute inset-0 z-0">
                            <GlobalScene />
                        </div>

                        <div className="absolute inset-0 z-10 bg-amber-950/50 backdrop-blur-sm rounded-3xl" />

                        <div className='relative z-20 text-start p-3 py-6 gap-6 flex flex-col mt-auto w-full'>
                            <h5 className='font-extralight text-xl text-amber-200/80 uppercase tracking-widest'>Geospatial_Sync</h5>
                            <h3 className='text-4xl md:text-5xl font-black text-white leading-none tracking-tighter'>
                            Global Remote Operations
                            </h3> 
                        </div>
                       
                            
                        <div className='relative z-20 text-start p-3 py-6 gap-6 flex justify-between mt-auto w-full'>
                            <div className='items-center justify-center flex flex-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' viewBox="0 0 640 640"><path fill='#fff' d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L369 320C402.8 290.1 447.3 272 496 272C524.6 272 551.6 278.2 576 289.4L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L321.4 544C310.2 519.6 304 492.6 304 464C304 447.4 306.1 431.3 310 416L288 416zM640 464C640 384.5 575.5 320 496 320C416.5 320 352 384.5 352 464C352 543.5 416.5 608 496 608C575.5 608 640 543.5 640 464zM496 384C504.8 384 512 391.2 512 400L512 448L544 448C552.8 448 560 455.2 560 464C560 472.8 552.8 480 544 480L496 480C487.2 480 480 472.8 480 464L480 400C480 391.2 487.2 384 496 384z"/></svg>
                                <h5 className='text-amber-200/80 font-extralight'>TZ_PRIMARY</h5>
                                <h4 className='font-extrabold'>GMT-6</h4>
                            </div>
                            <div className='items-center justify-center flex flex-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' viewBox="0 0 640 640"><path fill='#fff' d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>
                                <h5 className='text-amber-200/80 font-extralight'>Last_base</h5>
                                <h4 className='font-extrabold'>LATAM</h4>
                            </div>
                        </div>
        
                    </div>

                    <div className='p-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex place-content-center items-center rounded-3xl transition-colors hover:bg-slate-800'>
                          {cardHover
                            .filter(i => i.id === 1)
                            .map((s)=>(
                                <div key={s.id} className='flex flex-col items-center justify-center gap-8'>
                                    <div className='grow'>
                                        <svg viewBox="0 0 640 512" className="size-28">
                                            <path
                                            fill='#f59e0b'
                                            d={s.path}
                                            />
                                        </svg>
                                    </div>
                                    
                                    <div className='flex flex-col text-center gap-0.5'>
                                        <h3 className='text-2xl font-extrabold'>{s.title}</h3>
                                        <h4 className='italic font-light'>{s.subtitle}</h4>
                                    </div>

                                    <div className='flex flex-col items-center gap-2'>
                                        <div className='bg-[#f59e0b] h-2 w-26 grid grid-cols-4 overflow-hidden rounded-2xl content-center '/>
                                        <div className='bg-[#f59e0b] h-2 w-13 grid grid-cols-4 overflow-hidden rounded-2xl content-center '/>
                                            
                                    </div>
                                </div>
                            ))
                          }
                    </div>

                    <div className='TEXT bg-slate-900 rounded-3xl place-items-center flex p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-amber-500/30 relative overflow-hidden'>
                            <div className='flex flex-col gap-3 items-center text-center'>
                                    <h4 className='uppercase font-black text-2xl text-white tracking-tight'>
                                        ¿Listo para <span className="text-amber-500">Dominar tu Mercado?</span>
                                    </h4>
                                     <p className='font-light text-amber-50/80 text-center leading-relaxed max-w-sm'>
                                        Transforme su infraestructura en una ventaja competitiva imparable. 
                                        Especialista en arquitecturas de alto rendimiento y sistemas de misión crítica.
                                    </p>
                                    <div className='mt-4 bg-amber-500 px-8 py-4 rounded-2xl flex items-center gap-3 font-bold uppercase text-slate-900 cursor-pointer group hover:scale-105 transition-all duration-300 ease-out '>
                                         Iniciar Consultoría de Éxito
                                        <svg xmlns="http://www.w3.org/2000/svg" className='size-7 rotate-30 group-hover:translate-x-1 transition-transform group-hover:rotate-0 duration-300 ease-in-out' viewBox="0 0 640 640"><path fill='#ffff' d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"/></svg>
                                    </div>
                            </div>
                        <div>
                        

                        </div>

                    </div>

                </section>
                
              

            </div>
        </div>
    )
}

//shadow-[0_0_20px_rgba(245,158,11,0.4)]