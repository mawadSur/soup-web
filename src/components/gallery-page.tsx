import { getInstagramFeed } from '@/actions/instagram';
import InstagramInfiniteGallery from './instagram-infinite-gallery';

export const GalleryPage = async () => {
  const { posts } = await getInstagramFeed();

  return (
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <InstagramInfiniteGallery posts={posts} />
      </div>
    </section>
  );
};
