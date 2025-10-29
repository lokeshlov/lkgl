"use client";

import { Mail, Phone, Download, Calendar, MapPin, Building2, Clock } from "lucide-react";

export const GlobalReachCTA = () => {
  return (
    <section className="py-24 bg-[#1A1D21] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          <circle cx="200" cy="100" r="100" fill="#DD6B20" />
          <circle cx="800" cy="400" r="150" fill="#DD6B20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-r from-[#DD6B20] to-[#9C4221] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Main message */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 rounded-full mb-6 w-fit">
                <Building2 className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">
                  CONNECT WITH US
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-white text-lg opacity-90 mb-8">
                Whether you're interested in our European operations or global services, our team is ready to help you find the perfect solution.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>LK Sri Global NV, Antwerp, Belgium</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>europe@lkgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+32 (0) XXX XXX XXX</span>
                </div>
              </div>
            </div>

            {/* Right: CTA buttons */}
            <div className="bg-[#1A1D21] bg-opacity-90 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Choose Your Next Step
              </h3>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-6 py-4 bg-[#DD6B20] text-white rounded-xl hover:bg-[#9C4221] transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">Contact European Headquarters</span>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button className="w-full flex items-center justify-between px-6 py-4 bg-[#2D3748] text-white rounded-xl hover:bg-[#2D3748]/70 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    <span className="font-semibold">Download LK Sri Global NV Profile</span>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button className="w-full flex items-center justify-between px-6 py-4 bg-[#2D3748] text-white rounded-xl hover:bg-[#2D3748]/70 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">Inquire About European Distribution</span>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button className="w-full flex items-center justify-between px-6 py-4 bg-[#2D3748] text-white rounded-xl hover:bg-[#2D3748]/70 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Schedule Meeting with European Team</span>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-[#2D3748]">
                <p className="text-[#94A3B8] text-sm text-center">
                  Operating across 30+ countries • Trusted by 50+ global partners
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#2D3748] rounded-xl p-6 text-center border border-[#2D3748] hover:border-[#DD6B20] transition-all">
            <div className="w-12 h-12 bg-[#DD6B20] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-[#DD6B20]" />
            </div>
            <h4 className="text-white font-bold mb-2">24/7 Support</h4>
            <p className="text-[#94A3B8] text-sm">
              Round-the-clock assistance for European and global clients
            </p>
          </div>

          <div className="bg-[#2D3748] rounded-xl p-6 text-center border border-[#2D3748] hover:border-[#DD6B20] transition-all">
            <div className="w-12 h-12 bg-[#DD6B20] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-[#DD6B20]" />
            </div>
            <h4 className="text-white font-bold mb-2">Local Presence</h4>
            <p className="text-[#94A3B8] text-sm">
              Direct access to European markets with Belgian headquarters
            </p>
          </div>

          <div className="bg-[#2D3748] rounded-xl p-6 text-center border border-[#2D3748] hover:border-[#DD6B20] transition-all">
            <div className="w-12 h-12 bg-[#DD6B20] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-[#DD6B20]" />
            </div>
            <h4 className="text-white font-bold mb-2">Quick Response</h4>
            <p className="text-[#94A3B8] text-sm">
              Fast communication in your timezone and language
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};