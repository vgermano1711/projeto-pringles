import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FlavorShowcase from "@/components/FlavorShowcase";
import InteractiveChips from "@/components/InteractiveChips";
import ProductExperience from "@/components/ProductExperience";
import BrandStory from "@/components/BrandStory";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="bg-pringles-dark min-h-screen">
      <Navbar />
      <HeroSection />
      <FlavorShowcase />
      <InteractiveChips />
      <ProductExperience />
      <BrandStory />
      <CTASection />
      
      {/* Footer */}
      <footer className="bg-pringles-dark border-t border-primary-foreground/10 py-8">
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
