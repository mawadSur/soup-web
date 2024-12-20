import { GallerySection } from '@/types';
import Image from 'next/image';

export default function Gallery({ data }: { data: GallerySection }) {
  const { heading, gallery } = data;
  return (
    <section className="py-10 sm:py-10 lg:pb-24 lg:pt-0">
      <div className="flex justify-center pb-10">
        <div className="text-center md:w-7/12">
          <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl">{heading}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gallery.map((item) => (
          <Image
            key={item.id}
            src={'/' + item.name}
            alt={item.alternativeText}
            width={item.width}
            height={item.height}
            className="w-full h-60 object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
