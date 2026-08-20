import { useState, useCallback } from "react";
import { ArrowRight, Music, Layout, Image as ImageIcon, Video, Instagram, Send, MessageCircle, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/VideoBackground";
import logoAsset from "@/assets/LOGO-SANT.png.asset.json";
import art1Asset from "@/assets/art1.jpg.asset.json";
import art2Asset from "@/assets/art2.jpg.asset.json";
import useEmblaCarousel from 'embla-carousel-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white relative">
      {/* Background Video */}
      <VideoBackground />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid opacity-20" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoAsset.url} alt="Sant Designer Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-white/70">
            <a href="#servicos" className="hover:text-primary transition-colors tracking-widest uppercase">SERVIÇOS</a>
            <a href="#portfolio" className="hover:text-primary transition-colors tracking-widest uppercase">PORTFÓLIO</a>
            <a href="#processo" className="hover:text-primary transition-colors tracking-widest uppercase">PROCESSO</a>
            <a href="#faq" className="hover:text-primary transition-colors tracking-widest uppercase">FAQ</a>
            <Button variant="secondary" className="bg-white hover:bg-white/90 text-black font-bold px-8 rounded-full transition-all hover:scale-105">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold h-9 px-4 rounded-full text-xs shadow-lg">
              Orçamento
            </Button>
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
            <Button variant="secondary" onClick={() => setIsMenuOpen(false)} className="bg-white hover:bg-white/90 text-black font-bold px-10 py-6 rounded-full text-lg mt-4">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#FFB703]/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#FB5607]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-black tracking-normal leading-[1.1] uppercase text-white font-display text-left">
                comunicação <span className="text-primary text-glow italic">visual</span> PARA <br />
                EVENTOS E ARTISTAS
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl text-left leading-relaxed">
                Do conceito à arte final, desenvolvemos identidades visuais marcantes e ilustrações autorais para transformar sua música e seus eventos em referências visuais.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(255,183,3,0.3)] transition-all hover:scale-105">
                  Iniciar Projeto <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative animate-float w-full max-w-md mx-auto">
              <div className="relative z-10 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-zinc-900 group">
                <div className="embla" ref={emblaRef}>
                  <div className="embla__container flex">
                    {[art1Asset, art2Asset].map((asset, index) => (
                      <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                        <img 
                          src={asset.url} 
                          alt={`Art ${index + 1}`} 
                          className="w-full aspect-[3/4] object-cover transition-all duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={scrollPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={scrollNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/10 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="servicos" className="py-32 px-6 relative bg-secondary/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Expertise</h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase italic">Nossas Soluções</h3>
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
              <div key={idx} className="glass p-10 rounded-[2rem] group hover:bg-white/5 transition-all duration-500 border-white/5">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <service.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-white uppercase italic">{service.title}</h4>
                <p className="text-white/50 mb-8 leading-relaxed font-medium">{service.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-black text-primary group-hover:gap-4 transition-all tracking-[0.2em]">
                  DETALHES <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass p-16 rounded-[4rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16 border-white/5">
            <div className="space-y-8 text-center md:text-left">
              <h3 className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-white italic uppercase">
                +3 MILHÕES <br />
                <span className="text-white/30 text-3xl font-bold tracking-widest uppercase not-italic">De streams totais</span>
              </h3>
              <p className="text-white/50 max-w-md text-lg font-medium leading-relaxed">
                Resultados reais através de design estratégico. O visual é a primeira conexão entre o artista e o público.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-center md:text-right">
              <div>
                <div className="text-6xl font-black text-primary italic">50+</div>
                <div className="text-xs font-bold text-white/30 uppercase tracking-[0.3em] mt-4">Artistas Atendidos</div>
              </div>
              <div>
                <div className="text-6xl font-black text-white italic">200+</div>
                <div className="text-xs font-bold text-white/30 uppercase tracking-[0.3em] mt-4">Projetos Entregues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-transparent to-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Vamos conversar?</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white italic uppercase">
              SEU PRÓXIMO <br />
              <span className="text-[#D90429] text-glow">PROJETO AQUI</span>
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-20 px-16 rounded-full text-xl group transition-all hover:scale-105 shadow-2xl">
              FALAR NO WHATSAPP <MessageCircle className="ml-4 w-6 h-6" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-16 border-t border-white/5">
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
              © 2024 SANT DESIGNER. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;