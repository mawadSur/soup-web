'use client';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { InstagramPost } from '@/types';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import { VideoPlayer } from './video-player';

export default function InstagramInfiniteGallery({ data }: { data: InstagramPost }) {
  const { loaderRef, posts, isPending } = useInfiniteScroll(data);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Record<string, boolean>>({});

  const handleVideoPlay = useCallback((id: string) => {
    setPlayingVideo((prev) => (prev === id ? null : id));
  }, []);

  const toggleMute = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedVideos((prev) => {
      const isMuted = prev[id] ?? true;
      const newMutedState = !isMuted;
      return { ...prev, [id]: newMutedState };
    });
  }, []);

  if (!posts?.length) {
    return (
      <div className="flex justify-center py-12">
        <FadeLoader width={2} height={8} margin={-12} loading={true} />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {posts.map((item, index) => {
          const isVideo = item.media_type === 'VIDEO' || item.media_url?.includes('.mp4');
          const isPlaying = playingVideo === item.id;
          const isMuted = mutedVideos[item.id] ?? true;

          return (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg w-full h-[400px]"
              ref={index === posts.length - 1 ? loaderRef : undefined}
            >
              {isVideo ? (
                <VideoPlayer
                  item={item}
                  isPlaying={isPlaying}
                  isMuted={isMuted}
                  onPlayPause={() => handleVideoPlay(item.id)}
                  onToggleMute={(e) => toggleMute(item.id, e)}
                />
              ) : (
                <Image
                  src={item.media_url}
                  alt={item.id}
                  fill
                  className="object-cover transition duration-300 ease-in-out hover:scale-110"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={item.placeholder}
                />
              )}
            </div>
          );
        })}
      </div>
      {isPending && (
        <div className="flex justify-center py-4">
          <FadeLoader width={2} height={8} margin={-12} loading={true} />
        </div>
      )}
    </>
  );
}
