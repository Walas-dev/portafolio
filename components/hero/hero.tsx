'use client'
import HeroBackgroud from './Content/heroBackgroud';
import HeroContent from './Content/heroContent';
export default function Hero() {
    return (
        <section id='inicio' className='z-0 relative flex items-center justify-center overflow-hidden min-h-svh rounded-b-3xl lg:rounded-b-[3rem] w-full px-6 py-24 lg:px-20'>
            <HeroContent/>
            <HeroBackgroud/>
        </section>
    )
}