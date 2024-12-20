import type { GazaSupportSection } from '@/types';
import { ColumnLayout } from './column-layout';

export default function GazaSupportSection({ data }: { data: GazaSupportSection }) {
  const { gazaSupport } = data;

  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 lg:py-20">
      <ColumnLayout
        imageSrc={gazaSupport.image.name}
        imageAlt={gazaSupport.image.alternativeText}
        headline={gazaSupport.subHeading}
        paragraph={gazaSupport.paragraph}
        imageWidth={gazaSupport.image.width!}
        imageHeight={gazaSupport.image.height!}
        reverseOrder={gazaSupport.isReverse}
        label={gazaSupport.button.label}
        href={gazaSupport.button.href}
        ariaLabel={gazaSupport.button.label}
      />
    </section>
  );
}
