import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const ProfesoresPanel = () => {
  const [file, setFile] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMensaje("Por favor selecciona un archivo.");
      return;
    }

    try {
      // Nombre único para evitar sobreescribir
      const fileName = `${Date.now()}-${file.name}`;

      // 1. Subir archivo al bucket 'archivos'
      const { error: uploadError } = await supabase.storage
        .from("archivos")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2. Obtener URL pública
      const { data } = supabase.storage.from("archivos").getPublicUrl(fileName);
      const publicUrl = data.publicUrl;

      // 3. Guardar registro en tabla 'archivos'
      const { error: dbError } = await supabase.from("archivos").insert([
        {
          nombre: nombre || file.name,
          descripcion,
          contenido: publicUrl,
          tipo: file.type,
          fecha: new Date(),
        },
      ]);

      if (dbError) throw dbError;

      setMensaje("✅ Archivo subido correctamente.");
      setFile(null);
      setNombre("");
      setDescripcion("");
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error al subir archivo.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">
        Subir Material para Alumnos
      </h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 w-full"
      />

      <input
        type="text"
        placeholder="Nombre del archivo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full px-3 py-2 mb-3 border rounded"
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="w-full px-3 py-2 mb-3 border rounded"
      />

      <button
        onClick={handleUpload}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Subir Archivo
      </button>

      {mensaje && <p className="mt-3 text-sm">{mensaje}</p>}
    </div>
  );
};

export default ProfesoresPanel;
