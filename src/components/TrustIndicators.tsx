"use client";

import { Award, Shield, CheckCircle2, TrendingUp, Building2, Globe } from "lucide-react";

export function TrustIndicators() {
  const partners = [
    { name: "Gerdau (Arjas Steel)", country: "Brazil", type: "Steel Manufacturing" },
    { name: "Hyundai Steel", country: "South Korea", type: "Steel Production" },
    { name: "JSW Steel", country: "India", type: "Steel & Alloys" },
    { name: "MUSCO", country: "Global", type: "Steel Distribution" },
    { name: "Tsingshan Group", country: "China", type: "Stainless Steel" },
    { name: "POSCO Steel", country: "South Korea", type: "Integrated Steel" },
    { name: "Glencore", country: "Switzerland", type: "Nickel Trading" },
    { name: "Eramet", country: "France", type: "Manganese Ore" },
    { name: "BNP Paribas", country: "Belgium", type: "Banking Partner" }
  ];

  const certifications = [
    {
      icon: Award,
      title: "3-Star Export House",
      issuer: "Govt. of India",
      badge: "2023-24"
    },
    {
      icon: Shield,
      title: "RBI Approved NBFC",
      issuer: "Reserve Bank of India",
      badge: "Licensed"
    },
    {
      icon: CheckCircle2,
      title: "ISO 9001:2015",
      issuer: "Quality Management",
      badge: "Certified"
    },
    {
      icon: Building2,
      title: "RERA Registered",
      issuer: "Real Estate Authority",
      badge: "Active"
    },
    {
      icon: TrendingUp,
      title: "GST Compliant",
      issuer: "Tax Department",
      badge: "Active"
    },
    {
      icon: Globe,
      title: "IEC Certificate",
      issuer: "DGFT India",
      badge: "Active"
    }
  ];

  const associations = [
    "Federation of Indian Export Organisations (FIEO)",
    "The Institute of Chartered Accountants of India (ICAI)",
    "Bombay Chamber of Commerce & Industry",
    "Indian Steel Association (ISA)",
    "Confederation of Real Estate Developers' (CREDAI)",
    "National Housing Bank (NHB) Member"
  ];

  return (
    <section className="section relative bg-[#2D3748] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #DD6B20 25%, transparent 25%), linear-gradient(-45deg, #DD6B20 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #DD6B20 75%), linear-gradient(-45deg, transparent 75%, #DD6B20 75%)`,
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
          }}
        />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#DD6B20]/10 border border-[#DD6B20]/30 rounded-full text-[#DD6B20] text-sm font-semibold tracking-wider uppercase">
              Trust & Recognition
            </span>
          </div>
          <h2 className="mb-6 tracking-tight">
            Industry Leadership
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Backed by world-class certifications, prestigious partnerships, and industry recognition
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1A1D21] rounded-xl p-6 border border-[#DD6B20]/20 hover:border-[#DD6B20]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#DD6B20]/20 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#DD6B20]/10 flex items-center justify-center group-hover:bg-[#DD6B20] transition-colors duration-300">
                  <cert.icon className="w-6 h-6 text-[#DD6B20] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="px-3 py-1 bg-[#DD6B20]/20 text-[#DD6B20] text-xs font-bold rounded-full">
                  {cert.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-[#94A3B8]">{cert.issuer}</p>
            </div>
          ))}
        </div>

        {/* Global Partners Section */}
        <div className="bg-[#1A1D21] rounded-2xl p-10 border border-[#DD6B20]/20 mb-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Global Manufacturing Partners</h3>
              <p className="text-[#94A3B8]">Trusted collaborations with industry leaders worldwide</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#DD6B20]/10 border border-[#DD6B20]/30 rounded-full">
              <Globe className="w-5 h-5 text-[#DD6B20]" />
              <span className="text-white font-semibold">{partners.length} Partners</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#2D3748] rounded-lg border border-[#DD6B20]/10 hover:border-[#DD6B20]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#DD6B20]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DD6B20] transition-colors duration-300">
                  <Building2 className="w-5 h-5 text-[#DD6B20] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1 group-hover:text-[#DD6B20] transition-colors duration-300">
                    {partner.name}
                  </div>
                  <div className="text-xs text-[#94A3B8]">{partner.country} • {partner.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Associations */}
        <div className="bg-gradient-to-br from-[#DD6B20]/10 to-[#1A1D21] rounded-2xl p-10 border border-[#DD6B20]/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-[#DD6B20] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Industry Memberships</h3>
              <p className="text-[#94A3B8]">Active member of prestigious industry organizations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {associations.map((association, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-[#DD6B20] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#F8FAFC] group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {association}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1D21] border-2 border-[#DD6B20] rounded-full">
            <Award className="w-6 h-6 text-[#DD6B20]" />
            <span className="text-white font-bold text-lg">
              Committed to excellence since 1895
            </span>
            <Award className="w-6 h-6 text-[#DD6B20]" />
          </div>
        </div>
      </div>
    </section>
  );
}
