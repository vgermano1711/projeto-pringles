import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CampaignSection from "@/components/CampaignSection";
import FlavorPreview from "@/components/FlavorPreview";
import FeedbackSection from "@/components/FeedbackSection";
import HomeCTA from "@/components/HomeCTA";
import SectionDivider from "@/components/SectionDivider";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const handleIntroFinish = useCallback(() => setIntroFinished(true), []);

  return (
    <>
      {!introFinished && <IntroAnimation onFinish={handleIntroFinish} />}
      <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
        <Navbar />
        <HeroSection />
        <CampaignSection />
        <SectionDivider />
        <FlavorPreview />
        <SectionDivider />
        <FeedbackSection />
        <SectionDivider />
        <HomeCTA />

        <footer className="border-t border-primary-foreground/10 py-8" style={{ background: "#111111" }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-foreground/30 font-body text-sm">
              © 2026 Pringles — Once you pop, the fun don't stop! 🎉
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
