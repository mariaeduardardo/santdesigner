import React from 'react';

const VIDEO_SOURCES = [
  { src: "/background-video.webm", type: "video/webm" },
  { src: "/background-video.mp4", type: "video/mp4" },
] as const;

const Background = () => {
  const [availableVideoSources, setAvailableVideoSources] = React.useState<(typeof VIDEO_SOURCES)[number][]>([]);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let isActive = true;
    const detectVideoSources = async () => {
      const sources = await Promise.all(VIDEO_SOURCES.map(async (source) => {
        try {
          const response = await fetch(source.src, { method: "HEAD" });
          const contentType = response.headers.get("content-type")?.split(";")[0].toLowerCase();
          return response.ok && contentType === source.type ? source : null;
        } catch {
          return null;
        }
      }));

      if (isActive) {
        setAvailableVideoSources(sources.filter((source): source is (typeof VIDEO_SOURCES)[number] => source !== null));
      }
    };

    void detectVideoSources();
    return () => { isActive = false; };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 isolate pointer-events-none z-0 h-full min-h-[100dvh] w-full overflow-hidden bg-black">
      {/* Base preta sólida + textura de papel amassado escuro (imagem cobre tudo sem repetir) */}
      <div
        className={`background-drift absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[0.25] contrast-125 brightness-[0.55] ${availableVideoSources.length ? "opacity-20" : "opacity-50"}`}
        style={{
          backgroundImage: 'url("/optimized/videoframe_1582.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {availableVideoSources.length > 0 && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/optimized/videoframe_1582.webp"
          onError={() => setAvailableVideoSources([])}
          className="absolute inset-0 z-10 h-full w-full object-cover opacity-30 mix-blend-screen"
        >
          {availableVideoSources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      )}
      
      {/* Véu preto para unificar e deixar a textura sutil em todas as seções */}
      <div className="absolute inset-0 z-20 bg-black/55" />

      {/* Grão fino contínuo (tile sem emenda, sem falha de alinhamento) */}
      <div
        className="absolute inset-0 z-30 opacity-[0.10] mix-blend-screen"
        style={{
          backgroundRepeat: "repeat",
          backgroundSize: "240px 240px",
          backgroundPosition: "center center",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="fixed inset-0 z-[35] bg-grid opacity-[0.035]" />

      {/* Atmospheric glows bem sutis para não quebrar o preto sólido */}
      <div className="absolute top-[-10%] left-[-10%] z-20 h-[70vh] w-[70vw] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] z-20 h-[80vh] w-[80vw] rounded-full bg-red-900/15 blur-[150px]" />
      
      {/* Global Vignette */}
      <div className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
};

export default Background;