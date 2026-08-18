'use client'

import CeTitle from './Content/ceTitle'
import CeCard from './Content/ceCard'
import CeBackground from './Content/ceBackground'

export default function Certifications() {
  return (
    <section
      id="certificados"
      className=" relative w-full overflow-hidden
        bg-espresso px-6 py-20 md:px-16 md:py-28 "
    >
      <CeBackground />
      <div
        className=" relative z-10 mx-auto w-full max-w-7xl"
      >
        <CeTitle />
        <CeCard />
      </div>
    </section>
  )
}