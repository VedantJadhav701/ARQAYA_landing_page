"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  delay = 0,
  stagger = 0.08,
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
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6, // Exactly as per specification
        ease: "easeOut" as const,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 40,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
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
