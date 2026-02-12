import { useState } from "react";
import { complements, type MenuItem, type Complement } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Plus, Minus } from "lucide-react";

type Props = {
  item: MenuItem;
  onClose: () => void;
};

const ComplementsModal = ({ item, onClose }: Props) => {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<Map<string, number>>(new Map());

  const grouped = complements.reduce<Record<string, Complement[]>>((acc, c) => {
    (acc[c.category] ??= []).push(c);
    return acc;
  }, {});

  const updateQty = (id: string, delta: number) => {
    setSelected((prev) => {
      const next = new Map(prev);
      const val = (next.get(id) || 0) + delta;
      if (val <= 0) next.delete(id);
      else next.set(id, val);
      return next;
    });
  };

  const complementsTotal = Array.from(selected.entries()).reduce((sum, [id, qty]) => {
    const c = complements.find((x) => x.id === id);
    return sum + (c ? c.price * qty : 0);
  }, 0);

  const totalPrice = item.price + complementsTotal;

  const handleConfirm = () => {
    const selectedComplements = Array.from(selected.entries())
      .map(([id, qty]) => ({
        complement: complements.find((c) => c.id === id)!,
        qty,
      }))
      .filter((c) => c.complement);

    addItem({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      quantity: 1,
      complements: selectedComplements,
    });
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-foreground">{item.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Adicione complementos ao seu açaí
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-sm text-primary mb-3">{category}</h4>
              <div className="space-y-2">
                {items.map((c) => {
                  const qty = selected.get(c.id) || 0;
                  return (
                    <div key={c.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div>
                        <span className="font-semibold text-sm text-foreground">{c.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          +R$ {c.price.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {qty > 0 && (
                          <>
                            <button
                              onClick={() => updateQty(c.id, -1)}
                              className="w-7 h-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold hover:bg-secondary/80"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-5 text-center font-bold text-sm text-foreground">{qty}</span>
                          </>
                        )}
                        <button
                          onClick={() => updateQty(c.id, 1)}
                          className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold hover:bg-accent/90"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 pt-4 border-t border-border bg-card">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-foreground">Total:</span>
            <span className="text-2xl font-black text-primary">
              R$ {totalPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <Button
            onClick={handleConfirm}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold text-lg py-6"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComplementsModal;
