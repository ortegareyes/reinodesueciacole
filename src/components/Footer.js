import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-12 backdrop-blur-lg shadow-inner">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc02QRwhktOYUHc08RlPKQxI3XZ4t6JgMojATiz" 
              alt="Logo Colegio Reino de Suecia" 
              className="h-12 w-12 rounded-xl shadow-lg"
            />
            <div>
              <p className="text-lg font-bold text-yellow-300">Colegio Reino de Suecia</p>
              <p className="text-blue-200 text-xs">Excelencia Educativa</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-blue-100">AVENIDA SAN MARTIN S/N</p>
            <p className="text-blue-100">Teléfono: 2376144</p>
            <p className="text-blue-100">Alumnado Colegio Mixto</p>
            {/* Redes sociales */}
            <div className="flex justify-center md:justify-end gap-4 mt-3">
              <a href="https://www.facebook.com/profile.php?id=61568747741616" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.013 3.676 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.128 22 17.013 22 12"></path></svg>
              </a>
              {/* Agrega más redes si quieres */}
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-400 text-sm">
          <p>© {new Date().getFullYear()} Colegio Reino de Suecia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;