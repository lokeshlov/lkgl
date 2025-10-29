"use client";

import { useState } from "react";
import { MapPin, Building2, Globe } from "lucide-react";

interface Region {
  id: string;
  name: string;
  color: string;
  countries: string[];
  x: number;
  y: number;
}

export const InteractiveWorldMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    {
      id: "belgium",
      name: "Belgium - European HQ",
      color: "#DD6B20",
      countries: ["Belgium (HQ)", "Netherlands", "Luxembourg"],
      x: 485,
      y: 180,
    },
    {
      id: "europe",
      name: "Europe",
      color: "#60A5FA",
      countries: ["Italy", "Germany", "France", "Switzerland", "Sweden", "Slovenia", "Austria"],
      x: 500,
      y: 200,
    },
    {
      id: "asia",
      name: "Asia-Pacific",
      color: "#34D399",
      countries: ["Japan", "South Korea", "China", "Taiwan", "Hong Kong", "Singapore", "Vietnam", "Indonesia", "Bangladesh"],
      x: 750,
      y: 250,
    },
    {
      id: "americas",
      name: "Americas",
      color: "#F59E0B",
      countries: ["USA", "Canada", "Brazil", "Colombia"],
      x: 200,
      y: 220,
    },
    {
      id: "middle-east",
      name: "Middle East & Africa",
      color: "#A78BFA",
      countries: ["UAE", "Qatar", "South Africa", "Zambia", "Gabon", "Ivory Coast"],
      x: 550,
      y: 280,
    },
  ];

  return (
    <section className="py-24 bg-[#1A1D21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-6">
            <Globe className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              GLOBAL PRESENCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Worldwide Network
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Operating across 30+ countries with Belgium as our European command center
          </p>
        </div>

        {/* Interactive Map Container */}
        <div className="bg-[#2D3748] rounded-2xl p-8 border border-[#2D3748] shadow-2xl">
          <div className="relative aspect-[2/1] bg-[#1A1D21] rounded-xl overflow-hidden">
            {/* World Map SVG */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#2D3748" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#grid)" />

              {/* Connection lines from Belgium to other regions */}
              <g opacity="0.3">
                <line x1="485" y1="180" x2="500" y2="200" stroke="#DD6B20" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="485" y1="180" x2="750" y2="250" stroke="#DD6B20" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="485" y1="180" x2="200" y2="220" stroke="#DD6B20" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="485" y1="180" x2="550" y2="280" stroke="#DD6B20" strokeWidth="2" strokeDasharray="5,5" />
              </g>

              {/* Region markers */}
              {regions.map((region) => (
                <g
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className="cursor-pointer transition-transform hover:scale-110"
                  style={{ transformOrigin: `${region.x}px ${region.y}px` }}
                >
                  {/* Outer pulse ring for Belgium */}
                  {region.id === "belgium" && (
                    <>
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r="30"
                        fill="none"
                        stroke={region.color}
                        strokeWidth="2"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values="30;45;30"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0;0.3"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </>
                  )}

                  {/* Main circle */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={region.id === "belgium" ? "20" : "15"}
                    fill={region.color}
                    opacity={selectedRegion === region.id ? "1" : "0.7"}
                    className="transition-opacity"
                  />

                  {/* Icon for Belgium */}
                  {region.id === "belgium" && (
                    <text
                      x={region.x}
                      y={region.y + 5}
                      textAnchor="middle"
                      fill="white"
                      fontSize="16"
                      fontWeight="bold"
                    >
                      ★
                    </text>
                  )}

                  {/* NEW badge for Belgium */}
                  {region.id === "belgium" && (
                    <g>
                      <rect
                        x={region.x - 20}
                        y={region.y - 50}
                        width="40"
                        height="20"
                        rx="10"
                        fill="#DD6B20"
                      />
                      <text
                        x={region.x}
                        y={region.y - 36}
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        NEW
                      </text>
                    </g>
                  )}

                  {/* Label */}
                  <text
                    x={region.x}
                    y={region.y + 35}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="600"
                  >
                    {region.name.split(" - ")[0]}
                  </text>
                </g>
              ))}
            </svg>

            {/* Hover tooltip */}
            {selectedRegion && (
              <div className="absolute bottom-4 left-4 right-4 bg-[#1A1D21] border border-[#DD6B20] rounded-lg p-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#DD6B20] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-2">
                      {regions.find((r) => r.id === selectedRegion)?.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {regions
                        .find((r) => r.id === selectedRegion)
                        ?.countries.map((country) => (
                          <span
                            key={country}
                            className="px-2 py-1 bg-[#2D3748] text-[#94A3B8] text-xs rounded"
                          >
                            {country}
                          </span>
                        ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedRegion(null)}
                    className="text-[#94A3B8] hover:text-white text-xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  selectedRegion === region.id
                    ? "bg-[#DD6B20] text-white"
                    : "bg-[#1A1D21] text-[#94A3B8] hover:bg-[#2D3748]"
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                <span className="text-sm font-medium">
                  {region.name}
                  {region.id === "belgium" && (
                    <span className="ml-2 px-2 py-0.5 bg-[#DD6B20] text-white text-xs rounded-full">
                      HQ
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
