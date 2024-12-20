import type { BackgroundImage } from '@/types';
import Image from 'next/image';

export default function MerchSection({ data }: { data: BackgroundImage }) {
  const { image, href } = data.backgroundImage;

  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
      <a target="_blank" rel="noopener noreferrer" href={href} className="block w-full">
        <Image
          src={'/' + image.name}
          alt={image.alternativeText}
          layout="responsive"
          width={image.width}
          height={image.height}
          loading="lazy"
        />
      </a>
    </section>
  );
}
