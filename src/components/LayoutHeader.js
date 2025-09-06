import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', path: '#top' },
  { name: 'Nosotros', path: 'https://www.facebook.com/profile.php?id=61568747741616' },
  { name: 'Informacion General', path: 'https://identicole.minedu.gob.pe/colegio/06002540#informacion-general' },
  { name: 'Servicio', path: 'https://identicole.minedu.gob.pe/colegio/06002540#servicio-educativo' },
  { name: 'Blog', path: 'https://revistapedagogicaemprendedores.blogspot.com/2019/09/ie-n-20332-reino-de-suecia-humaya.html' },
  { name: 'Profesores', path: '/profesores' },
  { name: 'Alumnos', path: '/alumnos' },
];

const LayoutHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-700 ${
        scrolled ? 'bg-gradient-to-r from-white/90 via-blue-50 to-white/90 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo + título siempre visible */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc02QRwhktOYUHc08RlPKQxI3XZ4t6JgMojATiz"
            alt="Logo"
            className="h-12 w-auto sm:h-16 drop-shadow-md"
          />
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-2xl font-serif font-extrabold text-blue-900 leading-none">
              Colegio Reino de Suecia
            </h1>
            <p className="text-xs sm:text-sm italic text-gray-600 -mt-1">Excelencia Educativa</p>
          </div>
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6 sm:space-x-10 items-center">
          {navLinks.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.path}
              target={item.path.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="relative text-blue-900 font-semibold tracking-wide group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.04 }}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </motion.a>
          ))}
        </nav>

        {/* Menú hamburguesa móvil */}
        <motion.button
          className="md:hidden text-blue-900 ml-2 p-2 rounded-full hover:bg-blue-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="fixed top-0 right-0 w-full max-w-xs h-full z-50 bg-white/95 backdrop-blur-xl border-l border-gray-200 shadow-2xl px-6 py-8 flex flex-col"
          >
            {/* Logo y botón cerrar arriba */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img
                  src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc02QRwhktOYUHc08RlPKQxI3XZ4t6JgMojATiz"
                  alt="Logo"
                  className="h-10 w-auto drop-shadow-md"
                />
                <span className="font-bold text-blue-900 text-lg">Reino de Suecia</span>
              </div>
              <button
                className="text-blue-900 p-2 rounded-full hover:bg-blue-100 transition"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  target={item.path.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-900 text-lg font-semibold hover:text-yellow-500 transition"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default LayoutHeader;