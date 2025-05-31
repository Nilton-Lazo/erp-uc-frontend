import React, { useState, useEffect, useRef } from 'react'

export default function GestionActividades() {
  const [archivos, setArchivos] = useState({})
  const [habilitados, setHabilitados] = useState({})
  const [enviado, setEnviado] = useState(false)
  const [progreso, setProgreso] = useState(0)
  const inputRefs = useRef({})

  const pasos = [
    { titulo: '1. Elaborar Plan de Clases', key: 'plan_clases', descripcion: 'Redactado basado en el sílabo, debe incluir consolidado.' },
    { titulo: '2. Material Didáctico e Instrumentos de Evaluación', key: 'material_instrumentos', descripcion: 'Materiales y exámenes para las competencias del curso.' },
    { titulo: '3. Entregar Sílabo', key: 'silabo', descripcion: 'Presentado y entregado el primer día de clases.' },
    { titulo: '4. Control de Clases', key: 'control_clases', descripcion: 'Registro de asistencia y avance silábico.' },
    { titulo: '5. Calificaciones', key: 'notas', descripcion: 'Evaluaciones calificadas y cargadas al sistema académico.' },
    { titulo: '6. Carpeta Académica', key: 'carpeta', descripcion: 'Documentación completa del curso para revisión final.' },
  ]

  useEffect(() => {
    const completados = pasos.map(p => !!archivos[p.key])
    const nuevoHabilitados = {}

    pasos.forEach((paso, i) => {
      nuevoHabilitados[paso.key] = i === 0 || !!archivos[pasos[i - 1].key]
    })

    setHabilitados(nuevoHabilitados)
    const porcentaje = (completados.filter(c => c).length / pasos.length) * 100
    setProgreso(porcentaje)
  }, [archivos])

  const manejarArchivo = (e, key) => {
    const file = e.target.files[0]
    if (file) {
      setArchivos(prev => ({ ...prev, [key]: file }))
      e.target.value = ''
    }
  }

  const eliminarArchivo = (key) => {
    setArchivos(prev => {
      const copia = { ...prev }
      delete copia[key]
      return copia
    })

    if (inputRefs.current[key]) inputRefs.current[key].value = ''
  }

  const enviarTodo = () => {
    const incompletos = pasos.filter(p => !archivos[p.key])
    if (incompletos.length > 0) {
      alert('Debes completar todos los pasos antes de enviar.')
    } else {
      setEnviado(true)
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Contenido principal */}
      <div className="flex-1 p-8 overflow-y-auto pb-24"> {/* AQUI está el fix */}
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">
          Gestión de Actividades Académicas
        </h1>

        {enviado ? (
          <div className="bg-green-100 border border-green-400 text-green-800 text-lg font-medium p-6 rounded-2xl shadow text-center">
            ✅ Todos los documentos han sido subidos correctamente. ¡Simulación completa!
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pasos.map((paso, index) => {
                const bloqueado = !habilitados[paso.key]

                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 transition hover:shadow-lg"
                  >
                    <h2 className="text-lg font-semibold text-indigo-700 mb-2">{paso.titulo}</h2>
                    <p className="text-gray-600 mb-4">{paso.descripcion}</p>

                    <div
                      className={`border-2 p-4 rounded-xl transition flex flex-col gap-3 ${
                        bloqueado ? 'border-gray-300 bg-gray-100' : 'border-indigo-300 bg-gray-50'
                      } border-dashed`}
                    >
                      <input
                        key={archivos[paso.key]?.name || 'nuevo'}
                        type="file"
                        disabled={bloqueado}
                        ref={(el) => (inputRefs.current[paso.key] = el)}
                        onChange={(e) => manejarArchivo(e, paso.key)}
                        className={`text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                          file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700
                          hover:file:bg-indigo-200 transition ${
                            bloqueado ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                      />

                      {archivos[paso.key] && (
                        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                          <span className="truncate">
                            Archivo: <strong>{archivos[paso.key].name}</strong>
                          </span>
                          <button
                            onClick={() => eliminarArchivo(paso.key)}
                            className="mt-2 md:mt-0 text-sm text-red-600 hover:bg-red-600 hover:text-white border border-red-500 px-4 py-1 rounded-full transition"
                          >
                            Borrar archivo
                          </button>
                        </div>
                      )}

                      {bloqueado && (
                        <p className="text-red-500 text-sm">
                          🚫 Completa el paso anterior para habilitar este.
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                onClick={enviarTodo}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 text-lg font-semibold rounded-full shadow-lg transition"
              >
                Enviar de Documentos
              </button>
            </div>
          </>
        )}
      </div>

      {/* Barra lateral de progreso vertical */}
      <div className="w-80 bg-white border-l border-gray-200 p-6 hidden lg:flex flex-col items-center">
        <h2 className="text-lg font-bold text-gray-800 mb-6">📊 Progreso del Proceso</h2>

        {/* Barra vertical */}
        <div className="w-6 h-64 bg-gray-200 rounded-full relative overflow-hidden shadow-inner mb-4">
          <div
            className="absolute bottom-0 bg-gradient-to-t from-indigo-600 to-indigo-300 w-full transition-all duration-500"
            style={{ height: `${progreso}%` }}
          />
        </div>

        <p className="text-indigo-700 font-bold text-xl mb-4">{Math.round(progreso)}%</p>

        <ul className="w-full flex flex-col gap-3">
          {pasos.map((paso, i) => (
            <li
              key={i}
              className={`px-4 py-2 text-sm font-medium rounded-full border flex items-center justify-between ${
                archivos[paso.key]
                  ? 'bg-green-100 border-green-300 text-green-700'
                  : 'bg-gray-100 border-gray-300 text-gray-500'
              }`}
            >
              <span className="truncate w-40">{paso.titulo.split('.')[1].trim()}</span>
              {archivos[paso.key] ? '✔️' : '...'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
