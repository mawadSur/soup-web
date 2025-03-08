import Image from 'next/image';
import { Button } from './button';

type ColumnLayoutProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imagePosition: 'left' | 'right';
};

export function ColumnLayout({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition,
}: ColumnLayoutProps) {
  return (
    <section className="bg-[rgba(60,199,143,0.06)] relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
      <div
        className={`absolute top-0 ${
          imagePosition === 'left' ? 'left-0' : 'right-0'
        } w-full sm:w-2/5 h-1/2 sm:h-full flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-[#3CC78F] opacity-30"></div>
        <Image src={imageSrc} alt={imageAlt} width={640} height={360} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`flex ${imagePosition === 'left' ? 'justify-end' : 'justify-start'} pt-72 sm:pt-60 pb-16 sm:pb-56`}
        >
          <div className="w-full max-w-xl">
            <div className="bg-white/80 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
              <h2 className="relative inline-block text-[#191d34] text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-normal z-10">
                <span className="absolute left-0 bottom-0 bg-[#3CC78F] h-3 w-full opacity-50 z-[-1]"></span>
                {title}
              </h2>
              <p className="text-gray-800 mt-4 sm:mt-5 mb-4 sm:mb-5 text-sm sm:text-base md:text-xl md:font-bold lg:font-normal font-sans leading-6 sm:leading-7 md:leading-8">
                {description}
              </p>
              <Button
                as="a"
                href={buttonLink}
                target={buttonLink !== '/about' ? '_blank' : undefined}
                className="inline-block bg-[#2A8C61] text-white py-2 sm:py-[13px] px-6 sm:px-[44px] text-base sm:text-lg font-semibold font-sans rounded-[5px] text-center capitalize transition-all duration-300 hover:bg-white hover:text-[#333333] hover:shadow-lg cursor-pointer"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
