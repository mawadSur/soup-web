import type { MediaSection } from '@/types';
import { CardHoverEffect } from './cards/card-hover-effect';

export default function MediaSection({ data }: { data: MediaSection }) {
  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10 sm:pb-10 lg:pb-24">
      <div className="flex flex-col md:flex-row gap-2">
        {data.medias.map((media) => (
          <CardHoverEffect key={media.id} media={media} />
        ))}
      </div>
    </section>
  );
}
