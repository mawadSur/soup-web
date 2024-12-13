import Image from 'next/image';
import { GiHotMeal } from 'react-icons/gi';
import { Button } from './button';
import { TypingAnimation } from './typing-animation';
import { DONATION_URL } from '@/constant';

export default function Hero() {
  return (
    <section className="py-8 md:pt-12 md:pb-0 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-bold text-black text-xl sm:text-2xl md:text-4xl">
              In a world abundant in resources,
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[15px] border-[#4ADE80]"></span>
                <h2 className="relative font-bold text-black text-3xl md:text-7xl">no child should</h2>
              </div>
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[15px] border-[#4ADE80]"></span>
                <h2 className="relative font-bold text-black text-3xl md:text-7xl">ever go to bed hungry.</h2>
              </div>
            </h2>

            <div className="mt-8 tracking-wide text-base text-black sm:text-xl">
              <TypingAnimation text="Right now in Gaza, every bite is a story of resilience and hope. Your contribution extends far beyond nourishment—it's a lifeline, a promise of better days. Stand with us in this mission of compassion and dignity. Your donation is their tomorrow. Act now." />
            </div>

            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Button
                as="a"
                target="_blank"
                href={DONATION_URL}
                rel="noopener noreferrer"
                aria-label="Donate to Gaza Soup Kitchen"
                className="animate-buttonheartbeat rounded-md flex items-baseline justify-center gap-2 px-10 py-4 text-base font-semibold bg-[#B71C1C] text-white"
              >
                BUY A HOT MEAL
                <GiHotMeal size={20} />
              </Button>
            </div>
          </div>
          <Image
            src="/gaza-kid.webp"
            alt="Palestinian kid in Gaza: Humanitarian Crisis"
            width={800}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-xl w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
