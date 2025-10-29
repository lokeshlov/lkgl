"use client";

import { Users, TrendingUp, Award } from "lucide-react";

export function LeadershipIntro() {
  const generations = [
    { name: "Mr. Lachhmichar", title: "Founder (1895)", period: "Generation 1" },
    { name: "Mr. Kanshiram", title: "Entrepreneur", period: "Generation 2" },
    { name: "Mr. Ram Prakash", title: "Explorer", period: "Generation 3" },
    { name: "Mr. L.K. Gupta", title: "Visionary", period: "Generation 4" },
    { name: "Mr. Vanit Gupta", title: "Fortifier", period: "Generation 5" },
    { name: "Ankit & Rohin Gupta", title: "Next Generation", period: "Generation 6" },
  ];

  const values = [
    { icon: Award, label: "Integrity", description: "Built on trust and transparency" },
    { icon: TrendingUp, label: "Innovation", description: "Embracing modern solutions" },
    { icon: Users, label: "Family Legacy", description: "Six generations of excellence" },
  ];

  return (
    <section className="py-20 bg-[#2D3748]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            A Legacy Spanning 130 Years
          </h2>
          <p className="text-lg lg:text-xl text-[#F8FAFC] max-w-3xl mx-auto leading-relaxed">
            From cloth commission agents in 1895 to a diversified industrial powerhouse, 
            the LK Group story is one of vision, perseverance, and unwavering commitment to excellence 
            across six generations of family leadership.
          </p>
        </div>

        {/* Photo Grid of Generations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {generations.map((gen, index) => (
            <div 
              key={index}
              className="bg-[#1A1D21] rounded-lg p-6 text-center hover:bg-[#DD6B20]/10 transition-all duration-300 border border-[#DD6B20]/20"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#DD6B20] to-[#9C4221] mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                {index + 1}
              </div>
              <p className="text-sm text-[#DD6B20] font-semibold mb-1">{gen.period}</p>
              <h3 className="text-base font-bold text-white mb-1 leading-tight">{gen.name}</h3>
              <p className="text-xs text-[#94A3B8]">{gen.title}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-[#1A1D21] hover:bg-[#1A1D21]/80 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DD6B20]/20 mb-4">
                <value.icon className="w-8 h-8 text-[#DD6B20]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{value.label}</h3>
              <p className="text-[#94A3B8]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
