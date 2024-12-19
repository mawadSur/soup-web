import { cn } from '@/lib/utils';
import { ColumnLayoutProps } from '@/types';
import Image from 'next/image';

export const ColumnLayout: React.FC<ColumnLayoutProps> = ({
  headline,
  paragraph,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  reverseOrder = false,
  className,
  href,
  ariaLabel,
  label,
}) => {
  return (
    <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
      <div className={cn(reverseOrder ? 'lg:order-2' : 'lg:order-1')}>
        <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl">{headline}</h2>
        <p className="mt-8 tracking-wide text-base text-black sm:text-xl font-normal">{paragraph}</p>

        {href && (
          <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
            <a
              target="_blank"
              href={href}
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className={`animate-buttonheartbeat rounded-md flex items-baseline justify-center gap-2 px-10 py-4 text-base font-semibold bg-[#B71C1C] text-white ${className}`}
            >
              {label}
            </a>
          </div>
        )}
      </div>
      <Image
        src={'/' + imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={cn('rounded-xl w-full object-cover', reverseOrder ? 'lg:order-1' : 'lg:order-2')}
        loading="lazy"
      />
    </div>
  );
};
