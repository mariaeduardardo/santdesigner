import { Star, Rocket, Heart, Cherry } from "lucide-react";
import { STORE_INFO } from "@/data/menu";

const highlights = [
  { icon: Star, text: `${STORE_INFO.rating} estrelas (${STORE_INFO.reviews} avaliações)`, color: "text-yellow-500" },
  { icon: Rocket, text: "Entrega rápida", color: "text-accent" },
  { icon: Heart, text: "Açaí 100% puro", color: "text-primary" },
  { icon: Cherry, text: "Frutas frescas", color: "text-red-500" },
];

const HighlightsBar = () => (
  <section className="bg-card border-y border-border py-4 overflow-x-auto">
    <div className="container flex items-center justify-center gap-6 md:gap-10 flex-wrap">
      {highlights.map((h) => (
        <div key={h.text} className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-foreground">
          <h.icon className={`w-5 h-5 ${h.color}`} />
          <span>{h.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default HighlightsBar;
