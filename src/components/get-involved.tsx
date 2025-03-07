import { GetInvolvedSection } from '@/types';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import Counter from './number-counter';

const CARDS = [
  {
    id: 1,
    title: 'Served Meals',
    image: '/help/2.png',
    alt: 'Served meals',
    number: '500000',
    description: 'Children in 190 countries in the world',
  },
  {
    id: 2,
    title: 'Donation',
    image: '/help/1.png',
    alt: 'Donation',
    description: 'Your donation provides essential meals to children in need.',
  },
  {
    id: 3,
    title: 'Be a volunteer',
    image: '/help/3.png',
    alt: 'Be a volunteer',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
];

export default function GetInvolved() {
  return (
    <section className="px-4 mx-auto max-w-7xl py-10 lg:py-24">
      <div className="flex items-center justify-center relative mb-14">
        <div className="relative inline-block">
          <div className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></div>
          <h2 className="text-[#191d34] text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-center z-10">
            Our Help and Services
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARDS.map((card) => (
          <div key={card.id} className="relative mb-20">
            <div className="mr-20 pb-20">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-[9px] transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white rounded-[7px] shadow-md p-[33px] pl-[40px] pr-[40px] w-5/6 min-h-60 flex flex-col">
              <h3 className="text-[#191d34] text-base sm:text-lg font-bold font-sans">{card.title}</h3>
              <p className="text-[#191d34] mt-2 text-sm sm:text-base flex-1 font-sans">
                {card.number ? (
                  <span className="flex flex-col items-start gap-2">
                    <Counter
                      targetValue={+card?.number}
                      className="text-2xl sm:text-3xl text-[#191d34] font-medium font-sans"
                    />
                    <span className="text-sm sm:text-base text-[#191d34] font-normal font-sans">
                      {card.description}
                    </span>
                  </span>
                ) : (
                  card.description
                )}
              </p>
              <div className="group cursor-pointer mt-4">
                <Link
                  href="https://givebutter.com/gaza-soup-kitchen"
                  target="_blank"
                  className="text-[#191d34] text-base sm:text-lg font-bold font-sans relative inline-block pl-[68px] hover:text-[#2A8C61] transition-colors duration-300 ease-in-out"
                >
                  <span className="absolute left-0 top-1/2 w-[36px] h-[2px] bg-[#707070] group-hover:bg-[#2A8C61] group-hover:w-[50px] transition-all duration-300 ease-in-out transform -translate-y-1/2"></span>
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
