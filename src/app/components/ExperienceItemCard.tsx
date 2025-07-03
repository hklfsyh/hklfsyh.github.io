// src/components/ExperienceItemCard.tsx
import Image from "next/image";

type ExperienceItemProps = {
  role: string;
  entity: string | undefined;
  duration?: string;
  logo: string;
};

export default function ExperienceItemCard({
  role,
  entity,
  duration,
  logo,
}: ExperienceItemProps) {
  return (
    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
      {/* PERBAIKAN KUNCI:
        Wadah tetap berukuran 40x40 dan bundar, tetapi sekarang tidak memiliki warna latar.
        'overflow-hidden' ditambahkan untuk memastikan gambar tidak "bocor" keluar dari bingkai bundar.
      */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative">
        <Image
          src={logo}
          alt={`${entity} logo`}
          fill // 'fill' akan membuat gambar mengisi seluruh wadah
          className="object-cover" // 'object-cover' akan memotong gambar agar pas tanpa merusak rasio
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/40x40/FFFFFF/000000?text=?";
          }}
        />
      </div>

      {/* Kolom untuk Info Teks */}
      <div>
        <h4 className="font-semibold text-white">{role}</h4>
        <p className="text-sm text-gray-300">{entity}</p>
        {duration && <p className="text-xs text-gray-400 mt-1">{duration}</p>}
      </div>
    </div>
  );
}
