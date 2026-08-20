import React from 'react';
import backgroundAsset from "@/assets/background-texture.jpg.asset.json";

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 w-full h-full overflow-hidden bg-black">
      <div 
        className="w-full h-full bg-cover bg-center opacity-30 mix-blend-screen brightness-75 contrast-125"
        style={{ backgroundImage: `url(${backgroundAsset.url})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
    </div>
  );
};

export default Background;
