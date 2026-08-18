import Button from "../../ui/Button";
import { enlaces } from "@/components/hero/types/hero";

const heroButton = () => {
  return (
    <div className="flex flex-wrap gap-5 ">
        {enlaces.slice(1).map((e) => (
            <Button
                key={e.id}
                href={e.ref}
                styleBt={`w-full lg:w-auto border border-line  transition-all duration-300 px-8 py-3 ${e.id===2 ? ' dark:text-cream text-mahogany hover:dark:text-mahogany hover:text-cream ': 'dark:bg-cream bg-mahogany text-cream dark:text-mahogany '}`}
                styleTx="font-mono uppercase tracking-[0.25em] text-xs"
                colorElement={` ${e.id===2 ? 'dark:bg-cream/80 bg-mahogany/80 border border-white/80 ': 'bg-cream/25 dark:bg-mahogany/25 border border-white/80'}`}
                title={e.enlace}
            />
        ))}

    </div>
  )
}

export default heroButton
