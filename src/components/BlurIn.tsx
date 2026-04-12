"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BlurInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const BlurIn: React.FC<BlurInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" as const 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;
