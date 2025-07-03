'use client';

import { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import { projectsData } from '@/app/data/projects';

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('mobile');

  const projectsToDisplay = projectsData[activeTab as keyof typeof projectsData];

  return (
    <div>
      {/* Tombol Tab */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('mobile')}
          className={`py-2 px-6 text-sm font-medium transition-colors duration-300 rounded-full ${
            activeTab === 'mobile'
              ? 'bg-orange-400 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          Mobile
        </button>
        <button
          onClick={() => setActiveTab('website')}
          className={`py-2 px-6 text-sm font-medium transition-colors duration-300 rounded-full ${
            activeTab === 'website'
              ? 'bg-orange-400 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          Website
        </button>
        <button
          onClick={() => setActiveTab('other')}
          className={`py-2 px-6 text-sm font-medium transition-colors duration-300 rounded-full ${
            activeTab === 'other'
              ? 'bg-orange-400 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          Others
        </button>
      </div>

      {/* Carousel yang ditampilkan sesuai tab aktif */}
      {/* 'key={activeTab}' penting untuk me-reset animasi carousel saat tab berganti */}
      <ProjectCarousel key={activeTab} projects={projectsToDisplay} />
    </div>
  );
}