export default function FooterMeta() {
  return (
    <div
      className=" flex w-full items-center justify-between border-t border-mahogany/10 pt-4 font-mono
       text-[10px] uppercase tracking-[0.2em] text-mahogany/35 "
    >
      <span>
        System / Portfolio
      </span>

      <span>
        {new Date().getFullYear()}
      </span>
    </div>
  )
}