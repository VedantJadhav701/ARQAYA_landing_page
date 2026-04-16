"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import BlurIn from "@/components/BlurIn";
import SplitText from "@/components/SplitText";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#070612] flex items-center">
      {/* Background Video Component */}
      <div className="absolute inset-0 z-0 flex items-center">
        <VideoPlayer
          src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
          className="h-full w-full object-cover origin-left scale-125 ml-0 lg:ml-[200px]"
        />
        {/* Bottom Fade Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#070612] via-transparent to-transparent h-40 bottom-0" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="flex flex-col gap-12 max-w-4xl">
          {/* Badge & Heading Group */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <BlurIn duration={0.6} delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
                <Sparkles className="w-3 h-3 text-white/80" />
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                  New AI Automation Ally
                </span>
              </div>
            </BlurIn>

            {/* Main Heading - Complex Multi-line Structure */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight lg:leading-[1.2]">
              <SplitText 
                text="Unlock the Power of AI" 
                className="block mb-2" 
                stagger={0.08}
              />
              <div className="flex flex-wrap items-baseline gap-x-[0.25em]">
                <SplitText 
                  text="for Your" 
                  delay={0.4} // Staggered to start after Line 1 is well underway
                  stagger={0.08}
                />
                <SplitText 
                  text="Business." 
                  className="font-serif italic italic text-white/90" 
                  delay={0.56} // Staggered entry for final word
                  stagger={0.08}
                />
              </div>
            </h1>
            
            {/* Subtitle */}
            <BlurIn delay={0.4} duration={0.6} className="max-w-xl">
              <p className="text-white/80 text-lg font-normal leading-relaxed">
                Our cutting-edge AI platform automates, analyzes, and accelerates 
                your workflows so you can focus on what really matters.
              </p>
            </BlurIn>
          </div>

          {/* CTA Buttons */}
          <BlurIn delay={0.6} duration={0.6}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/book-call"
                className="inline-flex items-center gap-3 bg-white text-[#070612] px-5 py-3 rounded-full font-bold transition-transform active:scale-95 hover:scale-105"
              >
                Book A Free Call
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-transform active:scale-95 hover:bg-white/30">
                Learn now
              </button>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
