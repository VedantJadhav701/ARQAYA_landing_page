"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import CompanyVideo from "@/components/video/CompanyVideo";
import { Link2, Download, Check } from "lucide-react";
import Link from "next/link";

export default function VideoPage() {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText("https://dpulseai.com/video");
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const downloadScript = () => {
    const scriptText = `Dpulseai - COMPANY FILM SCRIPT

"Intelligence by Design."
A 90-second cinematic look into our mission, our technology, and the industrial systems we are building for the future.

Dpulseai. Building the AI systems that actually work. For industries. For society. For India.
`;
    const blob = new Blob([scriptText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dpulseai_film_script.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-white text-text-black">
      <Navbar darkMode={false} />

      <section className="pt-32 pb-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
             <div className="section-label mb-4 text-gold after:bg-gold-rule uppercase">OUR STORY (FILM)</div>
             <h1 className="font-serif text-[42px] md:text-[64px] leading-tight text-text-black mb-6">Intelligence by Design.</h1>
             <p className="font-sans text-text-mid text-lg md:text-[20px] max-w-2xl leading-relaxed">
               A 90-second cinematic look into our mission, our technology, and the industrial systems we are building for the future.
             </p>
          </div>

          {/* VIDEO PLAYER CONTAINER */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] bg-black">
            <CompanyVideo />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div>
                <h2 className="font-serif text-[32px] text-text-black mb-6 border-b border-gray-mid pb-4 inline-block">Dpulseai</h2>
                <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-10">
                  We bridge the gap between AI hype and industrial reality. From physics-native 
                  modeling in energy to deterministic compliance in research, we build 
                  the systems that define the next generation of autonomous enterprise.
                </p>
                
                <div className="flex flex-wrap gap-4">
                   <a href="https://dpulseai.vercel.app/book-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Book A Free Call
                   </a>
                   <Link href="/what-we-do" className="px-10 py-4 border border-border rounded font-rajdhani font-bold text-[13px] tracking-widest uppercase hover:bg-cream-dark transition-colors text-text-black">
                      Explore Our Work
                   </Link>
                </div>
             </div>

             <div className="bg-cream-dark border border-gray-mid rounded-2xl p-10">
                <h3 className="font-rajdhani font-bold text-[11px] tracking-widest text-gold uppercase mb-8">SHARE THE STORY</h3>
                <div className="space-y-6">
                   <button 
                     onClick={copyLink}
                     className="w-full flex items-center justify-between p-4 bg-white border border-border rounded-xl hover:border-gold transition-all group"
                   >
                      <div className="flex items-center gap-4">
                         <Link2 size={18} className="text-text-muted group-hover:text-gold" />
                         <span className="font-sans text-[15px] text-text-black">{linkCopied ? "✓ Link Copied!" : "Copy Film Link"}</span>
                      </div>
                      {linkCopied && <Check size={16} className="text-green-600" />}
                   </button>

                   <a 
                     href="https://www.linkedin.com/sharing/share-offsite/?url=https://dpulseai.com/video"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full flex items-center gap-4 p-4 bg-white border border-border rounded-xl hover:border-gold transition-all group"
                   >
                      {/* Using custom SVG since we moved to inline social icons earlier */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted group-hover:text-gold">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="font-sans text-[15px] text-text-black">Share on LinkedIn</span>
                   </a>

                   <button 
                     onClick={downloadScript}
                     className="w-full flex items-center gap-4 p-4 bg-white border border-border rounded-xl hover:border-gold transition-all group"
                   >
                      <Download size={18} className="text-text-muted group-hover:text-gold" />
                      <span className="font-sans text-[15px] text-text-black">Download Film Script (.txt)</span>
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
