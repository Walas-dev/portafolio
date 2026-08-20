import Redes from './Content/redes'
import Copyright from './Content/copyright'
import FooterMeta from './Content/footerMeta'

export default function Footer() {
  return (
    <footer
      className=" relative z-0 w-full border-t border-mahogany/10 bg-cream/85 px-6 py-8 md:px-12 md:py-10"
    >
      <div className="mx-auto max-w-7xl">

        <div
          className=" flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <Copyright />
          <Redes />
        </div>

        <FooterMeta />

      </div>
    </footer>
  )
}