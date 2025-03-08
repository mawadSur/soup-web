import { getInstagramFeed } from '@/actions/instagram';
import InstagramInfiniteGallery from './instagram-infinite-gallery';

export const GalleryPage = async () => {
  const data = await getInstagramFeed();

  return (
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <InstagramInfiniteGallery data={data} />
      </div>
    </section>
  );
};
