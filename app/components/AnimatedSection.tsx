"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const offset =
    direction === "up" || direction === "down"
      ? { x: 0, y: direction === "up" ? 32 : -32 }
      : { x: direction === "left" ? 32 : -32, y: 0 };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, ...offset, scale: 0.8 }
      }
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}

