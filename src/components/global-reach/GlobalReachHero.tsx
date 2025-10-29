"use client";

import { useEffect, useState } from "react";
import { Globe, MapPin, Building2, TrendingUp } from "lucide-react";

export const GlobalReachHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1D21]">
      {/* World Map Background with Belgium Highlighted */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1D21] via-transparent to-[#1A1D21]" />
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified world map paths */}
          <path
            d="M100,150 L150,120 L200,130 L250,140 L300,150 L350,160 L400,170 L450,180 L500,190 L550,200 L600,210 L650,220 L700,230 L750,240 L800,250 L850,260 L900,270"
            stroke="#2D3748"
            strokeWidth="2"
            fill="none"
            className="opacity-50"
          />
          
          {/* Belgium highlighted with pulsating glow */}
          <circle
            cx="485"
            cy="180"
            r="8"
            className="animate-pulse"
            fill="#DD6B20"
            opacity="0.8"
          >
            <animate
              attributeName="r"
              values="8;12;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="485"
            cy="180"
            r="15"
            fill="none"
            stroke="#DD6B20"
            strokeWidth="2"
            opacity="0.4"
          >
            <animate
              attributeName="r"
              values="15;25;15"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* NEW Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full">
            <span className="w-2 h-2 bg-[#DD6B20] rounded-full animate-pulse" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              NEW EUROPEAN HEADQUARTERS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Global Expansion: European Headquarters
            <br />
            <span className="text-[#DD6B20]">Now Operational in Belgium</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-4xl mx-auto">
            Introducing LK Sri Global NV - Strengthening our 130-year legacy with strategic European presence
          </p>

          {/* Key Highlights Stats */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-8">
            <div className="flex items-center gap-2 text-[#F8FAFC]">
              <Globe className="w-5 h-5 text-[#DD6B20]" />
              <span className="text-lg font-medium">30+ Countries</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-[#2D3748]" />
            <div className="flex items-center gap-2 text-[#F8FAFC]">
              <Building2 className="w-5 h-5 text-[#DD6B20]" />
              <span className="text-lg font-medium">European HQ in Belgium</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-[#2D3748]" />
            <div className="flex items-center gap-2 text-[#F8FAFC]">
              <TrendingUp className="w-5 h-5 text-[#DD6B20]" />
              <span className="text-lg font-medium">BNP Paribas Banking</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-[#2D3748]" />
            <div className="flex items-center gap-2 text-[#F8FAFC]">
              <MapPin className="w-5 h-5 text-[#DD6B20]" />
              <span className="text-lg font-medium">100% Wholly Owned Subsidiary</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-[#DD6B20] text-white rounded-lg hover:bg-[#9C4221] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DD6B20]/50 font-semibold text-lg">
              Contact European HQ
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#DD6B20] text-[#DD6B20] rounded-lg hover:bg-[#DD6B20] hover:text-white transition-all duration-300 font-semibold text-lg">
              Download Company Profile
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1D21] to-transparent" />
    </section>
  );
};
