"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ShoppingCart, HeartPulse, Building2, Gavel } from "lucide-react";

const industries = [
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Automated customer support agents and personalized product recommendation engines.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    description: "AI-driven patient data analysis and automated medical transcription systems.",
  },
  {
    title: "Real Estate",
    icon: Building2,
    description: "Intelligent lead qualification and automated property valuation models.",
  },
  {
    title: "Legal",
    icon: Gavel,
    description: "Automated document review and smart legal research assistants.",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-32 md:py-48 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
            Designed for <br />
            <span className="text-white/40 italic font-serif">High-Impact Industries</span>
          </h2>
          <p className="text-white/50 text-base md:text-xl max-w-2xl leading-relaxed">
            We specialize in deploying AI systems for regulated and 
            data-heavy sectors where accuracy is mission-critical.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {industries.map((item, index) => (
            <ScrollReveal 
              key={index} 
              variant="scale-in" 
              delay={index * 0.1}
              className="h-full"
            >
              <div className="group h-full p-10 rounded-[40px] glass border-white/5 hover:border-white/20 transition-all hover:bg-white/5 flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                  <item.icon className="h-10 w-10 text-white/30 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                <p className="text-white/50 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
