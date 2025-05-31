// src/routes/AppRoutes.jsx

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainContent from '../components/MainContent'
import Admision from '../pages/Admision'
import UCRoutes from './sgcRoutes'

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<MainContent />} />
      <Route path="/admision" element={<Admision />} />
      <Route path="/sgc/*" element={<UCRoutes />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
