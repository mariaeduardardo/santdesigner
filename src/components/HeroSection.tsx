import heroImg from "@/assets/hero-acai.jpg";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const HeroSection = () => {
  const { setIsOpen, itemCount } = useCart();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Açaí bowl premium" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-800/70 to-purple-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold">
          🍇 Delivery em Belo Horizonte
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
          O melhor açaí
          <br />
          da região <span className="text-purple-300">🍇💜</span>
        </h1>
        <p className="text-lg md:text-xl text-purple-100 mb-8 font-medium">
          Açaí 100% puro, frutas frescas e entrega rápida. Faça seu pedido!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#cardapio">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full font-bold shadow-lg animate-pulse-glow"
            >
              Fazer Pedido Agora 🛒
            </Button>
          </a>
          <a href="#cardapio">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full font-bold border-white/30 text-white hover:bg-white/10"
            >
              Ver Cardápio
            </Button>
          </a>
        </div>
      </div>

      {/* Floating cart badge */}
      {itemCount > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-50 bg-accent text-accent-foreground rounded-full p-3 shadow-xl animate-scale-in"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        </button>
      )}
    </section>
  );
};

export default HeroSection;
