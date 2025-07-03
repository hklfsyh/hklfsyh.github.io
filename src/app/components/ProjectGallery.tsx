// src/components/ProjectGallery.tsx
"use client"; // Menandakan ini adalah Komponen Client

import { useState } from "react";
import Image from "next/image";

// Komponen ini menerima daftar URL gambar sebagai prop
export default function ProjectGallery({
  images,
  projectTitle,
}: {
  images: string[];
  projectTitle: string;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`${projectTitle} gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Logika Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged gallery view"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            aria-label="Close image viewer"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
