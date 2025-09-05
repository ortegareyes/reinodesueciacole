import React from 'react';

const MissionCard = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
      <div className="text-gold-500 mb-4">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Misión</h3>
      <p className="text-blue-800">
        Formar ciudadanos globales con excelencia académica, valores humanos y pensamiento crítico, inspirados en la rica tradición educativa sueca.
      </p>
    </div>
  );
};

export default MissionCard;