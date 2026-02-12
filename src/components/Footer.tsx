import { STORE_INFO } from "@/data/menu";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-purple-950 text-purple-100 py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-black text-white mb-4">🍇 Bendito Açaí</h3>
          <p className="text-sm text-purple-300">O melhor açaí de BH, direto pra sua casa.</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span className="text-sm">{STORE_INFO.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0" />
            <span className="text-sm">{STORE_INFO.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 shrink-0" />
            <span className="text-sm">{STORE_INFO.phone}</span>
          </div>
        </div>
        <div className="space-y-3">
          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-sm">{STORE_INFO.instagram}</span>
          </a>
        </div>
      </div>
      <div className="border-t border-purple-800 mt-8 pt-6 text-center text-xs text-purple-400">
        © 2026 Bendito Açaí. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
