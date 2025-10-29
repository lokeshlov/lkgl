import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { GenerationsTimeline } from "@/components/about/GenerationsTimeline";
import { CompanyTimeline } from "@/components/about/CompanyTimeline";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";
import { ValuesAndMission } from "@/components/about/ValuesAndMission";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#1A1D21]">
      <div className="pt-20">
        <AboutHero />
        <GenerationsTimeline />
        <CompanyTimeline />
        <LeadershipTeam />
        <ValuesAndMission />
        <Footer />
      </div>
    </main>
  );
}