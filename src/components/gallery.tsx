'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const GALLERY = [
  {
    id: 1,
    name: 'image-1.jpg',
    alternativeText: 'Image description 1',
    width: 400,
    height: 300,
  },
  {
    id: 2,
    name: 'image-2.jpg',
    alternativeText: 'Image description 2',
    width: 400,
    height: 300,
  },
  {
    id: 3,
    name: 'image-3.jpg',
    alternativeText: 'Image description 3',
    width: 400,
    height: 300,
  },
  {
    id: 4,
    name: 'cause-4.webp',
    alternativeText: 'Image description 4',
    width: 400,
    height: 300,
  },
  {
    id: 5,
    name: 'cause-5.jpg',
    alternativeText: 'Image description 5',
    width: 400,
    height: 300,
  },
  {
    id: 6,
    name: 'cause-6.jpg',
    alternativeText: 'Image description 6',
    width: 400,
    height: 300,
  },
  {
    id: 7,
    name: 'cause-2.jpg',
    alternativeText: 'Image description 7',
    width: 400,
    height: 300,
  },
  {
    id: 8,
    name: 'cause-3.jpg',
    alternativeText: 'Image description 8',
    width: 400,
    height: 300,
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageName: string) => {
    setSelectedImage(imageName);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative mb-14">
          <div className="relative inline-block">
            <div className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></div>
            <h2 className="text-[#191d34] text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-center z-10">
              How We Can Help
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(item.name)}
            >
              <Image
                src={'/' + item.name}
                alt={item.alternativeText}
                width={item.width}
                height={item.height}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors shadow-lg z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={'/' + selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
