'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import GlobalScene from './global';
import Atributes from './atributes';
import ContactCard from './contactCard';
import Motto from './Motto';
import Action from './action';
import Description from './description';
import FadeInCard from '@/components/ui/animationEntry'

export default function About() {
  return (
    <div className='flex-wrap flex pt-15 pb-10 justify-center overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-3 py-5 md:px-10 w-full'>
        
        {/* SECCIÓN SUPERIOR */}
        <section className='grid grid-cols-1 lg:grid-cols-3 col-span-1 lg:col-span-3 gap-2'>
          <FadeInCard index={0} className="col-span-1 lg:col-span-2 flex w-full"> 
            <Description/>
          </FadeInCard>
          <FadeInCard index={1} className="col-span-1 flex w-full">
            <Atributes/>
          </FadeInCard>
        </section>

        {/* SECCIÓN INFERIOR */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 col-span-1 lg:col-span-3'>
         <FadeInCard index={2} className="col-span-1 flex w-full">
            <Motto/>
          </FadeInCard>
          <FadeInCard index={3} className="col-span-1 flex w-full">
            <GlobalScene />
          </FadeInCard>
          <FadeInCard index={4} className="col-span-1 flex w-full">
            <Action/>
          </FadeInCard>
          <FadeInCard index={5} className="col-span-1 flex w-full">
            <ContactCard/>
          </FadeInCard>
        </section>

      </div>
    </div>
  )
}
//shadow-[0_0_20px_rgba(245,158,11,0.4)]