"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Bot, Network, ShieldCheck, Zap } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description: "Autonomous agents that handle complex workflows, from data retrieval to multi-step decision making.",
    color: "blue",
  },
  {
    icon: Network,
    title: "Domain-Specific Models",
    description: "Fine-tuned LLMs trained on your industry data for maximum accuracy and relevant context.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "End-to-end automation platforms that connect your existing tools with intelligent logic layers.",
    color: "yellow",
  },
  {
    icon: ShieldCheck,
    title: "Production Monitoring",
    description: "Real-time AI observability to prevent hallucinations, monitor latency, and ensure reliability.",
    color: "green",
  },
];

const Solution = () => {
  return (
    <section className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
            We Build AI That Actually <br />
            <span className="text-white/40 italic font-serif">Works in Production</span>
          </h2>
          <p className="text-white/50 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            From workflow automation to enterprise-grade AI monitoring, 
            ARQAYA helps you deploy reliable, scalable, and high-impact solutions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((item, index) => (
            <ScrollReveal 
              key={index} 
              variant="fade-up" 
              delay={index * 0.15}
              className="h-full"
            >
              <div className="group h-full p-8 rounded-[32px] glass hover:bg-white/10 transition-all hover:-translate-y-3">
                <div className={cn(
                  "h-14 w-14 rounded-2xl mb-8 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6",
                  item.color === "blue" && "bg-blue-500/10 text-blue-400",
                  item.color === "purple" && "bg-purple-500/10 text-purple-400",
                  item.color === "yellow" && "bg-yellow-500/10 text-yellow-400",
                  item.color === "green" && "bg-green-500/10 text-green-400",
                )}>
                  <item.icon className="h-7 w-7" />
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

export default Solution;

// Needed helper for conditional styles if not in utils
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
