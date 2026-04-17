"use client";

import React from "react";
import LottieAnimation from "@/components/LottieAnimation";
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
    <section id="differentiation" className="py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: Heading & Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-32">
          <ScrollReveal variant="fade-right">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-8 leading-[0.95]">
              Why <br />
              <span className="text-white/30 italic font-serif">ARQAYA?</span>
            </h2>
            <p className="text-white/50 text-xl md:text-2xl leading-relaxed mb-10 max-w-lg font-normal">
              We bridge the gap between AI hype and business reality with 
              systems that are reliable, secure, and deeply integrated.
            </p>
            <div className="flex gap-4">
               <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all active:scale-95 text-sm uppercase tracking-widest">
                 Get Started
               </button>
               <button className="glass text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
                 Framework
               </button>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale-in" delay={0.2} className="flex justify-center">
            <LottieAnimation 
              animationPath="/animations/collaboration.json" 
              className="w-full max-w-[500px] aspect-square rounded-[40px] overflow-hidden glass mix-blend-lighten shadow-2xl shadow-white/5"
            />
          </ScrollReveal>
        </div>

        {/* Bottom Section: Horizontal Cards (4 in a line) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <ScrollReveal 
              key={index} 
              variant="fade-up" 
              delay={index * 0.15}
              className="h-full"
            >
              <div className="group h-full p-8 rounded-[40px] glass border-white/5 hover:border-white/10 flex flex-col gap-6 transition-all duration-500 hover:bg-white/5">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl shadow-white/5">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.description}
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

export default Differentiation;
