const NavTitle = () => {
  return (
    <div className="hidden lg:flex shrink-0 items-center justify-between border-b border-white/5 px-5 py-4 ">
        <div className="flex items-center gap-2">
            <span className="relative flex size-1.5">
            <span className=" absolute inline-flex size-full animate-ping rounded-full bg-teal/70 " />
            <span className=" relative inline-flex size-1.5 rounded-full bg-teal " />
            </span>
            <span className=" font-mono text-[9px] uppercase tracking-[0.25em] text-cream/40 " >
            Navigation
            </span>
        </div>
        <span className=" font-mono text-[9px] tracking-[0.2em] text-cream/20 " >
            01
        </span>
    </div>
  )
}

export default NavTitle
