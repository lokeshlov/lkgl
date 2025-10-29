import { Building2, MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";

interface CasestudyItem {
  logo: string;
  company: string;
  tags: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

interface Casestudies3Props {
  featuredCasestudy?: CasestudyItem;
  casestudies?: CasestudyItem[];
}

const defaultFeaturedCasestudy: CasestudyItem = {
  logo: "/images/placeholder-industrial-1.svg",
  company: "LK Earth Developers",
  tags: "REAL ESTATE / INFRASTRUCTURE",
  title: "Premium Residential & Commercial Developments.",
  subtitle: "Building dreams across Mumbai, Pune, and Navi Mumbai.",
  image: "/images/placeholder-industrial-2.svg",
  link: "#real-estate",
};

const defaultCasestudies: CasestudyItem[] = [
  {
    logo: "/images/placeholder-industrial-2.svg",
    company: "LK Sri Enterprises",
    tags: "STEEL TRADING / DISTRIBUTION",
    title: "Leading steel distributors in India.",
    subtitle: "Exclusive partnerships with world's finest steel manufacturers.",
    image: "",
    link: "#steel",
  },
  {
    logo: "/images/placeholder-industrial-3.svg",
    company: "LK Finserv",
    tags: "FINANCIAL SERVICES / NBFC",
    title: "RBI Approved NBFC services.",
    subtitle: "Empowering businesses with financial solutions.",
    image: "",
    link: "#finserv",
  },
];

const CaseStudySection = ({
  featuredCasestudy = defaultFeaturedCasestudy,
  casestudies = defaultCasestudies,
}: Casestudies3Props) => {
  return (
    <section id="companies" className="section bg-[#1A1D21]">
      <div className="w-full">
        <div className="border-[#2D3748] border border-r-0 border-l-0">
          <a
            href={featuredCasestudy.link || "#"}
            className="group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out lg:grid-cols-2 xl:px-28 bg-[#1A1D21]"
          >
            <div className="flex flex-col justify-between gap-4 pt-16 lg:pb-16">
              <div className="flex items-center text-[#F8FAFC] group-hover:text-[#DD6B20] gap-2 text-2xl font-medium">
                <Building2 className="text-[#F8FAFC] group-hover:text-[#DD6B20]" />
                {featuredCasestudy.company}
              </div>
              <div>
                <span className="text-[#94A3B8] text-sm">
                  {featuredCasestudy.tags}
                </span>
                <h3 className="mb-5 mt-4 text-balance text-[#FFFFFF]">
                  {featuredCasestudy.title}
                  <span className="text-[#DD6B20]/70 font-medium transition-colors duration-500 ease-out">
                    {" "}
                    {featuredCasestudy.subtitle}
                  </span>
                </h3>
                <div className="flex items-center text-[#F8FAFC] group-hover:text-[#DD6B20] gap-2 font-medium">
                  Explore division
                  <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            <div className="relative isolate py-16">
              <div className="border-[#2D3748] bg-[#2D3748] relative isolate h-full border p-2">
                <div className="h-full overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={featuredCasestudy.image}
                      alt="placeholder"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="border-[#2D3748] flex border-t">
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(#2D3748_1px,transparent_1px)] opacity-25 [background-size:10px_10px] xl:block"></div>
            <div className="grid lg:grid-cols-2">
              {casestudies.map((item, idx) => (
                <a
                  key={item.company}
                  href={item.link || "#"}
                  className={`border-[#2D3748] text-[#F8FAFC] group-hover:text-[#DD6B20] bg-[#1A1D21] group flex flex-col justify-between gap-12 px-6 py-16 transition-colors duration-500 ease-out lg:pb-16 xl:gap-16 ${
                    idx === 0
                      ? "xl:border-l xl:pl-8"
                      : "border-t lg:border-l lg:border-t-0 xl:border-r xl:pl-8"
                  }`}
                >
                  <div className="flex items-center gap-2 text-2xl font-medium">
                    <Building2 className="text-[#F8FAFC] group-hover:text-[#DD6B20]" />
                    {item.company}
                  </div>
                  <div>
                    <span className="text-[#94A3B8] text-sm">
                      {item.tags}
                    </span>
                    <h3 className="mb-5 mt-4 text-balance text-[#FFFFFF]">
                      {item.title}
                      <span className="text-[#DD6B20]/70 font-medium transition-colors duration-500 ease-out">
                        {" "}
                        {item.subtitle}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 font-medium">
                      Explore division
                      <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(#2D3748_1px,transparent_1px)] opacity-25 [background-size:10px_10px] xl:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CaseStudySection };