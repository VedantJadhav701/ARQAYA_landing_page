"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in" | "blur-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  className,
  staggerChildren = 0,
  once = true,
}) => {
  const getVariants = (): Variants => {
    const base: Variants = {
      hidden: { 
        opacity: 0,
        filter: "blur(10px)",
      },
      visible: { 
        opacity: 1, 
        filter: "blur(0px)",
        transition: {
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98] as any,
          staggerChildren,
        }
      },
    };

    switch (variant) {
      case "fade-up":
        return {
          ...base,
          hidden: { ...base.hidden, y: distance },
          visible: { ...base.visible, y: 0 },
        };
      case "fade-down":
        return {
          ...base,
          hidden: { ...base.hidden, y: -distance },
          visible: { ...base.visible, y: 0 },
        };
      case "fade-left":
        return {
          ...base,
          hidden: { ...base.hidden, x: distance },
          visible: { ...base.visible, x: 0 },
        };
      case "fade-right":
        return {
          ...base,
          hidden: { ...base.hidden, x: -distance },
          visible: { ...base.visible, x: 0 },
        };
      case "scale-in":
        return {
          ...base,
          hidden: { ...base.hidden, scale: 0.9, y: 20 },
          visible: { ...base.visible, scale: 1, y: 0 },
        };
      case "blur-in":
        return base;
      default:
        return base;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // margin "100px" ensures it triggers well before it enters 
      // amount 0.05 ensures it triggers even if only a tiny sliver is detected
      viewport={{ once, amount: 0.05, margin: "0px 0px -100px 0px" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
