"use client"
import Image from 'next/image'
import { Button } from './button'
import Counter from './number-counter'

const TOP_HERO_BOXES = [
  {
    textStyle: "text-6xl",
    bgColor: "bg-color1",
    title: "Served Over",
    body: <Counter targetValue={1432805} />,
    footer: <p className="font-light text-base lg:text-2xl">Children in 190 countries in the world</p>,
    width: "w-full md:w-1/2",
  },
  {
    textStyle: "text-base md:text-sm",
    bgColor: "bg-color2",
    title: "Donation",
    body: "Even the all-powerful Pointing has no control about the blind texts.",
    footer: (
      <Button
        as="a"
        target="_blank"
        href="https://givebutter.com/gaza-soup-kitchen"
        className="bg-white text-black border border-solid border-white px-3 py-2 shadow-lg rounded font-semibold md:text-xs lg:text-sm"
      >
        BUY A HOT MEAL
      </Button>
    ),
    width: "w-full md:w-1/4",
  },
  {
    textStyle: "text-base md:text-sm",
    bgColor: "bg-color3",
    title: "Be a Volunteer",
    body: "Even the all-powerful Pointing has no control about the blind texts.",
    footer: (
      <Button
        as="a"
        target="_blank"
        href="https://givebutter.com/gaza-soup-kitchen"
        className="bg-white text-black border border-solid border-white px-3 py-2 shadow-lg rounded font-semibold md:text-xs lg:text-sm"
      >
        BE A VOLUNTEER
      </Button>
    ),
    width: "w-full md:w-1/4",
  },
];

export default function TopHero() {
  return (
    <section className='relative h-[18.75rem] md:h-[25rem] lg:h-[50rem]'>
      <Image
        src="/gaza-kids.webp"
        alt="Palestinian Children in Gaza: Humanitarian Crisis"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        quality={100}
        loading="eager"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative px-8 py-4 md:px-10 md:py-6 lg:px-14 lg:py-8 bg-black/5 backdrop-blur-md rounded-2xl">
          <h1 className="text-lg sm:text-4xl lg:text-7xl font-extrabold text-center text-white">
            GAZA SOUP KITCHEN
          </h1>
        </div>
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
  )
}
