"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "60%",
    target: 60,
    suffix: "%",
    label: "Reduced Manual Workload",
  },
  {
    number: "3×",
    target: 3,
    suffix: "×",
    label: "Improved Decision Speed Across Teams",
  },
  {
    number: "100%",
    target: 100,
    suffix: "%",
    label: "Data Sovereignty with TENETX",
  },
];

function useCountUp(target: number, duration: number = 1800, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, inView]);

  return count;
}

const StatItem = ({ stat, idx }: { stat: typeof stats[0]; idx: number }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(stat.target, 1800, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15, duration: 0.5 }}
      className="flex flex-col"
    >
      <div className="font-serif text-text-black text-[72px] md:text-[96px] font-light leading-none mb-4">
        {count}{stat.suffix}
      </div>
      <div className="w-full h-[1px] bg-gray-mid mb-4" />
      <div className="font-sans text-text-muted text-[15px] uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-gray-light px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="section-label mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          AT A GLANCE
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
