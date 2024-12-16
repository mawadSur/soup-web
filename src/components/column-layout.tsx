import { DONATION_URL } from '@/constant';
import Image from 'next/image';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ColumnLayoutProps } from '@/types';

export const ColumnLayout: React.FC<ColumnLayoutProps> = ({
  headline,
  paragraphs,
  imageSrc,
  imageAlt,
  imageWidth = 900,
  imageHeight = 800,
  mission = false,
  reverseOrder = false,
  className,
}) => {
  return (
    <div className={cn('max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 py-8 md:py-12 lg:py-28', className)}>
      <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
        <div className={cn(reverseOrder ? 'lg:order-2' : 'lg:order-1')}>
          <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl">{headline}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-8 tracking-wide text-base text-black sm:text-xl font-normal">
              {paragraph}
            </p>
          ))}
          {mission && (
            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Button
                as="a"
                target="_blank"
                href={DONATION_URL}
                rel="noopener noreferrer"
                aria-label="Donate to Gaza Soup Kitchen"
                className="animate-buttonheartbeat rounded-md flex items-baseline justify-center gap-2 px-10 py-4 text-base font-semibold bg-[#B71C1C] text-white"
              >
                DONATE NOW
              </Button>
            </div>
          )}
        </div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn('rounded-xl w-full object-cover', reverseOrder ? 'lg:order-1' : 'lg:order-2')}
          loading="lazy"
        />
      </div>
    </div>
  );
};
