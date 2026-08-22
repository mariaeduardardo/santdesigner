import React from 'react';
import backgroundAsset from "@/assets/site-background.jpg.asset.json";

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 w-full h-full overflow-hidden bg-black">
      {/* Base texture from uploaded image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen grayscale-[0.2] contrast-125 brightness-75"
        style={{ backgroundImage: `url(${backgroundAsset.url})` }}
      />
      
      {/* Atmospheric glows */}
      <div className="absolute inset-0 bg-textured opacity-40" />

      {/* Fluid red elements - deep reds and blacks */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vh] bg-red-950/20 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vh] bg-red-900/10 blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
      
      {/* Global Vignette for immersive transition */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_100%)]" />
    </div>
  );
};

export default Background;