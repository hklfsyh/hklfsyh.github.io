// src/components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // PERBAIKAN: Menggunakan Flexbox untuk struktur dan memberikan tinggi tetap
    <div className="h-full flex flex-col bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden group">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* PERBAIKAN: Konten sekarang fleksibel dan tombol akan selalu di bawah */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-gray-700/50 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="text-orange-400 hover:underline mt-auto">
          View More
        </Link>
      </div>
    </div>
  );
}