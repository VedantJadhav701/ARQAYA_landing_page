"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label: string;
  title: string;
  image: string;
  overlay?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ label, title, image, overlay }) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden mt-[100px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={cn("absolute inset-0", overlay || "bg-black/50")} />
      
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-6 justify-center text-gold after:bg-gold-rule"
          >
            {label}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-4xl md:text-[64px] leading-tight"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
