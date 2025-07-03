// src/components/CertificateCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Certificate } from "@/app/data/certificates"; // Pastikan path ini benar

export default function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    // 'group' tetap penting untuk efek hover
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden group relative">
      <div className="relative h-40">
        <Image
          src={cert.image}
          alt={`Certificate for ${cert.title}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay gelap tetap ada untuk kontras */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Kontainer untuk teks dan tombol */}
      <div className="p-4 relative">
        {/* Tombol View Credential - POSISI BARU */}
        {cert.credentialUrl && (
          <Link
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            // PERBAIKAN: Tombol sekarang diposisikan di atas konten teks
            // dan hanya muncul saat hover pada kartu
            className="absolute -top-10 right-4 bg-orange-400 text-white text-xs font-bold py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            View Credential
          </Link>
        )}

        <h3 className="font-semibold text-white truncate pt-2">{cert.title}</h3>
        <p className="text-sm text-orange-400">{cert.issuer}</p>
        <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
      </div>
    </div>
  );
}
