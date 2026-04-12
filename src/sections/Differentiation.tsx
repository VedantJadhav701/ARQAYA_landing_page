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
    <section className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fade-right">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-8 max-w-md">
              Why <br />
              <span className="text-white/40 italic font-serif">ARQAYA?</span>
            </h2>
            <p className="text-white/50 text-base md:text-xl leading-relaxed mb-10 max-w-lg">
              We bridge the gap between AI hype and business reality with 
              systems that are reliable, secure, and deeply integrated.
            </p>
            <div className="flex gap-4">
               <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
                 Our Framework
               </button>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <ScrollReveal 
                key={index} 
                variant="fade-up" 
                delay={index * 0.15}
              >
                <div className="p-8 rounded-[32px] glass hover:bg-white/5 flex gap-6 group transition-colors">
                  <div className="mt-1">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium mb-3">{item.title}</h3>
                    <p className="text-white/50 text-base md:text-lg leading-relaxed">
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
