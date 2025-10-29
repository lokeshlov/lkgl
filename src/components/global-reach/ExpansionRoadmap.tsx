"use client";

import { CheckCircle, Clock, Target, Rocket } from "lucide-react";

interface Phase {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "planned";
  items: string[];
  icon: any;
}

export const ExpansionRoadmap = () => {
  const phases: Phase[] = [
    {
      id: 1,
      title: "Belgium Operational",
      status: "completed",
      icon: CheckCircle,
      items: [
        "LK Sri Global NV established",
        "BNP Paribas banking partnership secured",
        "Antwerp office operational",
        "Initial European partnerships formed",
      ],
    },
    {
      id: 2,
      title: "Germany & France Markets",
      status: "in-progress",
      icon: Clock,
      items: [
        "Establish direct presence in major German cities",
        "Form partnerships with French steel mills",
        "Set up distribution networks",
        "Localize customer support teams",
      ],
    },
    {
      id: 3,
      title: "European Distribution Network",
      status: "planned",
      icon: Target,
      items: [
        "Expand warehouse facilities across EU",
        "Implement advanced logistics system",
        "Create regional hubs in key countries",
        "Optimize supply chain efficiency",
      ],
    },
    {
      id: 4,
      title: "Manufacturing Partnerships",
      status: "planned",
      icon: Rocket,
      items: [
        "Joint ventures with European manufacturers",
        "Invest in green steel technologies",
        "Collaborative R&D initiatives",
        "Local production capabilities",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-[#DD6B20]";
      case "planned":
        return "bg-[#2D3748]";
      default:
        return "bg-[#2D3748]";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "COMPLETED";
      case "in-progress":
        return "IN PROGRESS";
      case "planned":
        return "PLANNED";
      default:
        return "";
    }
  };

  return (
    <section className="py-24 bg-[#2D3748] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DD6B20] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DD6B20] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6B20] bg-opacity-20 border border-[#DD6B20] rounded-full mb-6">
            <Rocket className="w-4 h-4 text-[#DD6B20]" />
            <span className="text-[#DD6B20] text-sm font-semibold tracking-wider">
              FUTURE VISION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            European Expansion Roadmap
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Our strategic plan for building a comprehensive European presence
          </p>
        </div>

        {/* Roadmap */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.id}
                className="relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Connection line */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-[#2D3748] z-0" />
                )}

                {/* Phase card */}
                <div className="relative z-10 bg-[#1A1D21] rounded-2xl p-6 border-2 border-[#2D3748] hover:border-[#DD6B20] transition-all duration-300 h-full">
                  {/* Phase number and status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full ${getStatusColor(phase.status)} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      phase.status === "completed"
                        ? "bg-green-500 text-white"
                        : phase.status === "in-progress"
                        ? "bg-[#DD6B20] text-white"
                        : "bg-[#2D3748] text-[#94A3B8]"
                    }`}>
                      {getStatusLabel(phase.status)}
                    </span>
                  </div>

                  {/* Phase title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    Phase {phase.id}
                  </h3>
                  <h4 className="text-lg font-semibold text-[#DD6B20] mb-4">
                    {phase.title}
                  </h4>

                  {/* Phase items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-[#94A3B8]"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          phase.status === "completed"
                            ? "bg-green-500"
                            : phase.status === "in-progress"
                            ? "bg-[#DD6B20]"
                            : "bg-[#2D3748]"
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1A1D21] to-[#2D3748] rounded-2xl p-8 md:p-12 border border-[#DD6B20]">
            <Rocket className="w-12 h-12 text-[#DD6B20] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Building the Future of European Steel Trading
            </h3>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              With Belgium as our foundation, we're committed to expanding our European footprint while maintaining the quality, integrity, and customer service that has defined LK Group for 130 years. Our roadmap reflects our ambition to become a leading steel trader in Europe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
