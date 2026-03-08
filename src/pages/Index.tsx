import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlavorShowcase from "@/components/FlavorShowcase";
import InteractiveChips from "@/components/InteractiveChips";
import ProductExperience from "@/components/ProductExperience";
import BrandStory from "@/components/BrandStory";

import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <FlavorShowcase />
      <SectionDivider />
      <ProductExperience />
      <SectionDivider />
      <BrandStory />
      <SectionDivider />
      <CTASection />
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-8" style={{
        background: "#111111"
      }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/30 font-body text-sm">
            © 2026 Pringles — Once you pop, the fun don't stop! 🎉
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
