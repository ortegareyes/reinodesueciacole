import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
            style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0jREm52zprvgIPmTtsSNY2ecybAh5LloqCaQw')" }}>
      <div className="absolute inset-0 bg-blue-900/70"></div>
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Reino De Suecia <span className="text-gold-400">Excelencia Educativa</span>
        </h1>
        <p className="text-xl text-white mb-8">
          Formando líderes del mañana con los valores de hoy
        </p>
        <a
          href="https://www.youtube.com/watch?v=DplCd-d0Tc8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          Conoce Nuestra Institucion
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
