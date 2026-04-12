"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Globe, Layers, Shield, BarChart, Database, Workflow, Activity } from "lucide-react";
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
        ease: [0.21, 0.47, 0.32, 0.98] as any // Fix typing error for cubic-bezier
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center pt-20">
      
      {/* Cinematic Background Video Layer (Synapse Floating Style) */}
      <div 
        className="absolute w-full z-0 h-[80vh] bottom-[35vh]"
      >
        <VideoPlayer
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="h-full w-full object-cover opacity-100"
        />
      </div>

      {/* Hero Content (ARQAYA Information) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 md:gap-12"
      >
        {/* Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium text-white/80">
            <Cpu className="h-3.5 w-3.5" />
            Agentic AI Systems
          </div>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium text-white/80">
            <Layers className="h-3.5 w-3.5" />
            Domain Models
          </div>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium text-white/80">
            <Shield className="h-3.5 w-3.5" />
            System Monitoring
          </div>
        </motion.div>

        {/* ARQAYA Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-[1.05] text-white max-w-4xl"
        >
          Unlock the Power <br /> of AI for Business
        </motion.h1>

        {/* ARQAYA Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
        >
          We build agentic AI systems, domain-specific models, and intelligent 
          automation platforms that transform how modern companies operate.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white border border-white/20 px-10 py-4 rounded-full font-semibold hover:border-white transition-all">
            Get Started for Free
          </button>
          <button className="glass text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
            Let&apos;s Get Connected
          </button>
        </motion.div>
      </motion.div>

      {/* Generic Logo Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 w-full px-6 flex justify-center gap-12 md:gap-20 overflow-hidden grayscale pointer-events-none"
      >
        <div className="flex items-center gap-12 md:gap-20 opacity-40">
           <div className="flex items-center gap-2">
             <Database className="h-6 w-6" />
             <span className="font-bold text-lg tracking-tighter">Infrastructure</span>
           </div>
           <div className="flex items-center gap-2">
             <Workflow className="h-6 w-6" />
             <span className="font-bold text-lg tracking-tighter">Automation</span>
           </div>
           <div className="flex items-center gap-2">
             <Activity className="h-6 w-6" />
             <span className="font-bold text-lg tracking-tighter">Intelligence</span>
           </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
