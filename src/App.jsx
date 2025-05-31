import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden">
        <Header
          userName="Maglioni Arana"
          onMenuClick={() => setSidebarOpen(o => !o)}
        />

        <div className="flex flex-1 overflow-hidden">
          <div
            className={
              `bg-gris-poco-profundo transition-all duration-300 ease-in-out ` +
              (sidebarOpen ? 'w-64' : 'w-0')
            }
          >
            {sidebarOpen && <Sidebar />}
          </div>

          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}
