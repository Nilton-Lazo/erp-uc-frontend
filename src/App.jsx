import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
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

        <MainContent />
      </div>
    </div>
  )
}
