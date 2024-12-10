import Image from 'next/image'
import { GiHotMeal } from 'react-icons/gi'
import { Button } from './button'
import { TypingAnimation } from './typing-animation'

export default function Hero() {
  return (
    <div>
      <h1 className="text-7xl font-bold text-center text-black pt-8 sm:pt-10 lg:pt-16">GAZA SOUP KITCHEN</h1>
      <div className="py-10 sm:py-10 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-black sm:text-4xl">
                In a world abundant in resources,
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h2 className="relative text-6xl font-bold text-black lg:text-7xl">no child should</h2>
                </div>
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h2 className="relative text-6xl font-bold text-black lg:text-7xl">ever go to bed hungry.</h2>
                </div>
              </h2>

              <div className="mt-8 tracking-wide text-base text-black sm:text-xl">
                <TypingAnimation
                  text="Right now in Gaza, every bite is a story of resilience and hope. Your contribution extends far beyond nourishment—it's a lifeline, a promise of better days. Stand with us in this mission of compassion and dignity. Your donation is their tomorrow. Act now."
                />
              </div>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Button as="a" target="_blank" href="https://givebutter.com/gaza-soup-kitchen" className="animate-buttonheartbeat rounded-md flex items-baseline justify-center gap-2 px-10 py-4 text-base font-semibold bg-red-500 text-white">
                  BUY A HOT MEAL
                  <GiHotMeal size={20} />
                </Button>
              </div>
            </div>

            <div >
              <Image width={800} height={800} src="/gaza-kids.webp" alt="gaza-kids" className='rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
