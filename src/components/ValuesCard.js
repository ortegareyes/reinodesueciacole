import React from 'react';

const ValuesCard = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
      <div className="text-gold-500 mb-4">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Valores</h3>
      <ul className="text-blue-800 space-y-2">
        <li className="flex items-start">
          <span className="text-gold-500 mr-2">•</span> Excelencia académica
        </li>
        <li className="flex items-start">
          <span className="text-gold-500 mr-2">•</span> Respeto y tolerancia
        </li>
        <li className="flex items-start">
          <span className="text-gold-500 mr-2">•</span> Responsabilidad social
        </li>
        <li className="flex items-start">
          <span className="text-gold-500 mr-2">•</span> Pensamiento crítico
        </li>
        <li className="flex items-start">
          <span className="text-gold-500 mr-2">•</span> Sostenibilidad ambiental
        </li>
      </ul>
    </div>
  );
};

export default ValuesCard;