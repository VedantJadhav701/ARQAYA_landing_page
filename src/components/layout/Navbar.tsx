"use client";

import React from "react";
import { Link, usePathname } from "next/navigation";
import { Search, Globe, Accessibility, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isSubsidiaryOpen, setIsSubsidiaryOpen] = React.useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "ABOUT US", href: "/about" },
    { name: "WHAT WE DO", href: "/what-we-do" },
    { name: "SUBSIDIARIES", href: "/subsidiaries" },
    { name: "INDUSTRIES", href: "/industries" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Top Utility Bar */}
      <div className="h-9 bg-[#1A1A1A] flex items-center justify-between px-6 md:px-12 text-[#AAAAAA] font-sans text-[12px]">
        <div className="flex items-center gap-2">
          <span>India</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@arqaya.com" className="hover:text-white transition-colors">info@arqaya.com</a>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Globe size={14} />
            <span>English</span>
          </button>
          <button className="hover:text-white transition-colors cursor-pointer">
            <Accessibility size={14} />
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="h-16 bg-white border-b border-[#E0DDD6] flex items-center justify-between px-6 md:px-12 relative">
        {/* Left: Search icon */}
        <div className="flex-1 lg:flex-none">
          <button className="w-9 h-9 border border-[#E0DDD6] rounded-full flex items-center justify-center text-text-dark hover:bg-gray-light transition-colors cursor-pointer">
            <Search size={18} />
          </button>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex items-center gap-8 h-full flex-1 justify-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                if (link.name === "SUBSIDIARIES") setIsSubsidiaryOpen(true);
                if (link.name === "WHAT WE DO") setIsWhatWeDoOpen(true);
              }}
              onMouseLeave={() => {
                if (link.name === "SUBSIDIARIES") setIsSubsidiaryOpen(false);
                if (link.name === "WHAT WE DO") setIsWhatWeDoOpen(false);
              }}
            >
              <Link
                href={link.href}
                className={cn(
                  "font-sans text-[14px] font-medium tracking-wide transition-colors cursor-pointer h-full border-b-2 flex items-center",
                  pathname === link.href
                    ? "text-text-black border-gold"
                    : "text-text-mid border-transparent hover:text-text-black"
                )}
              >
                {link.name}
                {(link.name === "SUBSIDIARIES" || link.name === "WHAT WE DO") && <ChevronDown size={14} className="ml-1" />}
              </Link>

              {/* Mega Dropdown for What We Do */}
              {link.name === "WHAT WE DO" && isWhatWeDoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white border border-border shadow-xl p-6 animate-fade-up">
                  <div className="flex flex-col gap-4">
                    <Link href="/what-we-do" className="text-[14px] text-text-mid hover:text-gold transition-colors">Our Solutions</Link>
                    <Link href="/what-we-do#process" className="text-[14px] text-text-mid hover:text-gold transition-colors">Our Process</Link>
                    <Link href="/what-we-do#why" className="text-[14px] text-text-mid hover:text-gold transition-colors">Why ARQAYAA</Link>
                  </div>
                </div>
              )}

              {/* Mega Dropdown for Subsidiaries */}
              {link.name === "SUBSIDIARIES" && isSubsidiaryOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-border shadow-xl p-8 animate-fade-up">
                  <div className="grid grid-cols-2 gap-10">
                    <Link href="/subsidiaries/tenetx" className="group cursor-pointer block">
                      <div className="text-[11px] font-rajdhani font-bold text-tenetx-primary tracking-widest uppercase mb-1">TENETX</div>
                      <div className="text-[15px] font-medium text-text-black mb-2">Industrial Oil & Gas AI</div>
                      <div className="text-gold font-sans text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <span className="text-[18px]">→</span>
                      </div>
                    </Link>
                    <Link href="/subsidiaries/texflow" className="group cursor-pointer block">
                      <div className="text-[11px] font-rajdhani font-bold text-texflow-primary tracking-widest uppercase mb-1">TEXFLOW</div>
                      <div className="text-[15px] font-medium text-text-black mb-2">Automated Typesetting</div>
                      <div className="text-gold font-sans text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <span className="text-[18px]">→</span>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <Link href="/subsidiaries" className="text-text-muted hover:text-gold text-[13px] font-medium transition-colors">
                      View All Subsidiaries →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Wordmark & Mobile Toggle */}
        <div className="flex-1 lg:flex-none flex justify-end items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="font-serif font-bold text-[20px] leading-tight text-text-black">ARQAYAA</span>
              <span className="font-rajdhani text-[9px] font-semibold tracking-[0.2em] text-gold -mt-0.5">INTELLIGENCE</span>
            </div>
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
               <div className="w-4 h-4 bg-white rounded-full opacity-80" />
            </div>
          </Link>
          
          <button 
            className="lg:hidden p-2 text-text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-[150] pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-serif border-b border-border pb-4",
                    pathname === link.href ? "text-gold" : "text-text-black"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Link href="/subsidiaries/tenetx" onClick={() => setIsMobileMenuOpen(false)} className="text-tenetx-primary font-bold tracking-widest uppercase">TENETX</Link>
                <Link href="/subsidiaries/texflow" onClick={() => setIsMobileMenuOpen(false)} className="text-texflow-primary font-bold tracking-widest uppercase">TEXFLOW</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
