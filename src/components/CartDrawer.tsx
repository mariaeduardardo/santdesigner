import { useCart } from "@/contexts/CartContext";
import { WHATSAPP_NUMBER, STORE_INFO } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useState } from "react";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, clearCart, total } = useCart();
  const [coupon, setCoupon] = useState("");

  const formatWhatsAppMessage = () => {
    let msg = "🍇 *Pedido Bendito Açaí* 🍇\n\n";
    items.forEach((item) => {
      msg += `• ${item.quantity}x ${item.name} - R$ ${(item.basePrice * item.quantity).toFixed(2).replace(".", ",")}\n`;
      if (item.complements.length > 0) {
        item.complements.forEach((c) => {
          msg += `  + ${c.qty}x ${c.complement.name} (R$ ${(c.complement.price * c.qty).toFixed(2).replace(".", ",")})\n`;
        });
      }
    });
    msg += `\n💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*`;
    if (coupon) msg += `\n🎟 Cupom: ${coupon}`;
    msg += "\n\n💳 Pagamento: Pix / Cartão na entrega";
    return encodeURIComponent(msg);
  };

  const handleWhatsApp = () => {
    if (total < STORE_INFO.minOrder) return;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${formatWhatsAppMessage()}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-card flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-xl font-black text-foreground">Seu Carrinho 🛒</SheetTitle>
          <SheetDescription className="text-muted-foreground">
            {items.length === 0 ? "Seu carrinho está vazio" : `${items.length} item(s)`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {items.map((item) => {
            const complementsTotal = item.complements.reduce((s, c) => s + c.complement.price * c.qty, 0);
            const itemTotal = (item.basePrice + complementsTotal) * item.quantity;
            return (
              <div key={item.id} className="bg-secondary/50 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-foreground">{item.name}</h4>
                    {item.complements.length > 0 && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.complements.map((c) => `${c.qty}x ${c.complement.name}`).join(", ")}
                      </div>
                    )}
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full bg-muted flex items-center justify-center"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-sm w-5 text-center text-foreground">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="font-black text-primary">R$ {itemTotal.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="Cupom de desconto"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="rounded-full"
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-foreground">Total</span>
              <span className="text-2xl font-black text-primary">R$ {total.toFixed(2).replace(".", ",")}</span>
            </div>

            {total < STORE_INFO.minOrder && (
              <p className="text-xs text-destructive text-center">
                Pedido mínimo: R$ {STORE_INFO.minOrder.toFixed(2).replace(".", ",")}
              </p>
            )}

            <Button
              onClick={handleWhatsApp}
              disabled={total < STORE_INFO.minOrder}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold text-lg py-6 gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Finalizar pelo WhatsApp
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              💳 Pagamento: Pix ou Cartão na entrega
            </p>

            <button
              onClick={clearCart}
              className="text-xs text-muted-foreground hover:text-destructive w-full text-center"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
