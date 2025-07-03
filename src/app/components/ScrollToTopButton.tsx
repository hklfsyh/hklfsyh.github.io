'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // --- FUNGSI SCROLL KUSTOM DIMULAI DI SINI ---
  const smoothScrollToTop = (duration: number) => {
    const startPosition = window.scrollY;
    const distance = -startPosition; // Jaraknya adalah negatif dari posisi saat ini
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      window.scrollTo(0, run(timeElapsed, startPosition, distance, duration));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };
  // --- FUNGSI SCROLL KUSTOM BERAKHIR DI SINI ---

  const handleScrollToTopClick = () => {
    smoothScrollToTop(1000); // Durasi 1000ms = 1 detik
  };

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={handleScrollToTopClick} // <-- Memanggil fungsi kustom
      className={`
        fixed bottom-8 right-8 z-50
        bg-white/10 p-3 rounded-full backdrop-blur-sm
        text-white hover:bg-white/20 focus:outline-none
        transition-all duration-300
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}