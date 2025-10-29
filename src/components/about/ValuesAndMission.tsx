"use client";

import { motion } from "framer-motion";
import { Target, Heart, Shield, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with honesty and transparency in every transaction",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering superior quality products and services consistently",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships based on trust and mutual growth",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Embracing new technologies and methods to stay ahead",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Putting our clients' needs at the heart of everything we do",
  },
  {
    icon: Target,
    title: "Sustainability",
    description: "Committed to responsible business practices for future generations",
  },
];

const qualityCommitments = [
  "ISO 9001:2015 certified quality management systems",
  "Rigorous testing and inspection at every stage",
  "Long-term partnerships with world-class manufacturers",
  "Continuous improvement and innovation culture",
  "Customer satisfaction as our primary metric",
  "Sustainable and ethical sourcing practices",
];

export function ValuesAndMission() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DD6B20]/10 border border-[#DD6B20]/20 mb-4">
            <Target className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-sm font-medium text-[#DD6B20]">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mission & Vision
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#DD6B20]/20 via-[#2D3748]/30 to-[#2D3748]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#DD6B20]/20"
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                To be the world's most trusted steel trading and manufacturing partner, 
                delivering exceptional value through innovation, quality, and sustainable practices.
              </p>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                We strive to build lasting relationships with our customers, partners, and 
                communities while maintaining the highest standards of integrity and excellence 
                that have defined us for over 130 years.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-[#2D3748]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#DD6B20]/30 transition-all duration-300 h-full">
                    <div className="p-3 bg-[#DD6B20]/10 rounded-xl w-fit mb-4 group-hover:bg-[#DD6B20]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#DD6B20]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-[#94A3B8] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quality Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#2D3748]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Quality Commitment
              </h3>
              <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                Quality is not just a promise—it's embedded in everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {qualityCommitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#DD6B20]" />
                  </div>
                  <p className="text-[#CBD5E0]">{commitment}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <p className="text-[#94A3B8] mb-6">
                Experience the difference that 130+ years of excellence makes
              </p>
              <button className="px-8 py-3 bg-[#DD6B20] hover:bg-[#9C4221] text-white font-semibold rounded-lg transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
