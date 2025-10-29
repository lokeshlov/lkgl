"use client";

import { useState, useEffect } from "react";
import { Building2, MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar5 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Global", href: "/global-reach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#1A1D21] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 z-50">
              <Building2 className="h-8 w-8 text-[#FFFFFF]" />
              <span className="text-xl font-bold text-[#FFFFFF] tracking-tight">
                L.K. GROUP
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#FFFFFF]/90 hover:text-[#DD6B20] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-[#DD6B20] text-[#FFFFFF] hover:bg-[#9C4221] font-semibold"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-[#FFFFFF] z-50"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[2000] lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-0 bg-[#1A1D21] animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#2D3748]">
                <a href="/" className="flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-[#FFFFFF]" />
                  <span className="text-xl font-bold text-[#FFFFFF]">
                    L.K. GROUP
                  </span>
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#FFFFFF]"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-6">
                  {mainNavLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-[#FFFFFF] hover:text-[#DD6B20] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-[#2D3748]">
                <Button
                  asChild
                  className="w-full bg-[#DD6B20] text-[#FFFFFF] hover:bg-[#9C4221] font-semibold"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar5 };