// src/components/FlippableImage.tsx
"use client";

import Image from "next/image";

export default function FlippableImage() {
  return (
    // Container utama dengan ukuran tetap dan efek 3D (perspective)
    <div className="group relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 [perspective:1000px]">
      {/* Container bagian dalam yang akan berputar */}
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Sisi Depan Kartu */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <Image
            src="/images/Foto Haikal No BG.png"
            alt="Foto Profil Haikal"
            fill
            className="rounded-full object-cover border-4 border-white/10"
          />
        </div>

        {/* Sisi Belakang Kartu */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src="/images/fotosaya1.jpg" // Pastikan nama file ini benar
            alt="Foto Kedua Haikal"
            fill
            className="rounded-full object-cover border-4 border-white/10"
          />
        </div>
      </div>
    </div>
  );
}
