'use client'

import ContactTitle from './conTitle'
import ContactP from './conP'
import ContactButton from './conButton'

export default function Contact() {
  return (
    <div
      className=" relative z-10 mx-auto flex min-h-[75vh] md:min-h-[80vh]
        w-full max-w-7xl flex-col items-center justify-center px-6 py-16 sm:px-8 md:py-20 "
    >
      <ContactTitle />
      <ContactP />
      <ContactButton />
    </div>
  )
}