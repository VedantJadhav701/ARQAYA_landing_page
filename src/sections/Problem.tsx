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
    <section className="py-24 md:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <ScrollReveal variant="fade-right">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
                AI is Powerful — <br />
                <span className="text-white/40">But Hard to Deploy</span>
              </h2>
              <p className="text-white/40 text-lg md:text-xl italic font-serif">
                “AI isn’t just about models — it’s about systems.”
              </p>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {painPoints.map((point, index) => (
              <ScrollReveal 
                key={index} 
                variant="scale-in" 
                delay={index * 0.1}
                className="h-full"
              >
                <div className="h-full p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <point.icon className="h-8 w-8 text-white/40 mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-medium mb-3">{point.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">
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
