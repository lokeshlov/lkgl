"use client";

import { Building2, MapPin, Users, Briefcase, Crown } from "lucide-react";

export const BelgiumSpotlight = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1D21] to-[#2D3748] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DD6B20] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DD6B20] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-6">
            <Crown className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              EUROPEAN HEADQUARTERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            LK Sri Global NV, Belgium
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Our strategic European headquarters in Belgium positions LK Group at the heart of European trade and commerce
          </p>
        </div>

        {/* Main Spotlight Card */}
        <div className="bg-[#1A1D21] border border-[#2D3748] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image/Visual */}
            <div className="relative h-96 md:h-auto bg-gradient-to-br from-[#DD6B20] to-[#9C4221] flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="30" y="20" width="40" height="60" fill="white" opacity="0.3" />
                  <rect x="32" y="25" width="8" height="8" fill="white" />
                  <rect x="42" y="25" width="8" height="8" fill="white" />
                  <rect x="52" y="25" width="8" height="8" fill="white" />
                  <rect x="32" y="35" width="8" height="8" fill="white" />
                  <rect x="42" y="35" width="8" height="8" fill="white" />
                  <rect x="52" y="35" width="8" height="8" fill="white" />
                  <rect x="32" y="45" width="8" height="8" fill="white" />
                  <rect x="42" y="45" width="8" height="8" fill="white" />
                  <rect x="52" y="45" width="8" height="8" fill="white" />
                </svg>
              </div>
              <div className="relative z-10 text-center text-white p-8">
                <Building2 className="w-24 h-24 mx-auto mb-4 opacity-90" />
                <h3 className="text-3xl font-bold mb-2">LK Sri Global NV</h3>
                <p className="text-lg opacity-90">Antwerp, Belgium</p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Operational Since 2024</span>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Company Details */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Company Details</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#DD6B20] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#F8FAFC] font-semibold">Registered Address</p>
                      <p className="text-[#94A3B8]">Antwerp Port Area, Belgium</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-[#DD6B20] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#F8FAFC] font-semibold">Banking Partner</p>
                      <p className="text-[#94A3B8]">BNP Paribas Fortis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#DD6B20] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#F8FAFC] font-semibold">Ownership</p>
                      <p className="text-[#94A3B8]">100% Wholly Owned Subsidiary of LK Group</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#DD6B20] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#F8FAFC] font-semibold">Business Activities</p>
                      <p className="text-[#94A3B8]">Steel Trading, Ferro Alloys, Raw Materials Distribution</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Advantages */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Key Advantages</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#2D3748] p-4 rounded-lg">
                    <p className="text-2xl font-bold text-[#DD6B20] mb-1">EU</p>
                    <p className="text-sm text-[#94A3B8]">Market Access</p>
                  </div>
                  <div className="bg-[#2D3748] p-4 rounded-lg">
                    <p className="text-2xl font-bold text-[#DD6B20] mb-1">24/7</p>
                    <p className="text-sm text-[#94A3B8]">European Support</p>
                  </div>
                  <div className="bg-[#2D3748] p-4 rounded-lg">
                    <p className="text-2xl font-bold text-[#DD6B20] mb-1">€</p>
                    <p className="text-sm text-[#94A3B8]">Euro Transactions</p>
                  </div>
                  <div className="bg-[#2D3748] p-4 rounded-lg">
                    <p className="text-2xl font-bold text-[#DD6B20] mb-1">Fast</p>
                    <p className="text-sm text-[#94A3B8]">Logistics Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
