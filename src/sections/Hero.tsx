"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    label: "AI INTELLIGENCE",
    headline: "Unlock the Power of AI for Your Business.",
    body: "Automating, analyzing, and accelerating workflows across industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1920",
    href: "/what-we-do"
  },
  {
    label: "TENETX — OIL & GAS",
    headline: "Physics-Native AI for Drilling Operations.",
    body: "100% data sovereignty. Error rate below 0.5%. Zero cloud dependency.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1920",
    href: "/subsidiaries/tenetx"
  },
  {
    label: "TEXFLOW — RESEARCH",
    headline: "From Word to Publisher-Ready PDF. Instantly.",
    body: "Zero-AI deterministic typesetting for researchers, scholars, and professors.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1920",
    href: "/subsidiaries/texflow"
  },
  {
    label: "OUR MISSION",
    headline: "AI Solutions for Industry. And for Society.",
    body: "Building intelligent systems that solve real problems for real people.",
    image: "https://images.unsplash.com/photo-1449156001931-82834b26e3bc?auto=format&fit=crop&q=80&w=1920",
    href: "/about"
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] mt-[100px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <Image 
            src={slides[currentSlide].image}
            alt={slides[currentSlide].headline}
            fill
            priority={currentSlide === 0}
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute bottom-32 left-6 md:left-24 max-w-4xl z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="font-rajdhani font-bold text-[11px] tracking-[0.2em] uppercase text-gold mb-6 block">
                {slides[currentSlide].label}
              </span>
              <h1 className="font-serif font-light text-4xl md:text-[72px] leading-[1.1] mb-6 text-white">
                {slides[currentSlide].headline}
              </h1>
              <p className="font-sans text-base md:text-[16px] mb-8 max-w-xl text-white/80">
                {slides[currentSlide].body}
              </p>
              
              <Link href={slides[currentSlide].href} className="cta-circle group text-white">
                <span className="text-xl group-hover:text-white">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tab Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-black/20 backdrop-blur-sm border-t border-white/10 z-20">
        <div className="flex px-6 md:px-24">
          {[
            "ARQAYAA INTELLIGENCE",
            "TENETX OIL & GAS",
            "TEXFLOW RESEARCH",
            "OUR IMPACT",
          ].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "flex-1 py-6 text-[10px] md:text-[11px] font-rajdhani font-bold tracking-[0.2em] uppercase text-center transition-all relative",
                currentSlide === idx ? "text-white" : "text-white/50 hover:text-white"
              )}
            >
              {tab}
              {currentSlide === idx && (
                <motion.div 
                  layoutId="activeHeroTab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
