'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ProjectCard from './ProjectCard';
import { Project } from '@/app/data/projects'; // Impor tipe data Project

// Komponen sekarang menerima 'projects' sebagai prop
export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: true })]
  );

  // Jika tidak ada proyek, jangan tampilkan apa-apa
  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-400">No projects in this category yet.</p>;
  }

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-8">
        {projects.map((project, index) => (
          <div key={`${project.slug}-${index}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pl-8">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}