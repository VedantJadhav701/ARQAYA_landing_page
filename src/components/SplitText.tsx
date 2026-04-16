"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  duration = 0.6,
  y = 40,
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1] as any, // Premium ease
      },
    },
    hidden: {
      opacity: 0,
      y,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={cn("flex flex-wrap", className)}>
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="mr-[0.25em] inline-block"
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SplitText;
