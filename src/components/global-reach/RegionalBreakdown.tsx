"use client";

import { Crown, Globe, TrendingUp, Package } from "lucide-react";

interface RegionData {
  id: string;
  name: string;
  icon: any;
  featured?: boolean;
  countries: string[];
  partners: string[];
  advantage?: string;
}

export const RegionalBreakdown = () => {
  const regions: RegionData[] = [
    {
      id: "europe",
      name: "European Operations - Led by LK Sri Global NV, Belgium",
      icon: Crown,
      featured: true,
      countries: [
        "Belgium (HQ)",
        "Italy",
        "Germany",
        "France",
        "Switzerland",
        "Sweden",
        "Slovenia",
        "Austria",
      ],
      partners: [
        "ABS Italy",
        "Eramet France",
        "Glencore Switzerland",
        "Various European mills",
      ],
      advantage: "Local presence for faster service and logistics from Antwerp hub",
    },
    {
      id: "asia",
      name: "Asia-Pacific Region",
      icon: Globe,
      countries: [
        "Japan",
        "South Korea",
        "China",
        "Taiwan",
        "Hong Kong",
        "Singapore",
        "Vietnam",
        "Indonesia",
        "Bangladesh",
      ],
      partners: [
        "Hyundai Steel",
        "Sanyo Steel",
        "Posco",
        "Tsingshan Group",
      ],
    },
    {
      id: "americas",
      name: "Americas Region",
      icon: TrendingUp,
      countries: ["USA", "Canada", "Brazil", "Colombia"],
      partners: ["Gerdau", "Various scrap suppliers"],
    },
    {
      id: "middle-east",
      name: "Middle East & Africa",
      icon: Package,
      countries: ["UAE", "Qatar", "South Africa", "Zambia", "Gabon", "Ivory Coast"],
      partners: ["Various mining companies"],
    },
  ];

  return (
    <section className="py-24 bg-[#2D3748]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Regional Operations
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Strategic presence across four major regions with Europe as our newest expansion
          </p>
        </div>

        {/* Regions Grid */}
        <div className="space-y-8">
          {regions.map((region, index) => {
            const Icon = region.icon;
            return (
              <div
                key={region.id}
                className={`bg-[#1A1D21] rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] ${
                  region.featured
                    ? "border-[#DD6B20] shadow-xl shadow-[#DD6B20]/20"
                    : "border-[#2D3748] hover:border-[#DD6B20]"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: Header */}
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`p-3 rounded-xl ${
                            region.featured
                              ? "bg-[#DD6B20]"
                              : "bg-[#2D3748]"
                          }`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {region.featured && (
                          <span className="px-3 py-1 bg-[#DD6B20] text-white text-xs font-bold rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {region.name}
                      </h3>
                      {region.advantage && (
                        <div className="p-4 bg-[#DD6B20] bg-opacity-10 border border-[#DD6B20] rounded-lg">
                          <p className="text-sm text-[#F8FAFC] leading-relaxed">
                            <span className="font-semibold text-[#DD6B20]">
                              Strategic Advantage:
                            </span>{" "}
                            {region.advantage}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right: Details */}
                    <div className="md:w-2/3 space-y-6">
                      {/* Countries */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#DD6B20] mb-3 uppercase tracking-wider">
                          Key Countries ({region.countries.length})
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {region.countries.map((country) => (
                            <span
                              key={country}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                country.includes("HQ")
                                  ? "bg-[#DD6B20] text-white"
                                  : "bg-[#2D3748] text-[#94A3B8] hover:bg-[#2D3748]/70"
                              }`}
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Major Partners */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#DD6B20] mb-3 uppercase tracking-wider">
                          Major Partners
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {region.partners.map((partner) => (
                            <div
                              key={partner}
                              className="flex items-center gap-2 p-3 bg-[#2D3748] rounded-lg"
                            >
                              <div className="w-2 h-2 bg-[#DD6B20] rounded-full" />
                              <span className="text-[#F8FAFC] text-sm">
                                {partner}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
