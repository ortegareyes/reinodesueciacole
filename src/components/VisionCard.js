import React from 'react';

const VisionCard = () => {
  return (
    <div className="relative bg-gradient-to-br from-white/90 to-green-100/80 p-8 rounded-2xl shadow-2xl border border-white/20 overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-green-200/40 animate-fadein">
      {/* Imagen representativa */}
      <div className="flex justify-center mb-4">
        <img
          src="https://img.freepik.com/vector-gratis/vision-empresarial-abstracta_23-2148816197.jpg?w=400"
          alt="Visión"
          className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-green-100 bg-white animate-float"
        />
      </div>
      {/* Icono animado */}
      <div className="relative mb-4 flex justify-center">
        <svg
          className="w-14 h-14 text-green-500 drop-shadow-lg animate-float"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
        </svg>
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-70 blur-sm animate-ping"></span>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Visión</h3>
      <p className="text-blue-800">
        Ser reconocidos como el referente educativo, combinando innovación pedagógica con los valores escandinavos de equidad, sostenibilidad y bienestar.
      </p>
      <style>
        {`
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0);}
            50% { transform: translateY(-12px);}
            100% { transform: translateY(0);}
          }
          .animate-fadein {
            animation: fadein 1.2s cubic-bezier(.39,.575,.56,1) both;
          }
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default VisionCard;