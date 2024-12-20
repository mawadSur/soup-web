'use client';
import { SectionTopHero } from '@/types';
import Image from 'next/image';
import { BoxesButton } from './boxes';
import ServedOverBox from './boxes/served-over-box';

export default function TopHero({ data }: { data: SectionTopHero }) {
  return (
    <section className="relative h-[18.75rem] md:h-[25rem] lg:h-[50rem] mb-[40rem] md:mb-40">
      <Image
        src={'/' + data.image.name}
        alt={data.image.alternativeText}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        loading="lazy"
      />
      <div className="bg-black opacity-40 transition-all duration-300 absolute inset-0 z-10 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-lg uppercase sm:text-4xl lg:text-7xl font-extrabold text-center text-white">
          {data.heading}
        </h1>
      </div>
      <div className="absolute inset-0 flex flex-col items-center md:flex-row md:items-end justify-center mx-auto -bottom-[55rem] md:-bottom-28 z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServedOverBox data={data.servedOver} />
        {data.boxesButton.map((box) => (
          <BoxesButton key={box.id} data={box} />
        ))}
      </div>
    </section>
  );
}
