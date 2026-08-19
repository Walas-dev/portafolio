'use client'
import AboutBackground from './Content/aboutBackground'
import AboutContent from './Content/aboutContent'
export default function About() {
  return (
    <section id="about" className=" relative w-full overflow-hidden bg-mahogany dark:bg-cream py-16 md:py-24 ">
      <AboutBackground/>
      <AboutContent/>
    </section>
  )
}