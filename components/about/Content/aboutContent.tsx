import AnimationEntry from '@/components/common/animationEntry'
import AboutTitle from './aboutTitle'
import CardInfo from './cardInfo'
import CardPrincip from './cardPrincipio'
import CardGlobal from './cardGlobal'
import CardCapacity from './cardCapacity'
import CardContact from './cardContact'

const aboutContent = () => {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12">
        <AboutTitle/>
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
          <AnimationEntry
            index={0}
            className="flex w-full xl:col-span-2"
          >
            <CardInfo />
          </AnimationEntry>

          <AnimationEntry
            index={1} className="flex w-full"
          >
            <CardPrincip />
          </AnimationEntry>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          <AnimationEntry
            index={2} className="flex w-full"
          >
            <CardGlobal />
          </AnimationEntry>
          
          <AnimationEntry
            index={3} className="flex w-full"
          >
            <CardCapacity />
          </AnimationEntry>

          <AnimationEntry
            index={4} className="flex w-full md:col-span-2 xl:col-span-1"
          >
            <CardContact />
          </AnimationEntry>
        </div>
      </div>
  )
}

export default aboutContent
