import { Footer } from "@/components/Footer";
import { GlobalReachHero } from "@/components/global-reach/GlobalReachHero";
import { BelgiumSpotlight } from "@/components/global-reach/BelgiumSpotlight";
import { InteractiveWorldMap } from "@/components/global-reach/InteractiveWorldMap";
import { RegionalBreakdown } from "@/components/global-reach/RegionalBreakdown";
import { BusinessActivityFilters } from "@/components/global-reach/BusinessActivityFilters";
import { GlobalTimeline } from "@/components/global-reach/GlobalTimeline";
import { InternationalPartners } from "@/components/global-reach/InternationalPartners";
import { StrategicBenefits } from "@/components/global-reach/StrategicBenefits";
import { EuropeanMarketFocus } from "@/components/global-reach/EuropeanMarketFocus";
import { ExpansionRoadmap } from "@/components/global-reach/ExpansionRoadmap";
import { GlobalReachCTA } from "@/components/global-reach/GlobalReachCTA";

export default function GlobalReachPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#1A1D21]">
      <div className="pt-20">
        <GlobalReachHero />
        <BelgiumSpotlight />
        <InteractiveWorldMap />
        <RegionalBreakdown />
        <BusinessActivityFilters />
        <GlobalTimeline />
        <InternationalPartners />
        <StrategicBenefits />
        <EuropeanMarketFocus />
        <ExpansionRoadmap />
        <GlobalReachCTA />
        <Footer />
      </div>
    </main>
  );
}
