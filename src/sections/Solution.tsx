"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Bot, Network, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="solution" className="py-32 md:py-48 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="text-center mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tighter mb-10 leading-[1.05]">
            We Build AI That Actually <br />
            <span className="text-white/30 italic">Works in Production</span>
          </h2>
          <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            From workflow automation to enterprise-grade AI monitoring, 
            ARQAYA helps you deploy reliable, scalable, and high-impact solutions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {solutions.map((item, index) => (
            <ScrollReveal 
              key={index} 
              variant="fade-up" 
              delay={index * 0.15}
              className="h-full"
            >
              <div className="group h-full p-10 rounded-[40px] glass hover:bg-white/5 transition-all hover:-translate-y-4 border-white/5 hover:border-white/20">
                <div className={cn(
                  "h-16 w-16 rounded-2xl mb-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                  item.color === "blue" && "bg-blue-500/10 text-blue-400",
                  item.color === "purple" && "bg-purple-500/10 text-purple-400",
                  item.color === "yellow" && "bg-yellow-500/10 text-yellow-400",
                  item.color === "green" && "bg-green-500/10 text-green-400",
                )}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium mb-5">{item.title}</h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">
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
