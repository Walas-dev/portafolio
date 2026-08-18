export default function StackBackground() {
  return (
    <>
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          dark:opacity-[0.045]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(237, 244, 237, 0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(237, 244, 237, 0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '72px 72px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
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