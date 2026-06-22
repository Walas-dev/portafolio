'use client'
import GlobalScene from './global';
import Atributes from './atributes';
import Motto from './Motto';
import Action from './action';
import Description from './description';
import FadeInCard from '@/components/common/animationEntry'

export default function About() {
  return (
    <div id="enfoque" className='flex-wrap flex pb-10 justify-center overflow-hidden z-1  w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-3 py-5 md:px-10'>
        
        <section className='grid grid-cols-1 2xl:grid-cols-3 col-span-1 lg:col-span-3 gap-2'>
          <FadeInCard index={0} className="col-span-1 lg:col-span-2 flex w-full"> 
            <Description/>
          </FadeInCard>
          <FadeInCard index={1} className="col-span-1 flex w-full">
            <Atributes/>
          </FadeInCard>
        </section>

        <section className='grid grid-cols-1  xl:grid-cols-3 gap-1.5 col-span-1 lg:col-span-3'>
         <FadeInCard index={2} className="col-span-1 flex w-full">
            <Motto/>
          </FadeInCard>
          <FadeInCard index={3} className="col-span-1 flex w-full">
            <GlobalScene />
          </FadeInCard>
          <FadeInCard index={4} className="col-span-1 flex w-full">
            <Action/>
          </FadeInCard>
        </section>
      </div>
    </div>
  )
}