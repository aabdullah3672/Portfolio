"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-14 flex items-center gap-4"
    >
      <span className="font-mono text-sm text-accent">{number}.</span>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="hidden h-px flex-1 bg-border sm:block" />
    </motion.div>
  );
}
