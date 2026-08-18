export default function CeTitle() {
  return (
    <div className="mb-12 md:mb-16">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_12px_rgba(121,183,145,0.7)]" />

        <span className=" font-mono text-[10px] uppercase tracking-[0.3em] text-teal/80
        ">
          Ls_credentials/
        </span>

        <span className="h-px w-16 bg-cream/10" />
      </div>

      <h3
        className=" font-heading text-[2.5rem] font-black leading-none tracking-[-0.04em] text-cream sm:text-5xl md:text-6xl "
      >
        Certificaciones
      </h3>
      <p
        className=" mt-5 max-w-xl font-body text-sm leading-7 text-cream/55 md:text-base
        "
      >
        Formación y credenciales que respaldan mi experiencia
        técnica y mi compromiso con la evolución constante.
      </p>
    </div>
  )
}