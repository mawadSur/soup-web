'use client';

import type { HelpSection } from '@/types';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CARDS = [
  {
    id: 1,
    title: 'A RECIPE FOR RESILIENCE',
    image: '/food1.webp',
    alt: 'Served meals',
    description:
      "This isn't just a soup — it's a recipe for resilience, simmering on the stoves of Gaza, feeding bodies and souls alike. Each bowl serves not just sustenance but a steadfast vow: to fortify, to nourish, to endure.",
  },
  {
    id: 2,
    title: 'HANDS UNITED IN SERVICE',
    image: '/food2.webp',
    alt: 'Donation',
    description:
      'Amidst the steam of hearty soups, we find the warmth of shared hope. Every ladleful carries the spirit of community and the promise of sustenance for the children of Gaza.',
  },
  {
    id: 3,
    title: 'THE WARMTH OF SHARED HOPE',
    image: '/food3.webp',
    alt: 'Be a volunteer',
    description:
      'In the quiet corners of resilience, even the smallest hands come together to lift more than just a meal — they raise the foundation of tomorrow on the strength of solidarity.',
  },
  {
    id: 4,
    title: 'Nurturing Community',
    image: '/food4.webp',
    alt: 'Nurturing Community',
    description:
      'This is where hope simmers, where every serving is a pledge of solidarity. Here, we do not just feed the hungry, we nurture the soul of Gaza, one pot, one person, one community at a time.',
  },
];

export default function HelpSection() {
// { data }: { data: HelpSection }
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <section className="px-4 mx-auto max-w-7xl py-10 lg:py-24">
      <div className="flex items-center justify-center relative mb-14">
        <div className="relative inline-block">
          <div className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></div>
          <h2 className="text-[#191d34] text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-center z-10">
            How We Can Help
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CARDS.map((card) => (
          <div key={card.id} className="relative mb-20">
            <div className="mr-20 pb-20">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={400}
                  className="w-full h-72 sm:h-80 md:h-96 rounded-[9px] object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(card.image);
                    setIsModalOpen(true);
                  }}
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white rounded-[7px] shadow-md p-[33px] pl-[40px] pr-[40px] w-5/6 min-h-72 sm:min-h-80 md:min-h-96 flex flex-col">
              <h3 className="text-base sm:text-lg text-[#191d34] font-bold font-sans">{card.title}</h3>
              <p className="text-[#191d34] mt-2 text-sm sm:text-base flex-1 font-sans">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-full max-h-[80vh] p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage!}
              alt="Enlarged view"
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-6 right-6 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
