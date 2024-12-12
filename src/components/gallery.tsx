import { GALLERYS } from '@/constant'
import Image from 'next/image'
import React from 'react'

export default function Gallery() {
  return (
    <section className="py-10 sm:py-10 lg:pb-24 lg:pt-0">
      <div className="flex justify-center pb-10">
        <div className="text-center md:w-7/12">
          <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl">Our Gallery</h2>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {GALLERYS.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Gallery"
            width={200}
            height={200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-60 object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
