import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden"
    >
      {/* Fondo decorativo 3D */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-300 opacity-10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white opacity-5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 py-20 w-full max-w-6xl mx-auto">
        {/* Imagen 3D flotante */}
        <div className="flex-1 flex justify-center">
          <img
  src="https://scontent.flim10-1.fna.fbcdn.net/v/t1.6435-9/95583738_3046395742088744_4433321339499053056_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqCYpViGIr_CRkyeL3f-VujjRYYRlf9ceONFhhGV_1x6Q1UkOYJwekVerEKwMWoPOrMYYAOBLb5dhIyGk7YLxw&_nc_ohc=ZHgDsBUaqqoQ7kNvwGLeOw2&_nc_oc=AdkR23yAHXWQeOp4pOVh8b06ypCuoLoVIzn3gWAEmxYCiNlO7IYA6TzQVHNzikdv6q6ObbXByNP9Pz2LMNc4LTGp&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=kKYlpbgUF6F-GyQhYR4Y5g&oh=00_Afbiud9HdnKfKJYlDBTSXvFmnus6_jqdBQ7l3FTt9-VybQ&oe=68EA6B47"
  alt="Educación 3D"
  className="w-[28rem] h-[28rem] object-cover drop-shadow-2xl rounded-3xl bg-white/40 border-4 border-blue-200 animate-float transition-all duration-500 hover:scale-105 hover:shadow-2xl"
/>  

        </div>
        {/* Glassmorphism Card */}
        <div className="flex-1 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col items-center md:items-start animate-fadein">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg text-center md:text-left">
            Reino De Suecia <br />
            <span className="text-yellow-300 drop-shadow-lg">Excelencia Educativa</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 font-medium drop-shadow text-center md:text-left">
            Formando líderes del mañana con los valores de hoy.
          </p>
          <a
            href="https://www.youtube.com/watch?v=DplCd-d0Tc8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            Conoce Nuestra Institución
          </a>
        </div>
      </div>
      {/* Animaciones */}
      <style>
        {`
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0);}
            50% { transform: translateY(-24px);}
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
    </section>
  );
};

export default HeroSection;