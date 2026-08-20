import { ArrowRight, Star, Play, Music, Layout, Image as ImageIcon, Video, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-xl">YG</div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">YAS GRAPHICS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#servicos" className="hover:text-primary transition-colors">SERVIÇOS</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">PORTFÓLIO</a>
            <a href="#processo" className="hover:text-primary transition-colors">PROCESSO</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <Button variant="secondary" className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-6 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                <Music className="w-3 h-3" /> Creative Music Studio
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
                IDENTIDADE <span className="text-primary text-glow">VISUAL</span> PARA <br />
                <span className="relative">
                  LANÇAMENTOS
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 -skew-x-12" />
                </span> MUSICAIS
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-left">
                Da capa à divulgação, criamos uma identidade visual completa para apresentar sua música com mais profissionalismo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold h-14 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  Iniciar Projeto
                </Button>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted" />
                  ))}
                  <div className="pl-6 flex flex-col items-start justify-center">
                    <div className="flex text-yellow-500"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                    <span className="text-[10px] text-muted-foreground">+3M de streams</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative animate-float">
              <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop" 
                  alt="Cover Art Example" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[80px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="servicos" className="py-20 bg-white/2 space-y-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">NOSSAS SOLUÇÕES</h3>
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
                title: "CAMPANHA DE LANÇAMENTO",
                icon: Layout,
                desc: "Desenvolvemos a identidade visual completa do seu lançamento para gerar expectativa e engajamento."
              }
            ].map((service, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-300">
                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:gap-3 transition-all">
                  SAIBA MAIS <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass p-12 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none">
                +3 MILHÕES <br />
                <span className="text-muted-foreground text-3xl font-bold tracking-normal uppercase">De streams nas plataformas</span>
              </h3>
              <p className="text-muted-foreground max-w-md">
                A Yas Graphics cria visuais estratégicos para artistas que querem lançar com mais profissionalismo e gerar retorno real.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-primary">50+</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">Artistas</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-cyan-400">200+</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">Projetos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            PRONTO PARA O SEU <br />
            <span className="text-primary italic">PRÓXIMO HIT?</span>
          </h2>
          <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold h-16 px-12 rounded-full text-xl group">
            Começar Agora <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex items-center justify-center gap-8 pt-12 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Behance</a>
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
          <p className="text-xs text-muted-foreground opacity-50">
            © 2024 YAS GRAPHICS. DESIGNED FOR MUSIC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
