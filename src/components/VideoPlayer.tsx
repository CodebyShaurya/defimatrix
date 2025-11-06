// components/AutoPlayVideo.tsx
import React from 'react';

interface AutoPlayVideoProps {
  src: string; // URL of the video to play
  type?: string; // MIME type of the video, defaulting to 'video/mp4'
  muted?: boolean; // Indicates if the video should be muted, default to true
  loop?: boolean; // Indicates if the video should loop, default to true
  controls?: boolean; // Indicates if video controls should be shown, default to false
}

const VideoPlayer: React.FC<AutoPlayVideoProps> = ({
  src,
  muted = true,
  loop = true,
  controls = false,
}) => {
  return (
    <video
      src={src}
      muted={muted}
      loop={loop}
      controls={controls}
      autoPlay
      playsInline // This attribute is important for autoplay on mobile devices
      style={{ width: '100%', height: 'auto' }} // Example styling; adjust as needed
    />
  );
};

export default VideoPlayer;
