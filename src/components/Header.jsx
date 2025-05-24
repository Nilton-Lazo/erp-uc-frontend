import React from 'react'
import LogoImage from '../assets/logo-uc.webp'
import MenuIcon  from '../assets/menu.webp'
import BellIcon  from '../assets/notificaciones.webp'

export default function Header({ userName, onMenuClick }) {
  return (
    <header className="flex items-center justify-between bg-gris-profundo px-4 sm:px-6 py-3 text-white">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-1 hover:bg-gray-700 rounded transition-colors duration-200"
        >
          <img src={MenuIcon} alt="Menú" className="h-6 w-6" />
        </button>
        <img src={LogoImage} alt="Logo UC" className="h-10" />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-1 hover:bg-gray-700 rounded transition-colors duration-200">
          <img src={BellIcon} alt="Notificaciones" className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}`}
            alt="Avatar"
            className="h-8 w-8 rounded-full bg-gray-700"
          />
          <span className="hidden sm:inline font-medium">{userName}</span>
        </div>
      </div>
    </header>
  )
}
