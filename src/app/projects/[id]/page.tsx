import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/data/projects";
import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Ahmed Abdullah`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
