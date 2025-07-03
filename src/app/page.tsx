"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InfoCard from "@/app/components/InfoCard";
import ProjectCard from "@/app/components/ProjectCard";
import EducationCard from "@/app/components/EducationCard";
import CertificateCard from "@/app/components/CertificateCard";
import ExperienceTabs from "@/app/components/ExperienceTabs";
import TypingEffect from "@/app/components/TypingEffect";
import FlippableImage from "@/app/components/FlippableImage";
import { skillsData } from "@/app/data/skills";
import SkillsTabs from "@/app/components/SkillsTabs";
import ProjectTabs from "@/app/components/ProjectTabs";
import { educationHistory } from "@/app/data/education";
import { allCertificates } from "@/app/data/certificates";

const workExperience = [
  {
    role: "Front End Technologies Developer",
    company: "Pillbox.id (PBL - Internship)",
    duration: "Apr 2025 - Jun 2025",
    logo: "/images/pillbox1.png",
  },
];

const orgExperience = [
  {
    role: "Head of Creative Division",
    org: "EXPECTIK 2024",
    logo: "/images/expectik2024.png",
  },
  {
    role: "Arts Division Staff",
    org: "BEM Politeknik Negeri Jakarta",
    logo: "/images/bem.png",
  },
  {
    role: "Manager Division",
    org: "PNJEsports Community",
    logo: "/images/pesco.jpg",
  },
  {
    role: "Mentor Division Staff",
    org: "EXPECTIK 2023",
    logo: "/images/expectik2023.png",
  },
];

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionClasses = "container mx-auto max-w-5xl px-8 py-20";

  // PERBAIKAN: Memfilter 3 sertifikat terbaik untuk ditampilkan di halaman utama
  const featuredCertificates = allCertificates.filter((cert) =>
    [
      "Bangkit Academy 2024 - Mobile Development",
      "Professional Certificate in IT",
      "Pillbox.id - PBL Internship Completion",
      "Dev Certified for Android (DCA)",
      "Ketua Divisi Kreatif",
      "DNIIT (Software Engineering)",
    ].includes(cert.title)
  );

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="container mx-auto max-w-5xl px-8 pt-0 pb-20 flex items-center min-h-screen"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-light text-gray-200">
              Hello, <br /> I'm <TypingEffect />
            </h1>
            <p className="text-lg text-gray-400 max-w-md">
              A passionate Informatics Engineering student, transforming
              innovative ideas into meaningful digital products.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <InfoCard title="Name">Haikal Afifsyah</InfoCard>
            <InfoCard title="Location">Depok, Jawa Barat</InfoCard>
            <InfoCard title="Email">
              <a
                href="mailto:haikalafifsyah@gmail.com"
                className="hover:underline"
              >
                haikalafifsyah@gmail.com
              </a>
            </InfoCard>
            <InfoCard title="LinkedIn">
              <a
                href="https://linkedin.com/in/haikalafifsyah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/haikalafifsyah
              </a>
            </InfoCard>
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        className="container mx-auto max-w-5xl px-8 pt-0 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center gap-6">
            <FlippableImage />
            <a
              href="/file/CV_HaikalAfifsyah.pdf"
              download
              className="inline-flex items-center gap-3 border border-gray-500 rounded-full py-2 px-5 text-gray-300 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download CV
            </a>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-4xl font-semibold text-white mb-6 text-center md:text-left">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Passionate and detail-oriented Informatics Engineering student
              with a strong curiosity in mobile development, web technologies,
              and software engineering. Experienced in working on various
              projects, eager to learn new technologies, and easily adapt to
              dynamic environments. A proactive team player with problem-solving
              skills, looking for opportunities to contribute and expand
              expertise.
            </p>
            <ExperienceTabs
              workExperience={workExperience}
              orgExperience={orgExperience}
            />
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className={sectionClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Skills
        </h2>
        <SkillsTabs data={skillsData} />
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className={sectionClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Education
        </h2>
        <div className="flex flex-col gap-8">
          {educationHistory.map((edu) => (
            <EducationCard key={edu.institution} edu={edu} />
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="container mx-auto max-w-5xl px-8 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Projects
        </h2>
        <ProjectTabs />
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        id="certificates"
        className={sectionClasses}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menggunakan data 'featuredCertificates' yang sudah difilter */}
          {featuredCertificates.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/certificates"
            className="inline-block bg-white/10 border border-white/20 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            View More
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
