"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation"; // Impor hook baru

export default function Navbar() {
  const router = useRouter(); // Hook untuk navigasi
  const pathname = usePathname(); // Hook untuk mendapatkan path URL saat ini

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Contact", href: "/#contact" },
  ];

  const smoothScrollTo = (targetId: string, duration: number) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      window.scrollTo(0, run(timeElapsed, startPosition, distance, duration));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // --- FUNGSI BARU YANG LEBIH PINTAR ---
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");

    // Jika kita sudah di halaman utama, lakukan smooth scroll
    if (pathname === "/") {
      smoothScrollTo(targetId, 1000);
    } else {
      // Jika kita di halaman lain, navigasi ke halaman utama lalu scroll
      router.push("/#" + targetId);
    }
  };

  return (
    <nav className="w-full p-8">
      <div className="flex justify-between items-center text-gray-300">
        <div className="font-semibold">
          <Link href="/">Haikal Afifsyah</Link>
        </div>

        <div className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="font-medium">Portfolio 2025</div>
      </div>
    </nav>
  );
}
