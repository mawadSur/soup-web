import { BlurredBgComponent } from '@/components/blurred-bg';
import { ColumnLayout } from '@/components/column-layout';
import { BLUR_DATA_URL, GALLERIES_PAGE } from '@/constant';
import { SectionType } from '@/types';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <>
      <BlurredBgComponent
        data={{
          __component: SectionType.BLUR_BACKGROUND,
          id: 11,
          backgroundImage: {
            id: 64,
            label: 'ignite hope and nourish the future',
            href: '',
            image: {
              id: 9,
              documentId: 'ohl5jgxcc1ns0i3awg5s9tag',
              name: 'food.webp',
              alternativeText: 'food photo',
              width: 1599,
              height: 738,
            },
          },
        }}
      />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
          {GALLERIES_PAGE.map((image) => (
            <div key={image.src} className="break-inside-avoid mb-4 relative group">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          ))}
        </div>
        <ColumnLayout
          headline="URGENT CALL FOR SUPPORT: PALESTINIANS IN GAZA NEED YOUR HELP NOW"
          paragraph={'Your support fuels our mission. Every donation brings us closer to a hunger-free Gaza'}
          imageSrc="mission-1024x864.webp"
          imageAlt="kid in gaza"
          imageWidth={1599}
          imageHeight={738}
        />
      </div>
    </>
  );
}
