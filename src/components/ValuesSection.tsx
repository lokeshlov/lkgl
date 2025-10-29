"use client";

import { Shield, Lightbulb, TrendingUp, Users, Target, Globe2 } from "lucide-react";

export function ValuesSection() {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices across all operations."
    },
    {
      icon: Lightbulb,
      title: "Quality",
      description: "Uncompromising commitment to excellence in products, services, and customer relationships."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing modern solutions while respecting traditional values that have guided us for 130 years."
    },
    {
      icon: Users,
      title: "Legacy",
      description: "Six generations of family leadership united by a shared vision of sustainable growth and excellence."
    }
  ];

  const leadership = [
    {
      name: "Mr. Vanit Gupta",
      title: "Chairman & Managing Director",
      quote: "Our strength lies in maintaining the values established by our founders while adapting to modern market demands."
    },
    {
      name: "Ankit Gupta",
      title: "Director - Steel & Trading",
      quote: "Technology and tradition can coexist. We're building on our legacy while embracing digital transformation."
    },
    {
      name: "Rohin Gupta",
      title: "Director - Real Estate & Finserv",
      quote: "Diversification isn't just about growth—it's about creating sustainable value for future generations."
    }
  ];

  return (
    <section className="py-24 bg-[#1A1D21]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Values & Vision
          </h2>
          <p className="text-lg lg:text-xl text-[#F8FAFC] max-w-3xl mx-auto">
            Principles that have guided us through 130 years and will lead us into the future
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-[#2D3748] rounded-xl p-8 hover:bg-[#DD6B20]/10 transition-all duration-300 border border-[#DD6B20]/20 hover:border-[#DD6B20]/50 hover:shadow-lg hover:shadow-[#DD6B20]/20 group"
            >
              <div className="w-16 h-16 rounded-full bg-[#DD6B20]/20 flex items-center justify-center mb-6 group-hover:bg-[#DD6B20] transition-colors duration-300">
                <value.icon className="w-8 h-8 text-[#DD6B20] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-[#F8FAFC] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-[#2D3748] to-[#1A1D21] rounded-2xl p-10 border border-[#DD6B20]/20">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#DD6B20]" />
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-lg text-[#F8FAFC] leading-relaxed mb-6">
              To deliver superior quality steel products, innovative real estate solutions, and professional financial services 
              while maintaining the integrity and trust that have defined our family business for six generations.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DD6B20] mt-2" />
                <span className="text-[#F8FAFC]">Excellence in every transaction</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DD6B20] mt-2" />
                <span className="text-[#F8FAFC]">Long-term customer relationships</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DD6B20] mt-2" />
                <span className="text-[#F8FAFC]">Sustainable business practices</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-[#DD6B20]/20 to-[#1A1D21] rounded-2xl p-10 border border-[#DD6B20]/50">
            <div className="flex items-center gap-3 mb-6">
              <Globe2 className="w-8 h-8 text-[#DD6B20]" />
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-lg text-[#F8FAFC] leading-relaxed mb-6">
              To be recognized as India's most trusted and innovative industrial group, expanding our global footprint 
              while staying rooted in the values established by our founders in 1895.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DD6B20] mt-2" />
                <span className="text-[#F8FAFC]">Global leadership in steel trading</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DD6B20] mt-2" />
                <span className="text-[#F8FAFC]">Premier real estate developer</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DD6B20] mt-2" />
                <span className="text-[#F8FAFC]">Trusted financial services partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Leadership Quotes */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Words from Current Leadership
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-[#2D3748] rounded-xl p-8 hover:bg-[#DD6B20]/10 transition-all duration-300 border border-[#DD6B20]/20"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DD6B20] to-[#9C4221] flex items-center justify-center text-2xl font-bold text-white mb-6">
                  {leader.name.split(' ')[0][0]}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{leader.name}</h4>
                <p className="text-sm text-[#DD6B20] mb-4 font-semibold">{leader.title}</p>
                <p className="text-[#F8FAFC] italic leading-relaxed">
                  "{leader.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
