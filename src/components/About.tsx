"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = {
  Backend: ["Laravel", "PHP", "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "Microservices", "TDD"],
  Frontend: ["React JS", "Vue JS", "Next.js", "jQuery", "HTML/CSS", "Tailwind", "Bootstrap"],
  Tools: ["Docker", "Git", "BitBucket", "Jira", "VS Code", "MySQL Workbench", "PgAdmin"],
  Practices: ["Agile/Scrum", "Kanban", "CI/CD", "SOA", "Dependency Injection"],
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="01" title="About Me" />

        {/* Photo + Bio row */}
        <div className="mb-14 grid gap-10 lg:grid-cols-3 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="group relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-border transition-all hover:border-accent/50">
              <Image
                src="/images/AhmedDP.png"
                alt="Ahmed Abdullah"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="288px"
              />
              {/* Accent overlay on hover */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            {/* Decorative border offset */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-72 w-72 rounded-2xl border-2 border-accent/30" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-5 text-text-muted leading-relaxed"
          >
            <p>
              I&apos;m a Full Stack Software Engineer based in Lahore, Pakistan, with a
              Bachelor&apos;s in Software Engineering from COMSATS University. I specialize
              in building robust, scalable web applications using{" "}
              <span className="text-accent">Laravel</span>,{" "}
              <span className="text-accent">React JS</span>, and{" "}
              <span className="text-accent">WordPress</span>.
            </p>
            <p>
              Over 6+ years of professional experience, I&apos;ve delivered fintech
              platforms, restaurant management systems, art-market portals, and
              internal communication tools — always with a focus on clean
              architecture, performance, and real business impact.
            </p>
            <p>
              I thrive in collaborative, agile environments and take pride in
              turning complex requirements into elegant, maintainable solutions.
              Whether it&apos;s architecting microservices, optimizing WordPress at
              scale, or wiring up real-time analytics dashboards, I bring a
              results-driven mindset to every project.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-dim px-3 py-1 text-xs text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
