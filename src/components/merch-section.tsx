import type { BackgroundImage } from '@/types';
import Image from 'next/image';

export default function MerchSection({ data }: { data: BackgroundImage }) {
  const { image, href } = data.backgroundImage;

  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <a target="_blank" rel="noopener noreferrer" href={href} className="block w-full py-8 md:py-12 lg:pt-28 lg:pb-0">
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
