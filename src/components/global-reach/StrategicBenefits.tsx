"use client";

import { CheckCircle, MapPin, Clock, Euro, Shield, TrendingUp } from "lucide-react";

interface Benefit {
  icon: any;
  title: string;
  description: string;
}

export const StrategicBenefits = () => {
  const benefits: Benefit[] = [
    {
      icon: MapPin,
      title: "Direct EU Market Access",
      description: "Seamless entry to all European Union markets with local presence and compliance",
    },
    {
      icon: TrendingUp,
      title: "Antwerp Port Logistics",
      description: "Faster shipping and logistics from one of Europe's largest and most efficient ports",
    },
    {
      icon: Clock,
      title: "European Timezone Support",
      description: "Local customer service and support aligned with European business hours",
    },
    {
      icon: Euro,
      title: "Euro-Denominated Transactions",
      description: "Direct Euro transactions eliminating currency conversion complexities",
    },
    {
      icon: Shield,
      title: "Enhanced EU Credibility",
      description: "Local presence increases trust and credibility with European clients",
    },
    {
      icon: CheckCircle,
      title: "BNP Paribas Partnership",
      description: "Banking with one of Europe's leading financial institutions ensures reliability",
    },
  ];

  return (
    <section className="py-24 bg-[#2D3748] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#DD6B20] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DD6B20] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              STRATEGIC ADVANTAGES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benefits of Belgian Subsidiary
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Strategic advantages that strengthen our European presence and service delivery
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-[#1A1D21] rounded-2xl p-8 border border-[#2D3748] hover:border-[#DD6B20] transition-all duration-300 hover:scale-105 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#DD6B20] bg-opacity-20 rounded-xl flex items-center justify-center group-hover:bg-[#DD6B20] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#DD6B20] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#DD6B20] to-[#9C4221] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Our European Team?
          </h3>
          <p className="text-white text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the advantages of working with a local European partner backed by 130 years of global expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#DD6B20] rounded-lg hover:bg-[#F8FAFC] transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-xl">
              Contact Belgium Office
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#DD6B20] transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
