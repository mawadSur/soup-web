import type { MediaSection } from '@/types';
import { CardHoverEffect } from './cards/card-hover-effect';

export default function MediaSection({ data }: { data: MediaSection }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 py-10 lg:py-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {data.medias.map((media) => (
        <CardHoverEffect key={media.id} media={media} />
      ))}
    </div>
  );
}
