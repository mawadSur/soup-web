import { HeroSection } from '@/types';
import { ColumnLayout } from './column-layout';

export default function Hero({ data }: { data: HeroSection }) {
  const { hero } = data;
  return (
    <section className="py-8 md:pt-12 md:pb-0 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ColumnLayout
          imageSrc={hero.image.name}
          imageAlt={hero.image.alternativeText}
          headline={hero.subHeading}
          paragraph={hero.paragraph}
          imageWidth={hero.image.width!}
          imageHeight={hero.image.height!}
          reverseOrder={hero.isReverse}
        />
      </div>
    </section>
  );
}
