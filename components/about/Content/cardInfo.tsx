import { button } from '@/components/about/types/about'
import Button from '@/components/ui/Button'

export default function InfoCard() {
  return (
    <div className=" relative flex min-h-107.5 w-full flex-col justify-between overflow-hidden rounded-3xl bg-mahogany p-7 text-cream shadow-[0_20px_60px_rgba(48,16,20,0.16)] sm:p-9 2xl:p-12 ">
      <div className=" pointer-events-none absolute inset-0 opacity-[0.08] "
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #edf4ed 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-teal/10" />
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-teal/10" />
      <div className="relative z-10">

        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-celadon/70">
          ingeniero_de_sistemas
        </p>
        
        <h3 className=" font-heading text-6xl font-black leading-[0.88] tracking-tighter sm:text-7xl md:text-8xl ">
          Williams
          <span className="block md:inline md:ml-4">
            Alas
          </span>
        </h3>
      </div>

      <div className=" relative z-10 mt-12 max-w-3xl ">
          <h3 className=" mb-4 font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl " >
            Ingeniería que convierte ideas
            en sistemas.
          </h3>
          <p className=" max-w-2xl text-sm font-medium leading-7 text-cream/60 md:text-base md:leading-8 ">
            Diseño y desarrollo soluciones backend, infraestructura cloud
            y automatización con una arquitectura clara, mantenible y
            preparada para evolucionar.
          </p>
      </div>

      <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {button.map((e) => (
          <Button
            key={e.id}
            href={e.href}
            title={e.title}
            styleBt={` w-full sm:w-auto border px-7 py-3 transition-all duration-300
              ${
                e.id === 1 ? `border-cream bg-cream text-mahogany hover:bg-celadon hover:border-celadon` 
                : `border-cream/25 bg-transparent text-cream hover:border-teal hover:bg-teal/10 `
              }
            `} styleTx=" font-mono uppercase tracking-[0.2em] text-xs"
            colorElement=" bg-teal/70"
          />
        ))}
      </div>
    </div>
  )
}