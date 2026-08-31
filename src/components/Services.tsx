"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  FiServer,
  FiLayers,
  FiTool,
  FiShoppingCart,
  FiCpu,
} from "react-icons/fi";

const services = [
  {
    icon: <FiServer size={24} />,
    title: "Multi-tenant SaaS Development & Debugging",
    description:
      "Building and troubleshooting complex multi-tenant architectures — schema isolation, sync pipelines, and performance optimization under concurrent load.",
  },
  {
    icon: <FiLayers size={24} />,
    title: "Full-Stack Web Application Builds",
    description:
      "End-to-end applications using Laravel + React, from system architecture and API design through to deployment and monitoring.",
  },
  {
    icon: <FiTool size={24} />,
    title: "Legacy System Rescue & Refactoring",
    description:
      "Stabilizing and modernizing aging codebases — WordPress, legacy React, monoliths — without breaking production or losing uptime.",
  },
  {
    icon: <FiShoppingCart size={24} />,
    title: "E-Commerce Platform Development",
    description:
      "Building online stores with payment processing, order tracking, and messaging integrations (WhatsApp, Twilio) for a seamless buyer experience.",
  },
  {
    icon: <FiCpu size={24} />,
    title: "AI/LLM Integration & Tooling",
    description:
      "Building RAG pipelines, tool-calling agents, and AI-powered features (OCR, fuzzy-matching, local models via Ollama) integrated into existing full-stack applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" title="How I Can Help" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-card-hover hover:shadow-[0_0_40px_-12px_rgba(108,99,255,0.15)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent-dim p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight text-text">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
