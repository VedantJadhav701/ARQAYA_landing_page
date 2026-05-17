"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import CompanyVideo from "@/components/video/CompanyVideo";
import { Link2, Linkedin, Download, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VideoPage() {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText("https://arqaya.com/video");
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const downloadScript = () => {
    const scriptText = `ARQAYAA INTELLIGENCE PVT LTD - COMPANY FILM SCRIPT

Scene 1: THE PROBLEM
"Industries generate more data than ever before. But most AI promises—fail in production."

Scene 2: THE COMPANY
"ARQAYAA Intelligence Pvt Ltd. Building the AI systems that actually work. For industries. For society. For India."

Scene 3: TENETX
"TENETX. Physics-Native AI for Oil & Gas. < 0.5% Error Rate. ₹ 0.08 Per Query. 100% Data Sovereignty."

Scene 4: TEXFLOW
"TEXFLOW. Research Platform for India's Scholars. Word to Publisher-Ready PDF. Zero AI. Zero Hallucinations."

Scene 5: THE VISION
"From oil rigs to research desks. From industrial operations to academic labs. ARQAYAA builds systems that solve real problems for real people."

Scene 6: THE CLOSE
"The future of AI is not about models. It is about systems. Reliable. Scalable. Real. ARQAYAA INTELLIGENCE."
`;
    const blob = new Blob([scriptText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "arqayaa_film_script.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-[#060608] text-white">
      <Navbar darkMode={true} />

      <section className="pt-32 pb-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
             <div className="font-rajdhani font-bold text-[11px] tracking-[0.3em] text-gold uppercase mb-4">OUR STORY (FILM)</div>
             <h1 className="font-serif text-[42px] md:text-[64px] leading-tight text-white mb-6">The Pragmatic Systems.</h1>
             <p className="font-sans text-white/60 text-lg md:text-[20px] max-w-2xl leading-relaxed">
               An in-depth look at ARQAYAA Intelligence — our philosophy, our systems, and how we are engineering the future of industrial autonomy.
             </p>
          </div>

          {/* VIDEO PLAYER */}
          <div className="mb-16">
            <CompanyVideo />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div>
                <h2 className="font-serif text-[32px] text-white mb-6">ARQAYAA INTELLIGENCE PVT LTD</h2>
                <p className="font-sans text-white/70 text-[17px] leading-relaxed mb-10">
                  We bridge the gap between AI hype and industrial reality. From physics-native 
                  modeling in energy to deterministic compliance in research, we build 
                  the systems that define the next generation of autonomous enterprise.
                </p>
                
                <div className="flex flex-wrap gap-4">
                   <a href="https://arqaya.vercel.app/book-call" target="_blank" rel="noopener noreferrer" className="btn-primary bg-gold hover:bg-gold-light text-white border-none px-10 py-4">
                      Book A Free Call
                   </a>
                   <Link href="/what-we-do" className="px-10 py-4 border border-white/20 rounded font-rajdhani font-bold text-[13px] tracking-widest uppercase hover:bg-white/5 transition-colors">
                      Explore Our Work
                   </Link>
                </div>
             </div>

             <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
                <h3 className="font-rajdhani font-bold text-[11px] tracking-widest text-gold uppercase mb-8">SHARE THE STORY</h3>
                <div className="space-y-6">
                   <button 
                     onClick={copyLink}
                     className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/50 transition-all group"
                   >
                      <div className="flex items-center gap-4">
                         <Link2 size={18} className="text-white/40 group-hover:text-gold" />
                         <span className="font-sans text-[15px]">{linkCopied ? "✓ Link Copied!" : "Copy Film Link"}</span>
                      </div>
                      {linkCopied && <Check size={16} className="text-green-500" />}
                   </button>

                   <a 
                     href="https://www.linkedin.com/sharing/share-offsite/?url=https://arqaya.com/video"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/50 transition-all group"
                   >
                      <Linkedin size={18} className="text-white/40 group-hover:text-gold" />
                      <span className="font-sans text-[15px]">Share on LinkedIn</span>
                   </a>

                   <button 
                     onClick={downloadScript}
                     className="w-full flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/50 transition-all group"
                   >
                      <Download size={18} className="text-white/40 group-hover:text-gold" />
                      <span className="font-sans text-[15px]">Download Film Script (.txt)</span>
                   </button>
                </div>
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
