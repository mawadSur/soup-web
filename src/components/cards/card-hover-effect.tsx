import { LogoLink } from '@/types';
import Image from 'next/image';

export function CardHoverEffect({ media }: { media: LogoLink }) {
  return (
    <div className="w-full group/card">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={media.href}
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-between p-4"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={'/' + media.image.name}
            alt={media.image.alternativeText}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/20 opacity-60"></div>
      </a>
    </div>
  );
}
