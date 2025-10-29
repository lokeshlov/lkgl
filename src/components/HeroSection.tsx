"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, Building2, Handshake, ArrowRight } from "lucide-react";

type Props = {};

function HeroSection({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen min-h-[600px] lg:min-h-[800px] overflow-hidden">
      {/* Split Screen Container */}
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* LEFT COLUMN (60%) - Video Background */}
        <div className="relative w-full lg:w-[60%] h-1/2 lg:h-full overflow-hidden">
          {/* Background Image (local) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/placeholder-industrial-3.svg"
              alt="Hero industrial background"
              fill
              priority
              className="object-cover"
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1D21]/80 via-[#1A1D21]/70 to-[#1A1D21]/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 lg:px-12 xl:px-16">
            {/* Main Headline */}
            <h1
              className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FFFFFF] mb-4 lg:mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
                letterSpacing: "-0.02em",
              }}
            >
              130 Years of<br />Steel Excellence
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg md:text-xl lg:text-2xl text-[#F8FAFC] max-w-xl mb-8 lg:mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Six generations building India's industrial backbone
            </p>

            {/* Animated Statistics Bar */}
            <div
              className={`mb-8 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-sm md:text-base lg:text-lg text-[#FFFFFF] font-medium bg-[#2D3748]/40 backdrop-blur-md border border-[#2D3748] rounded-full px-4 lg:px-8 py-3 lg:py-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#DD6B20] text-xl">•</span>
                  <span>Since 1895</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-[#2D3748]" />
                <div className="flex items-center gap-2">
                  <span className="text-[#DD6B20] text-xl">•</span>
                  <span>6 Generations</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-[#2D3748]" />
                <div className="flex items-center gap-2">
                  <span className="text-[#DD6B20] text-xl">•</span>
                  <span>30+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (40%) - HIGHLIGHT PANEL */}
        <div className="relative w-full lg:w-[40%] h-1/2 lg:h-full bg-[#1A1D21] shadow-2xl">
          {/* EU Stars Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="eu-stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="3" fill="#DD6B20" />
                  <circle cx="30" cy="20" r="2" fill="#DD6B20" />
                  <circle cx="70" cy="80" r="2" fill="#DD6B20" />
                  <circle cx="20" cy="70" r="2" fill="#DD6B20" />
                  <circle cx="80" cy="30" r="2" fill="#DD6B20" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#eu-stars)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 lg:px-10 xl:px-12 py-8 lg:py-0">
            
            {/* Large Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#DD6B20] to-[#9C4221] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-bold mb-6 lg:mb-8 shadow-lg transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <span className="text-xl lg:text-2xl">🚀</span>
              <span className="tracking-wide">NEW EUROPEAN HQ</span>
            </div>

            {/* Headline */}
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFFFFF] mb-6 lg:mb-8 leading-tight transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              Now Operating from<br />
              <span className="text-[#DD6B20]">Belgium</span>
            </h2>

            {/* Key Points */}
            <div
              className={`space-y-4 lg:space-y-5 mb-8 lg:mb-10 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DD6B20]/10 flex items-center justify-center group-hover:bg-[#DD6B20]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#DD6B20]" />
                </div>
                <div>
                  <p className="text-[#FFFFFF] font-semibold text-base lg:text-lg">LK Sri Global NV</p>
                  <p className="text-[#94A3B8] text-sm lg:text-base">Antwerp, Belgium</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DD6B20]/10 flex items-center justify-center group-hover:bg-[#DD6B20]/20 transition-colors">
                  <Building2 className="w-5 h-5 text-[#DD6B20]" />
                </div>
                <div>
                  <p className="text-[#FFFFFF] font-semibold text-base lg:text-lg">100% Wholly Owned</p>
                  <p className="text-[#94A3B8] text-sm lg:text-base">Subsidiary Company</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DD6B20]/10 flex items-center justify-center group-hover:bg-[#DD6B20]/20 transition-colors">
                  <Handshake className="w-5 h-5 text-[#DD6B20]" />
                </div>
                <div>
                  <p className="text-[#FFFFFF] font-semibold text-base lg:text-lg">BNP Paribas Partner</p>
                  <p className="text-[#94A3B8] text-sm lg:text-base">Banking Excellence</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className={`group relative px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-semibold text-[#FFFFFF] bg-[#DD6B20] hover:bg-[#9C4221] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#DD6B20]/50 overflow-hidden flex items-center gap-2 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <span className="relative z-10">Explore Our Global Expansion</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Decorative Element */}
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#DD6B20]/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToContent}
        className={`absolute bottom-8 left-8 lg:left-[30%] flex flex-col items-center gap-2 text-[#FFFFFF]/80 hover:text-[#DD6B20] transition-all duration-300 animate-bounce cursor-pointer group ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll down"
      >
        <span className="text-xs lg:text-sm font-medium tracking-wider uppercase">
          Scroll
        </span>
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-[#2D3748] group-hover:border-[#DD6B20] flex items-center justify-center group-hover:scale-110 transition-all">
          <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
        </div>
      </button>
    </div>
  );
}

export default HeroSection;