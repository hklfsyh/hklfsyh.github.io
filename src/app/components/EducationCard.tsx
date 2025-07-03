// src/components/EducationCard.tsx
import Image from 'next/image';

type Education = {
  institution: string;
  degree: string;
  duration: string;
  gpa: string | null;
  logo: string; // Menambahkan prop logo
};

export default function EducationCard({ edu }: { edu: Education }) {
  return (
    // Mengubah menjadi flex container untuk mensejajarkan logo dan teks
    <div className="flex items-start gap-6 bg-white/5 p-6 rounded-lg border border-white/10">
      {/* Kolom untuk Logo */}
      <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center p-2">
        <Image
          src={edu.logo}
          alt={`${edu.institution} logo`}
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
      
      {/* Kolom untuk Info Teks */}
      <div>
        <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
        <p className="text-orange-400">{edu.degree}</p>
        <p className="text-gray-400 text-sm mt-2">{edu.duration}</p>
        {edu.gpa && (
          // Mengubah label GPA agar lebih dinamis
          <p className="text-gray-400 text-sm">
            {edu.gpa === "Distinction" ? `Achievement: ${edu.gpa}` : `GPA: ${edu.gpa}`}
          </p>
        )}
      </div>
    </div>
  );
}