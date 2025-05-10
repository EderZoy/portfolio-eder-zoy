import {
   FaDev, FaEnvelope, FaBriefcase, FaTools,
  FaGlobe, FaLinkedin, FaGithub, FaInstagram, FaGraduationCap
} from 'react-icons/fa'
import logo from '../assets/logo.png'
import { useState } from 'react'

const links = [
  { icon: <FaDev size={24} />, label: 'Inicio', href: '#inicio' },
  { icon: <FaBriefcase size={24} />, label: 'Experiencia', href: '#experiencia' },
  { icon: <FaGraduationCap size={24} />, label: 'Educación', href: '#educacion' },
  { icon: <FaTools size={24} />, label: 'Skills', href: '#skills' },
  { icon: <FaGlobe size={24} />, label: 'Proyectos', href: '#proyectos' },
  { icon: <FaEnvelope size={24} />, label: 'Contacto', href: '#contacto' }
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Sidebar para escritorio */}
      <aside className={`hidden md:flex fixed top-0 left-0 z-50 bg-secondary-default dark:bg-gray-900 shadow-md h-screen ${isOpen ? 'w-64' : 'w-20'} flex-col transition-all duration-300`}>

          {/* Imagen y nombre */}
        <div className="text-center bg-secondary-dark rounded-b-[56px] p-4">
          <img src={logo} alt="Foto" className={`rounded-full border-white border-4 mx-auto ${isOpen ? 'w-24 h-24' : 'w-10 h-10'}`} />
          {isOpen && <h1 className="text-xl font-bold mt-2 text-white mb-3 font-orbitron">Ing. Zoy Eder</h1>}
        </div>

        {/* Botón flechita */}
        <div className={`absolute top-4 ${isOpen ? 'left-60' : 'left-16'} bg-secondary-dark text-white rounded-full p-1 cursor-pointer z-50`} onClick={toggleSidebar}>
          <span className="text-sm font-orbitron">{isOpen ? '◀' : '▶'}</span>
        </div>
  

        {/* Menú de navegación */}
        <nav className={`space-y-4 p-4 mt-20`}>
          {links.map((link, i) => (
            <a key={i} href={link.href} className={`flex items-center gap-3 text-primary-fondo dark:text-white hover:text-secondary-dark border-b-2 border-secondary-light pb-2`}>
              {link.icon}
              {isOpen && <span className='font-rajdhani font-bold text-xl pl-3'>{link.label}</span>}
            </a>
          ))}
        </nav>

        {/* Redes sociales */}
        {isOpen && (
          <div className="flex justify-center gap-4 text-gray-500 mb-6 mt-20">
            <a href="https://www.linkedin.com/in/ederzoy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/eder-zoy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
              <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/eder_zoy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={30} />
            </a>
          </div>
        )}
      </aside>

      {/* Botón flotante mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="bg-secondary-dark p-2 rounded-full shadow-lg border-2 border-white">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        </button>
      </div>

      {/* Drawer lateral mobile */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-40" onClick={toggleSidebar}>
          <div className="fixed top-0 left-0 w-64 h-full bg-secondary-fondo dark:bg-gray-900 p-6 overflow-y-auto z-50" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full border-2 border-white" />
              <button onClick={toggleSidebar} className="text-white text-xl">✖</button>
            </div>
            <nav className="space-y-4">
              {links.map((link, i) => (
                <a key={i} href={link.href} onClick={toggleSidebar} className="flex items-center gap-3 text-white hover:text-secondary-light border-b border-gray-600 pb-2">
                  {link.icon}
                  <span className='font-rajdhani text-lg'>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
