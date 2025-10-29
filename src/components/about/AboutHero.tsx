"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DD6B20]/10 border border-[#DD6B20]/20 mb-6"
          >
            <Award className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-sm font-medium text-[#DD6B20]">Since 1895</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our Legacy Since{" "}
            <span className="text-[#DD6B20]">1895</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#94A3B8] mb-12 leading-relaxed"
          >
            Six generations of steel excellence, building a legacy of trust, 
            quality, and innovation across the globe.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="bg-[#2D3748]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#DD6B20]" />
                <div className="text-4xl font-bold text-white">130+</div>
              </div>
              <div className="text-sm text-[#94A3B8]">Years of Excellence</div>
            </div>

            <div className="bg-[#2D3748]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#DD6B20]" />
                <div className="text-4xl font-bold text-white">6</div>
              </div>
              <div className="text-sm text-[#94A3B8]">Generations</div>
            </div>

            <div className="bg-[#2D3748]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#DD6B20]" />
                <div className="text-4xl font-bold text-white">30+</div>
              </div>
              <div className="text-sm text-[#94A3B8]">Countries Served</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1D21] to-transparent"></div>
    </section>
  );
}
