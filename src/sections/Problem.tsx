"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { AlertCircle, TrendingDown, Database, ZapOff } from "lucide-react";

const painPoints = [
  {
    icon: ZapOff,
    title: "Project Failure",
    description: "Most AI projects fail in production due to lack of scalability and system integration.",
  },
  {
    icon: TrendingDown,
    title: "Model Drift",
    description: "Models degrade over time without proper monitoring and retraining pipelines.",
  },
  {
    icon: Database,
    title: "Data Silos",
    description: "Businesses lack domain-specific intelligence, relying on generic model outputs.",
  },
  {
    icon: AlertCircle,
    title: "Fragmented Tools",
    description: "Automation tools are often fragmented, unreliable, and hard to maintain.",
  },
];

const Problem = () => {
  return (
    <section className="py-32 md:py-48 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Header Area - Cleanly separated from cards */}
          <div className="lg:w-2/5 lg:sticky lg:top-40 mb-12 lg:mb-0">
            <ScrollReveal variant="fade-right">
              <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-10 tracking-tighter">
                AI is Powerful — <br />
                <span className="text-white/30 italic">But Hard to Deploy</span>
              </h2>
              {/* Quote - Fixed alignment to avoid overlap with cards */}
              <div className="pl-6 border-l-2 border-white/10">
                <p className="text-white/40 text-xl md:text-2xl italic font-serif leading-relaxed">
                  “AI isn’t just about models — it’s about systems.”
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Cards Area */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {painPoints.map((point, index) => (
              <ScrollReveal 
                key={index} 
                variant="scale-in" 
                delay={index * 0.1}
                className="h-full"
              >
                <div className="h-full p-10 rounded-[40px] glass border-white/5 hover:border-white/20 transition-all hover:bg-white/5 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <point.icon className="h-10 w-10 text-white/30 mb-8 group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-medium mb-4">{point.title}</h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
