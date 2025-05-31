import React from 'react'

export default function DocumentUploader() {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">Subir documento:</label>
      <input type="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
    </div>
  )
}