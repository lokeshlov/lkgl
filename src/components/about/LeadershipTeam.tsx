"use client";

import { motion } from "framer-motion";
import { Users, Mail, Linkedin } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Rajesh Kumar",
    role: "Chairman & Managing Director",
    generation: "6th Generation",
    vision: "Leading our global expansion with a focus on sustainable growth and innovation",
    image: "/images/placeholder-industrial-1.svg",
  },
  {
    name: "Priya Sharma",
    role: "Chief Executive Officer",
    generation: "6th Generation",
    vision: "Driving operational excellence and digital transformation across all divisions",
    image: "/images/placeholder-industrial-2.svg",
  },
  {
    name: "Amit Patel",
    role: "Chief Financial Officer",
    generation: "5th Generation Advisory",
    vision: "Ensuring financial stability and strategic investments for long-term growth",
    image: "/images/placeholder-industrial-3.svg",
  },
  {
    name: "Neha Reddy",
    role: "Chief Operating Officer",
    generation: "6th Generation",
    vision: "Optimizing supply chain and fostering partnerships with global steel leaders",
    image: "/images/placeholder-industrial-1.svg",
  },
];

export function LeadershipTeam() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#DD6B20] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#DD6B20] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
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
            <span className="text-sm font-medium text-[#DD6B20]">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Visionary leaders carrying forward a legacy of excellence
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#2D3748]/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#DD6B20]/30 transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-[#DD6B20]/20 to-[#2D3748] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-[#2D3748] border-4 border-[#DD6B20]/30 overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Generation Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-[#DD6B20]/90 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-medium text-white">
                        {leader.generation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#DD6B20] font-medium mb-4">
                    {leader.role}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {leader.vision}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <button className="p-2 bg-[#DD6B20]/10 hover:bg-[#DD6B20]/20 rounded-lg transition-colors">
                      <Mail className="w-4 h-4 text-[#DD6B20]" />
                    </button>
                    <button className="p-2 bg-[#DD6B20]/10 hover:bg-[#DD6B20]/20 rounded-lg transition-colors">
                      <Linkedin className="w-4 h-4 text-[#DD6B20]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Generational Legacy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-[#2D3748]/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-3">
              A Family Legacy of Leadership
            </h3>
            <p className="text-[#94A3B8] leading-relaxed">
              Each generation has brought fresh perspectives while honoring the values 
              that made us who we are today. Our leadership team combines decades of 
              industry experience with innovative thinking to drive our vision forward.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
