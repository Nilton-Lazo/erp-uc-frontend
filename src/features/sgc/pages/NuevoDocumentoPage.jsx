// src/features/uc/pages/NuevoDocumentoPage.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NuevoDocumentoPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    titulo: '',
    tipo: 'interno',
    version: '',
    fechaElaboracion: '',
    archivo: null,
  })

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      archivo: e.target.files[0] || null
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Validaciones básicas
    if (
      !form.titulo.trim() ||
      !form.version.trim() ||
      !form.fechaElaboracion ||
      !form.archivo
    ) {
      setError('Todos los campos son obligatorios, incluido el PDF.')
      return
    }

    if (form.archivo.type !== 'application/pdf') {
      setError('Solo se permiten archivos PDF.')
      return
    }

    setLoading(true)

    try {
      const data = new FormData()
      data.append('titulo', form.titulo)
      data.append('tipo', form.tipo)
      data.append('version', form.version)
      data.append('fecha_elaboracion', form.fechaElaboracion)
      data.append('archivo', form.archivo)

      const baseUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'
      const response = await fetch(`${baseUrl}/sgc/documentos`, {
        method: 'POST',
        body: data,
      })

      if (!response.ok) {
        const json = await response.json()
        if (json.errors) {
          const firstKey = Object.keys(json.errors)[0]
          throw new Error(json.errors[firstKey][0])
        }
        if (json.message) {
          throw new Error(json.message)
        }
        throw new Error('Error al crear documento')
      }

      // Ya no asignamos 'result' a nada, porque no lo estamos usando
      // await response.json()

      navigate('/sgc/documentos')
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nuevo Documento</h1>

      {error && (
        <div className="mb-4 text-red-500 bg-red-100 p-2 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Título */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Título *
          </label>
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ingrese el título del documento"
          />
        </div>

        {/* Tipo (Interno / Externo) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Tipo *
          </label>
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="interno">Interno</option>
            <option value="externo">Externo</option>
          </select>
        </div>

        {/* Versión */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Versión *
          </label>
          <input
            type="text"
            name="version"
            value={form.version}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ejemplo: 1.0"
          />
        </div>

        {/* Fecha de Elaboración */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Fecha de Elaboración *
          </label>
          <input
            type="date"
            name="fechaElaboracion"
            value={form.fechaElaboracion}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Archivo PDF */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Archivo PDF *
          </label>
          <input
            type="file"
            name="archivo"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">
            Solo archivos .pdf. Máximo 10 MB.
          </p>
        </div>

        {/* Botón de envío */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={
              `w-full bg-morado-uc text-white font-medium px-4 py-2 rounded ` +
              (loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700')
            }
          >
            {loading ? 'Guardando…' : 'Guardar Documento'}
          </button>
        </div>
      </form>
    </div>
  )
}
