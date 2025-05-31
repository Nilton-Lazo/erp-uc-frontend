// src/pages/DisenoCurricular.jsx
import React from 'react'

export default function DisenoCurricular() {
  const opciones = [
    { titulo: 'Gestión de Actividades', ruta: '/gestion-actividades' },
    { titulo: 'Gestión Curricular', ruta: '/gestion-curricular' },
    { titulo: 'Programación Académica', ruta: '/programacion-academica' },
  ]

  return (
    <div className="p-8 bg-white h-full">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Diseño Curricular</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opciones.map((opcion, index) => (
          <a
            key={index}
            href={opcion.ruta}
            className="block bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-6 text-center shadow transition"
          >
            <span className="text-xl font-semibold">{opcion.titulo}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
