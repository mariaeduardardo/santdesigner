import { useState } from "react";
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

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative bg-[#070707] overflow-x-hidden antialiased">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Background */}
      <Background />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid opacity-[0.03]" />
      
      {/* Navigation — original simples */}
      <nav className="w-full z-50 border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1280px] md:max-w-[880px] px-4 md:px-8 h-14 flex items-center justify-between gap-4">
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
              className="w-8 h-8 bg-white/10 border border-white/10 text-white flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-50 md:hidden flex flex-col ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col px-6 pt-20 pb-10 h-full">
            <div className="flex flex-col gap-2 text-2xl font-black uppercase">
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="py-3 text-white border-b border-white/10">Serviços</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="py-3 text-white border-b border-white/10">Portfólio</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-3 text-white border-b border-white/10">Contato</a>
            </div>
            <div className="mt-auto">
              <a href="https://wa.me/5531996068614" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-10 bg-primary text-white font-bold text-sm">
                FALAR NO WHATSAPP <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section — original bugado */}
      <section id="hero" className="relative flex items-center pt-10 pb-8 md:pt-14 md:pb-10 overflow-hidden">
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
          <div className="flex flex-row items-center justify-between gap-2 md:justify-center md:gap-12 md:max-w-[880px] md:mx-auto">
            <div className="flex-1 max-w-[120px] md:max-w-none md:flex-none md:w-[440px]">
              <h1 className="text-2xl md:text-5xl md:leading-[0.95] font-black tracking-tighter uppercase text-white leading-none" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                comunicação <br />
                <span className="text-primary italic">visual</span> PARA <br />
                eventos e artistas
              </h1>

              <p className="mt-2 md:mt-4 text-[10px] md:text-sm leading-relaxed text-white/60">
                Do conceito à arte final, criamos identidades visuais marcantes.
              </p>

              <div className="mt-3 md:mt-6 flex flex-row items-center gap-2">
                <a href="#contact" className="inline-flex items-center justify-center gap-1 h-10 md:h-11 px-3 md:px-6 bg-primary text-white font-bold text-[10px] md:text-xs uppercase">
                  Orçamento <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
            
            <div className="w-[120px] h-[160px] md:w-[250px] md:h-[330px] relative flex-shrink-0 flex items-center justify-center">
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
                        onClick={() => setActiveCardIndex(index)}
                        className="absolute inset-0 w-full h-full rounded-xl bg-zinc-900 overflow-hidden cursor-pointer transition-all duration-500"
                        style={{
                          zIndex: 30 - absOffset,
                          transform: `rotate(${offset * 7}deg) translateX(${offset * 18}%) translateY(${absOffset * 3}%) scale(${1 - absOffset * 0.06})`,
                          transformOrigin: 'bottom center',
                        }}
                      >
                        <img 
                          src={asset.url} 
                          alt={`Art ${index + 1}`} 
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

      {/* Expertise — original simples bugado */}
      <section id="servicos" className="py-8 relative">
        <div className="mx-auto max-w-[1280px] md:max-w-[880px] px-4 md:px-8">
          <div className="mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">O que fazemos</span>
            <h3 className="text-2xl font-black tracking-tighter text-white uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              Projetos & identidades
            </h3>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
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
              <div key={idx} className="bg-white/5 border border-white/10 p-3 flex flex-col text-left">
                <p className="text-[10px] font-bold text-white/40 uppercase">{service.kicker}</p>
                <div className="mt-2 w-8 h-8 bg-white text-black flex items-center justify-center">
                  <service.icon className="w-4 h-4" />
                </div>
                <h4 className="mt-2 text-[10px] leading-none font-black text-white uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>{service.title}</h4>
                <p className="text-[10px] text-white/50 mt-1">{service.desc}</p>
                <a href="#contact" className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-primary">
                  ORÇAMENTO <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section — original simples */}
      <section id="contact" className="py-8 bg-transparent">
        <div className="container mx-auto px-4 md:max-w-[880px] md:px-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Vamos conversar?</h2>
            <h3 className="text-2xl font-black tracking-tighter text-white italic uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
              SEU PRÓXIMO <br />
              <span className="text-primary">PROJETO AQUI</span>
            </h3>
          </div>
          
          <div className="flex flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-10 px-6 text-xs">
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