import React from 'react';
import backgroundVideo from "@/assets/background-video.mp4.asset.json";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 w-full h-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60"
      >
        <source src={backgroundVideo.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]/80" />
    </div>
  );
};

export default VideoBackground;
