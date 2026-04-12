"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Transform background opacity and blur based on scroll
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.5]);
  const backdropBlur = useTransform(scrollY, [0, 50], [0, 16]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4">
      <motion.div 
        style={{ 
          backgroundColor: isScrolled ? "rgba(0,0,0,0.5)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
        }}
        className={cn(
          "max-w-7xl mx-auto flex justify-between items-center rounded-2xl border transition-all duration-300 px-6 py-3",
          isScrolled ? "border-white/10" : "border-transparent px-0"
        )}
      >
        {/* ARQAYA Logo */}
        <a href="/" className="flex flex-col group">
          <span className="text-xl font-medium tracking-tighter text-white group-hover:text-blue-400 transition-colors">ARQAYA</span>
          <span className="text-[8px] font-medium tracking-[0.3em] text-white/40 uppercase -mt-1">Intelligence LLP</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#problem" className="text-white/60 hover:text-white transition-colors">
            Problem
          </a>
          <a href="#solution" className="text-white/60 hover:text-white transition-colors">
            Solution
          </a>
          <a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">
            Process
          </a>
          <a href="#use-cases" className="text-white/60 hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* CTA */}
        <button className="bg-white text-black text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-500 hover:text-white transition-all active:scale-95">
          Get Started
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
