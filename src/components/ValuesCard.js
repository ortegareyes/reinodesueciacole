import React from 'react';

const ValuesCard = () => {
  return (
    <div className="container mx-auto px-6 relative bg-gradient-to-br from-white/90 to-yellow-100/80 p-8 rounded-2xl shadow-2xl border border-white/20 overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-yellow-200/40 animate-fadein">
      {/* Imagen representativa */}
      <div className="flex justify-center mb-4">
        <img
          src="https://img.freepik.com/vector-gratis/equipo-trabajando-juntos-ilustracion-concepto_114360-1675.jpg?w=400"
          alt="Valores institucionales"
          className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-yellow-100 bg-white animate-float"
        />
      </div>
      {/* Icono animado */}
      <div className="relative mb-4 flex justify-center">
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full opacity-70 blur-sm animate-ping"></span>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Valores</h3>
      <ul className="text-blue-800 space-y-2">
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2">•</span> Excelencia académica
        </li>
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2">•</span> Respeto y tolerancia
        </li>
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2">•</span> Responsabilidad social
        </li>
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2">•</span> Pensamiento crítico
        </li>
        <li className="flex items-start">
          <span className="text-yellow-400 mr-2">•</span> Sostenibilidad ambiental
        </li>
      </ul>
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

export default ValuesCard;