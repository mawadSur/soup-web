'use client';
import { InstagramItem } from '@/types';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { VideoPlayer } from './video-player';

export default function InstagramInfiniteGallery({ posts }: { posts: InstagramItem[] }) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Record<string, boolean>>({});
  const [selectedItem, setSelectedItem] = useState<InstagramItem | null>(null);

  const handleVideoPlay = useCallback((id: string) => {
    setPlayingVideo((prev) => (prev === id ? null : id));
  }, []);

  const toggleMute = useCallback((id: string, e: React.MouseEvent) => {
    setMutedVideos((prev) => ({ ...prev, [id]: !(prev[id] ?? true) }));
  }, []);

  const openModal = useCallback(
    (item: InstagramItem) => {
      setSelectedItem(item);
      if (item.media_type === 'VIDEO' || item.media_url?.includes('.mp4')) {
        handleVideoPlay(item.id);
      }
    },
    [handleVideoPlay],
  );

  const closeModal = useCallback(() => {
    setPlayingVideo(null);
    setSelectedItem(null);
  }, []);

  const isVideo = useCallback(
    (item: InstagramItem) => item.media_type === 'VIDEO' || item.media_url?.includes('.mp4'),
    [],
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {posts.map((item, index) => {
          // Cycle through animations based on index
          let animationClass = '';
          if (index % 3 === 0) {
            animationClass = 'animate-in-from-left';
          } else if (index % 3 === 1) {
            animationClass = 'animate-in-from-middle';
          } else {
            animationClass = 'animate-in-from-right';
          }
          return (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg w-full h-[400px] cursor-pointer group ${animationClass}`}
              onClick={() => openModal(item)}
            >
              <Image
                src={isVideo(item) ? item.thumbnail_url || item.media_url : item.media_url}
                alt={item.id}
                fill
                className="object-cover transition duration-300 ease-in-out hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {isVideo(item) && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2">
                  <GoDeviceCameraVideo className="h-6 w-6 text-white" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(selectedItem) ? (
              <div className="w-full aspect-video">
                <VideoPlayer
                  item={selectedItem}
                  isPlaying={playingVideo === selectedItem.id}
                  isMuted={mutedVideos[selectedItem.id] ?? true}
                  onPlayPause={() => handleVideoPlay(selectedItem.id)}
                  onToggleMute={(e) => toggleMute(selectedItem.id, e)}
                />
              </div>
            ) : (
              <div className="relative w-full h-[90vh]">
                <Image
                  src={selectedItem.media_url}
                  alt={selectedItem.id}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
