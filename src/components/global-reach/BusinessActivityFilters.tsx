"use client";

import { useState } from "react";
import { Building2, Zap, Package, Globe, CheckCircle } from "lucide-react";

interface Activity {
  id: string;
  name: string;
  icon: any;
  description: string;
  products: string[];
}

export const BusinessActivityFilters = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("all");

  const activities: Activity[] = [
    {
      id: "european",
      name: "European Operations",
      icon: Building2,
      description: "Belgium headquarters serving European markets with localized services",
      products: [
        "Direct EU market access",
        "Euro-denominated transactions",
        "European quality certifications",
        "Local language support",
        "Faster logistics from Antwerp",
      ],
    },
    {
      id: "steel",
      name: "Steel Trading",
      icon: Package,
      description: "International steel trading and distribution across all regions",
      products: [
        "Mild Steel",
        "Stainless Steel",
        "Alloy Steel",
        "Special Steel Grades",
        "Steel Scrap",
      ],
    },
    {
      id: "ferro",
      name: "Ferro Alloys",
      icon: Zap,
      description: "Manufacturing and trading of high-quality ferro alloys",
      products: [
        "Ferro Manganese",
        "Ferro Silicon",
        "Ferro Chrome",
        "Silico Manganese",
        "Ferro Nickel",
      ],
    },
    {
      id: "raw",
      name: "Raw Materials",
      icon: Globe,
      description: "Global sourcing and distribution of essential raw materials",
      products: [
        "Manganese Ore",
        "Chrome Ore",
        "Nickel Ore",
        "Iron Ore",
        "Coal & Coke",
      ],
    },
  ];

  const filteredActivities =
    selectedActivity === "all"
      ? activities
      : activities.filter((a) => a.id === selectedActivity);

  return (
    <section className="py-24 bg-[#1A1D21]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global Business Activities
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Filter by business activity to see our specialized offerings across regions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedActivity("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedActivity === "all"
                ? "bg-[#DD6B20] text-white shadow-lg shadow-[#DD6B20]/30"
                : "bg-[#2D3748] text-[#94A3B8] hover:bg-[#2D3748]/70"
            }`}
          >
            All Activities
          </button>
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <button
                key={activity.id}
                onClick={() => setSelectedActivity(activity.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedActivity === activity.id
                    ? "bg-[#DD6B20] text-white shadow-lg shadow-[#DD6B20]/30"
                    : "bg-[#2D3748] text-[#94A3B8] hover:bg-[#2D3748]/70"
                }`}
              >
                <Icon className="w-5 h-5" />
                {activity.name}
                {activity.id === "european" && (
                  <span className="px-2 py-0.5 bg-white text-[#DD6B20] text-xs rounded-full font-bold">
                    NEW
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="bg-[#2D3748] rounded-2xl p-8 border border-[#2D3748] hover:border-[#DD6B20] transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-[#DD6B20] rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {activity.name}
                      </h3>
                      {activity.id === "european" && (
                        <span className="px-2 py-1 bg-[#DD6B20] text-white text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-[#94A3B8]">{activity.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-[#DD6B20] uppercase tracking-wider">
                    {activity.id === "european" ? "Key Services" : "Key Products"}
                  </h4>
                  <div className="space-y-2">
                    {activity.products.map((product) => (
                      <div
                        key={product}
                        className="flex items-center gap-3 p-3 bg-[#1A1D21] rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-[#DD6B20] flex-shrink-0" />
                        <span className="text-[#F8FAFC]">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
