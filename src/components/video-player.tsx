'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { IoMdPause, IoMdPlay, IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';

export const VideoPlayer = ({
  item,
  isPlaying,
  isMuted,
  onPlayPause,
  onToggleMute,
}: {
  item: any;
  isPlaying: boolean;
  isMuted: boolean;
  onPlayPause: () => void;
  onToggleMute: (e: React.MouseEvent) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlaying) {
      videoElement.play().catch((err) => {
        onPlayPause();
      });
    } else {
      videoElement.pause();
    }
  }, [isPlaying]);

  return (
    <div className="relative overflow-hidden rounded-lg w-full">
      <video
        ref={videoRef}
        src={item.media_url}
        className="w-full h-full object-cover"
        playsInline
        poster={item.thumbnail_url}
        onEnded={() => onPlayPause()}
        loop={false}
        muted={isMuted}
      />
      <div
        className={cn('absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer', {
          hidden: isPlaying,
        })}
        onClick={() => {
          onPlayPause();
        }}
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-80 shadow-lg">
          <IoMdPlay size={32} className="translate-x-0.5" />
        </div>
      </div>
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                onPlayPause();
              }}
              className="text-white p-2 rounded-full hover:bg-black/20"
            >
              <IoMdPause size={24} />
            </button>
            <button onClick={onToggleMute} className="text-white p-2 rounded-full hover:bg-black/20">
              {isMuted ? <IoMdVolumeOff size={24} /> : <IoMdVolumeHigh size={24} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
