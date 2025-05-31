import React, { useState } from 'react'

export default function GestionActividades() {
  const [archivos, setArchivos] = useState({})
  const [enviado, setEnviado] = useState(false)

  const pasos = [
    {
      titulo: '1. Elaborar Plan de Clases',
      descripcion: 'Sube el plan de clases para cada consolidado según el sílabo.',
      key: 'plan_clases',
    },
    {
      titulo: '2. Material Didáctico e Instrumentos de Evaluación',
      descripcion: 'Sube materiales y herramientas que usarás durante tus clases.',
      key: 'material_instrumentos',
    },
    {
      titulo: '3. Entregar Sílabo',
      descripcion: 'Sube el sílabo oficial entregado el primer día de clases.',
      key: 'silabo',
    },
    {
      titulo: '4. Control de Clases',
      descripcion: 'Registra la asistencia y el avance silábico de tus sesiones.',
      key: 'control_clases',
    },
    {
      titulo: '5. Calificaciones',
      descripcion: 'Sube el archivo con las notas de los estudiantes.',
      key: 'notas',
    },
    {
      titulo: '6. Carpeta Académica',
      descripcion: 'Sube la carpeta académica consolidada para revisión.',
      key: 'carpeta',
    },
  ]

  const manejarArchivo = (e, key) => {
    setArchivos(prev => ({ ...prev, [key]: e.target.files[0] }))
  }

  const enviarTodo = () => {
    const incompletos = pasos.filter(p => !archivos[p.key])
    if (incompletos.length > 0) {
      alert('Por favor, sube todos los archivos antes de enviar.')
    } else {
      setEnviado(true)
    }
  }

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        Gestión de Actividades Académicas
      </h1>

      {enviado ? (
        <div className="bg-green-100 border border-green-400 text-green-800 text-lg font-medium p-6 rounded shadow text-center">
          ✅ Todos los documentos han sido subidos correctamente. ¡Simulación completa!
        </div>
      ) : (
        <>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Completa todos los pasos del proceso académico subiendo los archivos correspondientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pasos.map((paso, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow border border-gray-200">
                <h2 className="text-xl font-semibold text-indigo-700 mb-2">{paso.titulo}</h2>
                <p className="text-gray-600 mb-4">{paso.descripcion}</p>

                <div className="border-2 border-dashed border-indigo-300 p-4 rounded bg-gray-50">
                  <input
                    type="file"
                    onChange={(e) => manejarArchivo(e, paso.key)}
                    className="text-sm text-gray-700"
                  />
                  {archivos[paso.key] && (
                    <p className="mt-2 text-green-600 text-sm">
                      Archivo cargado: <strong>{archivos[paso.key].name}</strong>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center mb-6">
            <button
              onClick={enviarTodo}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded shadow"
            >
              Simular Envío de Documentos
            </button>
          </div>
        </>
      )}
    </div>
  )
}
