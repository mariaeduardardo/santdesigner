const Background = () => (
    <div aria-hidden="true" className="fixed inset-0 isolate pointer-events-none z-0 h-full min-h-[100dvh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-black" />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.42] md:opacity-[0.78]"
        style={{
          backgroundImage: 'url("/fundo.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
        }}
      />

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/85 to-black/55 md:via-black/55 md:to-black/5" />

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

    </div>
);

export default Background;