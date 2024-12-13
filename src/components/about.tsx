import { ABOUT, DONATION_URL, MEDIAS } from '@/constant';
import Image from 'next/image';
import { Button } from './button';
import { CardHoverEffect } from './card-hover-effect';

export default function About() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className='pb-5 lg:pb-20 font-bold text-black text-xl sm:text-2xl md:text-4xl text-center'>About US</h2>
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
          <Image
            src="/MAHMOUD-ALMADHOUN.webp"
            alt="MAHMOUD-ALMADHOUN"
            width={800}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-xl object-cover"
            loading="eager"
          />
          <div>
            <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl">MAHMOUD ALMADHOUN</h2>
            {ABOUT.map((item) => (
              <p key={item} className="mt-8 tracking-wide text-base text-black sm:text-xl font-normal">
                {item}
              </p>
            ))}
            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Button
                as="a"
                target="_blank"
                href={DONATION_URL}
                rel="noopener noreferrer"
                aria-label="Donate to Gaza Soup Kitchen (opens in new tab)"
                className="animate-buttonheartbeat rounded-md flex items-baseline justify-center gap-2 px-10 py-4 text-base font-semibold bg-[#B71C1C] text-white"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 py-5 lg:py-20'>
          {MEDIAS.map((item) => (
            <CardHoverEffect key={item.image} image={item.image} url={item.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
