import React, { useEffect, useState } from 'react';
import { FileText, Image, Video } from 'lucide-react';

const getIcon = (archivo) => {
  if (archivo.tipo && archivo.tipo.startsWith('image')) return <Image className="text-blue-500" />;
  if (archivo.tipo === 'application/pdf') return <FileText className="text-red-500" />;
  if (archivo.tipo && archivo.tipo.startsWith('video')) return <Video className="text-purple-500" />;
  return <FileText className="text-gray-400" />;
};

const renderArchivo = (archivo, i) => {
  const { nombre, contenido, tipo } = archivo;
  if (tipo && tipo.startsWith('image')) {
    return <img src={contenido} alt={nombre} className="max-h-40 object-contain rounded" />;
  }
  if (tipo === 'application/pdf') {
    return <iframe src={contenido} className="w-full h-40 border rounded" title={`pdf-${i}`} />;
  }
  if (tipo && tipo.startsWith('video')) {
    return (
      <video controls className="w-full max-h-40 rounded">
        <source src={contenido} type={tipo} />
        Tu navegador no soporta video.
      </video>
    );
  }
  return <p className="text-sm text-gray-600">Tipo no compatible para vista previa.</p>;
};

const Alumnos = () => {
  const [archivos, setArchivos] = useState([]);
  useEffect(() => {
    const archivosGuardados = JSON.parse(localStorage.getItem('archivos')) || [];
    setArchivos(archivosGuardados);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Material para Alumnos</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {archivos.length === 0 ? (
          <p className="text-gray-500 text-center col-span-2">No hay archivos disponibles.</p>
        ) : (
          archivos.map((a, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                {getIcon(a)}
                <span className="font-medium text-gray-800">{a.nombre}</span>
                <span className="ml-auto text-xs text-gray-500">{a.fecha}</span>
              </div>
              {a.descripcion && (
                <div className="text-sm text-gray-600 italic mb-2">
                  {a.descripcion}
                </div>
              )}
              <div>{renderArchivo(a, i)}</div>
              <a
                href={a.contenido}
                download={a.nombre}
                className="inline-block mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-semibold transition"
              >
                Descargar
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Alumnos;