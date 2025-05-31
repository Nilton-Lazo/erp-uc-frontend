// src/routes/ucRoutes.jsx

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DocumentosPage from '../features/sgc/pages/DocumentosPage'
import NuevoDocumentoPage from '../features/sgc/pages/NuevoDocumentoPage'

export default function UCRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sgc/documentos" replace />} />
      <Route path="documentos" element={<DocumentosPage />} />
      <Route path="documentos/nuevo" element={<NuevoDocumentoPage />} />
      <Route path="*" element={<Navigate to="/sgc/documentos" replace />} />
    </Routes>
  )
}
