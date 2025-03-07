import { SectionTopHero } from '@/types';
import Link from 'next/link';

export default function Hero() {
// { data }: { data: SectionTopHero }
  return (
    <section className="h-[742px] mt-24 sm:mt-30 md:mt-36 lg:mt-32 relative">
      <div
        className="h-full w-full flex items-center bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: "url('/kids.webp')" }}
      >
        <div className="absolute inset-0 bg-[#3CC78F] opacity-50 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-9/12">
              <div className="slider_text text-white">
                <span className="capitalize text-4xl md:text-5xl text-white font-semibold font-sans drop-shadow-lg animate-pulse-slow">
                  Get Started Today.
                </span>
                <h3 className="text-white font-bold font-sans text-7xl md:text-8xl mt-2 mb-3 leading-none drop-shadow-xl">
                  Help the Children When They Need
                </h3>
                <p className="mt-2 mb-10 text-white text-xl md:text-2xl font-semibold font-sans drop-shadow-md">
                  With so much to consume and such little time, coming up
                  <br />
                  with relevant title ideas is essential
                </p>
                <Link
                  href="https://givebutter.com/gaza-soup-kitchen"
                  target="_blank"
                  className="inline-block bg-white text-[#222222] py-[13px] px-[44px] text-lg font-semibold font-sans rounded-[5px] text-center capitalize transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105 cursor-pointer"
                >
                  Make a Donation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
