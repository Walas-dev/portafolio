export default function Motto() {
  return (
    <div className=" relative flex min-h-107.5 size-full flex-col overflow-hidden rounded-3xl dark:bg-espresso bg-celadon p-8 text-cream sm:p-10 ">
      <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full border border-espresso dark:border-celadon/10" />
      <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full border border-espresso dark:border-celadon/10" />
      <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-mahogany dark:border-teal/30 text-mahogany dark:text-teal">
        <span className="text-lg">✦</span>
      </div>
      <div className="relative z-10 mt-auto">
        <div className=" mb-6 h-px w-14 bg-mahogany dark:bg-teal " />
        <p className=" mb-3 font-mono text-xs uppercase tracking-[0.25em] text-espresso/60 dark:text-cream/40 ">
          Principio de diseño
        </p>
        <h3 className=" font-heading text-4xl font-black leading-[0.9] tracking-[-0.04em] md:text-5xl " >
          Sistemas
          <br />
          <span className="text-espresso dark:text-celadon font-serif italic">
            que evolucionan.
          </span>
        </h3>
        <p className=" mt-6 max-w-sm text-sm leading-6 text-mahogany/70 dark:text-cream/50 " >
          Cada decisión técnica debe resolver una necesidad presente
          sin convertirse en una limitación futura.
        </p>
      </div>
    </div>
  )
}