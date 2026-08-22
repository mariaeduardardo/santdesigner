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

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative bg-black">
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
        <div className={`fixed inset-0 bg-black/95 z-[55] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center gap-8 text-lg font-black text-white italic uppercase tracking-[0.2em]">
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">SERVIÇOS</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">PORTFÓLIO</a>
            <a href="#processo" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">PROCESSO</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] md:min-h-[70vh] flex items-center pt-24 md:pt-32 pb-10 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white/0 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-white/0 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="flex-1 text-left space-y-6 md:space-y-4 animate-fade-up max-w-3xl w-full">
              <div className="space-y-4 md:space-y-3">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-white font-display text-left" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                  COMUNICAÇÃO <br />
                  VISUAL PARA <br />
                  <span className="text-primary text-glow italic relative inline-block">
                    SOUND SYSTEM
                    <div className="absolute -bottom-2 -right-4 w-full h-2 bg-primary/30 blur-sm -rotate-2 -z-10" />
                  </span> <br />
                  E ARTISTAS
                </h1>
                <p className="text-lg md:text-lg text-white/80 max-w-xl text-left leading-tight md:leading-relaxed font-medium">
                  5 anos transformando a identidade de eventos e artistas. Design gráfico e ilustrações autorais com a força e a atitude da cultura de rua.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-14 md:h-12 w-full sm:w-auto px-8 rounded-full text-sm md:text-sm shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all hover:scale-105 uppercase tracking-[0.2em]">
                  Solicitar Orçamento <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative animate-float w-full max-w-[320px] sm:max-w-sm lg:max-w-md flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/5] flex items-center justify-center p-0 sm:p-4">
                <div className="relative w-4/5 h-full">
                  {[turmaAsset, boyAsset, loucuraAsset, quebradaAsset, ghetoAsset, pretaAsset, pazAsset].map((asset, index) => {
                    const isActive = activeCardIndex === index;
                    return (
                      <div 
                        key={index} 
                        onClick={() => setActiveCardIndex(index)}
                        className={`absolute inset-0 w-full h-full rounded-2xl shadow-2xl bg-zinc-900 overflow-hidden transition-all duration-700 cursor-pointer ${isActive ? 'z-30 scale-100 rotate-0 translate-x-0 -translate-y-4 md:-translate-y-8' : 'z-10 scale-90'}`}
                        style={{
                          transform: !isActive ? `rotate(${(index - activeCardIndex) * 8}deg) translateX(${(index - activeCardIndex) * 15}%)` : undefined,
                        }}
                      >
                        <img 
                          src={asset.url} 
                          alt={`Art ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        {!isActive && (
                          <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="servicos" className="py-20 md:py-32 px-6 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Expertise</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>Nossas Soluções</h3>
            </div>
            <p className="text-white/40 max-w-sm text-left md:text-right leading-relaxed font-medium uppercase text-xs tracking-widest">
              Desenvolvemos toda a estética do seu lançamento para garantir o máximo de engajamento em todas as plataformas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "COVER ART",
                icon: ImageIcon,
                desc: "Criação de capas para singles, EPs e álbuns que capturam a essência do seu som instantaneamente."
              },
              {
                title: "VISUALIZERS",
                icon: Video,
                desc: "Vídeos dinâmicos e Lyric Videos estilizados para engajamento em plataformas de streaming e social."
              },
              {
                title: "CAMPANHA",
                icon: Layout,
                desc: "Desenvolvemos a identidade visual completa do seu lançamento para gerar expectativa e engajamento."
              }
            ].map((service, idx) => (
              <div key={idx} className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] group hover:bg-white/5 transition-all duration-500">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-white uppercase italic" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>{service.title}</h4>
                <p className="text-white/50 mb-8 leading-relaxed font-medium">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-black text-primary group-hover:gap-4 transition-all tracking-[0.2em]">
                  ORÇAMENTO <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-white italic uppercase" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>
                +3 MILHÕES <br />
                <span className="text-white/30 text-3xl font-bold tracking-widest uppercase not-italic">De streams totais</span>
              </h3>
              <p className="text-white/50 max-w-md text-lg font-medium leading-relaxed">
                Resultados reais através de design estratégico. O visual é a primeira conexão entre o artista e o público.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-center md:text-right">
              <div>
                <div className="text-4xl md:text-6xl font-black text-primary italic" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>50+</div>
                <div className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.3em] mt-2 md:mt-4">Artistas Atendidos</div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-black text-white italic" style={{ fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 900 }}>200+</div>
                <div className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.3em] mt-2 md:mt-4">Projetos Entregues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-transparent">
        <div className="container mx-auto px-6 text-center space-y-12 md:space-y-16">
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

          <div className="flex items-center justify-center gap-12 pt-16">
            <a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              <ImageIcon className="w-4 h-4" /> Behance
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
              <Send className="w-4 h-4" /> Telegram
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