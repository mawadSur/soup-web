import { BackgroundImage } from '@/types';
import Image from 'next/image';
import React from 'react';

export const BlurredBgComponent = ({ data }: { data: BackgroundImage }) => {
  return (
    <section className="relative h-[18.75rem] md:h-[25rem] lg:h-[30rem] overflow-hidden">
      <Image
        src={'/' + data.backgroundImage.image.name}
        alt={data.backgroundImage.image.alternativeText}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="bg-black opacity-60 transition-all duration-300 absolute inset-0 z-10 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-lg sm:text-4xl lg:text-7xl font-extrabold text-center uppercase text-white drop-shadow-lg">
          {data.backgroundImage.label}
        </h1>
      </div>
    </section>
  );
};
