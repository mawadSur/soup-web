'use client';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { InstagramPost } from '@/types';
import Image from 'next/image';
import { FadeLoader } from 'react-spinners';

export default function InstagramInfiniteGallery({ data }: { data: InstagramPost }) {
  const { loaderRef, posts, isPending } = useInfiniteScroll(data);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 py-4">
        {posts.map((item: any) => (
          <div ref={loaderRef} key={item.id} className="break-inside-avoid relative group">
            <Image
              src={item.media_url}
              alt={item.id}
              width={1000}
              height={800}
              className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              placeholder="blur"
              blurDataURL={item.placeholder}
            />
          </div>
        ))}
      </div>
      {isPending && (
        <div className="flex flex-col items-center py-4">
          <FadeLoader width={2} height={8} margin={-12} loading={isPending} />
        </div>
      )}
    </>
  );
}
