import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc02QRwhktOYUHc08RlPKQxI3XZ4t6JgMojATiz" 
              alt="Logo Colegio Reino de Suecia" 
              className="h-16 w-auto"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-gold-400 mb-2">Colegio Reino de Suecia</p>
            <p className="text-blue-300">AVENIDA SAN MARTIN S/N</p>
            <p className="text-blue-300">Teléfono: 2376144</p>
            <p className="text-blue-300">Alumnado Colegio Mixto</p>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-400">
          <p>© {new Date().getFullYear()} Colegio Reino de Suecia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;