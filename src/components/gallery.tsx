import { GallerySection } from '@/types';
import Image from 'next/image';

export default function Gallery({ data }: { data: GallerySection }) {
  const { heading, gallery } = data;
  return (
    <section className="py-10 sm:py-10 lg:py-24">
      <h2 className="font-bold text-black pb-10 text-xl sm:text-2xl md:text-4xl text-center">{heading}</h2>
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
