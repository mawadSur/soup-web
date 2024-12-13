import React from 'react';
import ServedOverBox from './served-over-box';
import DonationBox from './donation-box';
import VolunteerBox from './volunteer-box';

export const HeroBox = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center md:flex-row md:items-end justify-center mx-auto -bottom-[55rem] md:-bottom-28 z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <ServedOverBox />
      <DonationBox />
      <VolunteerBox />
    </div>
  );
};
