import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, FileText, Video, Image, X } from 'lucide-react';
import { supabase } from '../supabaseClient';

const getIcon = (nombre, tipo) => {
  if (tipo && tipo.startsWith('image')) return <Image className="inline mr-2 text-blue-500" />;
  if (tipo === 'application/pdf') return <FileText className="inline mr-2 text-red-500" />;
  if (tipo && tipo.startsWith('video')) return <Video className="inline mr-2 text-purple-500" />;
  return <FileText className="inline mr-2 text-gray-400" />;
};

const ProfesoresPanel = () => {
  const [archivos, setArchivos] = useState([]);
  const [file, setFile] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  // Cargar archivos desde la base de datos
  useEffect(() => {
    const fetchArchivos = async () => {
      const { data, error } = await supabase
        .from('archivos')
        .select('*')
        .order('fecha', { ascending: false });

      if (!error) setArchivos(data);
    };
    fetchArchivos();
  }, []);

  const handleArchivo = (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;
    setFile(archivo);
    setNombre(archivo.name);
    setDescripcion('');
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(archivo);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const archivo = e.dataTransfer.files[0];
    if (!archivo) return;
    setFile(archivo);
    setNombre(archivo.name);
    setDescripcion('');
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(archivo);
  };

  const handleSubir = async () => {
    if (!file) return;

    // 1. Subir el archivo a Supabase Storage
    const { data: storageData, error: storageError } = await supabase.storage
      .from('archivos')
      .upload(`${Date.now()}_${file.name}`, file);

    if (storageError) {
      console.error('Error subiendo archivo:', storageError.message);
      return;
    }

    // 2. Obtener URL pública
    const { data: publicUrl } = supabase.storage
      .from('archivos')
      .getPublicUrl(storageData.path);

    // 3. Guardar info en la tabla
    const { error: dbError } = await supabase.from('archivos').insert([
      {
        nombre,
        descripcion,
        fecha: new Date().toISOString(),
        url: publicUrl.publicUrl,
        tipo: file.type,
      },
    ]);

    if (dbError) {
      console.error('Error guardando en DB:', dbError.message);
      return;
    }

    // 4. Resetear formulario y refrescar lista
    setFile(null);
    setNombre('');
    setDescripcion('');
    setPreview(null);

    const { data } = await supabase.from('archivos').select('*').order('fecha', { ascending: false });
    setArchivos(data);
  };

  const handleCancelar = () => {
    setFile(null);
    setNombre('');
    setDescripcion('');
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Panel de Profesores</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <label className="block text-gray-700 font-medium mb-2">Subir archivo o video:</label>
        {!file ? (
          <div
            className="border-2 border-dashed border-blue-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition mb-4"
            onClick={() => inputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
          >
            <UploadCloud size={40} className="text-blue-400 mb-2" />
            <span className="text-gray-600 mb-2">Arrastra aquí o haz clic para seleccionar archivos</span>
            <input type="file" ref={inputRef} onChange={handleArchivo} className="hidden" />
          </div>
        ) : (
          <div className="mb-4 border rounded-lg p-4 bg-blue-50 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              onClick={handleCancelar}
              title="Cancelar"
            >
              <X size={22} />
            </button>
            <div className="flex items-center gap-2 mb-2">
              {getIcon(file.name, file.type)}
              <span className="font-medium">{file.name}</span>
            </div>
            {preview && (
              <div className="mb-2">
                {file.type.startsWith('image') ? (
                  <img src={preview} alt="preview" className="max-h-32 rounded" />
                ) : file.type === 'application/pdf' ? (
                  <iframe src={preview} className="w-full h-24 border rounded" title="preview-pdf" />
                ) : file.type.startsWith('video') ? (
                  <video src={preview} controls className="w-full max-h-32 rounded" />
                ) : (
                  <span className="text-xs text-gray-500">Vista previa no disponible</span>
                )}
              </div>
            )}
            <input
              type="text"
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              placeholder="Nombre del archivo"
            />
            <textarea
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
              placeholder="Descripción (opcional)"
              rows={2}
            />
            <div className="flex gap-2">
              <button
                onClick={handleSubir}
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
              >
                Subir
              </button>
              <button
                onClick={handleCancelar}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition font-semibold"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">Archivos Subidos:</h3>
        <ul className="list-none pl-0 text-sm text-gray-700 space-y-2">
          {archivos.map((a, i) => (
            <li key={i} className="flex flex-col bg-gray-50 rounded px-2 py-2 mb-2">
              <div className="flex items-center gap-2">
                {getIcon(a.nombre, a.tipo)}
                <span>{a.nombre}</span>
                <span className="ml-auto text-gray-500 text-xs">
                  {new Date(a.fecha).toLocaleString()}
                </span>
              </div>
              {a.descripcion && (
                <span className="text-xs text-gray-500 mt-1 italic">Descripción: {a.descripcion}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfesoresPanel;
