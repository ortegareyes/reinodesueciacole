import React from 'react';

const VisionCard = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
      <div className="text-gold-500 mb-4">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Visión</h3>
      <p className="text-blue-800">
        Ser reconocidos como el referente educativo , combinando innovación pedagógica con los valores escandinavos de equidad, sostenibilidad y bienestar.
      </p>
    </div>
  );
};

export default VisionCard;