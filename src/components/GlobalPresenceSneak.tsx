"use client";

import { MapPin, Building2, Globe, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function GlobalPresenceSneak() {
  const keyLocations = [
    { country: "Belgium", city: "Antwerp", type: "European HQ", highlight: true },
    { country: "India", city: "Mumbai", type: "Global HQ", highlight: true },
    { country: "South Korea", city: "Seoul", type: "Trading Partner", highlight: false },
    { country: "China", city: "Shanghai", type: "Manufacturing", highlight: false },
    { country: "Brazil", city: "São Paulo", type: "Steel Partner", highlight: false },
    { country: "UAE", city: "Dubai", type: "Middle East Hub", highlight: false }
  ];

  const stats = [
    { icon: Globe, value: "30+", label: "Countries" },
    { icon: Building2, value: "50+", label: "Global Partners" },
    { icon: Users, value: "500+", label: "Team Members" },
    { icon: MapPin, value: "2", label: "Headquarters" }
  ];

  return (
    <section className="section relative bg-[#1A1D21] overflow-hidden">
      {/* Background World Map Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="world-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#DD6B20" />
              <circle cx="10" cy="15" r="1" fill="#DD6B20" />
              <circle cx="50" cy="45" r="1" fill="#DD6B20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#world-dots)" />
        </svg>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-[#DD6B20]/10 border border-[#DD6B20]/30 rounded-full text-[#DD6B20] text-sm font-semibold tracking-wider uppercase">
                  Global Presence
                </span>
              </div>
              <h2 className="mb-6 tracking-tight">
                Worldwide Operations
              </h2>
              <p className="text-xl text-[#94A3B8] leading-relaxed">
                From our European headquarters in Belgium to manufacturing partnerships across continents, we deliver excellence globally
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#2D3748] rounded-lg p-6 border border-[#DD6B20]/20 hover:border-[#DD6B20]/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#DD6B20]/10 flex items-center justify-center group-hover:bg-[#DD6B20] transition-colors duration-300">
                      <stat.icon className="w-5 h-5 text-[#DD6B20] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-[#94A3B8]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/global-reach"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DD6B20] to-[#9C4221] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#DD6B20]/30 transition-all duration-300 hover:scale-105 group"
            >
              <span>Explore Global Operations</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right Column - World Map Visualization */}
          <div className="relative">
            {/* Mini World Map Container */}
            <div className="relative bg-[#2D3748] rounded-2xl p-8 border border-[#DD6B20]/20">
              
              {/* Stylized World Map */}
              <div className="relative h-[400px] w-full">
                {/* Belgium - European HQ (Top Left) */}
                <div className="absolute top-[25%] left-[45%] group">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-[#DD6B20]/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-6 h-6 bg-gradient-to-br from-[#DD6B20] to-[#9C4221] rounded-full border-4 border-[#1A1D21] shadow-lg shadow-[#DD6B20]/50 cursor-pointer hover:scale-125 transition-transform duration-300" />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#1A1D21] border border-[#DD6B20] rounded-lg px-4 py-2 shadow-xl">
                        <div className="text-sm font-bold text-[#DD6B20]">🇧🇪 Belgium</div>
                        <div className="text-xs text-white">European HQ - Antwerp</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* India - Global HQ (Center Right) */}
                <div className="absolute top-[45%] left-[65%] group">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-[#DD6B20]/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-6 h-6 bg-gradient-to-br from-[#DD6B20] to-[#9C4221] rounded-full border-4 border-[#1A1D21] shadow-lg shadow-[#DD6B20]/50 cursor-pointer hover:scale-125 transition-transform duration-300" />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#1A1D21] border border-[#DD6B20] rounded-lg px-4 py-2 shadow-xl">
                        <div className="text-sm font-bold text-[#DD6B20]">🇮🇳 India</div>
                        <div className="text-xs text-white">Global HQ - Mumbai</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* South Korea */}
                <div className="absolute top-[30%] left-[75%]">
                  <div className="w-3 h-3 bg-[#DD6B20] rounded-full border-2 border-[#1A1D21] hover:scale-150 transition-transform duration-300 cursor-pointer" />
                </div>

                {/* China */}
                <div className="absolute top-[35%] left-[70%]">
                  <div className="w-3 h-3 bg-[#DD6B20] rounded-full border-2 border-[#1A1D21] hover:scale-150 transition-transform duration-300 cursor-pointer" />
                </div>

                {/* Brazil */}
                <div className="absolute top-[65%] left-[30%]">
                  <div className="w-3 h-3 bg-[#DD6B20] rounded-full border-2 border-[#1A1D21] hover:scale-150 transition-transform duration-300 cursor-pointer" />
                </div>

                {/* UAE */}
                <div className="absolute top-[40%] left-[58%]">
                  <div className="w-3 h-3 bg-[#DD6B20] rounded-full border-2 border-[#1A1D21] hover:scale-150 transition-transform duration-300 cursor-pointer" />
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DD6B20" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#DD6B20" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#DD6B20" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {/* Belgium to India */}
                  <line x1="45%" y1="25%" x2="65%" y2="45%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                  {/* India to Korea */}
                  <line x1="65%" y1="45%" x2="75%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                  {/* Belgium to Brazil */}
                  <line x1="45%" y1="25%" x2="30%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
                </svg>

                {/* Decorative Globe Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#DD6B20]/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[#DD6B20]/10 rounded-full" />
              </div>

              {/* Location List */}
              <div className="mt-6 pt-6 border-t border-[#DD6B20]/20">
                <div className="grid grid-cols-2 gap-3">
                  {keyLocations.slice(0, 6).map((location, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 text-sm ${
                        location.highlight ? "text-[#DD6B20] font-semibold" : "text-[#94A3B8]"
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                      <span>{location.country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#DD6B20]/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
