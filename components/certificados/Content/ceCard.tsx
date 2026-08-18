'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import ViewerIMG from './Viewer'
import Animation from '@/components/common/animationEntry'
import { certificates } from '@/components/certificados/types/certificados'

export default function CeCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [current, setCurrent] = useState('')

  const open = (ruta: string) => {
    setCurrent(ruta)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {certificates.map((c, index) => (
          <Animation key={index} index={index}>
            <article
              className=" group relative flex min-h-80 flex-col overflow-hidden rounded-3xl border border-cream/10 bg-cream/96 p-6 md:p-8 shadow-[0_20px_60px_rgba(48,16,20,0.16)]
                transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_25px_70px_rgba(121,183,145,0.10)] "
            >
              <div
                className=" pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-teal/10
                  blur-3xl transition-all duration-700 group-hover:bg-teal/20 group-hover:scale-125 "
              />
              <div
                className=" pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 "
                style={{
                  backgroundImage: `
                    radial-gradient(
                      circle at 2px 2px,
                      rgba(48,16,20,0.08) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className=" flex size-14 shrink-0 items-center justify-center rounded-2xl border border-mahogany/10 bg-mahogany/4 text-mahogany/70
                   transition-all duration-500 group-hover:border-teal/30 group-hover:bg-teal/10 group-hover:text-teal group-hover:scale-105 "
                >
                  <svg
                    viewBox="0 0 640 640"
                    className="size-7"
                  >
                    <path
                      fill="currentColor"
                      d={c.path}
                    />
                  </svg>
                </div>
                <div
                  className=" h-px grow bg-linear-to-r from-mahogany/10 via-mahogany/5 to-transparent "
                />
                <span
                  className=" font-mono text-[10px] tracking-[0.2em] text-mahogany/30 "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="relative z-10 grow pt-8">
                <h3
                  className=" font-heading text-2xl font-black leading-[1.05] tracking-[-0.03em] text-mahogany transition-colors
                   duration-300 md:text-3xl group-hover:text-espresso"
                >
                  {c.title}
                </h3>

                <span
                  className=" mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-teal"
                >
                  {c.fecha}
                </span>
                <p
                  className=" mt-5 max-w-md font-body text-sm leading-7 text-espresso/60"
                >
                  {c.texto}
                </p>
              </div>
              <div
                className=" relative z-10 mt-8 flex items-center justify-between gap-4"
              >
                <span
                  className=" hidden font-mono text-[9px] uppercase tracking-[0.2em] text-mahogany/25 sm:block"
                >
                  verified_credential
                </span>
                <Button
                  title="Ver_Credencial"
                  onClick={() => open(c.view)}
                  styleBt="
                    rounded-full border border-mahogany/15 bg-mahogany/4 px-6 py-2 text-mahogany transition-all
                    duration-300 hover:border-teal/40 hover:bg-teal/10 hover:text-espresso "
                  styleTx=" font-mono text-[10px] uppercase tracking-[0.2em]
                  "
                  colorElement="bg-teal/20"
                />
              </div>
            </article>
          </Animation>
        ))}
      </div>

      <ViewerIMG
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={current}
      />
    </>
  )
}