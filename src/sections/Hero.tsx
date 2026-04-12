"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Globe, Layers, Shield, Database, Workflow, Activity } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { cn } from "@/lib/utils";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, // Reduced y for mobile feel
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] as any 
      },
    },
  };

  const marqueeItems = [
    { icon: Database, text: "Infrastructure" },
    { icon: Workflow, text: "Automation" },
    { icon: Activity, text: "Intelligence" },
    { icon: Shield, text: "Reliability" },
    { icon: Layers, text: "Scalability" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center pt-24 pb-32">
      
      {/* Cinematic Background Video Layer */}
      <div 
        className="absolute w-full z-0 h-[60vh] md:h-[80vh] bottom-[30vh] md:bottom-[35vh]"
      >
        <VideoPlayer
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="h-full w-full object-cover opacity-100"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10 md:gap-14"
      >
        {/* Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4">
          <div className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-[10px] md:text-xs font-medium text-white/80">
            <Cpu className="h-3 w-3 md:h-3.5 md:w-3.5" />
            Agentic AI Systems
          </div>
          <div className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-[10px] md:text-xs font-medium text-white/80">
            <Layers className="h-3 w-3 md:h-3.5 md:w-3.5" />
            Domain Models
          </div>
          <div className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-[10px] md:text-xs font-medium text-white/80">
            <Shield className="h-3 w-3 md:h-3.5 md:w-3.5" />
            Reliable Systems
          </div>
        </motion.div>

        {/* Headline - Responsive Font Sizes */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-[1.1] text-white max-w-4xl"
        >
          Unlock the Power <br className="hidden md:block" /> 
          of AI for Business
        </motion.h1>

        {/* Subtext - Better Mobile Width */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-xl text-white/60 max-w-2xl leading-relaxed px-4"
        >
          We build agentic AI systems, domain-specific models, and intelligent 
          automation platforms that transform how modern companies operate.
        </motion.p>

        {/* Buttons - Stacked on Mobile */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold transition-all active:scale-95 hover:bg-white/90">
            Get Started
          </button>
          <button className="glass text-white px-10 py-4 rounded-full font-semibold transition-all active:scale-95 hover:bg-white/10">
            Let&apos;s Get Connected
          </button>
        </motion.div>
      </motion.div>

      {/* Infinite Scrolling Marquee */}
      <div className="absolute bottom-10 md:bottom-12 w-full overflow-hidden grayscale opacity-40">
        <div className="flex w-fit whitespace-nowrap animate-marquee">
          {/* First set of items */}
          <div className="flex items-center gap-12 md:gap-20 px-6">
            {marqueeItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                <span className="font-bold text-base md:text-lg tracking-tighter uppercase">{item.text}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-12 md:gap-20 px-6">
            {marqueeItems.map((item, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                <span className="font-bold text-base md:text-lg tracking-tighter uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
