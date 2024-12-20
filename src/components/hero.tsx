import { HeroSection } from '@/types';
import { ColumnLayout } from './column-layout';

export default function Hero({ data }: { data: HeroSection }) {
  const { hero } = data;

  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
      <ColumnLayout
        imageSrc={hero.image.name}
        imageAlt={hero.image.alternativeText}
        headline={hero.subHeading}
        paragraph={hero.paragraph}
        imageWidth={hero.image.width!}
        imageHeight={hero.image.height!}
        reverseOrder={hero.isReverse}
        ariaLabel={hero.button.label}
        href={hero.button.href}
        label={hero.button.label}
      />
    </section>
  );
}
