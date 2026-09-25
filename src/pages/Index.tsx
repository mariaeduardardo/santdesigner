import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Image as ImageIcon, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import StreetCursor from "@/components/StreetCursor";

const logoAsset = "/favicon.png";
const logoClassName = "h-10 w-10 shrink-0 object-contain md:h-11 md:w-11";
const optimizedImageUrl = (assetPath: string) => {
  const relativePath = assetPath.replace(/^\/+/, "").replace(/\.(?:jpe?g|png)$/i, ".webp");
  return `/optimized/${relativePath.split("/").map(encodeURIComponent).join("/")}`;
};
const galleryCardClassName = "group relative isolate aspect-[3/4] w-[43vw] min-w-[142px] max-w-[176px] shrink-0 snap-start overflow-hidden rounded-[2px] border border-white/15 bg-zinc-950 shadow-[0_12px_28px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 hover:scale-[1.03] hover:border-primary/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.65),0_0_24px_rgba(255,0,0,0.18)] motion-reduce:transition-none sm:w-[220px] sm:max-w-none lg:w-[240px]";
const galleryImageClassName = "h-full w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none";

const cards = [
  { url: "/uploads/TURMA_DO_BAIRRO.jpg", title: "Turma do Bairro" },
  { url: "/uploads/BOY_BOBO.jpg", title: "Boy Bobo" },
  { url: "/uploads/AI_QUE_LOUCURA_1.jpg", title: "Ai Que Loucura" },
  { url: "/uploads/ARQUIVO_DE_QUEBRADA.jpg", title: "Arquivo de Quebrada" },
  { url: "/uploads/CRIADO_NO_GHETO.jpg", title: "Criado no Gheto" },
  { url: "/uploads/PRETA.jpg", title: "Preta" },
  { url: "/uploads/FORMULA_DA_PAZ.jpg", title: "Fórmula da Paz" },
  { url: "/uploads/EU_VIM_PRA_VIVER_ISSO.jpg", title: "Eu Vim Pra Viver Isso" },
  { url: "/uploads/MENSAGEM_DE_MADRUGADA.jpg", title: "Mensagem de Madrugada" },
  { url: "/uploads/CAI_PRA_TRETA.jpg", title: "Cai Pra Treta" },
  { url: "/uploads/CAPA_FARMANDO_AURA.jpg", title: "Farmando Aura" },
  { url: "/uploads/ONDAS_SONORAS.jpg", title: "Ondas Sonoras" },
  { url: "/uploads/PELE_DE_LOBO.jpeg", title: "Pele de Lobo" },
  { url: "/uploads/Copia_de_CAPA_PAPARAZZI_1.jpg", title: "Capa Paparazzi" },
];

const normalizeAssetName = (assetPath: string) => {
  const fileName = assetPath.split("/").pop() ?? assetPath;

  return fileName
    .replace(/\.[^.]+$/, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
};

const allFlyers = [
  { file: "AQUECIMENTO DO DJ COZY.PNG", title: "Aquecimento do DJ Cozy" },
  { file: "BAGUNCINHA O CUPIDO FICOU LOUCO.PNG", title: "Baguncinha: O Cupido Ficou Louco" },
  { file: "BAGUNCINHA---UMA-FREQUÊNCIA-PROIBIDA.jpeg", title: "Baguncinha: Uma Frequência Proibida" },
  { file: "BAILE DA DJ MAY MARK.jpg", title: "Baile da DJ May Mark" },
  { file: "BAILE FUNK EXPERIENCE NA OZZ.jpg", title: "Baile Funk Experience na Ozz" },
  { file: "BATIDÃO DOS ORIGINAIS.PNG", title: "Batidão dos Originais" },
  { file: "CORRIDA DAS BLOGUEIRAS NA OZZ.jpg", title: "Corrida das Blogueiras na Ozz" },
  { file: "ENSAIOS-DA-OZZ.jpg", title: "Ensaios da Ozz" },
  { file: "ESQUENTA DE CARNAVAL.PNG", title: "Esquenta de Carnaval" },
  { file: "FUEGO DANCEHALL CENTRO.PNG", title: "Fuego Dancehall Centro" },
  { file: "FUEGO DANCEHALL ZONA SUL.PNG", title: "Fuego Dancehall Zona Sul" },
  { file: "FUEGO-SÃO-PAULO.jpg", title: "Fuego São Paulo" },
  { file: "NOITE DE EUPHORIA.jpg", title: "Noite de Euphoria" },
  { file: "NOITE DO FAROL.PNG", title: "Noite do Farol" },
  { file: "SEXTA GOLD.PNG", title: "Sexta Gold" },
  { file: "SEXTOU DA MADRINHA.jpg", title: "Sextou da Madrinha" },
  { file: "SUBMUNDO DZ7.PNG", title: "Submundo DZ7" },
  { file: "TROPA DA PALHAÇINHA.PNG", title: "Tropa da Palhacinha" },
];

const seenArtworkNames = new Set(cards.map(({ url }) => normalizeAssetName(url)));
const flyers = allFlyers.filter(({ file }) => {
  const normalizedName = normalizeAssetName(file);
  if (seenArtworkNames.has(normalizedName)) return false;

  seenArtworkNames.add(normalizedName);
  return true;
});

const allArtisticFlyers = [
  { file: "CENTRAL_CEE.jpg", title: "Central Cee" },
  { file: "DUQUESA-FINALIZADO.jpg", title: "Duquesa" },
  { file: "EVOM.jpg", title: "EVOM" },
  { file: "FILIPE-RET.jpg", title: "Filipe Ret" },
  { file: "FLYER-MC-KEVIN.jpg", title: "MC Kevin" },
  { file: "FLYER_VEIGH.jpg", title: "Veigh" },
  { file: "POSTÊR.jpg", title: "Pôster artístico" },
];

const artisticFlyers = allArtisticFlyers.filter(({ file }) => {
  const normalizedName = normalizeAssetName(file);
  if (seenArtworkNames.has(normalizedName)) return false;

  seenArtworkNames.add(normalizedName);
  return true;
});

const allIllustrations = [
  { file: "DONOSDARUA-ANJO.jpg", title: "Donos da Rua / Anjo" },
  { file: "DONOSDARUA-CASSIANO.jpg", title: "Donos da Rua / Cassiano" },
  { file: "DONOSDARUA-JIRAYA.jpg", title: "Donos da Rua / Jiraya" },
  { file: "DONOSDARUA-PEDRIN.jpg", title: "Donos da Rua / Pedrin" },
  { file: "EVVI.jpg", title: "EVVI" },
  { file: "GORDIN.jpg", title: "Gordin" },
  { file: "ILUSTRAÇÃO 7.jpg", title: "Ilustração 7" },
];

const illustrations = allIllustrations.filter(({ file }) => {
  const normalizedName = normalizeAssetName(file);
  if (seenArtworkNames.has(normalizedName)) return false;

  seenArtworkNames.add(normalizedName);
  return true;
});

const heroPillars = [
  { number: "01", title: "CAPAS & SINGLES", description: "Identidade visual única para lançamentos musicais e álbuns." },
  { number: "02", title: "FLYERS DE IMPACTO", description: "Comunicação visual para festas, shows e eventos da cena." },
  { number: "03", title: "DESIGN AUTORAL", description: "Conceito underground 100% exclusivo do rascunho à arte final." },
];

const HeroPillarCards = ({ className }: { className: string }) => (
  <div className={className}>
    {heroPillars.map((pillar) => (
      <div key={pillar.number} className="grid min-h-[82px] grid-cols-[34px_minmax(0,1fr)] items-start gap-3 border border-white/15 border-l-2 border-l-primary/80 bg-black/75 px-3 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.42)] backdrop-blur-md lg:min-h-[104px] lg:grid-cols-1 lg:gap-2 lg:px-3 lg:py-2.5">
        <span className="flex h-8 w-[34px] items-center justify-center border border-primary/40 bg-primary/10 text-sm leading-none text-primary lg:h-6 lg:w-full lg:justify-start lg:border-0 lg:bg-transparent" style={{ fontFamily: "Anton, sans-serif" }}>{pillar.number}</span>
        <div className="min-w-0">
          <h3 className="text-[14px] font-normal uppercase leading-tight text-white lg:text-[12px]" style={{ fontFamily: "Anton, sans-serif" }}>{pillar.title}</h3>
          <p className="mt-1 text-[10px] leading-snug text-white/65 lg:text-[9px]">{pillar.description}</p>
        </div>
      </div>
    ))}
  </div>
);

type CarouselNavigationProps = {
  onPrevious: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
};

const CarouselNavigation = ({ onPrevious, onNext, previousLabel, nextLabel }: CarouselNavigationProps) => (
  <div className="mt-2 flex items-center justify-end gap-2 border-t border-white/10 pt-3">
    <div aria-hidden="true" className="mr-auto h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
    <button type="button" onClick={onPrevious} aria-label={previousLabel} className="group flex h-11 w-11 items-center justify-center border border-white/15 bg-black/80 text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-white hover:shadow-[0_0_18px_rgba(255,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 md:h-10 md:w-10">
      <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
    </button>
    <button type="button" onClick={onNext} aria-label={nextLabel} className="group flex h-11 w-11 items-center justify-center border border-white/15 bg-black/80 text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-white hover:shadow-[0_0_18px_rgba(255,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 md:h-10 md:w-10">
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </button>
  </div>
);

const Index = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [heroDeckPhase, setHeroDeckPhase] = useState<"stacked" | "opening" | "open">("stacked");
  const [isCompactHero, setIsCompactHero] = useState(() => window.matchMedia("(max-width: 1023px)").matches);
  const flyerCarouselRef = useRef<HTMLDivElement>(null);
  const flyerDragRef = useRef<{ pointerId: number; startX: number; scrollLeft: number } | null>(null);
  const artisticCarouselRef = useRef<HTMLDivElement>(null);
  const artisticDragRef = useRef<{ pointerId: number; startX: number; scrollLeft: number } | null>(null);
  const illustrationCarouselRef = useRef<HTMLDivElement>(null);
  const illustrationDragRef = useRef<{ pointerId: number; startX: number; scrollLeft: number } | null>(null);

  useEffect(() => {
    const compactHeroQuery = window.matchMedia("(max-width: 1023px)");
    const updateCompactHero = () => setIsCompactHero(compactHeroQuery.matches);
    compactHeroQuery.addEventListener("change", updateCompactHero);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHeroDeckPhase("open");
      return () => compactHeroQuery.removeEventListener("change", updateCompactHero);
    }

    const openingFrame = window.requestAnimationFrame(() => setHeroDeckPhase("opening"));
    const finishTimer = window.setTimeout(() => setHeroDeckPhase("open"), 1100);

    return () => {
      window.cancelAnimationFrame(openingFrame);
      window.clearTimeout(finishTimer);
      compactHeroQuery.removeEventListener("change", updateCompactHero);
    };
  }, []);

  const scrollCarousel = (carousel: HTMLDivElement | null, cardSelector: string, direction: -1 | 1) => {
    if (!carousel) return;

    const cards = Array.from(carousel.querySelectorAll<HTMLElement>(cardSelector));
    if (cards.length === 0) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (direction === 1 && carousel.scrollLeft >= maxScroll - 1) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    const carouselLeft = carousel.getBoundingClientRect().left;
    const cardPositions = cards.map((card) => card.getBoundingClientRect().left - carouselLeft + carousel.scrollLeft);
    const activeIndex = cardPositions.reduce((nearestIndex, position, index) => (
      Math.abs(position - carousel.scrollLeft) < Math.abs(cardPositions[nearestIndex] - carousel.scrollLeft)
        ? index
        : nearestIndex
    ), 0);
    const targetIndex = (activeIndex + direction + cards.length) % cards.length;

    carousel.scrollTo({ left: cardPositions[targetIndex], behavior: "smooth" });
  };

  const scrollFlyers = (direction: -1 | 1) => {
    scrollCarousel(flyerCarouselRef.current, "[data-flyer-card]", direction);
  };

  const scrollArtisticFlyers = (direction: -1 | 1) => {
    scrollCarousel(artisticCarouselRef.current, "[data-artistic-flyer-card]", direction);
  };

  const scrollIllustrations = (direction: -1 | 1) => {
    scrollCarousel(illustrationCarouselRef.current, "[data-illustration-card]", direction);
  };

  return (
    <div className="min-h-screen w-full selection:bg-primary selection:text-white relative bg-transparent overflow-x-hidden antialiased">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      {/* Film Grain analógico sutil por cima de tudo */}
      <div aria-hidden="true" className="film-grain" />
      <StreetCursor />
      
      {/* Navigation */}
      <nav className="relative z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-3 px-3 md:px-6">
          <a href="#hero" className="flex min-w-0 items-center gap-2">
            <img src={logoAsset} alt="Mascote Sant Designer" className={logoClassName} />
            <span className="truncate text-[10px] font-black tracking-[0.18em] text-white">SANT DESIGNER</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] text-white/60">
            <a href="#servicos" className="hover:text-white transition-colors uppercase">Serviços</a>
            <a href="#servicos" className="hover:text-white transition-colors uppercase">Portfólio</a>
            <a href="#contact" className="hover:text-white transition-colors uppercase">Contato</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center h-8 px-4 bg-white text-black text-[11px] font-bold uppercase">
              Orçamento
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center md:hidden">
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 items-center justify-center bg-white px-3 text-[10px] font-bold text-black uppercase">WHATSAPP</a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative z-10 flex items-center overflow-x-hidden py-8 md:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1120px] px-4 md:px-6">
          <div className="mx-auto grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
            <div className="w-full max-w-[620px] flex-none text-left">
              <h1 className="text-[2.4rem] font-normal uppercase leading-[0.96] text-white sm:text-5xl md:text-[3rem] lg:text-[3.8rem]" style={{ fontFamily: 'Anton, sans-serif' }}>
                COMUNICAÇÃO <br />
                <span className="text-primary">VISUAL</span> PARA <br />
                EVENTOS E ARTISTAS
              </h1>

              <p className="mt-4 max-w-[32rem] text-sm leading-relaxed text-white/60 md:text-base">
                Do conceito à arte final, criamos identidades visuais marcantes.
              </p>

              <div className="mt-6 flex flex-col items-start justify-start gap-2 sm:flex-row sm:items-center">
                <a href="#contact" className="group inline-flex h-11 items-center justify-center gap-2 border border-primary bg-primary px-6 text-sm font-bold uppercase text-white shadow-[0_8px_24px_rgba(255,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_12px_30px_rgba(255,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Orçamento <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
              <HeroPillarCards className="mt-7 hidden w-full grid-cols-3 gap-3 lg:grid" />
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-[420px] md:mt-10 lg:mt-0 lg:max-w-[380px]">
              <div className="relative mx-auto aspect-[3/4] w-[72vw] max-w-[320px] lg:aspect-auto lg:h-[410px] lg:w-[340px]">
                <div className="relative h-full w-full">
                  {cards.map((asset, index) => {
                    const total = cards.length;
                    let offset = index - activeCardIndex;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;
                    const isActive = offset === 0;
                    const absOffset = Math.abs(offset);
                    const isVisibleCard = isCompactHero ? absOffset <= 1 : absOffset <= 2;
                    const fanRotation = 3.5;
                    const fanSpread = isCompactHero ? 7 : 5;
                    const fanDepth = isCompactHero ? 1.5 : 2;
                    const fanScaleStep = isCompactHero ? 0.08 : 0.045;
                    const fannedTransform = `rotate(${offset * fanRotation}deg) translateX(${offset * fanSpread}%) translateY(${absOffset * fanDepth}%) scale(${1 - absOffset * fanScaleStep})`;
                    return (
                      <div
                        key={index}
                        role="button"
                        tabIndex={isVisibleCard ? 0 : -1}
                        aria-hidden={!isVisibleCard}
                        aria-label={`Ver arte ${asset.title}`}
                        onClick={() => setActiveCardIndex(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveCardIndex(index);
                          }
                        }}
                        className="group absolute inset-0 h-full w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-[0_18px_44px_rgba(0,0,0,0.55)] cursor-pointer transition-[transform,filter,box-shadow,opacity] duration-700 ease-out hover:brightness-110 hover:shadow-[0_22px_50px_rgba(0,0,0,0.65),0_0_24px_rgba(255,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                        style={{
                          zIndex: 30 - absOffset,
                          opacity: isVisibleCard ? 1 : 0,
                          pointerEvents: isVisibleCard ? "auto" : "none",
                          transform: heroDeckPhase === "stacked" ? "rotate(0deg) translateX(0) translateY(0) scale(0.92)" : fannedTransform,
                          transformOrigin: 'bottom center',
                          transitionDelay: heroDeckPhase === "opening" ? `${Math.min(absOffset, 6) * 42}ms` : "0ms",
                          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      >
                        <img 
                          src={optimizedImageUrl(asset.url)}
                          alt={`Arte ${asset.title}`} 
                          loading={isVisibleCard ? "eager" : "lazy"}
                          fetchPriority={isActive ? "high" : "auto"}
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                        />
                        {!isActive && (
                          <div className="absolute inset-0 bg-black/40" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <HeroPillarCards className="mt-5 grid w-full grid-cols-1 gap-2 lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="servicos" className="relative bg-transparent py-8 md:py-12">
        <div className="mx-auto max-w-[880px] px-4 md:px-6">
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/20 pb-4">
            <div>
              <span className="border-l-2 border-primary pl-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Arquivo de rua / artes para a noite</span>
              <h3 className="mt-1 text-[2rem] font-black uppercase leading-[0.9] tracking-tighter text-white md:text-4xl" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                Flyers para eventos
              </h3>
            </div>
          </div>

          <div
            ref={flyerCarouselRef}
            className="flyer-carousel flex snap-x snap-proximity scroll-smooth touch-pan-x overscroll-x-contain gap-3 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing sm:gap-4"
            role="region"
            aria-label="Carrossel de flyers para eventos"
            tabIndex={0}
            onPointerDown={(event) => {
              if (event.pointerType !== "mouse" || event.button !== 0) return;
              flyerDragRef.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: event.currentTarget.scrollLeft };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const drag = flyerDragRef.current;
              if (!drag || drag.pointerId !== event.pointerId) return;
              event.currentTarget.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
            }}
            onPointerUp={(event) => {
              if (flyerDragRef.current?.pointerId !== event.pointerId) return;
              flyerDragRef.current = null;
              if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerCancel={() => { flyerDragRef.current = null; }}
          >
            {flyers.map((flyer) => (
              <figure key={flyer.file} data-flyer-card className={galleryCardClassName}>
                <img src={optimizedImageUrl(flyer.file)} alt={`Flyer ${flyer.title}`} draggable={false} loading="lazy" decoding="async" className={galleryImageClassName} />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 border border-white/10 shadow-[inset_0_0_28px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:border-primary/30" />
              </figure>
            ))}
          </div>
          <CarouselNavigation onPrevious={() => scrollFlyers(-1)} onNext={() => scrollFlyers(1)} previousLabel="Ver flyers anteriores" nextLabel="Ver próximos flyers" />
        </div>
      </section>

      {/* Artistic Flyers */}
      <section id="flyers-artisticos" className="relative bg-transparent py-8 md:py-12">
        <div className="mx-auto max-w-[880px] px-4 md:px-6">
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/20 pb-4">
            <div>
              <span className="border-l-2 border-primary pl-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Composições autorais / cultura urbana</span>
              <h3 className="mt-1 text-[2rem] font-black uppercase leading-[0.9] tracking-tighter text-white md:text-4xl" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                Flyers artísticos
              </h3>
            </div>
          </div>

          <div
            ref={artisticCarouselRef}
            className="flyer-carousel flex snap-x snap-proximity scroll-smooth touch-pan-x overscroll-x-contain gap-3 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing sm:gap-4"
            role="region"
            aria-label="Carrossel de flyers artísticos"
            tabIndex={0}
            onPointerDown={(event) => {
              if (event.pointerType !== "mouse" || event.button !== 0) return;
              artisticDragRef.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: event.currentTarget.scrollLeft };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const drag = artisticDragRef.current;
              if (!drag || drag.pointerId !== event.pointerId) return;
              event.currentTarget.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
            }}
            onPointerUp={(event) => {
              if (artisticDragRef.current?.pointerId !== event.pointerId) return;
              artisticDragRef.current = null;
              if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerCancel={() => { artisticDragRef.current = null; }}
          >
            {artisticFlyers.map((flyer) => (
              <figure key={flyer.file} data-artistic-flyer-card className={galleryCardClassName}>
                <img src={optimizedImageUrl(flyer.file)} alt={`Flyer artístico ${flyer.title}`} draggable={false} loading="lazy" decoding="async" className={galleryImageClassName} />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 border border-white/10 shadow-[inset_0_0_28px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:border-primary/30" />
              </figure>
            ))}
          </div>
          <CarouselNavigation onPrevious={() => scrollArtisticFlyers(-1)} onNext={() => scrollArtisticFlyers(1)} previousLabel="Ver flyers artísticos anteriores" nextLabel="Ver próximos flyers artísticos" />
        </div>
      </section>

      {/* Illustrations */}
      <section id="ilustracoes" className="relative bg-transparent py-8 md:py-12">
        <div className="mx-auto max-w-[880px] px-4 md:px-6">
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/20 pb-4">
            <div>
              <span className="border-l-2 border-primary pl-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Conceitos visuais / artes digitais</span>
              <h3 className="mt-1 text-[2rem] font-black uppercase leading-[0.9] tracking-tighter text-white md:text-4xl" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                Ilustrações
              </h3>
            </div>
          </div>

          <div
            ref={illustrationCarouselRef}
            className="flyer-carousel flex snap-x snap-proximity scroll-smooth touch-pan-x overscroll-x-contain gap-3 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing sm:gap-4"
            role="region"
            aria-label="Carrossel de ilustrações"
            tabIndex={0}
            onPointerDown={(event) => {
              if (event.pointerType !== "mouse" || event.button !== 0) return;
              illustrationDragRef.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: event.currentTarget.scrollLeft };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const drag = illustrationDragRef.current;
              if (!drag || drag.pointerId !== event.pointerId) return;
              event.currentTarget.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
            }}
            onPointerUp={(event) => {
              if (illustrationDragRef.current?.pointerId !== event.pointerId) return;
              illustrationDragRef.current = null;
              if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerCancel={() => { illustrationDragRef.current = null; }}
          >
            {illustrations.map((illustration) => (
              <figure key={illustration.file} data-illustration-card className={galleryCardClassName}>
                <img src={optimizedImageUrl(illustration.file)} alt={`Ilustração ${illustration.title}`} draggable={false} loading="lazy" decoding="async" className={galleryImageClassName} />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 border border-white/10 shadow-[inset_0_0_28px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:border-primary/30" />
              </figure>
            ))}
          </div>
          <CarouselNavigation onPrevious={() => scrollIllustrations(-1)} onNext={() => scrollIllustrations(1)} previousLabel="Ver ilustrações anteriores" nextLabel="Ver próximas ilustrações" />
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-12 bg-transparent">
        <div className="mx-auto max-w-[880px] px-4 md:px-6 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Vamos conversar?</h2>
            <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-white italic uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              SEU PRÓXIMO <br />
              <span className="text-primary">PROJETO AQUI</span>
            </h3>
          </div>
          
          <div className="flex items-center justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 text-sm">
              FALAR NO WHATSAPP <MessageCircle className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-row items-center justify-center gap-5 sm:gap-12 pt-10 md:pt-16">
            <a href="#" className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <ImageIcon className="w-4 h-4" /> Behance
            </a>
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          
          <div className="pt-12 md:pt-20">
            <div className="mx-auto mb-8 h-16 w-16 transition-transform hover:scale-110">
              <img src={logoAsset} alt="Mascote Sant Designer" className="h-full w-full object-contain" />
            </div>
            <p className="text-[10px] text-white/20 font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase px-4">
              © 2026 SANT DESIGNER. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;