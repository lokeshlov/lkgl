import { Building2 } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Business",
    links: [
      { name: "Steel Trading", href: "#steel" },
      { name: "Ferro Alloys", href: "#ferro-alloys" },
      { name: "Real Estate", href: "#real-estate" },
      { name: "Financial Services", href: "#finserv" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Group Companies", href: "#companies" },
      { name: "Global Network", href: "#network" },
      { name: "CSR Initiatives", href: "#csr" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
      { name: "Memberships", href: "#memberships" },
      { name: "Partners", href: "#partners" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = ({
  logo = {
    url: "/",
    src: "",
    alt: "logo",
    title: "",
  },
  sections = defaultSections,
  description = "A century of six generations. Building India's industrial future with integrity and excellence.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 L.K. Group. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="section bg-[#1A1D21]">
      <div className="container">
        <div className="flex mx-auto w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <Building2 className="h-8 w-8 text-[#DD6B20]" />
              </a>
              <h3 className="font-semibold text-[#FFFFFF]">L.K. GROUP</h3>
            </div>
            <p className="text-[#F8FAFC] max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-[#F8FAFC] flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-[#DD6B20] font-medium transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h4 className="mb-4 font-bold text-[#FFFFFF]">{section.title}</h4>
                <ul className="text-[#F8FAFC] space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-[#DD6B20] font-medium transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#94A3B8] mt-12 flex flex-col justify-between gap-4 border-t border-[#2D3748] pt-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="text-base">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#DD6B20] transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer };