import { useState, useRef } from "react";
import { ArrowRight, Layout, Image as ImageIcon, Video, Instagram, Send, MessageCircle, Menu, X } from "lucide-react";
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
    <div className="min-h-screen selection:bg-primary selection:text-white relative bg-black overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Background */}
      <Background />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid opacity-5" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoAsset.url} alt="Sant Designer Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 text-sm font-black text-white/90">
            <a href="#servicos" className="hover:text-primary transition-all tracking-[0.2em] uppercase hover:scale-110">SERVIÇOS</a>
            <a href="#portfolio" className="hover:text-primary transition-all tracking-[0.2em] uppercase hover:scale-110">PORTFÓLIO</a>
            <a href="#processo" className="hover:text-primary transition-all tracking-[0.2em] uppercase hover:scale-110">PROCESSO</a>
            <a href="#faq" className="hover:text-primary transition-all tracking-[0.2em] uppercase hover:scale-110">FAQ</a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              className="text-white p-2 z-[60] relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/98 z-[55] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 overflow-y-auto ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center gap-8 text-2xl font-black text-white italic uppercase tracking-[0.2em] px-4 text-center">
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2">SERVIÇOS</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2">PORTFÓLIO</a>
            <a href="#processo" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2">PROCESSO</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-2">FAQ</a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] md:min-h-[70vh] flex items-center pt-24 md:pt-32 pb-16 md:pb-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white/0 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-white/0 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <div className="container mx-auto">
          <div className="flex flex-row items-center justify-between gap-4 md:gap-8">
            <div className="flex-1 text-left space-y-6 md:space-y-4 animate-fade-up max-w-3xl">
              <div className="space-y-4 md:space-y-3">
                <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-white font-display text-left" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                  comunicação <br />
                  <span className="text-primary text-glow italic relative inline-block">
                    visual
                    <div className="absolute -bottom-2 -right-4 w-full h-2 bg-primary/30 blur-sm -rotate-2 -z-10" />
                  </span> PARA <br />
                  EVENTOS E ARTISTAS
                </h1>
                <p className="text-[10px] sm:text-sm md:text-lg text-white/80 max-w-xl text-left leading-tight md:leading-relaxed font-medium">
                  Do conceito à arte final, desenvolvemos identidades visuais marcantes e ilustrações autorais para transformar sua música e seus eventos em referências visuais.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-10 md:h-12 w-auto px-4 md:px-8 rounded-full text-[10px] md:text-sm shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all hover:scale-105 uppercase tracking-[0.2em]">
                  Solicitar Orçamento <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-[120px] sm:max-w-sm lg:max-w-md flex justify-end mt-0">
              <div className="relative w-full aspect-[4/5] flex items-center justify-center p-0 sm:p-4">
                <div 
                  className="relative w-4/5 h-full select-none touch-pan-y overflow-visible"
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

                  {/* Position indicators */}
                  <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-2 z-40">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCardIndex(index)}
                        aria-label={`Ir para carta ${index + 1}`}
                        className={`rounded-full transition-all duration-500 ${index === activeCardIndex ? 'w-4 md:w-6 h-1.5 md:h-2 bg-primary shadow-[0_0_10px_rgba(255,0,0,0.6)]' : 'w-1.5 md:w-2 h-1.5 md:h-2 bg-white/30 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="servicos" className="py-16 md:py-32 px-4 md:px-6 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase">O QUE FAZEMOS NA CENA</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>PROJETOS & IDENTIDADES</h3>
            </div>
            <p className="text-white/40 max-w-sm text-left md:text-right leading-relaxed font-medium uppercase text-xs tracking-widest">
              Construímos a estética visual completa dos seus lançamentos e eventos para fazer sua arte ecoar com força total dentro e fora da pista.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-2 md:gap-8">
            {[
              {
                title: "FLYER ARTÍSTICO",
                icon: ImageIcon,
                desc: "Composições que exploram conceito, estética e manipulação visual para transformar ideias em imagens marcantes."
              },
              {
                title: "ILUSTRAÇÃO AUTORAL",
                icon: Video,
                desc: "Ilustrações e criações exclusivas desenvolvidas para dar personalidade e identidade a cada projeto."
              },
              {
                title: "FLYERS PARA EVENTOS",
                icon: Layout,
                desc: "Peças desenvolvidas para festas, artistas e eventos, unindo impacto visual, informação e identidade."
              }
            ].map((service, idx) => (
              <div key={idx} className="glass p-3 md:p-10 rounded-xl md:rounded-[2rem] group hover:bg-white/5 transition-all duration-500 relative overflow-hidden flex flex-col items-start text-left border border-white/5 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)]">
                {/* Interactive background glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/40 transition-all duration-700 pointer-events-none" />
                
                <div className="w-8 h-8 md:w-16 md:h-16 bg-white/5 rounded-lg md:rounded-2xl flex items-center justify-center mb-3 md:mb-8 group-hover:bg-primary transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <service.icon className="w-4 h-4 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-[10px] sm:text-lg md:text-2xl font-black mb-2 md:mb-4 text-white uppercase italic group-hover:text-primary transition-colors duration-300" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>{service.title}</h4>
                <p className="text-[8px] sm:text-sm md:text-lg text-white/50 mb-4 md:mb-8 leading-tight md:leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-300">{service.desc}</p>
                <a href="#contact" className="mt-auto inline-flex items-center gap-1 md:gap-2 text-[8px] md:text-xs font-black text-primary group-hover:gap-4 transition-all tracking-[0.1em] md:tracking-[0.2em] relative">
                  ORÇAMENTO <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-12 md:space-y-16">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Vamos conversar?</h2>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter text-white italic uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              SEU PRÓXIMO <br />
              <span className="text-primary text-glow">PROJETO AQUI</span>
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-16 md:h-20 px-10 md:px-16 rounded-full text-lg md:text-xl group transition-all hover:scale-105 shadow-2xl">
              FALAR NO WHATSAPP <MessageCircle className="ml-4 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>

          <div className="flex flex-row items-center justify-center gap-4 sm:gap-12 pt-16">
            <a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-1 sm:gap-2 font-bold uppercase tracking-widest text-[8px] sm:text-xs">
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" /> Instagram
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-1 sm:gap-2 font-bold uppercase tracking-widest text-[8px] sm:text-xs">
              <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4" /> Behance
            </a>
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex items-center gap-1 sm:gap-2 font-bold uppercase tracking-widest text-[8px] sm:text-xs">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" /> WhatsApp
            </a>
          </div>
          
          <div className="pt-20">
            <div className="w-20 h-20 mx-auto mb-8 hover:scale-110 transition-transform cursor-pointer">
              <img src={logoAsset.url} alt="Sant Designer Logo" className="w-full h-full object-contain" />
            </div>
            <p className="text-[10px] text-white/20 font-bold tracking-[0.5em] uppercase">
              © 2026 SANT DESIGNER. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;