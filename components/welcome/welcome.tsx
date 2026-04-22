'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Intro from './intro'
import Code from './code'
import SVG from '../common/iluminarSVG'
import Button from '../ui/Button';

const enlaces = [
    { id: 1, enlace: 'Ver proyectos', class:'bg-[#FBF6EE] text-[#111111] hover:text-[#FBF6EE]', element:'bg-[#FD105E]', color: '#193cb8', path: 'M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z', url: '/' },
    { id: 2, enlace: 'walabalaz.dev@gmail.com', class:'border-2 border-[#FBF6EE] text-[#FBF6EE] hover:border-transparent', element:'bg-[#111111]', color: '#ffff', path: 'M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z', url: '' },
]

const states = [
    { id: 1, state: true, estado: 'disponible para proyectos', color:'bg-green-500' },
    { id: 2, state: false, estado: 'En un proyecto', color:'bg-amber-500' },
    { id: 3, state: false, estado: 'Agenda llena', color:'bg-red-500' }
]

const img = [
    { id: 1, enlace: 'code', color: '#ff9f43', path: 'M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z' },
    { id: 2, enlace: 'trabajo', color: '#00d2ff', path: 'M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z' },
    { id: 3, enlace: 'correo', color: '#ff4757', path: 'M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z' },
]


export default function welcome() {

    const [ronda, setRonda] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRonda((r) => r + 1);
        }, 5500);

        return () => clearTimeout(timer);
    }, [ronda]);

    const ciclo = () => {
        setRonda(prev => prev + 1);
    };

    return (
        <div className='grid grid-cols-1 xl: xl:grid-cols-2 space-y-10'>
            <section className=' bg-linear-to-r from-[#0F0F17]/35 via-[#FD105E]/45 to-[#FD105E]/80 rounded-r-4xl px-3 py-5 md:px-16 md:py-15'>
                {states.map((s) => (
                    <div key={s.id} className='relative'>
                        <ul className={` flex flex-wrap gap-3 sm:w-sm justify-center items-center rounded-2xl py-2 drop-shadow-2xl drop-shadow-[#FD105E]/50 bg-[#FD105E]/15  ${s.state === false ? 'hidden' : ''}`}>
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${s.color} opacity-75`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${s.color}`}></span>
                            </span>

                            <h3 className='text-[#FBF6EE] font-bold uppercase'>{s.estado}</h3>
                        </ul>
                    </div>
                ))}

            

                <Intro />

                <div className='flex flex-col md:flex-row gap-5 my-3'>
                    {enlaces.map((e) => (
                        
                        <Button 
                            key={e.id}
                            title={e.enlace}
                            styleBt={`${e.class} cursor-pointer px-6 py-2.5 rounded-full hover:scale-105 text-xs font-bold uppercase `}
                            styleTx='font-bold uppercase tracking-wide'
                            colorElement={e.element}
                        >
                            <svg viewBox="0 0 640 640" 
                                    className={`w-6 h-6 ${e.id !== 2 ? 'hidden': 'visible'} z-99`}>
                                <motion.path
                                    d={e.path}
                                    initial={{ fill: e.color }}
                                    transition={{
                                        duration: 5,
                                        times: [0, 0.25, 0.75, 1],
                                        ease: "linear",
                                    }}
                                />
                            </svg>
                        </Button>
                        
                    ))}



                

                </div>

                <div className='flex gap-3 my-8'>
                    {img.map((i, index) => (
                        <a key={i.id} href="">
                            <SVG
                                index={i.id}
                                delay={0.5 * index}
                                pathDirection={i.path}
                                color={i.color}
                                ronda={ronda}
                                onComplete={index === img.length - 1 ? ciclo : undefined}
                            />
                        </a>
                    ))}
                </div>
            </section>


            <Code />

        </div>
    )
}
