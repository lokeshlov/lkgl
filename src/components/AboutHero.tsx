"use client";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/placeholder-industrial-2.svg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1D21]/90 via-[#1A1D21]/85 to-[#1A1D21]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Six Generations of Steel Excellence
        </h1>
        <p className="text-xl lg:text-2xl text-[#F8FAFC] max-w-3xl mx-auto leading-relaxed">
          From humble beginnings in 1895 to global industrial leadership
        </p>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1D21] to-transparent z-10" />
    </section>
  );
}
