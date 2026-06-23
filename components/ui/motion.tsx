"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : 0,
      x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
      scale: direction === "scale" ? 0.96 : 1,
    },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export const MotionDiv = motion.div;
