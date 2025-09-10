import React from 'react';
import MissionCard from './MissionCard';
import VisionCard from './VisionCard';
import ValuesCard from './ValuesCard';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 opacity-10 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Nuestra Identidad</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <MissionCard />
          <VisionCard />
          <ValuesCard />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;