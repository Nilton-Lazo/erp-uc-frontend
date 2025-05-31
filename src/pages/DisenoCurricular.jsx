import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Layers, CalendarCheck } from 'lucide-react' // puedes usar cualquier ícono de lucide o heroicons

export default function DisenoCurricular() {
  const navigate = useNavigate()

  const opciones = [
    {
      titulo: 'Gestión de Actividades',
      ruta: '/gestion-actividades',
      icono: <BookOpen className="w-10 h-10 text-indigo-500" />,
    },
    {
      titulo: 'Gestión Curricular',
      ruta: '/gestion-curricular',
      icono: <Layers className="w-10 h-10 text-indigo-500" />,
    },
    {
      titulo: 'Programación Académica',
      ruta: '/programacion-academica',
      icono: <CalendarCheck className="w-10 h-10 text-indigo-500" />,
    },
  ]

  return (
    <div className="p-8 bg-white h-full">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Diseño Curricular</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {opciones.map((opcion, index) => (
          <div
            key={index}
            onClick={() => navigate(opcion.ruta)}
            className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center hover:bg-indigo-50 group"
          >
            <div className="mb-4 transition transform group-hover:scale-110">
              {opcion.icono}
            </div>
            <span className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700">
              {opcion.titulo}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
