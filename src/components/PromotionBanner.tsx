import { Button } from "@/components/ui/button";

const PromotionBanner = () => (
  <section className="py-12 md:py-16 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white">
    <div className="container text-center">
      <div className="inline-block mb-3 px-4 py-1 rounded-full bg-white/20 text-sm font-bold">
        🔥 Promoção da Semana
      </div>
      <h2 className="text-3xl md:text-5xl font-black mb-3">
        2 Cremes 500ml por R$ 39,99
      </h2>
      <p className="text-purple-100 text-lg mb-6 max-w-xl mx-auto">
        Aproveite essa oferta exclusiva! Dois cremes de açaí completos pelo preço de um e meio.
      </p>
      <a href="#cardapio">
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold text-lg px-10 py-6 animate-pulse-glow"
        >
          Peça Agora 🚀
        </Button>
      </a>
    </div>
  </section>
);

export default PromotionBanner;
