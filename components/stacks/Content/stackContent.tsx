'use client'

import StackCard from './stackCard'
import { Front, Back, Cloud } from '../types/stacks'

const decks = [
  {
    title: 'Frontend',
    description: 'Interfaces, experiencias y aplicaciones web.',
    items: Front,
  },
  {
    title: 'Backend',
    description: 'Servicios, APIs y persistencia de datos.',
    items: Back,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infraestructura, despliegue y automatización.',
    items: Cloud,
  },
]

export default function StackContent() {
  return (
     <div className="w-full max-w-7xl px-4 md:px-8">
      <div className="w-full space-y-20">
        {decks.map((deck) => (
          <section key={deck.title} className="w-full">
            <div className="mb-6 md:mb-9 flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />

                <span className=" font-mono text-xs uppercase tracking-[0.2em] text-mahogany/50 dark:text-cream/40">
                  {String(decks.indexOf(deck) + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className=" font-heading text-3xl md:text-5xl font-bold tracking-tight text-mahogany dark:text-cream">
                {deck.title}
              </h4>
              <p className=" max-w-xl font-body text-sm md:text-base text-mahogany/50 dark:text-cream/50" >
                {deck.description}
              </p>
            </div>

            <div className=" grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 md:gap-5">
              {deck.items.map((item, index) => (
                <StackCard
                  key={item.id} item={item} index={index}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
     </div>
  )
}