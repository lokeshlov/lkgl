"use client";

import { Factory, Building2, TrendingUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface BusinessCardProps {
  backgroundImage: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  keyPoints: string[];
  achievements: string[];
  partners: string[];
  ctaText: string;
  ctaLink: string;
}

const BusinessCard = ({
  backgroundImage,
  icon,
  title,
  description,
  keyPoints,
  achievements,
  partners,
  ctaText,
  ctaLink,
}: BusinessCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-[700px] rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1D21]/80 via-[#1A1D21]/90 to-[#1A1D21]/95" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-8 lg:p-10">
        {/* Icon */}
        <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <div className="w-16 h-16 rounded-lg bg-[#DD6B20]/20 backdrop-blur-sm border border-[#DD6B20]/30 flex items-center justify-center">
            <div className="text-[#DD6B20]">{icon}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#94A3B8] text-lg mb-6 leading-relaxed">
          {description}
        </p>

        {/* Key Points */}
        <div className="space-y-3 mb-6">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 transform transition-all duration-300"
              style={{
                transitionDelay: isHovered ? `${index * 50}ms` : "0ms",
              }}
            >
              <div className="mt-1.5 w-2 h-2 rounded-full bg-[#DD6B20] flex-shrink-0" />
              <span className="text-[#CBD5E0] text-base">{point}</span>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-6 pb-6 border-b border-[#DD6B20]/20">
          <h4 className="text-sm font-bold text-[#DD6B20] uppercase tracking-wider mb-3">
            Key Achievements
          </h4>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-sm text-[#94A3B8] leading-relaxed">
                • {achievement}
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="flex-1 mb-6">
          <h4 className="text-sm font-bold text-[#DD6B20] uppercase tracking-wider mb-3">
            Key Partners
          </h4>
          <div className="flex flex-wrap gap-2">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#2D3748]/60 backdrop-blur-sm border border-[#DD6B20]/20 rounded-full text-xs text-[#CBD5E0] hover:border-[#DD6B20]/50 transition-colors duration-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={ctaLink}
          className="group/btn relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#DD6B20] to-[#9C4221] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#DD6B20]/30"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
            {ctaText}
          </span>
          <svg
            className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-[#9C4221] to-[#DD6B20] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#DD6B20]/30 rounded-xl transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export const BusinessVerticalsSection = () => {
  return (
    <section className="section relative bg-[#1A1D21] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#DD6B20 1px, transparent 1px), linear-gradient(90deg, #DD6B20 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#DD6B20]/10 border border-[#DD6B20]/30 rounded-full text-[#DD6B20] text-sm font-semibold tracking-wider uppercase">
              Our Business Verticals
            </span>
          </div>
          <h2 className="mb-6 tracking-tight">
            Diversified Excellence
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            From steel trading to real estate and financial services, we deliver
            unmatched quality across industries
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-3">
          {/* Steel & Trading Card */}
          <BusinessCard
            backgroundImage="/images/placeholder-industrial-1.svg"
            icon={<Factory className="w-8 h-8" strokeWidth={2.5} />}
            title="Steel & Trading"
            description="Core business since 1960 - International steel trading and distribution"
            keyPoints={[
              "Global partnerships with leading manufacturers",
              "Comprehensive quality assurance systems",
              "Deep technical expertise and support",
            ]}
            achievements={[
              "3-Star Export House by Govt. of India (2023-24)",
              "Exclusive distributor for 8+ global manufacturers",
              "50,000+ MT annual distribution capacity"
            ]}
            partners={["Gerdau", "Hyundai Steel", "JSW Steel", "POSCO", "Tsingshan"]}
            ctaText="Explore Steel Products"
            ctaLink="/steel-trading"
          />

          {/* Real Estate Card */}
          <BusinessCard
            backgroundImage="/images/placeholder-industrial-2.svg"
            icon={<Building2 className="w-8 h-8" strokeWidth={2.5} />}
            title="Real Estate Development"
            description="Quality residential and commercial projects since 2011"
            keyPoints={[
              "Premium locations in key markets",
              "Modern amenities and infrastructure",
              "Committed to timely project delivery",
            ]}
            achievements={[
              "400+ flats successfully delivered",
              "Projects across Mumbai, Pune, Navi Mumbai",
              "RERA certified developments"
            ]}
            partners={["Valvan 9 Lonavala", "Golden Heights", "Krishna Empire", "Prabhadevi Towers"]}
            ctaText="View Projects"
            ctaLink="/real-estate"
          />

          {/* Finserv Card */}
          <BusinessCard
            backgroundImage="/images/placeholder-industrial-3.svg"
            icon={<TrendingUp className="w-8 h-8" strokeWidth={2.5} />}
            title="LK Finserv NBFC"
            description="RBI approved financial services since 2020"
            keyPoints={[
              "Professional financial advisory services",
              "Strategic financing solutions",
              "RBI certified and regulated operations",
            ]}
            achievements={[
              "RBI Certificate of Registration No. N-14.03323",
              "Non-Deposit Taking NBFC License",
              "Comprehensive financial solutions provider"
            ]}
            partners={["RBI Approved", "GST Compliant", "ICAI Member", "Banking Partners"]}
            ctaText="Learn More"
            ctaLink="/finserv"
          />
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DD6B20] to-transparent" />
    </section>
  );
};