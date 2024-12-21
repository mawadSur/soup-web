import { BLUR_DATA_URL } from '@/constant';
import type { GalleryMasonrySection } from '@/types';
import Image from 'next/image';

export default function GalleryMasonrySection({ data }: { data: GalleryMasonrySection }) {
  const { gallery } = data;

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
        {gallery.map((item) => (
          <div key={item.image.id} className="break-inside-avoid mb-4 relative group">
            <Image
              src={'/media/' + item.image.name}
              alt={item.image.alternativeText}
              width={item.image.width}
              height={item.image.height}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
