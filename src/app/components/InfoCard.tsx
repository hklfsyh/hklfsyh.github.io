import React from 'react';

// Mendefinisikan tipe properti (props) yang bisa diterima komponen
interface InfoCardProps {
  title: string;
  children: React.ReactNode; // 'children' bisa berisi teks atau elemen lain
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
      <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
      <div className="text-md text-white font-semibold">
        {children}
      </div>
    </div>
  );
}