import { BoxButton } from '@/types';
import { Button } from '../button';

export const BoxesButton = ({ data }: { data: BoxButton }) => {
  return (
    <div className="relative p-8 md:px-6 md:py-6 bg-color2 text-black flex flex-col items-start justify-between gap-6 backdrop-blur-md w-full md:w-1/4 shadow-lg md:h-60 lg:h-56">
      <p className="font-normal md:text-lg lg:text-2xl">{data.heading}</p>
      <p className="text-base md:text-sm lg:normal font-light">{data.paragraph}</p>
      <Button
        as="a"
        target="_blank"
        href={data.donation.href}
        rel="noopener noreferrer"
        aria-label={data.donation.label}
        className="bg-white uppercase text-black border border-solid border-white px-3 py-2 shadow-lg rounded font-semibold md:text-xs lg:text-sm"
      >
        {data.donation.label}
      </Button>
    </div>
  );
};
