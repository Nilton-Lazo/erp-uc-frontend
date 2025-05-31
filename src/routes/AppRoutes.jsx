// src/routes/AppRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContent from '../components/MainContent'
import Admision from '../pages/Admision'
import DisenoCurricular from '../pages/DisenoCurricular'
import GestionActividades from '../pages/GestionActividades'



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/admision" element={<Admision />} />
      <Route path="/diseno-curricular" element={<DisenoCurricular />} />
      <Route path="/gestion-actividades" element={<GestionActividades />} />
    </Routes>
  )
}