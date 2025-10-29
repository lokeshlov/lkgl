"use client";

import { motion } from "framer-motion";
import { Users, Award, TrendingUp } from "lucide-react";

const generations = [
  {
    generation: "1st Generation",
    period: "1895 - 1920",
    founder: "The Founders",
    achievement: "Established cloth commission business in Mumbai",
    icon: Award,
  },
  {
    generation: "2nd Generation",
    period: "1920 - 1945",
    founder: "Second Generation Leaders",
    achievement: "Expanded trading operations across India",
    icon: TrendingUp,
  },
  {
    generation: "3rd Generation",
    period: "1945 - 1970",
    founder: "Third Generation",
    achievement: "Entered steel trading business in 1960",
    icon: Users,
  },
  {
    generation: "4th Generation",
    period: "1970 - 1995",
    founder: "Fourth Generation",
    achievement: "Became exclusive distributors & started manufacturing",
    icon: Award,
  },
  {
    generation: "5th Generation",
    period: "1995 - 2020",
    founder: "Fifth Generation",
    achievement: "International expansion & diversification",
    icon: TrendingUp,
  },
  {
    generation: "6th Generation",
    period: "2020 - Present",
    founder: "Current Leadership",
    achievement: "Belgium HQ & digital transformation",
    icon: Users,
  },
];

export function GenerationsTimeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DD6B20]/10 border border-[#DD6B20]/20 mb-4">
            <Users className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-sm font-medium text-[#DD6B20]">Our Heritage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Six Generations of Excellence
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            A journey spanning over 130 years, each generation building upon the legacy
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DD6B20] via-[#DD6B20]/50 to-transparent hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {generations.map((gen, index) => {
              const Icon = gen.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative md:grid md:grid-cols-2 gap-8 items-center ${
                    isLeft ? "" : "md:text-right"
                  }`}
                >
                  {/* Content */}
                  <div className={isLeft ? "md:pr-12" : "md:pl-12 md:order-2"}>
                    <div className="bg-[#2D3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#DD6B20]/30 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                        <div className="p-2 bg-[#DD6B20]/10 rounded-lg">
                          <Icon className="w-5 h-5 text-[#DD6B20]" />
                        </div>
                        <div className="text-xs font-medium text-[#DD6B20] uppercase tracking-wider">
                          {gen.period}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {gen.generation}
                      </h3>
                      <p className="text-sm text-[#94A3B8] mb-3">{gen.founder}</p>
                      <p className="text-base text-[#CBD5E0]">{gen.achievement}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="w-4 h-4 bg-[#DD6B20] rounded-full ring-4 ring-[#DD6B20]/20"
                    ></motion.div>
                  </div>

                  {/* Empty Space for Alternating Layout */}
                  <div className={isLeft ? "md:order-2" : ""}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
