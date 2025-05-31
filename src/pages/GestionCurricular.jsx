import React from 'react'
import StepCard from '../components/StepCard'
import steps from '../data/gestionCurriculardata'

export default function GestionCurricular() {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-morado-uc">Gestión Curricular</h1>
      <p className="text-lg">Proceso de planificación y actualización del Diseño Curricular conforme a normativa UC.</p>

      {steps.map((step, index) => (
        <StepCard key={index} step={step} />
      ))}
    </div>
  )
}
