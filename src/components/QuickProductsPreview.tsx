"use client";

import { Factory, Zap, Layers, CircleDot, Wrench, Package, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function QuickProductsPreview() {
  const products = [
    {
      icon: CircleDot,
      name: "Hot Rolled Round Bars",
      category: "Steel Products",
      description: "High-quality round bars for automotive and manufacturing"
    },
    {
      icon: Layers,
      name: "Hot Rolled Coils",
      category: "Steel Products",
      description: "Premium coils for construction and infrastructure"
    },
    {
      icon: Package,
      name: "Ductile Iron Pipes",
      category: "Infrastructure",
      description: "Durable DI pipes for water and sewage systems"
    },
    {
      icon: Sparkles,
      name: "Ferro Chrome",
      category: "Ferro Alloys",
      description: "Essential alloy for stainless steel production"
    },
    {
      icon: Zap,
      name: "Ferro Manganese",
      category: "Ferro Alloys",
      description: "Critical component for steel manufacturing"
    },
    {
      icon: Factory,
      name: "Silico Manganese",
      category: "Ferro Alloys",
      description: "Deoxidizing agent for steel production"
    },
    {
      icon: Wrench,
      name: "Pure Nickel Cathodes",
      category: "Raw Materials",
      description: "Premium nickel for specialized applications"
    },
    {
      icon: Package,
      name: "Manganese Ore",
      category: "Raw Materials",
      description: "Essential mineral for metallurgical processes"
    }
  ];

  return (
    <section className="section relative bg-[#2D3748] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #DD6B20 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#DD6B20]/10 border border-[#DD6B20]/30 rounded-full text-[#DD6B20] text-sm font-semibold tracking-wider uppercase">
              Our Products
            </span>
          </div>
          <h2 className="mb-6 tracking-tight">
            Quality Steel & Alloys
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of steel products, ferro alloys, and raw materials from world-leading manufacturers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-[#1A1D21] rounded-xl p-6 border border-[#DD6B20]/20 hover:border-[#DD6B20]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#DD6B20]/20 hover:scale-105"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[#DD6B20]/10 flex items-center justify-center mb-4 group-hover:bg-[#DD6B20] transition-colors duration-300">
                <product.icon className="w-7 h-7 text-[#DD6B20] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>

              {/* Category Badge */}
              <div className="inline-block mb-3">
                <span className="text-xs font-semibold text-[#DD6B20] uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {product.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-[#DD6B20]" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DD6B20] to-[#9C4221] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#DD6B20]/30 transition-all duration-300 hover:scale-105 group"
          >
            <span>View All Products & Specifications</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
