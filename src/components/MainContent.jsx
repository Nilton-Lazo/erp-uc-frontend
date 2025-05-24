// src/components/MainContent.jsx
import React from 'react'
import OptionButton from './OptionButton'

import AdmisionIcon      from '../assets/iconos-blanco-menu/admision.webp'
import MatriculaIcon     from '../assets/iconos-blanco-menu/matricula.webp'
import DisenoIcon        from '../assets/iconos-blanco-menu/diseno-curricular.webp'
import NivelacionIcon    from '../assets/iconos-blanco-menu/nivelacion-de-estudiantes.webp'
import ConvalidacionIcon from '../assets/iconos-blanco-menu/convalidacion.webp'
import ServEducIcon      from '../assets/iconos-blanco-menu/servicios-educacionales.webp'
import IntlIcon          from '../assets/iconos-blanco-menu/internacionalizacion.webp'
import EnsenanzaIcon     from '../assets/iconos-blanco-menu/ensenanza-aprendizaje.webp'
import SegEstIcon        from '../assets/iconos-blanco-menu/seguimiento-al-estudiante.webp'
import TutoriaIcon       from '../assets/iconos-blanco-menu/tutoria.webp'
import ProySocialIcon    from '../assets/iconos-blanco-menu/proyeccion-social.webp'
import ExtCultIcon       from '../assets/iconos-blanco-menu/extension-cultural.webp'
import PraPreIcon        from '../assets/iconos-blanco-menu/practicas-preprofesionales.webp'
import InvestigacionIcon from '../assets/iconos-blanco-menu/investigacion.webp'
import EgresadosIcon     from '../assets/iconos-blanco-menu/gestion-de-egresados.webp'
import TitulosIcon       from '../assets/iconos-blanco-menu/grados-y-titulos.webp'

export default function MainContent() {
  return (
    <main className="flex-1 bg-gris-fondo p-4 sm:p-8 overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:row-start-1 lg:col-start-2">
          <OptionButton icon={AdmisionIcon} label="Admisión" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-2 lg:col-start-1">
          <OptionButton icon={MatriculaIcon} label="Matrícula" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-2 lg:col-start-2">
          <OptionButton icon={DisenoIcon} label="Diseño Curricular" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-2 lg:col-start-3">
          <OptionButton icon={NivelacionIcon} label="Nivelación de Estudiantes" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-3 lg:col-start-1">
          <OptionButton icon={ConvalidacionIcon} label="Convalidación" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-3 lg:col-start-2">
          <OptionButton icon={ServEducIcon} label="Servicios Educacionales" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-3 lg:col-start-3">
          <OptionButton icon={IntlIcon} label="Internacionalización" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-4 lg:col-start-1">
          <OptionButton icon={EnsenanzaIcon} label="Enseñanza-Aprendizaje" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-4 lg:col-start-2">
          <OptionButton icon={SegEstIcon} label="Seguimiento al Estudiante" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-4 lg:col-start-3">
          <OptionButton icon={TutoriaIcon} label="Tutoría" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-5 lg:col-start-1">
          <OptionButton icon={ProySocialIcon} label="Proyección Social" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-5 lg:col-start-2">
          <OptionButton icon={ExtCultIcon} label="Extensión Cultural" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-5 lg:col-start-3">
          <OptionButton icon={PraPreIcon} label="Prácticas Preprofesionales" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-6 lg:col-start-1">
          <OptionButton icon={InvestigacionIcon} label="Investigación" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-6 lg:col-start-2">
          <OptionButton icon={EgresadosIcon} label="Gestión de Egresados" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
        <div className="lg:row-start-6 lg:col-start-3">
          <OptionButton icon={TitulosIcon} label="Grados y Títulos" bgClass="bg-morado-uc" textClass="text-gris-calmado" />
        </div>
      </div>
    </main>
  )
}
