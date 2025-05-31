import React from 'react'
import DocumentUploader from './DocumentUploader'

export default function StepCard({ step }) {
    const estadoEstilo = {
        'Pendiente': 'bg-yellow-100 text-yellow-800 border-yellow-300',
        'Aprobado': 'bg-green-100 text-green-800 border-green-300',
        'Observado': 'bg-red-100 text-red-800 border-red-300'
    }

  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-morado-uc">{step.titulo}</h2>
          <p className="text-sm text-gray-600">{step.descripcion}</p>
        </div>
        <div className="text-sm text-right text-gray-500">
          <p><strong>Responsable:</strong> {step.responsable}</p>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border inline-block ${estadoEstilo[step.estado]}`}>
            {step.estado}
            </span>
        </div>
      </div>

      {step.registros && step.registros.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Documentos requeridos:</p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {step.registros.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}

      <DocumentUploader />
    </div>
  )
}