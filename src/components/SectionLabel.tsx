"use client";

import React from "react";

const SectionLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`section-label ${className}`}>{children}</div>
  );
};

export default SectionLabel;
