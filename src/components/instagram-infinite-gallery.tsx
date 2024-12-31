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
          <div ref={loaderRef} key={item.id} className="relative overflow-hidden rounded-lg w-full h-[400px]">
            <Image
              src={item.media_url}
              alt={item.id}
              fill
              className="w-full object-cover transition duration-300 ease-in-out hover:scale-110"
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
