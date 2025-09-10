import React from 'react';

const MissionCard = () => {
  return (
    <div className="relative bg-gradient-to-br from-white/90 to-blue-100/80 p-8 rounded-2xl shadow-2xl border border-white/20 overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-blue-200/40 animate-fadein">
      {/* Imagen representativa */}
      <div className="flex justify-center mb-4">
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-concepto-mision-empresa_114360-5165.jpg?w=400"
          alt="Misión"
          className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-blue-100 bg-white animate-float"
        />
      </div>
      {/* Icono animado */}
      <div className="relative mb-4 flex justify-center">
        <svg
          className="w-14 h-14 text-blue-500 drop-shadow-lg animate-float"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-70 blur-sm animate-ping"></span>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Misión</h3>
      <p className="text-blue-800">
        Formar ciudadanos globales con excelencia académica, valores humanos y pensamiento crítico, inspirados en la rica tradición educativa sueca.
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

export default MissionCard;