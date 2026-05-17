"use client";

import React, { useState } from "react";
import { Search, Globe, Accessibility, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("ABOUT US");
  const [isSubsidiaryOpen, setIsSubsidiaryOpen] = useState(false);

  const navLinks = [
    "ABOUT US",
    "WHAT WE DO",
    "SUBSIDIARIES",
    "CAREERS",
    "CONTACT",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Top Utility Bar */}
      <div className="h-9 bg-[#1A1A1A] flex items-center justify-between px-6 md:px-12 text-[#AAAAAA] font-sans text-[12px]">
        <div className="flex items-center gap-2">
          <span>India</span>
        </div>
        <div className="flex items-center gap-6">
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
        <div className="flex-1">
          <button className="w-9 h-9 border border-[#E0DDD6] rounded-full flex items-center justify-center text-text-dark hover:bg-gray-light transition-colors cursor-pointer">
            <Search size={18} />
          </button>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div
              key={link}
              className="relative h-full flex items-center"
              onMouseEnter={() => link === "SUBSIDIARIES" && setIsSubsidiaryOpen(true)}
              onMouseLeave={() => link === "SUBSIDIARIES" && setIsSubsidiaryOpen(false)}
            >
              <button
                onClick={() => setActiveLink(link)}
                className={cn(
                  "font-sans text-[14px] font-medium tracking-wide transition-colors cursor-pointer h-full border-b-2 flex items-center",
                  activeLink === link
                    ? "text-text-black border-gold"
                    : "text-text-mid border-transparent hover:text-text-black"
                )}
              >
                {link}
                {link === "SUBSIDIARIES" && <ChevronDown size={14} className="ml-1" />}
              </button>

              {/* Mega Dropdown for Subsidiaries */}
              {link === "SUBSIDIARIES" && isSubsidiaryOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white border border-border shadow-xl p-8 animate-fade-up">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="group cursor-pointer">
                      <div className="text-[11px] font-rajdhani font-bold text-tenetx-primary tracking-widest uppercase mb-1">TENETX</div>
                      <div className="text-[15px] font-medium text-text-black mb-2">Industrial Oil & Gas AI</div>
                      <div className="text-gold font-sans text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <span className="text-[18px]">→</span>
                      </div>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="text-[11px] font-rajdhani font-bold text-texflow-primary tracking-widest uppercase mb-1">TEXFLOW</div>
                      <div className="text-[15px] font-medium text-text-black mb-2">Automated Typesetting</div>
                      <div className="text-gold font-sans text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <span className="text-[18px]">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Wordmark */}
        <div className="flex-1 flex justify-end items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="font-serif font-bold text-[20px] leading-tight text-text-black">ARQAYAA</span>
            <span className="font-rajdhani text-[9px] font-semibold tracking-[0.2em] text-gold -mt-0.5">INTELLIGENCE</span>
          </div>
          {/* Flame/Circuit Icon Placeholder */}
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
             <div className="w-4 h-4 bg-white rounded-full opacity-80" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
