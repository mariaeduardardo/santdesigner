import { Cherry, Rocket, Heart, Star } from "lucide-react";

const differentials = [
  { icon: Cherry, title: "Frutas Frescas", desc: "Sempre fresquinhas, selecionadas diariamente.", color: "text-red-500" },
  { icon: Rocket, title: "Entrega Rápida", desc: "Seu pedido chega quentinho na sua porta.", color: "text-accent" },
  { icon: Heart, title: "Açaí 100% Puro", desc: "Sem adição de corantes ou conservantes.", color: "text-primary" },
  { icon: Star, title: "4.4 Estrelas", desc: "134 avaliações no Google. Qualidade comprovada!", color: "text-yellow-500" },
];

const DifferentialsSection = () => (
  <section className="py-12 md:py-20 bg-secondary/50">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-foreground">
        Por que escolher o Bendito? 💜
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {differentials.map((d, i) => (
          <div
            key={d.title}
            className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className={`${d.color} mb-3 flex justify-center`}>
              <d.icon className="w-10 h-10 animate-float" style={{ animationDelay: `${i * 500}ms` }} />
            </div>
            <h3 className="font-bold text-foreground mb-1">{d.title}</h3>
            <p className="text-xs text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
