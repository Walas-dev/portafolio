const Copyright = () => {
  return (
    <div className="text-center md:text-left">
      <p className="font-body text-sm text-mahogany/70 md:text-base">
        © {new Date().getFullYear()} Williams Alas
      </p>

      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mahogany/40">
        Ingeniero de Sistemas
      </p>
    </div>
  )
}

export default Copyright