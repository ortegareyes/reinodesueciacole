import React from 'react';
import MissionCard from './MissionCard';
import VisionCard from './VisionCard';
import ValuesCard from './ValuesCard';

const AboutSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Fondo decorativo animado tipo 3D */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-300 opacity-10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        {/* Efecto de líneas */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="300" r="250" fill="none" stroke="url(#grad)" strokeWidth="40" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
            Nuestra Identidad
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-6">
            Inspirados en la excelencia y la innovación educativa, promovemos valores humanos, pensamiento crítico y sostenibilidad para formar ciudadanos globales.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <MissionCard />
          <VisionCard />
          <ValuesCard />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;