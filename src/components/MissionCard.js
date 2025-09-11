import React from 'react';

const MissionCard = () => {
  return (
    <div className="container mx-auto px-6 relative bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-blue-100/40 overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-blue-200/40 animate-fadein">
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
      
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-70 blur-sm animate-ping"></span>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Misión</h3>
      <p className="text-blue-800 text-base leading-relaxed">
        Formar ciudadanos globales con excelencia académica, valores humanos y pensamiento crítico, inspirados en la rica tradición educativa sueca.
      </p>
      {/* Animaciones */}
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