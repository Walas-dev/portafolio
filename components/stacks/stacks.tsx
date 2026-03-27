import React from 'react'
import { Front, Back, Cloud } from '../../types/Stacks'
import StacksC from '../ui/StacksC'
import SectionStack from './sectionStack'

export default function Stacks() {
  return (
    <div className='flex-wrap flex w-full justify-center'>
      <div className='items-center text-center pb-8'>
        <h3 className='text-[2.1rem] md:text-[3rem] font-bold'><span className='text-blue-500'>./</span> Stack Tecnológico</h3>
        <p className='text-[1.3rem] text-gray-400'>Herramentas y tecnologías que domino para construir el futuro.</p>
      </div>

      <section className='overflow-hidden  flex flex-col w-full gap-10 items-center px-10'>

        <SectionStack
          title="Frontend Moderno"
          colorTitle="bg-linear-to-l to-[#09c8d5] from-[#024a86] via-[#1890df]"
          fondo="bg-linear-to-r from-[#1890df]/10 via-[#024a86]/20 to-[#09c8d5]/25  hover:border-[#1890df]/40"
        >
          <StacksC parametros={Front} />
          <StacksC parametros={Front} />
          <StacksC parametros={Front} />

        </SectionStack>

        <SectionStack
          title='Backend Core'
          colorTitle='bg-linear-to-r from-[#c82a54]  to-[#e7d40a]'
          fondo="bg-linear-to-r from-orange-900/10 via-[#c82a54]/20 to-orange-800/25 hover:border-[#e7d40a]/40"
        >
          <StacksC parametros={Back} />
          <StacksC parametros={Back} />
          <StacksC parametros={Back} />
        </SectionStack>

        <SectionStack
          title='Cloud & DEvOps'
          colorTitle='bg-linear-to-r from-green-500  via-emerald-500 to-teal-600'
          fondo="bg-linear-to-r from-teal-600/10 via-emerald-500/20 to-green-500/25 hover:border-green-500/40"
        >
          <StacksC parametros={Cloud} />
          <StacksC parametros={Cloud} />
          <StacksC parametros={Cloud} />
        </SectionStack>

      </section>


    </div>
  )
}
