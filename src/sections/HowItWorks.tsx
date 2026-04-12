"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your existing workflows and identify high-impact AI opportunities unique to your business.",
  },
  {
    number: "02",
    title: "Development & Integration",
    description: "Our engineers build custom agents and fine-tuned models, integrating them directly into your current tech stack.",
  },
  {
    number: "03",
    title: "Deployment & Scale",
    description: "We launch your AI systems with full monitoring frameworks, ensuring reliability as you scale operations.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
            Our <span className="text-white/40 italic font-serif">Process</span>
          </h2>
          <p className="text-white/50 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            A systematic approach to deploying production-grade AI that drives real business results.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <ScrollReveal 
              key={index} 
              variant={index % 2 === 0 ? "fade-right" : "fade-left"} 
              delay={index * 0.1}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
                <div className="text-6xl md:text-8xl font-serif italic text-white/5 group-hover:text-white/10 transition-colors">
                  {step.number}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
