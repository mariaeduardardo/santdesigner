import React from 'react';
import backgroundAsset from "@/assets/site-background.jpg.asset.json";

const Background = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-20 w-full h-full min-h-[100dvh] overflow-hidden bg-black">
      {/* Base preta sólida + textura de papel amassado escuro (imagem cobre tudo sem repetir) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 grayscale-[0.25] contrast-125 brightness-[0.55]"
        style={{
          backgroundImage: `url(${backgroundAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Véu preto para unificar e deixar a textura sutil em todas as seções */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Grão fino contínuo (tile sem emenda, sem falha de alinhamento) */}
      <div
        className="absolute inset-0 opacity-[0.10] mix-blend-screen"
        style={{
          backgroundRepeat: "repeat",
          backgroundSize: "240px 240px",
          backgroundPosition: "center center",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Atmospheric glows bem sutis para não quebrar o preto sólido */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vh] bg-red-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vh] bg-red-900/15 blur-[150px] rounded-full" />
      
      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
};

export default Background;