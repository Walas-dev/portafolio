import Image from 'next/image'
import Link from 'next/link'

interface TitleHeaderProps {
  setMenuOpen: (isOpen: boolean) => void;
}

const TitleHeader = ({setMenuOpen}:TitleHeaderProps) => {
  return (
    <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Inicio"
        className=" group flex min-w-0 shrink-0 items-center gap-2.5 rounded-full py-1 pl-1 pr-2 "
    >
        <div className=" relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cream/10
            bg-cream/5 transition-all duration-300 group-hover:border-cream/25 group-hover:bg-cream/10 sm:size-12 "
        >
        <Image
            src="/logo.png" alt="Williams Alas" fill sizes="48px" className="object-contain p-1" priority
        />
        </div>
        <div className="min-w-0">
        <span className=" block truncate font-heading text-xs font-bold leading-none tracking-tight text-cream min-[380px]:text-sm ">
            Williams Alas
        </span>
        <span className=" mt-1 block truncate font-mono text-[7px] uppercase tracking-[0.16em] text-cream/35 min-[380px]:text-[8px] " >
            Systems Engineer
        </span>
        </div>
    </Link>
  )
}

export default TitleHeader
