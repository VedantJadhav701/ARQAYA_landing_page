"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BlurInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  immediate?: boolean;
}

const BlurIn: React.FC<BlurInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className,
  immediate = false,
  ...props
}) => {
  const variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      // Use animate for immediate triggers (Above the Fold)
      // Use whileInView for scroll-revealed triggers
      animate={immediate ? "visible" : undefined}
      whileInView={!immediate ? "visible" : undefined}
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
