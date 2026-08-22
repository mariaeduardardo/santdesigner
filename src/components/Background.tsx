import React from 'react';
import backgroundAsset from "@/assets/background-texture.jpg.asset.json";

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 w-full h-full overflow-hidden bg-[#0a0a0a]">
      {/* Base texture */}
      <div 
        className="absolute inset-0 bg-graffiti opacity-60 mix-blend-overlay"
      />
      
      {/* Scratched texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen brightness-75 contrast-125"
        style={{ backgroundImage: `url(${backgroundAsset.url})` }}
      />

      {/* Graffiti elements (sprays) */}
      <div className="graffiti-spray bg-red-600 w-[500px] h-[500px] top-[-10%] left-[-5%] filter-none blur-2xl opacity-60" />
      <div className="graffiti-spray bg-white w-[400px] h-[400px] bottom-[10%] right-[-5%] filter-none blur-2xl opacity-30" />
      <div className="graffiti-spray bg-red-900 w-[600px] h-[600px] top-[40%] right-[10%] filter-none blur-3xl opacity-20" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};

export default Background;
