import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const projects = [
  {
    heading: "Steel Trading & Distribution",
    subheading: "Hot Rolled Round Bars, Coils & DI Pipes",
    description:
      "Exclusive distributors for leading manufacturers including Gerdau (Arjas Steel), Hyundai Steel Korea, JSW Steel, and MUSCO. Serving India's finest industries with quality steel products for automotive, infrastructure, and manufacturing sectors.",
    image: "/images/placeholder-industrial-1.svg",
    url: "#",
  },
  {
    heading: "Ferro Alloys Manufacturing",
    subheading: "Ferro Chrome, Ferro Manganese & Silico Manganese",
    description:
      "Started Puja Ferro Alloys Ltd in Goa through electric arc furnace route. Global trading with world-renowned customers like Tsingshan Group and POSCO Steel. Annual contracts with Glencore for Pure Nickel Cathodes and Eramet for Manganese Ore.",
    image: "/images/placeholder-industrial-2.svg",
    url: "#",
  },
  {
    heading: "Real Estate Development",
    subheading: "Premium Residential & Commercial Projects",
    description:
      "Successfully delivered 400+ flats across Mumbai, Pune, and Navi Mumbai. Featured projects include Valvan 9 holiday homes in Lonavala, Golden Heights Koparkhairane, Krishna Empire in Navi Mumbai, and multi-story towers at Prabhadevi.",
    image: "/images/placeholder-industrial-3.svg",
    url: "#",
  },
  {
    heading: "LK Finserv - NBFC",
    subheading: "RBI Approved Non-Banking Financial Company",
    description:
      "RBI-approved Non-Banking Financial Company providing comprehensive financial solutions. Offering business loans, working capital finance, and customized financial services to support India's growing enterprises and entrepreneurs.",
    image: "/images/placeholder-industrial-1.svg",
    url: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="steel" className="section w-full bg-[#2D3748]">
      <div className="container">
        <div className="mb-16">
          <p className="text-[#DD6B20] mb-2 uppercase font-semibold">
            Building India's Industrial Future
          </p>
          <h2 className="uppercase text-[#FFFFFF] mb-6">Our Business</h2>
          <p className="text-[#F8FAFC] max-w-2xl">
            From steel trading to ferro alloys manufacturing and premium real estate development, L.K. Group stands as one of India's most trusted business houses with over 130 years of excellence.
          </p>
          <Button className="mt-6 border border-[#2D3748] bg-[#DD6B20] text-[#FFFFFF] hover:bg-[#9C4221] rounded-lg">
            View All Projects
            <ArrowDownRight className="size-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              className="group relative isolate min-h-96 lg:min-h-72 px-8 py-16 lg:px-12 border border-[#2D3748] border-x-0 lg:py-24 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.heading}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="relative z-10 flex flex-col gap-7 text-[#F8FAFC]/80 transition-colors duration-300 ease-out group-hover:text-[#FFFFFF] lg:flex-row">
                <div className="flex gap-1 text-2xl font-bold text-[#DD6B20]">
                  <span>/</span>
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5">
                  <h3 className="text-[#FFFFFF]">
                    {project.heading}
                  </h3>
                  <p className="text-sm font-medium uppercase text-[#DD6B20]">
                    {project.subheading}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <p className="text-[#F8FAFC]">{project.description}</p>
                    <div className="mt-2.5 h-0 transition-all duration-300 ease-out group-hover:h-10">
                      <div>
                        <Button className="rounded-lg bg-[#DD6B20] text-[#FFFFFF] border-[#DD6B20] mt-4 w-fit hover:bg-[#9C4221] transition-all duration-300 ease-out">
                          Learn more
                          <ArrowUpRight className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-xs absolute inset-0 z-0 bg-[#1A1D21]/85 transition-all duration-300 ease-out group-hover:bg-[#1A1D21]/60 group-hover:backdrop-blur-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectSection };