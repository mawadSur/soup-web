'use client';
import { DONATION_URL } from '@/constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from './button';
import WaveText from './wave-text';

export default function Hero() {
  const { slug } = useParams();

  return (
    <section className="relative min-h-[780px] flex items-center mt-24 sm:mt-30 md:mt-36 lg:mt-32">
      <Image
        src="/hero/hero.jpg"
        alt="Children in need"
        className="brightness-75 object-cover"
        fill
        priority
        sizes="100vw"
        quality={100}
      />
      {/* Full-screen white overlay */}
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className={cn({ 'text-center': slug })}>
          {slug ? (
            <h3 className="capitalize font-bold font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2 mb-3 tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,10)]">
              <WaveText text={slug as string} />
            </h3>
          ) : (
            <div>
              <p className="capitalize text-3xl md:text-4xl lg:text-5xl font-semibold font-sans tracking-wide text-white drop-shadow-[0_4px_8px_rgba(0,0,0,10)]">
                Through every hardship,
              </p>
              <h3 className="font-bold font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-3 mb-4 tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,10)]">
                Our pots keep boiling,
              </h3>
              <h3 className="font-bold font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-3 mb-4 tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,10)]">
                Our doors stay open,
              </h3>
              <p className="mt-3 mb-8 sm:mb-12 text-3xl md:text-4xl lg:text-5xl font-semibold font-sans max-w-3xl tracking-wide text-white drop-shadow-[0_4px_8px_rgba(0,0,0,10)]">
                and our meals bring hope to those who need it most.
              </p>
              <Button
                as="a"
                href={DONATION_URL}
                target="_blank"
                className="relative animate-donation-pulse overflow-hidden inline-block bg-white text-[#222222] py-[13px] px-[44px] text-lg font-semibold font-sans rounded-[5px] text-center capitalize transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                Donate
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
