import { useState, useEffect } from "react";
import { ArrowRight, Layout, Image as ImageIcon, Video, Instagram, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Background from "@/components/Background";
import StreetCursor from "@/components/StreetCursor";
import SoundToggle from "@/components/SoundToggle";

const logoAsset = "/images/logo-sant.svg";
const logoClassName = "w-9 h-9 md:w-11 md:h-11 object-contain shrink-0";

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
      {/* Film Grain analógico sutil por cima de tudo */}
      <div aria-hidden="true" className="film-grain" />
      <StreetCursor />
      
      {/* Background */}
      <Background />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid opacity-[0.03]" />
      
      {/* Navigation */}
      <nav className="relative z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[880px] items-center justify-between gap-3 px-3 md:px-6">
          <a href="#hero" className="flex min-w-0 items-center gap-2">
            <img src={logoAsset} alt="Logo Sant Designer" className={logoClassName} />
            <span className="truncate text-[10px] font-black tracking-[0.18em] text-white">SANT DESIGNER</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] text-white/60">
            <a href="#servicos" className="hover:text-white transition-colors uppercase">Serviços</a>
            <a href="#servicos" className="hover:text-white transition-colors uppercase">Portfólio</a>
            <a href="#contact" className="hover:text-white transition-colors uppercase">Contato</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <SoundToggle />
            <a href="#contact" className="inline-flex items-center justify-center h-8 px-4 bg-white text-black text-[11px] font-bold uppercase">
              Orçamento
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 items-center justify-center bg-white px-3 text-[10px] font-bold text-black uppercase">WHATSAPP</a>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/10 text-white"
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
          className={`fixed inset-x-0 top-14 bottom-0 z-[80] flex flex-col bg-black/95 backdrop-blur-sm transition-all duration-300 ease-out md:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div className={`relative flex h-16 items-center justify-between px-5 transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
            <span className="flex items-center gap-2">
              <img src={logoAsset} alt="Logo Sant Designer" className={logoClassName} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white/80">SANT DESIGNER</span>
            </span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
              className="flex h-9 w-9 items-center justify-center text-white/60 transition-colors hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className={`relative flex flex-1 flex-col items-center justify-center px-8 py-12 transition-all duration-300 ease-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <div className="flex flex-col items-center gap-8 text-center text-3xl font-black uppercase tracking-tight" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1} className="text-white/90 transition-colors hover:text-white">Serviços</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1} className="text-white/90 transition-colors hover:text-white">Portfólio</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1} className="text-white/90 transition-colors hover:text-white">Contato</a>
            </div>
            <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" tabIndex={isMenuOpen ? 0 : -1} className="mt-14 inline-flex h-10 items-center justify-center gap-2 border border-white/10 bg-white/10 px-5 text-xs font-bold uppercase tracking-[0.18em] text-white/80 transition-colors hover:bg-white/15 hover:text-white">
              Falar no WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative z-10 flex items-center overflow-hidden pt-8 pb-10 md:pt-14 md:pb-12">
        <div className="mx-auto w-full max-w-[880px] px-4 md:px-6">
          <div className="mx-auto flex max-w-[880px] flex-col items-start justify-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
            <div className="w-full max-w-[440px] flex-none text-left md:w-[440px] md:text-left">
              <h1 className="text-[2.7rem] leading-[0.86] font-black tracking-[-0.07em] uppercase text-white sm:text-5xl md:text-5xl md:leading-[0.95]" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                comunicação <br />
                <span className="text-primary italic">visual</span> PARA <br />
                eventos e artistas
              </h1>

              <p className="mt-4 max-w-[32rem] text-sm leading-relaxed text-white/60 md:text-base">
                Do conceito à arte final, criamos identidades visuais marcantes.
              </p>

              <div className="mt-6 flex flex-col items-start justify-start gap-2 sm:flex-row md:items-center">
                <a href="#contact" className="inline-flex h-11 items-center justify-center gap-2 bg-primary px-6 text-sm font-bold uppercase text-white">
                  Orçamento <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto mt-2 flex h-[300px] w-full max-w-[260px] flex-none items-center justify-center md:mx-0 md:mt-0 md:h-[340px] md:w-[260px]">
              <div className="relative h-full w-full">
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
              <img src={logoAsset} alt="Logo Sant Designer" className="w-full h-full object-contain" />
            </div>
            <p className="text-[10px] text-white/20 font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase px-4">
              © 2026 SANT DESIGNER. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="mt-5 flex items-center justify-center">
              <SoundToggle showLabel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;