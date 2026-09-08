import { useState, useRef } from "react";
import { ArrowRight, Layout, Image as ImageIcon, Video, Instagram, Send, MessageCircle, Menu, X, ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Background from "@/components/Background";
import logoAsset from "@/assets/LOGO-SANT.png.asset.json";
import turmaAsset from "@/assets/turma-do-bairro.jpg.asset.json";
import boyAsset from "@/assets/boy-bobo.jpg.asset.json";
import loucuraAsset from "@/assets/ai-que-loucura.jpg.asset.json";
import quebradaAsset from "@/assets/arquivo-de-quebrada.jpg.asset.json";
import ghetoAsset from "@/assets/criado-no-gheto.jpg.asset.json";
import pretaAsset from "@/assets/preta.jpg.asset.json";
import pazAsset from "@/assets/formula-da-paz.jpg.asset.json";

const cards = [
  turmaAsset,
  boyAsset,
  loucuraAsset,
  quebradaAsset,
  ghetoAsset,
  pretaAsset,
  pazAsset,
  { url: "/uploads/EU_VIM_PRA_VIVER_ISSO.jpg" },
  { url: "/uploads/MENSAGEM_DE_MADRUGADA.jpg" },
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const nextCard = () => setActiveCardIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setActiveCardIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const startDrag = (x: number) => {
    dragStartX.current = x;
    isDragging.current = true;
  };

  const moveDrag = (x: number) => {
    if (dragStartX.current === null || !isDragging.current) return;
    // Clamp drag feedback so cards never travel too far
    setDragDelta(Math.max(-120, Math.min(120, x - dragStartX.current)));
  };

  const endDrag = (x: number) => {
    if (dragStartX.current === null) return;
    const delta = x - dragStartX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? nextCard() : prevCard();
    }
    dragStartX.current = null;
    isDragging.current = false;
    setDragDelta(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => startDrag(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => moveDrag(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => endDrag(e.changedTouches[0].clientX);
  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => moveDrag(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => endDrag(e.clientX);
  const handleMouseLeave = () => {
    if (isDragging.current && dragStartX.current !== null) {
      dragStartX.current = null;
      isDragging.current = false;
      setDragDelta(0);
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative bg-[#070707] overflow-x-hidden antialiased">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Background */}
      <Background />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid opacity-[0.03]" />
      
      {/* Navigation — premium glass */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 h-[64px] md:h-[72px] flex items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-3 group">
            <img src={logoAsset.url} alt="Sant Designer Logo" className="w-10 h-10 md:w-11 md:h-11 object-contain shrink-0" />
            <span className="hidden sm:block text-[11px] font-black tracking-[0.28em] text-white/90 group-hover:text-white transition-colors">SANT DESIGNER</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] font-bold tracking-[0.22em] text-white/60">
            <a href="#servicos" className="hover:text-white transition-colors uppercase">Serviços</a>
            <a href="#servicos" className="hover:text-white transition-colors uppercase">Portfólio</a>
            <a href="#servicos" className="hover:text-white transition-colors uppercase">Processo</a>
            <a href="#contact" className="hover:text-white transition-colors uppercase">Contato</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center h-9 px-6 rounded-full bg-white text-black text-[11px] font-black tracking-[0.14em] uppercase hover:bg-white/90 transition-colors">
              Orçamento
            </a>
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.14em]">WHATSAPP</a>
            <button 
              className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center z-[60] relative backdrop-blur"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-[55] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col px-6 pt-24 pb-10 h-full">
            <div className="flex flex-col gap-2 text-[2.6rem] leading-none font-black tracking-tighter uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif' }}>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="py-3 text-white hover:text-primary transition-colors border-b border-white/10">Serviços</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="py-3 text-white hover:text-primary transition-colors border-b border-white/10">Portfólio</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-3 text-white hover:text-primary transition-colors border-b border-white/10">Contato</a>
            </div>
            <div className="mt-auto space-y-4">
              <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-[56px] rounded-full bg-primary text-white font-black tracking-[0.14em] text-sm">
                FALAR NO WHATSAPP <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[10px] tracking-[0.2em] text-white/30 uppercase">© 2026 Sant Designer — São Paulo, Brasil</p>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section — enterprise */}
      <section id="hero" className="relative flex items-center pt-28 md:pt-36 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-[22%] -left-24 w-[520px] h-[520px] bg-white/[0.02] blur-[80px] rounded-full" />
        </div>
        
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-10">
            <div className="w-full lg:flex-1 max-w-[720px] mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur px-3.5 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.18em] text-white/80 uppercase">Agenda aberta • Resposta em até 2h</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-black tracking-[0.14em] text-white/50">• <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.9/5</span>
              </div>

              <h1 className="font-black tracking-tighter uppercase text-white leading-[0.86] text-[2.9rem] sm:text-[3.4rem] md:text-[4.6rem] lg:text-[5.2rem] xl:text-[5.8rem]" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                comunicação <br />
                <span className="text-primary text-glow italic relative inline-block pr-2">
                  visual
                </span> PARA <br />
                <span className="text-white/90">eventos e artistas</span>
              </h1>

              <p className="mt-5 md:mt-6 text-[15.5px] md:text-[17px] leading-[1.65] text-white/70 max-w-[560px] mx-auto lg:mx-0 font-medium">
                Do conceito à arte final, criamos identidades visuais marcantes e ilustrações autorais que transformam sua música e seus eventos em referência — com prazo, organização e acabamento de estúdio grande.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 h-[56px] md:h-[52px] px-8 rounded-full bg-primary text-white font-black tracking-[0.14em] text-[13px] uppercase shadow-[0_12px_40px_rgba(255,0,0,0.35)] hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Solicitar orçamento <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#servicos" className="inline-flex items-center justify-center h-[56px] md:h-[52px] px-8 rounded-full bg-white text-black font-black tracking-[0.14em] text-[13px] uppercase hover:bg-white/90 transition-colors">
                  Ver portfólio
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] font-bold tracking-[0.12em] text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Entrega com revisão</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-2"><Sparkles className="w-4 h-4 text-amber-300" /> Artes que convertem</span>
                <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-2">500+ projetos</span>
              </div>

              <div className="mt-8 hidden md:flex items-center gap-4 justify-start">
                <div className="flex -space-x-2">
                  <img src={turmaAsset.url} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-black" />
                  <img src={boyAsset.url} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-black" />
                  <img src={loucuraAsset.url} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-black" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400"><Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" /><Star className="w-3.5 h-3.5 fill-amber-400" /><span className="ml-1 text-white text-xs font-black">4.9</span></div>
                  <p className="text-[11px] tracking-[0.12em] text-white/50 uppercase font-bold">Clientes satisfeitos em todo o Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:flex-1 relative flex justify-center lg:justify-end max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] mx-auto lg:mx-0 shrink-0">
              <div className="relative w-full aspect-[4/5.1] flex items-center justify-center">
                {/* hint mobile */}
                <div className="md:hidden absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3 py-1 text-[10px] font-black tracking-[0.14em] shadow-lg">
                  <Sparkles className="w-3 h-3" /> ARRASTE PARA O LADO
                </div>
                {/* Setas — só desktop premium */}
                <button
                  onClick={prevCard}
                  aria-label="Carta anterior"
                  className="hidden md:flex absolute -left-3 lg:-left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-black/5 items-center justify-center hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextCard}
                  aria-label="Próxima carta"
                  className="hidden md:flex absolute -right-3 lg:-right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-black/5 items-center justify-center hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div 
                  className="relative w-4/5 h-full select-none touch-pan-y overflow-visible cursor-grab active:cursor-grabbing"
                  style={{ clipPath: 'inset(-20% -60% -20% -60%)' }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                >
                  {cards.map((asset, index) => {
                    const total = cards.length;
                    // Circular offset from active card: negative = behind-left, positive = behind-right
                    let offset = index - activeCardIndex;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;
                    const isActive = offset === 0;
                    const absOffset = Math.abs(offset);
                    // Drag feedback: active card follows finger, others shift slightly
                    const dragX = isActive ? dragDelta * 0.6 : dragDelta * 0.15;
                    const dragRot = isActive ? dragDelta * 0.05 : 0;
                    return (
                      <div 
                        key={index} 
                        onClick={() => !isActive && setActiveCardIndex(index)}
                        className={`absolute inset-0 w-full h-full rounded-2xl shadow-2xl bg-zinc-900 overflow-hidden cursor-pointer ease-out animate-float ${isDragging.current && dragDelta !== 0 ? 'transition-none' : 'transition-all duration-700'}`}
                        style={{
                          zIndex: 30 - absOffset,
                          transform: `rotate(${offset * 7 + dragRot}deg) translateX(calc(${offset * 18}% + ${dragX}px)) translateY(${absOffset * 3}%) scale(${1 - absOffset * 0.06})`,
                          transformOrigin: 'bottom center',
                          animationDelay: `${index * 0.4}s`,
                          animationDuration: '5s',
                        }}
                      >
                        <img 
                          src={asset.url} 
                          alt={`Art ${index + 1}`} 
                          className="w-full h-full object-cover pointer-events-none"
                          draggable={false}
                        />
                        {!isActive && (
                          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-colors" />
                        )}
                      </div>
                    );
                  })}

                  {/* Position indicators — premium */}
                  <div className="absolute -bottom-9 md:-bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-2 z-40">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCardIndex(index)}
                        aria-label={`Ir para carta ${index + 1}`}
                        className={`rounded-full transition-all duration-500 ${index === activeCardIndex ? 'w-6 md:w-7 h-1.5 bg-primary shadow-[0_0_14px_rgba(255,0,0,0.65)]' : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/70'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] bg-primary/[0.07] rounded-full blur-[70px] -z-10" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase">
                <span className="w-6 h-px bg-white/15" /> {String(activeCardIndex + 1).padStart(2,'0')} / {String(cards.length).padStart(2,'0')} <span className="w-6 h-px bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar — enterprise social proof */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] backdrop-blur">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="text-[11px] font-black tracking-[0.22em] text-white/35 uppercase text-center md:text-left">Confiado por artistas e produtores em todo o Brasil</p>
          <div className="flex items-center gap-6 md:gap-10 text-white/70">
            <span className="text-xs md:text-sm font-black tracking-tighter uppercase">500+ PROJETOS</span>
            <span className="w-px h-4 bg-white/10" />
            <span className="text-xs md:text-sm font-black tracking-tighter uppercase flex items-center gap-1.5"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9/5</span>
            <span className="w-px h-4 bg-white/10 hidden sm:block" />
            <span className="hidden sm:inline text-xs md:text-sm font-black tracking-tighter uppercase">ENTREGA RÁPIDA</span>
          </div>
        </div>
      </section>

      {/* Expertise — premium bento */}
      <section id="servicos" className="py-10 md:py-24 relative">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mx-auto lg:mx-0">
                <span className="w-8 h-px bg-primary" />
                <span className="text-[11px] font-black tracking-[0.28em] text-primary uppercase">O que fazemos na cena</span>
              </div>
              <h3 className="leading-[0.9] font-black tracking-tighter text-white uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                <span className="block text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4rem]">Projetos &</span>
                <span className="block text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4rem] italic text-white/90">identidades</span>
              </h3>
            </div>
            <div className="max-w-[420px] mx-auto lg:mx-0 text-center lg:text-right">
              <p className="text-[14px] md:text-[15px] leading-relaxed text-white/60 font-medium">
                Construímos a estética visual completa dos seus lançamentos e eventos para fazer sua arte ecoar com força total — dentro e fora da pista.
              </p>
              <div className="mt-4 hidden lg:flex justify-end gap-2">
                <span className="text-[10px] font-black tracking-[0.18em] text-white/40 uppercase px-3 py-1.5 rounded-full border border-white/10">Direção de arte</span>
                <span className="text-[10px] font-black tracking-[0.18em] text-white/40 uppercase px-3 py-1.5 rounded-full border border-white/10">Branding</span>
                <span className="text-[10px] font-black tracking-[0.18em] text-white/40 uppercase px-3 py-1.5 rounded-full border border-white/10">Campanha</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                kicker: "01 — Arte que para o feed",
                title: "Flyer artístico",
                icon: ImageIcon,
                desc: "Composições conceituais com manipulação visual de alto nível para transformar ideia em imagem marcante e memorável."
              },
              {
                kicker: "02 — Traço autoral",
                title: "Ilustração autoral",
                icon: Video,
                desc: "Ilustrações exclusivas que dão personalidade, narrativa e identidade — do rascunho ao acabamento premium."
              },
              {
                kicker: "03 — Feito para converter",
                title: "Flyers para eventos",
                icon: Layout,
                desc: "Peças para festas e artistas que unem impacto, legibilidade e hierarquia para lotar pista e vender ingresso."
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[28px] premium-card shimmer p-7 md:p-8 flex flex-col text-left hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-500">
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
                <p className="text-[10px] font-black tracking-[0.18em] text-white/35 uppercase">{service.kicker}</p>
                
                <div className="mt-4 w-[52px] h-[52px] md:w-14 md:h-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] group-hover:scale-105 group-hover:rotate-[-3deg] transition-transform duration-500">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h4 className="mt-6 text-[1.55rem] md:text-[1.7rem] leading-none font-black tracking-tighter text-white uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>{service.title}</h4>
                <p className="text-[14px] md:text-lg text-white/60 md:text-white/50 mb-6 md:mb-8 leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-300">{service.desc}</p>
                <a href="#contact" className="mt-auto inline-flex items-center gap-2 text-xs font-black text-primary group-hover:gap-4 transition-all tracking-[0.2em] relative">
                  ORÇAMENTO <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-14 md:py-32 bg-transparent">
        <div className="container mx-auto px-5 md:px-6 text-center space-y-10 md:space-y-16">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-[11px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">Vamos conversar?</h2>
            <h3 className="text-[2.6rem] leading-none sm:text-5xl md:text-8xl font-black tracking-tighter text-white italic uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              SEU PRÓXIMO <br />
              <span className="text-primary text-glow">PROJETO AQUI</span>
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-14 md:h-20 w-full sm:w-auto px-8 md:px-16 rounded-full text-base md:text-xl group transition-all hover:scale-105 shadow-2xl max-w-sm sm:max-w-none">
              FALAR NO WHATSAPP <MessageCircle className="ml-3 w-5 h-5 md:w-6 md:h-6" />
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
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 hover:scale-110 transition-transform cursor-pointer">
              <img src={logoAsset.url} alt="Sant Designer Logo" className="w-full h-full object-contain" />
            </div>
            <p className="text-[9px] md:text-[10px] text-white/30 md:text-white/20 font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase px-4">
              © 2026 SANT DESIGNER. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;