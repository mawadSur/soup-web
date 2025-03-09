'use client';
import { InstagramItem } from '@/types';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { VideoPlayer } from './video-player';

export default function InstagramInfiniteGallery({ posts }: { posts: InstagramItem[] }) {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {posts.map((item) => {
        const isVideo = item.media_type === 'VIDEO' || item.media_url?.includes('.mp4');
        const isPlaying = playingVideo === item.id;
        const isMuted = mutedVideos[item.id] ?? true;

        return (
          <div key={item.id} className="relative overflow-hidden rounded-lg w-full h-[400px]">
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
