import { useState, useEffect } from "react";
import { ArrowRight, Layout, Image as ImageIcon, Video, Instagram, MessageCircle, Menu, X } from "lucide-react";
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
  { url: turmaAsset.url, title: "Turma do Bairro" },
  { url: boyAsset.url, title: "Boy Bobo" },
  { url: loucuraAsset.url, title: "Ai Que Loucura" },
  { url: quebradaAsset.url, title: "Arquivo de Quebrada" },
  { url: ghetoAsset.url, title: "Criado no Gheto" },
  { url: pretaAsset.url, title: "Preta" },
  { url: pazAsset.url, title: "Fórmula da Paz" },
  { url: "/uploads/EU_VIM_PRA_VIVER_ISSO.jpg", title: "Eu Vim Pra Viver Isso" },
  { url: "/uploads/MENSAGEM_DE_MADRUGADA.jpg", title: "Mensagem de Madrugada" },
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen w-full selection:bg-primary selection:text-white relative bg-black overflow-x-hidden antialiased">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Background */}
      <Background />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid opacity-[0.03]" />
      
      {/* Navigation */}
      <nav className="w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto max-w-[880px] px-4 md:px-6 h-14 flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Sant Designer Logo" className="w-8 h-8 object-contain shrink-0" />
            <span className="text-[10px] font-black tracking-[0.2em] text-white">SANT DESIGNER</span>
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
          <div className="flex md:hidden items-center gap-2">
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-8 px-3 bg-white text-black text-[10px] font-bold">WHATSAPP</a>
            <button
              type="button"
              className="w-8 h-8 bg-white/10 border border-white/10 text-white flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          aria-hidden={!isMenuOpen}
          className={`fixed inset-0 z-[60] md:hidden flex flex-col bg-black/95 backdrop-blur-sm transition-opacity duration-300 ease-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className={`relative flex items-center justify-between px-5 h-16 transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
            <span className="flex items-center gap-2">
              <img src={logoAsset.url} alt="Sant Designer Logo" className="w-8 h-8 object-contain shrink-0" />
              <span className="text-[10px] font-black tracking-[0.2em] text-white/80">SANT DESIGNER</span>
            </span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
              className="w-9 h-9 text-white/60 flex items-center justify-center hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className={`relative flex flex-col items-center justify-center px-8 py-12 flex-1 transition-all duration-300 ease-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <div className="flex flex-col items-center gap-8 text-center text-3xl font-black uppercase tracking-tight" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1} className="text-white/90 hover:text-white transition-colors">Serviços</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1} className="text-white/90 hover:text-white transition-colors">Portfólio</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1} className="text-white/90 hover:text-white transition-colors">Contato</a>
            </div>
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" tabIndex={isMenuOpen ? 0 : -1} className="mt-14 inline-flex items-center justify-center gap-2 h-10 px-5 bg-white/10 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 transition-colors font-bold text-xs tracking-[0.18em] uppercase">
              Falar no WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative flex items-center pt-10 pb-10 md:pt-14 md:pb-12 overflow-hidden">
        <div className="mx-auto w-full max-w-[880px] px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-[880px] mx-auto">
            <div className="w-full md:w-[440px] flex-none text-center md:text-left">
              <h1 className="text-4xl md:text-5xl leading-[0.95] font-black tracking-tighter uppercase text-white" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                comunicação <br />
                <span className="text-primary italic">visual</span> PARA <br />
                eventos e artistas
              </h1>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60">
                Do conceito à arte final, criamos identidades visuais marcantes.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center md:items-center justify-center md:justify-start gap-2">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-primary text-white font-bold text-sm uppercase">
                  Orçamento <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="w-[240px] h-[320px] md:w-[260px] md:h-[340px] relative flex-none flex items-center justify-center">
                <div className="relative w-full h-full">
                  {cards.map((asset, index) => {
                    const total = cards.length;
                    let offset = index - activeCardIndex;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;
                    const isActive = offset === 0;
                    const absOffset = Math.abs(offset);
                    return (
                      <div
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`Ver arte ${asset.title}`}
                        onClick={() => setActiveCardIndex(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveCardIndex(index);
                          }
                        }}
                        className="absolute inset-0 w-full h-full rounded-xl bg-zinc-900 overflow-hidden cursor-pointer transition-all duration-500"
                        style={{
                          zIndex: 30 - absOffset,
                          transform: `rotate(${offset * 7}deg) translateX(${offset * 18}%) translateY(${absOffset * 3}%) scale(${1 - absOffset * 0.06})`,
                          transformOrigin: 'bottom center',
                        }}
                      >
                        <img 
                          src={asset.url} 
                          alt={`Arte ${asset.title}`} 
                          className="w-full h-full object-cover"
                        />
                        {!isActive && (
                          <div className="absolute inset-0 bg-black/40" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="servicos" className="py-8 md:py-12 relative">
        <div className="mx-auto max-w-[880px] px-4 md:px-6">
          <div className="mb-4 md:mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">O que fazemos</span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              Projetos & identidades
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                kicker: "01 — Arte que para o feed",
                title: "Flyer artístico",
                icon: ImageIcon,
                desc: "Composições conceituais."
              },
              {
                kicker: "02 — Traço autoral",
                title: "Ilustração autoral",
                icon: Video,
                desc: "Ilustrações exclusivas."
              },
              {
                kicker: "03 — Feito para converter",
                title: "Flyers para eventos",
                icon: Layout,
                desc: "Peças para festas e artistas."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 flex flex-col text-left">
                <p className="text-[11px] font-bold text-white/40 uppercase">{service.kicker}</p>
                <div className="mt-3 w-10 h-10 bg-white text-black flex items-center justify-center">
                  <service.icon className="w-5 h-5" />
                </div>
                <h4 className="mt-3 text-sm leading-none font-black text-white uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>{service.title}</h4>
                <p className="text-xs text-white/50 mt-2">{service.desc}</p>
                <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                  ORÇAMENTO <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
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
            <div className="w-20 h-20 mx-auto mb-8 hover:scale-110 transition-transform cursor-pointer">
              <img src={logoAsset.url} alt="Sant Designer Logo" className="w-full h-full object-contain" />
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