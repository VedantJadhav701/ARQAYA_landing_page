"use client";

import React from "react";
import BlurIn from "@/components/BlurIn";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const stats = [
  { label: "Reduced Manual Workload", value: "60%" },
  { label: "Improved Decision Speed", value: "3x" },
  { label: "Increased Efficiency", value: "Across Teams" },
];

const Footer = () => {
  return (
    <footer className="bg-black pt-16 md:pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 md:mb-32 border-b border-white/5 pb-16 md:pb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1} variant="fade-up">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-5xl font-medium mb-1 md:mb-2 text-white/90">
                  {stat.value}
                </div>
                <div className="text-white/40 text-[10px] md:text-sm uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mb-20 md:mb-32">
          <ScrollReveal variant="scale-in">
            <h2 className="text-3xl md:text-6xl font-medium mb-6 md:mb-8 leading-tight">
              Ready to Transform Your <br />
              <span className="text-white/60">Business with AI?</span>
            </h2>
            <p className="text-white/50 text-base md:text-xl mb-8 md:mb-12 max-w-lg mx-auto">
              Let’s build something powerful together.
            </p>
            <a
              href="/book-call"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold text-black transition-transform active:scale-95 hover:scale-105"
            >
              Book A Free Call
              <ArrowRight className="h-5 w-5" />
            </a>
          </ScrollReveal>
        </div>

        {/* Footer info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-12 border-t border-white/5 pt-12 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl md:text-3xl font-serif tracking-widest text-white">ARQAYA</span>
              <span className="text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase">Intelligence Pvt Ltd</span>
            </div>
            <div className="text-white/40 text-[10px] md:text-xs leading-relaxed max-w-xs uppercase tracking-tight">
              AI Systems | Automation | Intelligence <br />
              Building the future of autonomous enterprise.
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3 md:gap-4 text-white/60 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <a href="mailto:info@arqaya.com" className="hover:text-white transition-colors">info@arqaya.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span>India</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 text-center text-white/20 text-[10px]">
          © {new Date().getFullYear()} ARQAYA Intelligence Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
