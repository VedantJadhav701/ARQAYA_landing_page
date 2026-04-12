"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Production-First Mindset",
    description: "We don't just build POCs. We build hardened, monitored systems designed for production environments.",
  },
  {
    title: "Domain Intelligence",
    description: "Our models are fine-tuned on your specific context, not generic internet data.",
  },
  {
    title: "Seamless Integration",
    description: "Our AI systems sit on top of your existing tools, enhancing rather than replacing your core tech.",
  },
  {
    title: "Agentic Logic",
    description: "We move beyond simple chatbots to adaptive agents that can take actions on your behalf.",
  },
];

const Differentiation = () => {
  return (
    <section id="differentiation" className="py-32 md:py-48 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <ScrollReveal variant="fade-right">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-10 leading-[0.95]">
              Why <br />
              <span className="text-white/30 italic">ARQAYA?</span>
            </h2>
            <p className="text-white/50 text-xl md:text-2xl leading-relaxed mb-12 max-w-lg font-normal">
              We bridge the gap between AI hype and business reality with 
              systems that are reliable, secure, and deeply integrated.
            </p>
            <div className="flex gap-6">
               <button className="bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-white/90 transition-all active:scale-95 shadow-xl shadow-white/5">
                 Get Started
               </button>
               <button className="glass text-white px-10 py-5 rounded-full font-semibold hover:bg-white/10 transition-all">
                 Our Framework
               </button>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {differentiators.map((item, index) => (
              <ScrollReveal 
                key={index} 
                variant="fade-up" 
                delay={index * 0.15}
              >
                <div className="p-10 rounded-[40px] glass border-white/5 hover:border-white/20 flex gap-8 group transition-all duration-500 hover:bg-white/5">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-8 w-8 text-blue-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-white transition-colors tracking-tight">{item.title}</h3>
                    <p className="text-white/50 text-base md:text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
