export default function StackBackground() {
  return (
    <>
    <div
      className="
        pointer-events-none 
        absolute 
        inset-0 
        opacity-[0.08] /* <-- Súbelo (ej. 0.15) si quieres que se note aún más */
        dark:opacity-[0.08]
        transition-all duration-700
        bg-[linear-gradient(#301014_1px,transparent_1px),linear-gradient(90deg,#301014_1px,transparent_1px)]
        dark:bg-[linear-gradient(#edf4ed_1px,transparent_1px),linear-gradient(90deg,#edf4ed_1px,transparent_1px)]
      "
      style={{
        backgroundSize: '72px 72px',
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
      }}
    />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          -translate-x-1/2
          w-180
          h-120
          rounded-full
          bg-primary/5
          blur-[120px]
        "
      />
    </>
  )
}