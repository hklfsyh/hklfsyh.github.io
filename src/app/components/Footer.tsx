// src/components/Footer.tsx
import Link from "next/link";

const socialLinks = [
  {
    href: "mailto:haikalafifsyah@gmail.com",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/haikalafifsyah",
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="size-6">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/hklfsyh",
    label: "GitHub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" className="size-6">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.3zM256 0C114.6 0 0 114.6 0 256c0 113.3 73.3 209.1 175.1 242.9C187.5 501.2 192 498.8 192 494.4v-34.1c0-11.3-4.1-21.4-11.3-29.5-62.6-7.1-128.9-30.2-128.9-139.3 0-30.8 11.1-56.1 29.4-75.9-3-7.1-12.9-35.6 2.8-74.8 0 0 23.7-7.6 77.7 29.1 22.5-6.2 46.7-9.4 70.9-9.4 24.1 0 48.4 3.1 70.9 9.4 54-36.7 77.7-29.1 77.7-29.1 15.6 39.2 5.7 67.7 2.8 74.8 18.3 19.8 29.4 45.1 29.4 75.9 0 109.1-66.3 132.2-128.9 139.3-7.2 8.1-11.3 18.2-11.3 29.5v34.1c0 4.4 4.5 6.8 16.9 4.6 101.8-33.8 175.1-129.6 175.1-242.9C496 114.6 381.4 0 256 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 mt-20">
      <div className="container mx-auto max-w-5xl px-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-6">My Contact</h3>
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <p className="text-gray-500">&copy; 2025 Haikal Afifsyah. All rights reserved.</p>
      </div>
    </footer>
  );
}