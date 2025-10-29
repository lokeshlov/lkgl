import { CaseStudySection } from "@/components/CaseStudySection";
import { CtaSection } from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import FeatureSectionTwo from "@/components/FeatureSectionTwo";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SocialSection } from "@/components/SocialSection";
import { BusinessVerticalsSection } from "@/components/BusinessVerticalsSection";
import { QuickProductsPreview } from "@/components/QuickProductsPreview";
import { GlobalPresenceSneak } from "@/components/GlobalPresenceSneak";
import { TrustIndicators } from "@/components/TrustIndicators";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#1A1D21]">
      <div className="pt-20">
        <HeroSection />
        <BusinessVerticalsSection />
        <QuickProductsPreview />
        <GlobalPresenceSneak />
        <TrustIndicators />
        <FeatureSection />
        <FeatureSectionTwo />
        <ProjectSection />
        <CaseStudySection />
        <SocialSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}