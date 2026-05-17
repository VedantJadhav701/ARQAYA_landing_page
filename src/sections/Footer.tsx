"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#AAAAAA] pt-24 pb-12 border-t border-gold">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Col 1: Brand */}
          <div className="flex flex-col lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <div className="font-serif font-bold text-[24px] text-white leading-tight">ARQAYAA</div>
              <div className="font-rajdhani text-[11px] font-bold tracking-[0.2em] text-gold -mt-1 uppercase">Intelligence</div>
            </Link>
            <p className="font-sans text-[14px] leading-relaxed mb-8">
              Building the future of autonomous enterprise. AI solutions for industries and society.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/subsidiaries/tenetx" className="bg-tenetx-primary/20 text-tenetx-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-tenetx-primary/30 transition-colors">TENETX</Link>
              <Link href="/subsidiaries/texflow" className="bg-texflow-primary/20 text-texflow-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-texflow-primary/30 transition-colors">TEXFLOW</Link>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">COMPANY</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/video" className="hover:text-white transition-colors">Our Story (Film)</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">What We Do</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Col 3: Knowledge */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">KNOWLEDGE</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/publications" className="hover:text-white transition-colors">Publications</Link></li>
            </ul>
          </div>

          {/* Col 4: Trust */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">TRUST</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              <li><Link href="/governance" className="hover:text-white transition-colors">Governance</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">CONTACT</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:info@arqaya.com" className="hover:text-white transition-colors">info@arqaya.com</a>
              </li>
              <li>India</li>
              <li>
                <a href="/book-call" className="text-gold font-bold hover:text-gold-light transition-colors flex items-center gap-2">
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedInIcon /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
