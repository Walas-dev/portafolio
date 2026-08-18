import { redes } from '@/components/footer/types/footer'

const Redes = () => {
  return (
    <ul className="flex items-center gap-3 pb-2">
      {redes.map((s) => (
        <li key={s.id}>
          <a
            href={s.ref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.red}
            className=" group flex size-12 items-center justify-center rounded-full border border-mahogany/15
             bg-mahogany/5 text-mahogany/60 transition-all duration-300 hover:-translate-y-1
             hover:border-teal/50 hover:bg-teal/10 hover:text-teal
            "
          >
            <svg
              className="size-6 md:size-6.5"
              viewBox="0 0 640 640"
              aria-hidden="true"
            >
              <path
                d={s.p}
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Redes