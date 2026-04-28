import React from 'react'
import { Front, Back, Cloud } from '../../types/Stacks'
import StacksC from '../ui/StacksC'
import SectionStack from './sectionStack'
import Animation from '@/components/ui/animationEntry';
import CarruselInfinito from '@/components/ui/Carrousel'

export default function Stacks() {
  return (
    <div className='flex-wrap flex w-full justify-center pb-8'>
      <div className='items-center text-center pb-8'>
        <h3 className='text-[2.1rem] md:text-[3rem] font-bold text-[#FBF6EE]'><span className='text-[#FD105E]'>./</span> Stack Tecnológico</h3>
        <p className='text-[1.3rem] text-[#F2C6C2]'>Herramentas y tecnologías que domino para construir el futuro.</p>
      </div>

      <section className='overflow-hidden flex flex-col w-full gap-10 items-center px-4 sm:px-6 md:px-10'>
        <Animation index={0} className='w-full'>
          <SectionStack
            title="Frontend Moderno"
            colorTitle="bg-linear-to-l to-[#09c8d5] from-[#024a86] via-[#1890df]"
            fondo="bg-linear-to-r from-[#1890df]/10 via-[#024a86]/20 to-[#09c8d5]/25  hover:border-[#1890df]/40"
          >
            <CarruselInfinito velocidad={30}>
              <StacksC parametros={Front} />
            </CarruselInfinito>
          </SectionStack>
        </Animation>

        <Animation index={0} className='w-full'>
          <SectionStack
            title='Backend Core'
            colorTitle='bg-linear-to-r from-[#c82a54]  to-[#e7d40a]'
            fondo="bg-linear-to-r from-orange-900/10 via-[#c82a54]/20 to-orange-800/25 hover:border-[#e7d40a]/40"
          >
            <CarruselInfinito velocidad={25}>
              <StacksC parametros={Back} />
            </CarruselInfinito>
          </SectionStack>
        </Animation>   

        <Animation index={0} className='w-full'>
          <SectionStack
            title='Cloud & DEvOps'
            colorTitle='bg-linear-to-r from-green-500  via-emerald-500 to-teal-600'
            fondo="bg-linear-to-r from-teal-600/10 via-emerald-500/20 to-green-500/25 hover:border-green-500/40"
          >
            <CarruselInfinito velocidad={25}>
              <StacksC parametros={Cloud} />
            </CarruselInfinito>
          </SectionStack>
        </Animation>

      </section>


    </div>
  )
}
