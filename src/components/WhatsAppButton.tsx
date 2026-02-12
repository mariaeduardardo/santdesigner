import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/menu";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-xl animate-pulse-glow transition-transform hover:scale-110"
    aria-label="Fale conosco no WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
