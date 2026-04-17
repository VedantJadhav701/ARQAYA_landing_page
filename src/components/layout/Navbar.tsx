"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:py-8">
      <motion.div 
        animate={{ 
          backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        }}
        className={cn(
          "max-w-7xl mx-auto flex justify-between items-center rounded-[32px] border transition-all duration-500 px-6 py-3.5",
          isScrolled ? "border-white/10 shadow-2xl shadow-black/50" : "border-transparent"
        )}
      >
        {/* ARQAYA Logo */}
        <a href="/" className="flex flex-col group relative">
          <span className="text-xl md:text-2xl font-medium tracking-tighter text-white group-hover:text-white/80 transition-colors">ARQAYA</span>
          <span className="text-[9px] font-medium tracking-[0.4em] text-white/30 uppercase -mt-1 group-hover:text-white/50 transition-colors">Intelligence Pvt Ltd</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide">
          {["Problem", "Solution", "Process", "Case Studies", "Contact"].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`} 
              className="text-white/50 hover:text-white transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-[10px]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-white/60 hover:text-white text-xs md:text-sm font-medium transition-colors uppercase tracking-widest text-[10px]">
            Login
          </button>
          <button className="group relative overflow-hidden bg-white text-black text-xs md:text-sm font-bold px-8 py-3 rounded-full transition-all active:scale-95 hover:bg-white/90">
            <span className="relative z-10 uppercase tracking-widest font-bold">Get Started</span>
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
