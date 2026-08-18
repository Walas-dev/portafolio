
import React from 'react'
import { TypewriterText } from './write'

const heroTitle = () => {
  return (
    <React.Fragment>
        <div className="flex items-center justify-center gap-3 w-full dark:text-cream text-mahogany">
            <span className="w-2 h-2 relative rounded-full dark:bg-cream bg-mahogany opacity-40">
                <span className="size-2 absolute rounded-full animate-ping dark:bg-cream bg-mahogany" />
            </span>
            <div className="font-mono uppercase tracking-[0.2em] md:tracking-[0.35em] text-[10px] md:text-[11px] dark:text-cream text-mahogany">
                SYSTEM STATUS
                <span className="ml-2 md:ml-4 dark:text-cream text-mahogany">
                    DORMANT
                </span>
            </div>
        </div>

        <div className="space-y-6 md:space-y-8 flex items-center justify-center flex-col w-full text-center">
            <h1 className="flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 font-heading text-5xl sm:text-6xl lg:text-8xl leading-[1.1] md:leading-[0.9] tracking-[-0.04em] dark:text-cream text-mahogany">
                <span>Diseñando</span>
                <TypewriterText/>
            </h1>
            
            <p className="font-body text-base md:text-lg leading-7 md:leading-8 dark:text-cream/90 text-mahogany/90 max-w- sm:max-w-md md:max-w-xl text-center">
                Arquitecturas backend, infraestructura cloud y automatización diseñadas para evolucionar.

            </p>
        </div>
    </React.Fragment>
  )
}

export default heroTitle
