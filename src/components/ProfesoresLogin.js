import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProfesoresLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: usuario,   // 👈 aquí usuario sería el email registrado en Supabase
        password: contrasena,
      });

      if (error) {
        setError('Usuario o contraseña incorrectos');
      } else {
        navigate('/profesores-panel');
      }
    } catch (err) {
      setError('Error en el login, intenta de nuevo.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Ingreso de Profesores</h2>
        
        <input
          type="email"
          placeholder="Correo"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default ProfesoresLogin;
