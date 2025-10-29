"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Generation {
  number: number;
  name: string;
  title: string;
  period: string;
  legacy: string;
  quote: string;
  achievements: string[];
}

const generations: Generation[] = [
  {
    number: 1,
    name: "Mr. Lachhmichar",
    title: "The Founder",
    period: "1895-1920s",
    legacy: "Established business ethics and values that continue to guide us today",
    quote: "Built the foundation of trust",
    achievements: [
      "Founded cloth commission business in Amritsar",
      "Established core values of integrity and honesty",
      "Created strong community relationships"
    ]
  },
  {
    number: 2,
    name: "Mr. Kanshiram",
    title: "The Entrepreneur",
    period: "1920s-1950s",
    legacy: "Expanded business operations and ventured into new territories",
    quote: "Pioneered growth and expansion",
    achievements: [
      "Expanded trading operations across Punjab",
      "Built network of trusted partners",
      "Strengthened financial foundation"
    ]
  },
  {
    number: 3,
    name: "Mr. Ram Prakash",
    title: "The Explorer",
    period: "1950s-1970s",
    legacy: "Led the bold entry into the steel industry",
    quote: "Ventured into new industrial frontiers",
    achievements: [
      "Established steel trading in Mumbai",
      "Identified opportunities in industrial sector",
      "Laid groundwork for manufacturing"
    ]
  },
  {
    number: 4,
    name: "Mr. L.K. Gupta",
    title: "The Visionary",
    period: "1970s-1990s",
    legacy: "Established major partnerships and scaled operations nationally",
    quote: "Saw opportunities where others saw challenges",
    achievements: [
      "Secured exclusive distributor agreements",
      "Started Puja Ferro Alloys manufacturing",
      "Built reputation for quality and reliability"
    ]
  },
  {
    number: 5,
    name: "Mr. Vanit Gupta",
    title: "The Fortifier",
    period: "1990s-2010s",
    legacy: "Diversified into new verticals and expanded globally",
    quote: "Strengthened and expanded the empire",
    achievements: [
      "Launched international trading operations",
      "Diversified into real estate development",
      "Established modern management systems"
    ]
  },
  {
    number: 6,
    name: "Ankit & Rohin Gupta",
    title: "The Next Generation",
    period: "2010s-Present",
    legacy: "Leading digital transformation and global scaling",
    quote: "Blending heritage with innovation",
    achievements: [
      "Launched LK Finserv NBFC with RBI approval",
      "Achieved 3-Star Export House status",
      "Implementing digital transformation across verticals"
    ]
  }
];

export function GenerationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % generations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + generations.length) % generations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentGen = generations[currentIndex];

  return (
    <section className="py-24 bg-[#2D3748] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #DD6B20 0px, #DD6B20 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #DD6B20 0px, #DD6B20 1px, transparent 1px, transparent 40px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Generational Leadership
          </h2>
          <p className="text-lg lg:text-xl text-[#F8FAFC] max-w-3xl mx-auto">
            Six generations of visionary leaders who shaped our legacy
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-[#1A1D21] rounded-2xl p-12 shadow-2xl border border-[#DD6B20]/20 min-h-[600px] flex flex-col">
            {/* Generation Number Badge */}
            <div className="flex items-start justify-between mb-8">
              <div className="inline-flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#DD6B20] to-[#9C4221] flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {currentGen.number}
                </div>
                <div>
                  <p className="text-sm text-[#DD6B20] font-semibold mb-1">GENERATION {currentGen.number}</p>
                  <p className="text-sm text-[#94A3B8]">{currentGen.period}</p>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="mb-8">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {currentGen.name}
              </h3>
              <p className="text-2xl text-[#DD6B20] font-semibold">
                {currentGen.title}
              </p>
            </div>

            {/* Quote */}
            <div className="bg-[#2D3748] rounded-xl p-6 mb-8 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#DD6B20]/20" />
              <p className="text-xl lg:text-2xl text-white italic pl-10">
                "{currentGen.quote}"
              </p>
            </div>

            {/* Legacy */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#DD6B20] mb-3">LEGACY</h4>
              <p className="text-lg text-[#F8FAFC] leading-relaxed">
                {currentGen.legacy}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="flex-grow">
              <h4 className="text-lg font-semibold text-[#DD6B20] mb-4">KEY ACHIEVEMENTS</h4>
              <ul className="space-y-3">
                {currentGen.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#DD6B20] mt-2 flex-shrink-0" />
                    <span className="text-[#F8FAFC]">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-[#DD6B20] hover:bg-[#9C4221] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous generation"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-[#DD6B20] hover:bg-[#9C4221] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next generation"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {generations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-[#DD6B20]"
                  : "w-3 h-3 bg-[#94A3B8] hover:bg-[#DD6B20]/50"
              }`}
              aria-label={`Go to generation ${index + 1}`}
            />
          ))}
        </div>

        {/* Generation Labels Below Dots */}
        <div className="hidden lg:flex items-center justify-center gap-8 mt-6">
          {generations.map((gen, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`text-sm transition-colors duration-300 ${
                index === currentIndex ? "text-[#DD6B20] font-semibold" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Gen {gen.number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
