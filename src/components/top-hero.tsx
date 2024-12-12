'use client';
<<<<<<< Updated upstream
import Image from 'next/image';
import { Button } from './button';
import Counter from './number-counter';
import { CHILDRENSERVED, DONATION_URL } from '@/constant';

const TOP_HERO_BOXES = [
  {
    textStyle: 'text-6xl',
    bgColor: 'bg-color1',
    title: 'Served Over',
    body: <Counter targetValue={CHILDRENSERVED} />,
    footer: <p className="font-light text-base lg:text-2xl">Children in 190 countries in the world</p>,
    width: 'w-full md:w-1/2',
  },
  {
    textStyle: 'text-base md:text-sm',
    bgColor: 'bg-color2',
    title: 'Donation',
    body: 'Your donation provides essential meals to children in need.',
    footer: (
      <Button
        as="a"
        target="_blank"
        href={DONATION_URL}
        className="bg-white text-black border border-solid border-white px-3 py-2 shadow-lg rounded font-semibold md:text-xs lg:text-sm"
      >
        BUY A HOT MEAL
      </Button>
    ),
    width: 'w-full md:w-1/4',
  },
  {
    textStyle: 'text-base md:text-sm',
    bgColor: 'bg-color3',
    title: 'Be a Volunteer',
    body: 'Even the all-powerful Pointing has no control about the blind texts.',
    footer: (
      <Button
        as="a"
        target="_blank"
        href={DONATION_URL}
        className="bg-white text-black border border-solid border-white px-3 py-2 shadow-lg rounded font-semibold md:text-xs lg:text-sm"
      >
        BE A VOLUNTEER
      </Button>
    ),
    width: 'w-full md:w-1/4',
  },
];

export default function TopHero() {
  return (
    <section
      className="relative h-[18.75rem] md:h-[25rem] lg:h-[50rem]"
      style={{
        backgroundImage: "url('/gaza-kids.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="bg-black opacity-40 transition-all duration-300 absolute inset-0 z-10 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-lg sm:text-4xl lg:text-7xl font-extrabold text-center text-white">GAZA SOUP KITCHEN</h1>
      </div>
      <div className="absolute inset-0 flex flex-col items-center md:flex-row md:items-end justify-center mx-auto -bottom-[55rem] md:-bottom-28 z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        {TOP_HERO_BOXES.map((item, index) => (
          <div
            key={index}
            className={`relative p-8 md:px-6 md:py-6 ${item.bgColor} text-black flex flex-col items-start justify-between gap-6 backdrop-blur-md ${item.width} shadow-lg md:h-60 lg:h-56`}
          >
            <p className="font-light md:text-xl lg:text-2xl">{item.title}</p>
            <p className={`${item.textStyle} font-light`}>{item.body}</p>
            {item.footer}
          </div>
        ))}
      </div>
    </section>
=======
import BlurredBgComponent from './blurred-bg';
import { HeroBox } from './boxes';

export default function TopHero() {
  return (
    <BlurredBgComponent heroText="GAZA SOUP KITCHEN">
      <HeroBox />
    </BlurredBgComponent>
>>>>>>> Stashed changes
  );
}
