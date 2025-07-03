'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  allCertificates,
  certificateCategories,
} from "@/app/data/certificates";
import CertificateCard from "./CertificateCard";

// Objek untuk menyimpan deskripsi setiap tab
const tabDescriptions: { [key: string]: string } = {
  All: "A complete collection of all the certificates I have obtained.",
  Course:
    "Certificates from various courses I have completed to enhance my skills.",
  Milestone:
    "Certificates marking significant achievements in my educational and professional journey.",
  "Test/Competition": "Certificates from various tests and competitions I have participated in.",
  Organization:
    "Certificates of participation and achievement from organizational activities.",
  "Seminar/Training": 
    "Certificates from various seminars and training sessions I have attended to broaden my knowledge.",
};

export default function CertificateTabs() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCerts =
    activeTab === "All"
      ? allCertificates
      : allCertificates.filter((cert) => cert.category === activeTab);

  const descriptionToDisplay = tabDescriptions[activeTab];

  return (
    <div>
      {/* Tombol Tab */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {certificateCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`py-2 px-6 text-sm font-medium transition-colors duration-300 rounded-full ${
              activeTab === category
                ? "bg-orange-400 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {category.replace("/", " / ")}
          </button>
        ))}
      </div>

      {/* Bagian deskripsi dinamis */}
      <div className="h-12 flex items-center justify-center mb-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400 text-center max-w-2xl mx-auto"
          >
            {descriptionToDisplay}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Grid Sertifikat */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence>
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <CertificateCard cert={cert} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}