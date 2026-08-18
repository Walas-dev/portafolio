interface ButtonHeaderProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const buttonHeader = ({ setMenuOpen }:ButtonHeaderProps) => {
  return (
    <div className=" shrink-0 border-t border-white/5 p-3 ">
        <a href="/CV.pdf" download onClick={() => setMenuOpen(false)} 
            className=" group flex w-full items-center justify-between gap-4 rounded-2xl border border-teal/10 bg-teal/5
                px-5 py-4 transition-all duration-300 hover:border-teal/25 hover:bg-teal/10 "
        >
            <div className="flex items-center gap-3">
            <div className=" flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal/10 ">
                <svg className="size-4.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                </svg>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium text-cream">
                Descargar CV
                </span>

                <span
                className=" mt-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-cream/25 "
                >
                PDF / Curriculum
                </span>
            </div>
            </div>

            <svg
            className=" size-4 shrink-0 text-cream/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal "
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
            </svg>
        </a>
    </div>
  )
}

export default buttonHeader
