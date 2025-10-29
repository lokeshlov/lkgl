"use client";

import { Factory, Shield, Leaf, Award } from "lucide-react";

interface FocusArea {
  icon: any;
  title: string;
  items: string[];
}

export const EuropeanMarketFocus = () => {
  const focusAreas: FocusArea[] = [
    {
      icon: Factory,
      title: "Target Industries",
      items: [
        "Automotive Manufacturing",
        "Construction & Infrastructure",
        "Energy & Power Generation",
        "Aerospace & Defense",
        "Heavy Machinery",
        "Shipbuilding",
      ],
    },
    {
      icon: Shield,
      title: "EU Compliance",
      items: [
        "CE Marking Requirements",
        "REACH Regulations",
        "RoHS Compliance",
        "EU Trade Agreements",
        "Customs & Import Regulations",
        "Product Safety Standards",
      ],
    },
    {
      icon: Leaf,
      title: "Sustainability Standards",
      items: [
        "Carbon Footprint Reduction",
        "Green Steel Initiatives",
        "Circular Economy Practices",
        "Environmental Impact Reporting",
        "Sustainable Sourcing",
        "EU Green Deal Alignment",
      ],
    },
    {
      icon: Award,
      title: "Quality Certifications",
      items: [
        "ISO 9001:2015 Quality Management",
        "ISO 14001:2015 Environmental",
        "EN Standards Compliance",
        "Material Test Certificates",
        "Third-Party Inspections",
        "European Quality Assurance",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#1A1D21]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-6">
            <Shield className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              EUROPEAN EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            European Market Focus
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Deep understanding of European requirements, regulations, and industry standards
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="bg-[#2D3748] rounded-2xl p-8 border border-[#2D3748] hover:border-[#DD6B20] transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-[#DD6B20] rounded-xl flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white pt-2">
                    {area.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {area.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3 bg-[#1A1D21] rounded-lg hover:bg-[#1A1D21]/70 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#DD6B20] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F8FAFC]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Badge */}
        <div className="mt-16 bg-gradient-to-br from-[#2D3748] to-[#1A1D21] rounded-2xl p-8 md:p-12 border border-[#DD6B20]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-4">
                <Award className="w-4 h-4 text-[#DD6B20]" />
                <span className="text-[#DD6B20] text-sm font-semibold">
                  FULLY COMPLIANT
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Meeting European Standards
              </h3>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                Our Belgian operations ensure full compliance with all EU regulations, quality standards, and sustainability requirements. We bring the same excellence that has defined our 130-year legacy to the European market.
              </p>
              <button className="px-6 py-3 bg-[#DD6B20] text-white rounded-lg hover:bg-[#9C4221] transition-all duration-300 font-semibold">
                Download Compliance Documents
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1A1D21] p-6 rounded-xl text-center border border-[#2D3748]">
                <Award className="w-10 h-10 text-[#DD6B20] mx-auto mb-3" />
                <p className="text-[#F8FAFC] font-semibold">ISO Certified</p>
              </div>
              <div className="bg-[#1A1D21] p-6 rounded-xl text-center border border-[#2D3748]">
                <Shield className="w-10 h-10 text-[#DD6B20] mx-auto mb-3" />
                <p className="text-[#F8FAFC] font-semibold">EU Compliant</p>
              </div>
              <div className="bg-[#1A1D21] p-6 rounded-xl text-center border border-[#2D3748]">
                <Leaf className="w-10 h-10 text-[#DD6B20] mx-auto mb-3" />
                <p className="text-[#F8FAFC] font-semibold">Sustainable</p>
              </div>
              <div className="bg-[#1A1D21] p-6 rounded-xl text-center border border-[#2D3748]">
                <Factory className="w-10 h-10 text-[#DD6B20] mx-auto mb-3" />
                <p className="text-[#F8FAFC] font-semibold">Industry Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
