"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  headline: string;
  image: string;
  alt: string;
  overlay?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ label, headline, image, alt, overlay = "rgba(0,0,0,0.50)" }) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] mt-[100px] w-full overflow-hidden flex items-end">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0" style={{ backgroundColor: overlay }} />
      <div className="relative z-10 px-6 md:px-24 pb-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-rajdhani font-bold text-[11px] tracking-[0.2em] uppercase text-gold mb-4 block">
            {label}
          </span>
          <h1 className="font-serif font-light text-4xl md:text-[64px] leading-[1.1] text-white">
            {headline}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
