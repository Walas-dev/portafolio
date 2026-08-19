'use client'
import { Front, Back, Cloud } from '../../stacks/types/stacks'

const extraTools = ['Figma', 'VS Code', 'Postman', 'Notion']

const techNames = [
  ...Front.map((f) => f.stack),
  ...Back.map((f) => f.stack),
  ...Cloud.map((f) => f.stack),
  ...extraTools,
]

export default function HeroSlider() {
  const loop = [...techNames, ...techNames]

  return (
    <div
      className="absolute bottom-0 left-0 right-0 border-t border-mahogany/10 dark:border-cream/10 overflow-hidden py-4"
      style={{
        maskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes hero-ticker-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-hero-ticker {
          animation: hero-ticker-slide 34s linear infinite;
          will-change: transform;
        }
      `}} />

      <div className="flex w-max shrink-0 items-center gap-8 animate-hero-ticker">
        {loop.map((n, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span className="font-mono uppercase tracking-[0.28em] text-[11px] text-mahogany dark:text-cream whitespace-nowrap">
              {n}
            </span>
            <span className="text-mahogany/30 dark:text-cream/30">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}