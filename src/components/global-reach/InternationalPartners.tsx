"use client";

import { Building2, Globe, Award } from "lucide-react";

interface Partner {
  name: string;
  country: string;
  category: string;
}

export const InternationalPartners = () => {
  const europeanPartners: Partner[] = [
    { name: "BNP Paribas Fortis", country: "Belgium", category: "Banking Partner" },
    { name: "ABS Italy", country: "Italy", category: "Steel Manufacturing" },
    { name: "Eramet", country: "France", category: "Raw Materials" },
    { name: "Glencore", country: "Switzerland", category: "Nickel/Trading" },
  ];

  const globalPartners: Partner[] = [
    { name: "Hyundai Steel", country: "South Korea", category: "Steel Manufacturing" },
    { name: "Sanyo Special Steel", country: "Japan", category: "Special Steel" },
    { name: "Gerdau", country: "Brazil", category: "Steel Production" },
    { name: "JSW Steel", country: "India", category: "Steel Manufacturing" },
    { name: "Posco", country: "South Korea", category: "Steel Manufacturing" },
    { name: "Tsingshan Group", country: "China", category: "Stainless Steel" },
  ];

  return (
    <section className="py-24 bg-[#1A1D21]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-6">
            <Award className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              TRUSTED PARTNERSHIPS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            International Partners
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Collaborating with industry leaders across Europe and the world
          </p>
        </div>

        {/* European Partners Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#DD6B20] rounded-xl">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">European Partners</h3>
              <p className="text-[#94A3B8]">Strategic partnerships in Europe led by Belgian operations</p>
            </div>
            <span className="ml-auto px-3 py-1 bg-[#DD6B20] text-white text-sm font-bold rounded-full">
              FEATURED
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {europeanPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#2D3748] rounded-xl p-6 border-2 border-[#DD6B20] hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#DD6B20]/20"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#DD6B20] bg-opacity-20 rounded-lg flex items-center justify-center mb-3">
                    <Building2 className="w-6 h-6 text-[#DD6B20]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-[#DD6B20] font-semibold">
                    {partner.country}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2D3748]">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-medium">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Partners Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#2D3748] rounded-xl">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Global Partners</h3>
              <p className="text-[#94A3B8]">Worldwide network of trusted industry leaders</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-[#2D3748] rounded-xl p-6 border border-[#2D3748] hover:border-[#DD6B20] hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#2D3748] rounded-lg flex items-center justify-center mb-3">
                    <Globe className="w-6 h-6 text-[#94A3B8]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-[#94A3B8] font-semibold">
                    {partner.country}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2D3748]">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-medium">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#2D3748] rounded-xl border border-[#2D3748]">
            <p className="text-4xl font-bold text-[#DD6B20] mb-2">50+</p>
            <p className="text-[#94A3B8]">Global Partners</p>
          </div>
          <div className="text-center p-6 bg-[#2D3748] rounded-xl border border-[#2D3748]">
            <p className="text-4xl font-bold text-[#DD6B20] mb-2">30+</p>
            <p className="text-[#94A3B8]">Countries</p>
          </div>
          <div className="text-center p-6 bg-[#2D3748] rounded-xl border border-[#2D3748]">
            <p className="text-4xl font-bold text-[#DD6B20] mb-2">15+</p>
            <p className="text-[#94A3B8]">European Partners</p>
          </div>
          <div className="text-center p-6 bg-[#2D3748] rounded-xl border border-[#DD6B20]">
            <p className="text-4xl font-bold text-[#DD6B20] mb-2">NEW</p>
            <p className="text-[#94A3B8]">Belgium HQ</p>
          </div>
        </div>
      </div>
    </section>
  );
};
