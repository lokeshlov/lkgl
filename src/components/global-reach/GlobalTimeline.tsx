"use client";

import { Crown, Globe, TrendingUp, Award, Building2, Package } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: any;
  featured?: boolean;
}

export const GlobalTimeline = () => {
  const events: TimelineEvent[] = [
    {
      year: "1895",
      title: "The Beginning",
      description: "Started as commission agents in Amritsar",
      icon: Globe,
    },
    {
      year: "1960",
      title: "Steel Entry",
      description: "Began steel trading operations in Mumbai",
      icon: Building2,
    },
    {
      year: "1973",
      title: "Exclusive Partnerships",
      description: "Became authorized distributor for major steel mills",
      icon: Package,
    },
    {
      year: "1997",
      title: "Global Expansion",
      description: "Launched international trading operations",
      icon: Globe,
    },
    {
      year: "2023",
      title: "Export Excellence",
      description: "Achieved 3-Star Export House status",
      icon: Award,
    },
    {
      year: "2024",
      title: "European Headquarters",
      description: "LK Sri Global NV established in Belgium with BNP Paribas banking partnership",
      icon: Crown,
      featured: true,
    },
  ];

  return (
    <section className="py-24 bg-[#2D3748] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#DD6B20] to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              GLOBAL EXPANSION TIMELINE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            130 Years of Growth
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            From local beginnings to global presence with European headquarters
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2D3748]" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#2D3748] z-10" 
                    style={{ backgroundColor: event.featured ? "#DD6B20" : "#1A1D21" }}
                  >
                    {event.featured && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-[#DD6B20] opacity-75" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <div
                      className={`bg-[#1A1D21] rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                        event.featured
                          ? "border-[#DD6B20] shadow-xl shadow-[#DD6B20]/20"
                          : "border-[#2D3748] hover:border-[#DD6B20]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl flex-shrink-0 ${
                            event.featured ? "bg-[#DD6B20]" : "bg-[#2D3748]"
                          }`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`text-2xl font-bold ${
                                event.featured ? "text-[#DD6B20]" : "text-[#94A3B8]"
                              }`}
                            >
                              {event.year}
                            </span>
                            {event.featured && (
                              <span className="px-2 py-1 bg-[#DD6B20] text-white text-xs font-bold rounded-full animate-pulse">
                                NEW
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {event.title}
                          </h3>
                          <p className="text-[#94A3B8] leading-relaxed">
                            {event.description}
                          </p>
                          {event.featured && (
                            <div className="mt-4 pt-4 border-t border-[#2D3748]">
                              <p className="text-sm text-[#DD6B20] font-semibold">
                                Key Achievement: 100% subsidiary with BNP Paribas partnership
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
