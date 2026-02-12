import { useState } from "react";
import { menuItems, menuCategories, type MenuItem } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, IceCreamCone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ComplementsModal from "./ComplementsModal";

const categoryEmojis: Record<string, string> = {
  "Promoção da Semana": "🔥",
  "Creme de Açaí Completo": "🍇",
  "Vitamina de Açaí": "🥤",
  "Monte do Seu Jeito": "✨",
  "Metade Cupuaçu × Metade Açaí": "🥥",
  "Cupuaçu": "🟡",
  "Picolés e Paletas": "🍦",
  "Bebidas": "💧",
};

const MenuSection = () => {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [complementItem, setComplementItem] = useState<MenuItem | null>(null);

  const handleAdd = (item: MenuItem) => {
    if (item.hasComplements) {
      setComplementItem(item);
    } else {
      addItem({
        id: item.id,
        name: item.name,
        basePrice: item.price,
        quantity: 1,
        complements: [],
      });
    }
  };

  const filteredItems = menuItems.filter((i) => i.category === activeCategory);

  return (
    <section id="cardapio" className="py-12 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2 text-foreground">
          Nosso Cardápio
        </h2>
        <p className="text-center text-muted-foreground mb-8">Escolha seu favorito e personalize!</p>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span>{categoryEmojis[cat]}</span>
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl border border-border p-5 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <IceCreamCone className="w-8 h-8 text-primary" />
                    <h3 className="font-bold text-lg text-card-foreground">{item.name}</h3>
                  </div>
                  {item.badge && (
                    <Badge className="bg-accent text-accent-foreground text-xs shrink-0">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-black text-primary">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </span>
                <Button
                  onClick={() => handleAdd(item)}
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold gap-1"
                >
                  <Plus className="w-4 h-4" />
                  Adicionar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {complementItem && (
        <ComplementsModal item={complementItem} onClose={() => setComplementItem(null)} />
      )}
    </section>
  );
};

export default MenuSection;
