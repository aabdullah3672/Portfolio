"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
            >
              Visit Live Site
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl px-6 pt-8"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>

            {/* Problem / Approach / Result */}
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-bg-card p-6">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
                  Problem
                </h2>
                <p className="leading-relaxed text-text-muted">{project.problem}</p>
              </div>

              <div className="rounded-lg border border-border bg-bg-card p-6">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  Approach
                </h2>
                <p className="leading-relaxed text-text-muted">{project.approach}</p>
              </div>

              <div className="rounded-lg border border-border bg-bg-card p-6">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                  Result
                </h2>
                <p className="leading-relaxed text-text-muted">{project.result}</p>
              </div>
            </div>

            {/* Key contributions */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Key Contributions</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex gap-3 text-text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Role */}
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                My Role
              </h3>
              <p className="text-text">{project.role}</p>
            </div>

            {/* Technologies */}
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-dim px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live link */}
            {project.liveUrl !== "#" && (
              <div className="rounded-xl border border-border bg-bg-card p-6">
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                  Live Project
                </h3>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent break-all"
                >
                  {project.liveUrl}
                  <span className="flex-shrink-0">
                    <FiExternalLink size={14} />
                  </span>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
