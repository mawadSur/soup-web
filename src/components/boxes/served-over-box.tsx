import { CHILDRENSERVED } from '@/constant'; // Assuming this constant exists for the count
import { ServedOver } from '@/types';
import Counter from '../number-counter';

const ServedOverBox = ({ data }: { data: ServedOver }) => {
  return (
    <div className="relative p-8 md:px-6 md:py-6 bg-color1 text-black flex flex-col items-start justify-between gap-6 backdrop-blur-md w-full md:w-1/2 shadow-lg md:h-60 lg:h-56">
      <p className="font-normal md:text-lg lg:text-2xl">{data.heading}</p>
      <p className="text-6xl font-light">
        <Counter targetValue={+data.paragraph} />
      </p>
      <p className="font-light text-base lg:text-2xl">{data.paragraph2}</p>
    </div>
  );
};

export default ServedOverBox;
