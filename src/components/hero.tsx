'use client';
import { DONATION_URL } from '@/constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from './button';
import WaveText from './wave-text';

export default function Hero() {
  // { data }: { data: SectionTopHero }
  const { slug } = useParams();

  return (
    <section className="relative min-h-[742px] flex items-center mt-24 sm:mt-30 md:mt-36 lg:mt-32">
      <Image src="/hero.jpg" alt="Children in need" fill style={{ objectFit: 'cover' }} quality={75} priority />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3CC78F] opacity-50 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className={cn({ 'text-center': slug })}>
          {slug ? (
            <h3 className="capitalize text-white font-bold font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2 mb-3 leading-tight drop-shadow-xl">
              <WaveText text={slug as string} />
            </h3>
          ) : (
            <div className="text-white">
              <span className="capitalize text-4xl md:text-5xl text-white font-semibold font-sans drop-shadow-lg animate-pulse-slow">
                Get Started Today.
              </span>
              <h3 className="text-white font-bold font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 mb-3 leading-tight drop-shadow-xl">
                Help the Children When They Need
              </h3>
              <p className="mt-2 mb-6 sm:mb-10 text-white text-lg sm:text-xl md:text-2xl font-semibold font-sans drop-shadow-md max-w-3xl">
                With so much to consume and such little time, coming up with relevant title ideas is essential
              </p>
              <Button
                as="a"
                href={DONATION_URL}
                target="_blank"
                className="relative animate-donation-pulse overflow-hidden inline-block bg-white text-[#222222] py-[13px] px-[44px] text-lg font-semibold font-sans rounded-[5px] text-center capitalize transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                Make a Donation
                <div
                  className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-donation-shine"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
