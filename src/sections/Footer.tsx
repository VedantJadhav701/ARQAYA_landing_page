"use client";

import React from "react";
import { Linkedin, X, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#AAAAAA] pt-24 pb-12 border-t border-gold">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="font-serif font-bold text-[24px] text-white leading-tight">ARQAYAA</div>
              <div className="font-rajdhani text-[11px] font-bold tracking-[0.2em] text-gold -mt-1">INTELLIGENCE</div>
            </div>
            <p className="font-sans text-[14px] leading-relaxed mb-8">
              Building the future of autonomous enterprise. AI solutions for industries and society.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-tenetx-primary/20 text-tenetx-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">TENETX</span>
              <span className="bg-texflow-primary/20 text-texflow-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">TEXFLOW</span>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">COMPANY</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">What We Do</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 3: Subsidiaries */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">SUBSIDIARIES</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><a href="#" className="hover:text-white transition-colors">TENETX — Oil & Gas AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TEXFLOW — Research Platform</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">CONTACT</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:info@arqaya.com" className="hover:text-white transition-colors">info@arqaya.com</a>
              </li>
              <li>India</li>
              <li>
                <a href="https://arqaya.vercel.app/book-call" className="text-gold font-bold hover:text-gold-light transition-colors flex items-center gap-2">
                  Book A Free Call <span>→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[12px]">
            © 2026 ARQAYAA Intelligence Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><X size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
