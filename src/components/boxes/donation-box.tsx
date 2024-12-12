import { DONATION_URL } from '@/constant'; // Assuming this constant exists for the URL
import { Button } from '../button';

const DonationBox = () => {
  return (
    <div
      className="relative p-8 md:px-6 md:py-6 bg-color2 text-black flex flex-col items-start justify-between gap-6 backdrop-blur-md w-full md:w-1/4 shadow-lg md:h-60 lg:h-56"
    >
      <p className="font-normal md:text-lg lg:text-2xl">Donation</p>
      <p className="text-base md:text-sm lg:normal font-light">Your donation provides essential meals to children in need.</p>
      <Button
        as="a"
        target="_blank"
        href={DONATION_URL}
        className="bg-white text-black border border-solid border-white px-3 py-2 shadow-lg rounded font-semibold md:text-xs lg:text-sm"
      >
        BUY A HOT MEAL
      </Button>
    </div>
  );
};

export default DonationBox;