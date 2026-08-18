import StactTitle from './Content/stackTitle'
import StackContent from './Content/stackContent'
import StackBackground from './Content/stackBackground'

export default function Stacks() {
  return (
    <section
      id="stack"
      className=" relative w-full overflow-hidden pb-5 md:pb-8 pt-10"
    >
      <StackBackground />

      <div className="relative z-0 flex w-full flex-col items-center">
        <StactTitle />
        <StackContent />
      </div>
    </section>
  )
}


/***
 * <div className='items-center text-center pb-8'>
        <h3 className='text-[2.1rem] md:text-[3rem] font-bold text-[#FBF6EE] '><span className='text-portground'>./</span> Stack Tecnológico</h3>
        <p className='text-[1.3rem] text-[#F2C6C2]'>Herramentas y tecnologías que domino para construir el futuro.</p>
      </div>

      <section className='overflow-hidden flex flex-col w-full gap-10 items-center px-4 sm:px-6 md:px-10'>
        <Animation index={0} className='w-full flex justify-center'>
          <SectionStack
            title="Frontend"
          >
            <CarruselInfinito velocidad={45}>
              <StacksC parametros={Front} />
            </CarruselInfinito>
          </SectionStack>
        </Animation>

        <Animation index={0} className='w-full flex justify-center'>
          <SectionStack
            title='Backend'
          >
            <CarruselInfinito velocidad={30}>
              <StacksC parametros={Back} />
            </CarruselInfinito>
          </SectionStack>
        </Animation>   

        <Animation index={0} className='w-full flex justify-center'>
          <SectionStack
            title='Cloud & DevOps'
          >
            <CarruselInfinito velocidad={45}>
              <StacksC parametros={Cloud} />
            </CarruselInfinito>
          </SectionStack>
        </Animation>

      </section>
 * 
 */