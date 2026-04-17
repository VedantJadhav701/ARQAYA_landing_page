"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import ScrollReveal from "@/components/ScrollReveal";
import LottieAnimation from "@/components/LottieAnimation";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Cinematic Background Layer */}
      <VideoBackground />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-8 md:gap-12 max-w-3xl">
            {/* Heading Reveal */}
            <div className="flex flex-col gap-2">
              <ScrollReveal variant="fade-up" delay={0.1} duration={0.8}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter leading-[1.05]">
                  Unlock the Power <br className="hidden md:block" />
                  of AI for Your <span className="font-serif italic text-white/80">Business.</span>
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
                  className="inline-flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3.5 rounded-full font-bold transition-all active:scale-95 hover:bg-white/90 shadow-xl shadow-white/5"
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

          {/* Right Column: Animation */}
          <ScrollReveal variant="fade-left" delay={0.4} className="flex justify-center items-center">
            <LottieAnimation 
              animationPath="/animations/pulse.json" 
              className="w-full max-w-[600px] aspect-square"
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Hero;
