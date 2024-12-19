import { AboutSection } from '@/types';
import { ColumnLayout } from './column-layout';

export default function About({ data }: { data: AboutSection }) {
  const { about } = data;

  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="py-10 lg:pb-20 font-bold text-black text-xl sm:text-2xl md:text-4xl text-center">
          {about.heading}
        </h2>
        <ColumnLayout
          imageSrc={about.image.name}
          imageAlt={about.image.alternativeText}
          headline={about.subHeading}
          paragraph={about.paragraph}
          imageWidth={about.image.width!}
          imageHeight={about.image.height!}
          reverseOrder={about.isReverse}
        />
      </div>
    </section>
  );
}
