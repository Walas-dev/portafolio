'use client'
import ContactBackground from './Content/conBackground'
import ContactContent from './Content/conContent'
export default function Contact() {
  return (
   <section
      id="contacto"
      className="z-0 relative min-h-[75vh] md:min-h-[80vh] w-full overflow-hidden bg-mahogany"
    >
      <ContactBackground />
      <ContactContent/>
    </section>
  )
}