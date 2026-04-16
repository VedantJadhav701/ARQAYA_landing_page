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
      {/* Background Video Component - Responsive Transforms */}
      <div className="absolute inset-0 z-0 flex items-center overflow-hidden">
        <VideoPlayer
          src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
          className="h-full w-full object-cover origin-center md:origin-left scale-110 md:scale-125 lg:ml-[200px]"
        />
        {/* Bottom Fade Gradient - Refined for mobile */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#070612] via-[#070612]/40 to-transparent h-64 bottom-0" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="flex flex-col gap-10 md:gap-12 max-w-4xl">
          {/* Badge & Heading Group */}
          <div className="flex flex-col gap-6">
            {/* Badge - Immediate trigger */}
            <BlurIn duration={0.6} delay={0} immediate={true}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
                <Sparkles className="w-3 h-3 text-white/80" />
                <span className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-wider">
                  New AI Automation Ally
                </span>
              </div>
            </BlurIn>

            {/* Main Heading - Immediate trigger */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-tight lg:leading-[1.1] tracking-tight">
              <SplitText 
                text="Unlock the Power of AI" 
                className="block mb-1 md:mb-2" 
                stagger={0.08}
                triggerOnce={true}
              />
              <div className="flex flex-wrap items-baseline gap-x-[0.25em]">
                <SplitText 
                  text="for Your" 
                  delay={0.4} 
                  stagger={0.08}
                  triggerOnce={true}
                />
                <SplitText 
                  text="Business." 
                  className="font-serif italic text-white/90" 
                  delay={0.6} 
                  stagger={0.08}
                  triggerOnce={true}
                />
              </div>
            </h1>
            
            {/* Subtitle */}
            <BlurIn delay={0.8} duration={0.6} className="max-w-xl" immediate={true}>
              <p className="text-white/80 text-base md:text-lg font-normal leading-relaxed">
                Our cutting-edge AI platform automates, analyzes, and accelerates 
                your workflows so you can focus on what really matters.
              </p>
            </BlurIn>
          </div>

          {/* CTA Buttons */}
          <BlurIn delay={1} duration={0.6} immediate={true}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/book-call"
                className="inline-flex items-center gap-3 bg-white text-[#070612] px-6 py-3.5 rounded-full font-bold transition-all active:scale-95 hover:bg-white/90"
              >
                Book A Free Call
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all active:scale-95 hover:bg-white/20">
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
