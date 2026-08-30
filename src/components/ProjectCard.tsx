"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import TiltCard from "./TiltCard";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <TiltCard className="group relative h-full">
        <Link
          href={`/projects/${project.id}`}
          className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-300 hover:border-accent/40 hover:bg-bg-card-hover hover:shadow-[0_0_40px_-12px_rgba(108,99,255,0.15)]"
        >
          {/* Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden bg-bg">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white">
                View Project <FiArrowRight size={14} />
              </span>
            </div>
            {project.featured && (
              <span className="absolute top-3 left-3 z-10 rounded-full bg-accent px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                Featured
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-text group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-dim px-2.5 py-0.5 text-[11px] font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="rounded-full bg-accent-dim px-2.5 py-0.5 text-[11px] font-medium text-accent">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
