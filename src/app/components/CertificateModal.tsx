'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Certificate } from '@/app/data/certificates'; // Impor tipe data

// Tipe data untuk props diperbarui
interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* PERBAIKAN: Menambahkan judul di atas gambar */}
          <h3 className="text-center text-white text-xl mb-4 font-semibold truncate">
            {certificate.title}
          </h3>

          <div className="relative w-full h-auto max-h-[80vh] aspect-[4/3]">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-contain rounded-md"
            />
          </div>
        </motion.div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          aria-label="Close image viewer"
        >
          &times;
        </button>
      </motion.div>
    </AnimatePresence>
  );
}