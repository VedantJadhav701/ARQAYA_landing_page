"use client";

import React from "react";
import Link from "next/link";

interface CircleArrowProps {
  href?: string;
  className?: string;
  size?: number;
}

const CircleArrow: React.FC<CircleArrowProps> = ({ href, className = "text-white", size = 48 }) => {
  const inner = (
    <div
      className={`border border-current rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gold hover:border-gold hover:text-white hover:rotate-45 cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-lg">→</span>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
};

export default CircleArrow;
