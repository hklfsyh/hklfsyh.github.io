"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingEffect() {
  return (
    <TypeAnimation
      // Urutan teks yang akan diketik dan dihapus
      sequence={[
        "Haikal",
        2000,
        "a Mobile Developer",
        2000,
        "a Software Engineer",
        2000,
        "a Website Developer",
        2000,
        "a Front and Backend Developer",
        2000,
        "an UI/UX Designer",
        2000,
      ]}
      wrapper="span" // Teks akan dibungkus dalam tag <span>
      speed={50} // Kecepatan mengetik
      className="font-semibold text-white" // Samakan style dengan teks "Haikal" sebelumnya
      repeat={Infinity} // Mengulang animasi tanpa henti
    />
  );
}
