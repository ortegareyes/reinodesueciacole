import React from 'react';
import MissionCard from './MissionCard';
import VisionCard from './VisionCard';
import ValuesCard from './ValuesCard';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestra Identidad</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
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