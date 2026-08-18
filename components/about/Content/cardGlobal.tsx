import Fondo from './globalBackground'

function GlobalScene() {
  return (
    <div className=" relative h-full min-h-100 w-full overflow-hidden rounded-3xl ">
      <Fondo />
    </div>
  )
}

export default function Global() {
  return (
    <div className=" group relative flex h-full min-h-115 w-full flex-col justify-between
        overflow-hidden rounded-3xl border border-cream/10 bg-[#151012] p-7 text-cream md:p-8
      ">
      <div className="absolute inset-0 z-0">
        <GlobalScene />
      </div>
      <div className=" pointer-events-none absolute inset-0 z-10 
        bg-linear-to-t from-[#301014] via-[#301014]/30 to-transparent"
      />
      <div className="relative z-20 flex items-center justify-between">
        <span className=" font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 ">
          GEO_SPATIAL_SYNC
        </span>
        <span className=" rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono
          text-[9px] uppercase tracking-widest text-celadon "
        >
          ACTIVE
        </span>
      </div>

      <div className="relative z-20 mt-auto">
        <h3 className=" max-w-md font-heading text-4xl font-black leading-[0.9] tracking-[-0.04em] md:text-5xl ">
          Operaciones
          <br />
          <span className="text-celadon">
            globales.
          </span>
        </h3>
        <p className=" mt-4 max-w-md text-sm leading-6 text-cream/50 ">
          Infraestructura preparada para trabajar sin importar
          dónde se encuentre el usuario o el servicio.
        </p>
        <div className=" mt-8 flex gap-10 border-t border-cream/10 pt-6 " >
          <div>
            <p className=" font-mono text-[9px] uppercase tracking-widest text-cream/40 ">
              TZ_PRIMARY
            </p>
            <p className="mt-1 font-mono text-sm text-cream">
              GMT-6
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-cream/40">
              BASE
            </p>
            <p className="mt-1 font-mono text-sm text-cream">
              LATAM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}