"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Globe, Landmark, DollarSign, MapPin } from "lucide-react";

const milestones = [
  {
    year: "1895",
    title: "The Beginning",
    description: "Started as cloth commission agents in Mumbai",
    icon: Building2,
  },
  {
    year: "1960",
    title: "Steel Trading",
    description: "Entered the steel trading business",
    icon: TrendingUp,
  },
  {
    year: "1973",
    title: "Exclusive Partnerships",
    description: "Became exclusive distributors for major steel manufacturers",
    icon: Globe,
  },
  {
    year: "1995",
    title: "Manufacturing Begins",
    description: "Started ferro alloys manufacturing operations",
    icon: Landmark,
  },
  {
    year: "1997",
    title: "Going Global",
    description: "International trading operations commenced",
    icon: Globe,
  },
  {
    year: "2011",
    title: "Real Estate Division",
    description: "Established real estate development arm",
    icon: Building2,
  },
  {
    year: "2020",
    title: "LK Finserv NBFC",
    description: "Launched RBI-approved financial services",
    icon: DollarSign,
  },
  {
    year: "2024",
    title: "Belgium Headquarters",
    description: "Opened European headquarters in Belgium",
    icon: MapPin,
  },
];

export function CompanyTimeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-[#2D3748]/10 to-transparent">
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
            <TrendingUp className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-sm font-medium text-[#DD6B20]">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Milestones
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Pivotal moments that shaped our growth and expansion
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-[#2D3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#DD6B20]/30 transition-all duration-300 h-full">
                  {/* Year Badge */}
                  <div className="inline-flex items-center justify-center w-full mb-4">
                    <div className="px-4 py-1 bg-[#DD6B20]/20 rounded-full">
                      <span className="text-2xl font-bold text-[#DD6B20]">
                        {milestone.year}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#DD6B20]/10 rounded-xl group-hover:bg-[#DD6B20]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#DD6B20]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] text-center leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Connector Line (desktop only) */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#DD6B20]/50 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
