"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="04" title="Experience" />

        <div className="relative space-y-12 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center">
                <div className="h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              </div>

              <div className="rounded-lg border border-border bg-bg-card p-6 transition-colors hover:border-accent/30">
                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-text">{exp.role}</h3>
                  <span className="font-mono text-xs text-text-muted">
                    {exp.period}
                  </span>
                </div>

                <ul className="mb-4 space-y-2 mt-4">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-dim px-2.5 py-0.5 text-[11px] font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
