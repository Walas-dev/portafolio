import HeroTitle from "./heroTitle"
import HeroButton from "./heroButton"
import HeroSlider from "./heroSlider"

export default function heroContent() {
  return (
    <div className='flex flex-col justify-center items-center max-w-2xl space-y-8 md:space-y-12 z-1'>
      <HeroTitle/>
      <HeroButton/>
      <HeroSlider/>
    </div>
  )
}
