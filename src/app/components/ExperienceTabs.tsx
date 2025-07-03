"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceItemCard from "./ExperienceItemCard";

// Tipe data untuk props
type Experience = {
  role: string;
  company?: string;
  org?: string;
  duration?: string;
  logo: string; // Pastikan tipe data menyertakan logo
};

interface ExperienceTabsProps {
  workExperience: Experience[];
  orgExperience: Experience[];
}

export default function ExperienceTabs({
  workExperience,
  orgExperience,
}: ExperienceTabsProps) {
  const [activeTab, setActiveTab] = useState("work");

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Tombol Tab */}
      <div className="flex border-b border-white/10 mb-4">
        <button
          onClick={() => setActiveTab("work")}
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
            activeTab === "work"
              ? "text-white border-b-2 border-orange-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Work Experience
        </button>
        <button
          onClick={() => setActiveTab("organization")}
          className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
            activeTab === "organization"
              ? "text-white border-b-2 border-orange-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Organizational Experience
        </button>
      </div>

      <div className="relative h-48">
        <div className="h-full overflow-y-auto pr-3 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tabVariants}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "work" && (
                <div className="space-y-3">
                  {workExperience.map((exp) => (
                    <ExperienceItemCard
                      key={exp.company}
                      role={exp.role}
                      entity={exp.company}
                      duration={exp.duration}
                      logo={exp.logo} // <-- Meneruskan prop logo
                    />
                  ))}
                </div>
              )}

              {activeTab === "organization" && (
                <div className="space-y-3">
                  {orgExperience.map((exp) => (
                    <ExperienceItemCard
                      key={exp.org}
                      role={exp.role}
                      entity={exp.org}
                      logo={exp.logo} // <-- Meneruskan prop logo
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
