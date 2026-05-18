"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const domains = [
  {
    id: "mineral-extraction",
    title: "Mineral Extraction",
    img: "https://images.unsplash.com/photo-1576233334104-c16604107962?w=1200&q=85&fit=crop",
    desc: "Optimizing the extraction of critical minerals through sensor fusion and real-time AI monitoring. Our systems increase yield while reducing environmental impact.",
    bullets: ["Yield optimization models", "Real-time extraction monitoring", "Predictive maintenance for heavy machinery"],
    color: "var(--gold)"
  },
  {
    id: "thermal-management",
    title: "Thermal Management",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85&fit=crop",
    desc: "AI-driven cooling systems and heat dissipation modeling for high-performance industrial environments. We ensure thermal stability and energy efficiency.",
    bullets: ["Cooling system optimization", "Thermal anomaly detection", "Heat dissipation simulation"],
    color: "var(--tenetx-primary)"
  },
  {
    id: "battery-fabrication",
    title: "Cost-Effective Battery Fabrication",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=85&fit=crop",
    desc: "Revolutionizing battery manufacturing with AI-powered quality control and process parameter optimization. Our goal is to make high-density energy storage accessible.",
    bullets: ["Process parameter optimization", "Computer vision quality control", "Intelligent material mixing"],
    color: "var(--texflow-primary)"
  },
  {
    id: "cell-fabrication",
    title: "Cost-Effective Cell Fabrication",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85&fit=crop",
    desc: "Enhancing cell production through automated assembly line monitoring and precision alignment AI. We drive down costs while maintaining world-class standards.",
    bullets: ["Automated assembly monitoring", "Precision alignment AI", "Life cycle prediction"],
    color: "var(--text-black)"
  },
  {
    id: "semiconductor-synthesis",
    title: "Semiconductor Synthesis & Processing",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85&fit=crop",
    desc: "Advancing semiconductor manufacturing with nano-scale defect detection and plasma etch process control. Our AI systems enhance yield in high-precision environments.",
    bullets: ["Nano-scale defect detection", "Process control AI", "Yield enhancement analytics"],
    color: "var(--gold)"
  },
  {
    id: "pharmaceutical-api",
    title: "Pharmaceutical API & Formulation",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=85&fit=crop",
    desc: "Ensuring batch consistency and regulatory compliance through intelligent monitoring. ARQAYAA helps accelerate drug development with AI-driven formulation.",
    bullets: ["Batch consistency AI", "Compliance monitoring", "Formulation development"],
    color: "var(--tenetx-primary)"
  },
  {
    id: "speciality-chemicals",
    title: "Speciality Chemical Manufacturing",
    img: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1200&q=85&fit=crop",
    desc: "Optimizing catalyst efficiency and safety protocols in chemical processing. Our multi-variate analysis systems ensure precision and stability in every mix.",
    bullets: ["Catalyst efficiency optimization", "Automated safety monitoring", "Precision mixing AI"],
    color: "var(--texflow-primary)"
  },
  {
    id: "agricultural-app-dev",
    title: "Agricultural Application Development",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&q=85&fit=crop",
    desc: "Bringing precision farming to the field with satellite and IoT data fusion. We help farmers optimize irrigation, soil health, and crop yield through AI.",
    bullets: ["Precision farming models", "Soil health analysis", "Autonomous irrigation control"],
    color: "var(--text-black)"
  }
];

export default function AppliedDomainsClient() {
  return (
    <>
      <PageHero
        label="APPLIED DOMAINS"
        headline="Where Intelligence Meets Industry"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&fit=crop"
        alt="Industrial research and development"
      />

      <div className="bg-white">
        <section className="py-20 px-6 md:px-24 bg-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-[36px] md:text-[48px] text-text-black mb-6 italic">Transforming physical domains with digital intelligence.</h2>
            <p className="font-sans text-text-mid text-[18px] leading-relaxed">
              ARQAYAA&apos;s AI solutions are not limited to the cloud. We build systems that interface with the physical world, 
              optimizing everything from mineral extraction to pharmaceutical formulation. Our mission is to apply 
              advanced intelligence to the industries that form the backbone of global society.
            </p>
          </div>
        </section>

        {domains.map((domain, idx) => (
          <section key={domain.id} id={domain.id} className={`py-24 px-6 md:px-24 ${idx % 2 !== 0 ? 'bg-cream-dark' : 'bg-white'} scroll-mt-16`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                className={`lg:w-1/2 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-1 mb-8" style={{ backgroundColor: domain.color }}></div>
                <h2 className="font-serif text-[42px] leading-tight text-text-black mb-6">{domain.title}</h2>
                <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                  {domain.desc}
                </p>
                <div className="space-y-4 mb-10">
                  {domain.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: domain.color }}></div>
                      <span className="font-sans font-medium text-text-black">{b}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/contact?domain=${domain.id}`} className="inline-flex items-center gap-2 font-rajdhani font-bold tracking-[0.15em] text-[14px] uppercase border px-6 py-3 rounded hover:opacity-80 transition-opacity" style={{ color: domain.color, borderColor: domain.color }}>
                  Explore Domain <span>→</span>
                </Link>
              </motion.div>
              <motion.div 
                className={`lg:w-1/2 w-full ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <img src={domain.img} alt={domain.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
