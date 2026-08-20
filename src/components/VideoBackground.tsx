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
        preload="auto"
        className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
        poster="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=20&w=20&auto=format&fit=crop"
      >
        <source src={backgroundVideo.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />
    </div>
  );
};

export default VideoBackground;
