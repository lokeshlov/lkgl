"use client";

import { Award, CheckCircle2, Shield, TrendingUp, Globe, Building2 } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      icon: Award,
      title: "3-Star Export House",
      issuer: "Government of India",
      year: "2023-2024",
      description: "Recognition for outstanding contribution to India's export economy"
    },
    {
      icon: Shield,
      title: "RBI Approved NBFC",
      issuer: "Reserve Bank of India",
      year: "2020",
      description: "Licensed Non-Banking Financial Company for professional financial services"
    },
    {
      icon: CheckCircle2,
      title: "ISO 9001:2015",
      issuer: "Quality Management",
      year: "Certified",
      description: "International standard for quality management systems"
    },
    {
      icon: Building2,
      title: "RERA Registered",
      issuer: "Real Estate Authority",
      year: "Active",
      description: "Compliant real estate projects with RERA certification"
    },
    {
      icon: TrendingUp,
      title: "GST Compliant",
      issuer: "Tax Department",
      year: "Active",
      description: "Full compliance with Goods and Services Tax regulations"
    },
    {
      icon: Globe,
      title: "IEC Certificate",
      issuer: "DGFT India",
      year: "Active",
      description: "Import Export Code for international trade operations"
    }
  ];

  const memberships = [
    "Federation of Indian Export Organisations (FIEO)",
    "The Institute of Chartered Accountants of India (ICAI)",
    "Bombay Chamber of Commerce & Industry",
    "Indian Steel Association (ISA)",
    "Confederation of Real Estate Developers' Associations of India (CREDAI)",
    "National Housing Bank (NHB) Member"
  ];

  const awards = [
    {
      year: "2024",
      title: "Excellence in Steel Trading",
      organization: "Indian Steel Association"
    },
    {
      year: "2023",
      title: "3-Star Export House Status",
      organization: "Ministry of Commerce, Govt. of India"
    },
    {
      year: "2022",
      title: "Best Real Estate Project - Goa",
      organization: "CREDAI Goa"
    },
    {
      year: "2021",
      title: "Emerging NBFC Award",
      organization: "Financial Services Forum"
    }
  ];

  return (
    <section className="py-24 bg-[#2D3748]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Certifications & Recognition
          </h2>
          <p className="text-lg lg:text-xl text-[#F8FAFC] max-w-3xl mx-auto">
            Industry certifications, memberships, and awards that validate our commitment to excellence
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1A1D21] rounded-xl p-8 hover:bg-[#DD6B20]/10 transition-all duration-300 border border-[#DD6B20]/20 hover:border-[#DD6B20]/50 hover:shadow-lg hover:shadow-[#DD6B20]/20 group"
            >
              <div className="w-16 h-16 rounded-full bg-[#DD6B20]/20 flex items-center justify-center mb-6 group-hover:bg-[#DD6B20] transition-colors duration-300">
                <cert.icon className="w-8 h-8 text-[#DD6B20] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-[#DD6B20] font-semibold">{cert.issuer}</span>
                <span className="text-sm text-[#94A3B8]">• {cert.year}</span>
              </div>
              <p className="text-[#F8FAFC] text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Memberships & Awards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Industry Memberships */}
          <div className="bg-[#1A1D21] rounded-2xl p-10 border border-[#DD6B20]/20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#DD6B20]" />
              Industry Memberships
            </h3>
            <div className="space-y-4">
              {memberships.map((membership, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-[#DD6B20] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[#F8FAFC] group-hover:text-white transition-colors duration-300">
                    {membership}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-gradient-to-br from-[#DD6B20]/20 to-[#1A1D21] rounded-2xl p-10 border border-[#DD6B20]/50">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#DD6B20]" />
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div 
                  key={index} 
                  className="pb-6 border-b border-[#DD6B20]/20 last:border-0 last:pb-0 hover:border-[#DD6B20]/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#DD6B20] flex items-center justify-center text-white font-bold flex-shrink-0">
                      {award.year}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{award.title}</h4>
                      <p className="text-sm text-[#F8FAFC]">{award.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#DD6B20]/10 border border-[#DD6B20] rounded-full">
            <CheckCircle2 className="w-5 h-5 text-[#DD6B20]" />
            <span className="text-white font-semibold">
              Committed to excellence since 1895
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
