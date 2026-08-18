import { SectionType } from '@/components/header/types/header'
import Link from 'next/link'
import { handleSmoothScroll } from '@/components/common/types/scroll'

interface NavItemProps {
  s: SectionType;
  active: number | null;
  setActive: (id: number | null) => void;
  setMenuOpen: (isOpen: boolean) => void;
}

const NavItem = ({ s, active, setActive, setMenuOpen }: NavItemProps) => {
  const isActive = active === s.id;

  return (
    <Link
      href={s.href}
      onMouseEnter={() => setActive(s.id)}
      onMouseLeave={() => setActive(null)}
      onClick={(e) =>
        handleSmoothScroll(e, s.href, () => setMenuOpen(false))
      }
      className=" group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-cream/5 "
    >
      <svg
        className=" size-5 shrink-0 transition-all duration-300 "
        viewBox="0 0 640 640"
      >
        <path
          d={s.p}
          className={` transition-colors duration-300 ${ isActive ? 'fill-cream' : 'fill-cream/45 group-hover:fill-cream'} `}
        />
      </svg>

      <span
        className=" text-base font-medium text-cream/70 transition-colors duration-300 group-hover:text-cream "
      >
        {s.section}
      </span>
    </Link>
  )
}

// 3. Exportamos con el nombre corregido
export default NavItem