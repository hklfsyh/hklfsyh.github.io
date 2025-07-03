// src/app/projects/[slug]/page.tsx
// TIDAK ADA LAGI "use client" di sini

import { allProjects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectGallery from "@/app/components/ProjectGallery";

// Fungsi ini tetap di sini karena berjalan di server
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}

// Komponen utama sekarang menjadi Komponen Server
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-5xl px-8 py-24">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {project.longDescription}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white mb-6 border-l-4 border-orange-400 pl-4">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-white mb-6 border-l-4 border-orange-400 pl-4">
          Gallery
        </h2>
        {/* Panggil komponen client dan berikan data yang dibutuhkan sebagai props */}
        <ProjectGallery
          images={project.galleryImages}
          projectTitle={project.title}
        />
      </section>
    </main>
  );
}
