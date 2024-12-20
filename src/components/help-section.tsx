import type { HelpSection } from '@/types';
import { MinimalCard } from './cards/minimal-card';
import { MinimalCardDescription } from './cards/minimal-card-description';
import { MinimalCardImage } from './cards/minimal-card-image';
import { MinimalCardTitle } from './cards/minimal-card-title';

export default function HelpSection({ data }: { data: HelpSection }) {
  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
      <h2 className="py-8 md:py-12 lg:pt-28 lg:pb-10 font-bold text-black text-xl sm:text-2xl md:text-4xl text-center">
        {data.heading}
      </h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.help.map((card) => (
          <MinimalCard key={card.id}>
            <MinimalCardImage src={card.image.name} alt={card.image.alternativeText} />
            <MinimalCardTitle>{card.heading}</MinimalCardTitle>
            <MinimalCardDescription>{card.paragraph}</MinimalCardDescription>
          </MinimalCard>
        ))}
      </div>
    </section>
  );
}
