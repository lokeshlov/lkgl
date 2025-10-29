"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Scale, Building2, Handshake, Factory, Globe, Building, TrendingUp, Award } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: any;
  side: "left" | "right";
  era: string;
  imageUrl: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "1895",
    title: "The Beginning",
    description: "Started as cloth commission agents in Amritsar, laying the foundation of trust and integrity that would define our legacy.",
    icon: Scale,
    side: "left",
    era: "Foundation Era",
    imageUrl: "/images/placeholder-industrial-1.svg"
  },
  {
    year: "1960",
    title: "Steel Entry",
    description: "Began steel trading operations in Mumbai, marking our entry into the industrial sector that would become our core business.",
    icon: Building2,
    side: "left",
    era: "Foundation Era",
    imageUrl: "/images/placeholder-industrial-2.svg"
  },
  {
    year: "1973",
    title: "Exclusive Partnerships",
    description: "Became exclusive distributor for major steel mills, establishing relationships that continue to drive our success today.",
    icon: Handshake,
    side: "right",
    era: "Growth Era",
    imageUrl: "/images/placeholder-industrial-3.svg"
  },
  {
    year: "1995",
    title: "Manufacturing Expansion",
    description: "Started Puja Ferro Alloys in Goa, expanding from trading into manufacturing and vertical integration.",
    icon: Factory,
    side: "right",
    era: "Growth Era",
    imageUrl: "/images/placeholder-industrial-1.svg"
  },
  {
    year: "1997",
    title: "Global Reach",
    description: "Expanded international trading operations, establishing presence across multiple continents and opening new markets.",
    icon: Globe,
    side: "left",
    era: "Diversification Era",
    imageUrl: "/images/placeholder-industrial-2.svg"
  },
  {
    year: "2011",
    title: "Real Estate Venture",
    description: "Launched first residential projects, diversifying into real estate development with focus on quality and timely delivery.",
    icon: Building,
    side: "left",
    era: "Diversification Era",
    imageUrl: "/images/placeholder-industrial-3.svg"
  },
  {
    year: "2020",
    title: "Financial Services",
    description: "Received RBI approval for LK Finserv NBFC, adding financial services to our diversified business portfolio.",
    icon: TrendingUp,
    side: "right",
    era: "Modern Era",
    imageUrl: "/images/placeholder-industrial-1.svg"
  },
  {
    year: "2023-2024",
    title: "Industry Recognition",
    description: "Awarded 3-Star Export House status, recognizing our contribution to India's export economy and global trade.",
    icon: Award,
    side: "right",
    era: "Modern Era",
    imageUrl: "/images/placeholder-industrial-2.svg"
  },
];

export function TimelineSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#1A1D21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-lg lg:text-xl text-[#F8FAFC] max-w-3xl mx-auto">
            Explore 130 years of innovation, growth, and excellence across six generations
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#DD6B20] via-[#DD6B20]/50 to-[#DD6B20] h-full hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-index={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center`}>
                  {/* Left Side Content */}
                  <div className={`${item.side === "left" ? "lg:text-right" : "lg:order-2"}`}>
                    <div
                      className={`inline-block bg-[#2D3748] rounded-xl p-8 hover:bg-[#DD6B20]/10 transition-all duration-300 cursor-pointer border border-[#DD6B20]/20 hover:border-[#DD6B20]/50 hover:shadow-lg hover:shadow-[#DD6B20]/20 ${
                        activeItem === index ? "scale-105 bg-[#DD6B20]/10 border-[#DD6B20]" : ""
                      }`}
                      onClick={() => setActiveItem(activeItem === index ? null : index)}
                    >
                      {/* Era Label */}
                      <span className="inline-block text-xs font-semibold text-[#DD6B20] bg-[#DD6B20]/10 px-3 py-1 rounded-full mb-3">
                        {item.era}
                      </span>

                      {/* Year */}
                      <div className="text-5xl font-bold text-[#DD6B20] mb-4">
                        {item.year}
                      </div>

                      {/* Title with Icon */}
                      <div className={`flex items-center gap-3 mb-4 ${item.side === "left" ? "lg:justify-end" : ""}`}>
                        <div className="p-2 rounded-lg bg-[#DD6B20]/20">
                          <item.icon className="w-6 h-6 text-[#DD6B20]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-[#F8FAFC] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Expandable Image */}
                      {activeItem === index && (
                        <div className="mt-6 rounded-lg overflow-hidden animate-fadeIn">
                          <div className="relative w-full h-64">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-cover"
                              priority={index < 2}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Image Preview (Desktop) */}
                  <div className={`hidden lg:block ${item.side === "right" ? "lg:text-right" : "lg:order-1"}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#DD6B20]/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="relative w-full h-80">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover rounded-lg shadow-xl border-2 border-[#DD6B20]/30 group-hover:border-[#DD6B20] transition-all duration-300"
                          priority={index < 2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Center Dot on Timeline */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#DD6B20] border-4 border-[#1A1D21] shadow-lg shadow-[#DD6B20]/50 z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline Indicator */}
        <div className="lg:hidden mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-[#94A3B8]">
            <div className="w-3 h-3 rounded-full bg-[#DD6B20]" />
            <span>Tap cards to view historical photos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
