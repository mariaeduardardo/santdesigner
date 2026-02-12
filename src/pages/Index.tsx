import HeroSection from "@/components/HeroSection";
import HighlightsBar from "@/components/HighlightsBar";
import MenuSection from "@/components/MenuSection";
import PromotionBanner from "@/components/PromotionBanner";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsBar />
      <MenuSection />
      <PromotionBanner />
      <DifferentialsSection />
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
