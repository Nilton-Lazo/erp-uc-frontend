import React, { useState } from 'react'

import AdmisionIcon             from '../assets/iconos-blanco-menu/admision.webp'
import MatriculaIcon            from '../assets/iconos-blanco-menu/matricula.webp'
import DisenoIcon               from '../assets/iconos-blanco-menu/diseno-curricular.webp'
import NivelacionIcon           from '../assets/iconos-blanco-menu/nivelacion-de-estudiantes.webp'
import ConvalidacionIcon        from '../assets/iconos-blanco-menu/convalidacion.webp'
import PostMatriculaIcon        from '../assets/iconos-blanco-menu/post-matricula.webp'
import ServEducIcon             from '../assets/iconos-blanco-menu/servicios-educacionales.webp'
import IntlIcon                 from '../assets/iconos-blanco-menu/internacionalizacion.webp'
import EnsenanzaIcon            from '../assets/iconos-blanco-menu/ensenanza-aprendizaje.webp'
import SegEstIcon               from '../assets/iconos-blanco-menu/seguimiento-al-estudiante.webp'
import TutoriaIcon              from '../assets/iconos-blanco-menu/tutoria.webp'
import ProySocialIcon           from '../assets/iconos-blanco-menu/proyeccion-social.webp'
import ExtCultIcon              from '../assets/iconos-blanco-menu/extension-cultural.webp'
import PraPreIcon               from '../assets/iconos-blanco-menu/practicas-preprofesionales.webp'
import InvestigacionIcon        from '../assets/iconos-blanco-menu/investigacion.webp'
import EgresadosIcon            from '../assets/iconos-blanco-menu/gestion-de-egresados.webp'
import TitulosIcon              from '../assets/iconos-blanco-menu/grados-y-titulos.webp'
import AyudaIcon                from '../assets/iconos-blanco-menu/ayuda.webp'
import AtrasIcon                from '../assets/iconos-blanco-menu/atras.webp'

export default function Sidebar() {
  const [activeKey, setActiveKey] = useState('admisión')
  const [postOpen, setPostOpen]   = useState(false)

  const items = [
    { key: 'admisión',   label: 'Admisión',                  icon: AdmisionIcon },
    { key: 'matrícula',  label: 'Matrícula',                 icon: MatriculaIcon },
    { key: 'diseño',     label: 'Diseño curricular',         icon: DisenoIcon },
    { key: 'nivelación', label: 'Nivelación de estudiantes', icon: NivelacionIcon },
    { key: 'convalidación', label: 'Convalidación',          icon: ConvalidacionIcon },
    {
      key: 'post-matricula',
      label: 'Post Matrícula',
      icon: PostMatriculaIcon,
      children: [
        { key: 'servicios-educacionales',    label: 'Servicios Educacionales',    icon: ServEducIcon },
        { key: 'internacionalizacion',       label: 'Internacionalización',       icon: IntlIcon },
        { key: 'ensenanza-aprendizaje',      label: 'Enseñanza-Aprendizaje',      icon: EnsenanzaIcon },
        { key: 'seguimiento-al-estudiante',  label: 'Seguimiento al Estudiante',  icon: SegEstIcon },
        { key: 'tutoria',                    label: 'Tutoría',                    icon: TutoriaIcon },
        { key: 'proyeccion-social',          label: 'Proyección Social',          icon: ProySocialIcon },
        { key: 'extension-cultural',         label: 'Extensión Cultural',         icon: ExtCultIcon },
        { key: 'practicas-preprofesionales', label: 'Prácticas Preprofesionales', icon: PraPreIcon },
      ]
    },
    { key: 'investigación',  label: 'Investigación',          icon: InvestigacionIcon },
    { key: 'egresados',      label: 'Gestión de Egresados',   icon: EgresadosIcon },
    { key: 'grados-títulos', label: 'Grados y Títulos',       icon: TitulosIcon },
  ]

  return (
    <aside className="flex flex-col h-full bg-gris-poco-profundo text-white overflow-hidden">
      <div className="px-6 py-4 bg-gris-muy-profundo text-base font-semibold">
        Menú Principal
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar">
        <ul className="w-full">
          {items.map(item => (
            <li key={item.key} className="w-full">
              <div
                onClick={() => {
                  if (item.children) setPostOpen(o => !o)
                  else setActiveKey(item.key)
                }}
                className={
                  `flex items-center w-full px-6 py-3 border-l-4 transition-colors duration-150 cursor-pointer ` +
                  (activeKey === item.key
                    ? 'bg-gray-700 border-white'
                    : 'border-transparent') +
                  ' hover:bg-gray-700 hover:border-white'
                }
              >
                <img src={item.icon} alt="" className="h-5 w-5 mr-3" />
                <span className="flex-1">{item.label}</span>

                {item.children && (
                  <img
                    src={AtrasIcon}
                    alt={postOpen ? 'Cerrar' : 'Abrir'}
                    className={
                      `h-4 w-4 transform transition-transform duration-200 ` +
                      (postOpen ? '-rotate-90' : 'rotate-0')
                    }
                  />
                )}
              </div>

              {item.children && (
                <div
                  className={
                    `overflow-hidden transition-[max-height] duration-300 ease-in-out ` +
                    (postOpen ? 'max-h-screen' : 'max-h-0')
                  }
                >
                  <ul className="w-full">
                    {item.children.map(sub => (
                      <li key={sub.key} className="w-full">
                        <div
                          onClick={() => setActiveKey(sub.key)}
                          className={
                            `flex items-center w-full px-6 py-3 border-l-4 transition-colors duration-150 cursor-pointer ` +
                            (activeKey === sub.key
                              ? 'bg-gray-700 border-white'
                              : 'border-transparent') +
                            ' hover:bg-gray-700 hover:border-white'
                          }
                        >
                          <img src={sub.icon} alt="" className="h-5 w-5 mr-3" />
                          <span className="flex-1">{sub.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div
        onClick={() => setActiveKey('ayuda')}
        className={
          `mt-auto flex items-center w-full px-6 py-3 border-l-4 transition-colors duration-150 cursor-pointer ` +
          (activeKey === 'ayuda'
            ? 'bg-gray-700 border-white'
            : 'border-transparent') +
          ' hover:bg-gray-700 hover:border-white'
        }
      >
        <img src={AyudaIcon} alt="" className="h-5 w-5 mr-3" />
        <span className="flex-1">Ayuda</span>
      </div>
    </aside>
  )
}
