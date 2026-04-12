"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Shield, Database, Workflow, Activity } from "lucide-react";
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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
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
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex flex-col items-center justify-center pt-24 pb-40">
      
      {/* Background Video Layer */}
      <div 
        className="absolute w-full z-0 h-[65dvh] md:h-[85vh] bottom-[30dvh] md:bottom-[40vh]"
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
        className="relative z-20 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-10 md:gap-16"
      >
        {/* Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-5">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2.5 text-[10px] md:text-sm font-medium text-white/80">
            <Cpu className="h-4 w-4 text-blue-400" />
            Agentic AI Systems
          </div>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2.5 text-[10px] md:text-sm font-medium text-white/80">
            <Layers className="h-4 w-4 text-purple-400" />
            Domain Models
          </div>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2.5 text-[10px] md:text-sm font-medium text-white/80">
            <Shield className="h-4 w-4 text-green-400" />
            System Monitoring
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-7xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[1.1] md:leading-[0.95] text-white max-w-5xl"
        >
          Unlock the Power <br className="hidden md:block" /> 
          of AI for Business
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-2xl text-white/60 max-w-3xl leading-relaxed px-4"
        >
          We build agentic AI systems, domain-specific models, and intelligent 
          automation platforms that transform how modern companies operate.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-8 sm:px-0 mb-10">
          <button className="bg-white text-black px-12 py-5 rounded-full font-bold transition-all active:scale-95 hover:bg-white/90 shadow-2xl shadow-white/10">
            Get Started for Free
          </button>
          <button className="glass text-white px-12 py-5 rounded-full font-semibold transition-all active:scale-95 hover:bg-white/10">
            Let&apos;s Get Connected
          </button>
        </motion.div>
      </motion.div>

      {/* Infinite Scrolling Marquee - Fixed with dvh/absolute bottom safe area */}
      <div className="absolute bottom-6 md:bottom-12 w-full overflow-hidden grayscale opacity-60 z-10">
        <div className="flex w-fit whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-16 md:gap-24 px-8">
            {marqueeItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <item.icon className="h-5 w-5 md:h-7 md:w-7" />
                <span className="font-bold text-base md:text-xl tracking-tighter uppercase">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-16 md:gap-24 px-8">
            {marqueeItems.map((item, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4">
                <item.icon className="h-5 w-5 md:h-7 md:w-7" />
                <span className="font-bold text-base md:text-xl tracking-tighter uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
