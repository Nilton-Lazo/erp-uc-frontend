// src/features/uc/pages/DocumentosPage.jsx

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DocumentosPage() {
  const [documentos, setDocumentos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/sgc/documentos`
      : 'http://127.0.0.1:8000/api/sgc/documentos'

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Error al consultar documentos')
        return res.json()
      })
      .then((data) => {
        setDocumentos(data.data ?? data)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="text-gray-500">Cargando documentos...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center gap-x-4 mb-6">
        <h1 className="text-3xl font-bold">Control de Documentos</h1>
        {/* BOTÓN + NUEVO DOCUMENTO */}
        <button
          onClick={() => navigate('/sgc/documentos/nuevo')}
          className="bg-morado-uc text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          + Nuevo Documento
        </button>
      </div>

      {documentos.length === 0 ? (
        <p className="text-gray-600">No hay documentos registrados.</p>
      ) : (
        <ul className="space-y-4">
          {documentos.map((doc) => (
            <li
              key={doc.id}
              className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{doc.titulo}</span>
                <span
                  className={`px-2 py-1 text-sm rounded-full ${
                    doc.estado === 'aprobado'
                      ? 'bg-green-100 text-green-800'
                      : doc.estado === 'borrador'
                      ? 'bg-yellow-100 text-yellow-800'
                      : doc.estado === 'en_revision'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {doc.estado.replace('_', ' ')}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <p>
                  <strong>Tipo:</strong> {doc.tipo.charAt(0).toUpperCase() + doc.tipo.slice(1)}
                </p>
                <p>
                  <strong>Versión:</strong> {doc.version}
                </p>
                <p>
                  <strong>Elaborado:</strong> {new Date(doc.fecha_elaboracion).toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
