"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#07011d] flex items-center">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <VideoPlayer
          src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
          className="h-full w-full object-cover opacity-60 md:opacity-100 origin-center scale-105 md:scale-110 lg:ml-[200px]"
        />
        {/* Cinematic Fade Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#07011d] via-transparent to-transparent h-64 bottom-0" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#07011d] via-[#07011d]/20 to-transparent w-full md:w-1/2 left-0" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="flex flex-col gap-8 md:gap-12 max-w-3xl">
          
          {/* Badge Reveal */}
          <ScrollReveal variant="fade-up" duration={0.6}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 shadow-2xl shadow-purple-500/10">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-[10px] md:text-sm font-medium text-white/90 uppercase tracking-widest">
                New AI Automation Ally
              </span>
            </div>
          </ScrollReveal>

          {/* Heading Reveal - Simplified for Reliability */}
          <div className="flex flex-col gap-2">
            <ScrollReveal variant="fade-up" delay={0.1} duration={0.8}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.05]">
                Unlock the Power <br className="hidden md:block" />
                of AI for Your <span className="font-serif italic text-purple-200">Business.</span>
              </h1>
            </ScrollReveal>
          </div>

          {/* Subtitle Reveal */}
          <ScrollReveal variant="fade-up" delay={0.2} duration={0.8} className="max-w-xl">
            <p className="text-white/70 text-base md:text-xl font-normal leading-relaxed">
              Our cutting-edge AI platform automates, analyzes, and accelerates 
              your workflows so you can focus on what really matters.
            </p>
          </ScrollReveal>

          {/* CTA Button Group Reveal */}
          <ScrollReveal variant="fade-up" delay={0.3} duration={0.8}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/book-call"
                className="inline-flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3.5 rounded-full font-bold transition-all active:scale-95 hover:bg-purple-100 shadow-xl shadow-white/5"
              >
                Book A Free Call
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-all active:scale-95 hover:bg-white/20">
                Learn now
              </button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Hero;
