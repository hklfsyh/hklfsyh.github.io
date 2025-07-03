"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mendefinisikan tipe data untuk props
interface SkillsTabsProps {
  data: {
    languages: string[];
    toolsFrameworksAndOthers: string[];
    softSkills: string[];
  };
}

// Menambahkan objek untuk deskripsi setiap tab
const tabDescriptions = {
  languages:
    "Programming languages I've used in various projects and academic settings.",
  toolsFrameworksAndOthers:
    "Tools, frameworks, and others that I've utilized to build, deploy, and maintain applications and projects.",
  softSkills:
    "Personal attributes that I've developed through educational and organizational experiences.",
};

export default function SkillsTabs({ data }: SkillsTabsProps) {
  const [activeTab, setActiveTab] = useState("languages");

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const skillsToDisplay = data[activeTab as keyof typeof data];
  const descriptionToDisplay =
    tabDescriptions[activeTab as keyof typeof tabDescriptions];

  return (
    <div className="text-center">
      {/* Tombol Tab dengan Style Baru */}
      <div className="flex justify-center border-b border-white/10 mb-6">
        <button
          onClick={() => setActiveTab("languages")}
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
            activeTab === "languages"
              ? "text-white border-b-2 border-orange-400" // Style aktif
              : "text-gray-400 hover:text-white" // Style tidak aktif
          }`}
        >
          Programming Languages
        </button>
        <button
          onClick={() => setActiveTab("toolsFrameworksAndOthers")}
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
            activeTab === "toolsFrameworksAndOthers"
              ? "text-white border-b-2 border-orange-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Tools, Frameworks, & Others
        </button>
        <button
          onClick={() => setActiveTab("softSkills")}
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
            activeTab === "softSkills"
              ? "text-white border-b-2 border-orange-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Soft Skills
        </button>
      </div>

      {/* Deskripsi Dinamis */}
      <div className="h-12 flex items-center justify-center mb-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab + "-desc"}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            transition={{ duration: 0.3 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            {descriptionToDisplay}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Konten Tab dengan Tinggi Minimum */}
      <div className="min-h-[100px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {skillsToDisplay.map((skill) => (
              <div
                key={skill}
                className="bg-gray-700/50 text-gray-300 font-medium px-4 py-2 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
