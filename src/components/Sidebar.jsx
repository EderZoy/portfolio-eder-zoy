import { FaEllo, FaDev, FaEnvelope, FaBriefcase, FaTools, FaGlobe, FaLinkedin, FaGithub, FaInstagram,FaGraduationCap } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { useState } from 'react'

const links = [
  { icon: <FaDev size={30}/>, label: 'Inicio', href: '#inicio' },
  { icon: <FaEllo size={30}/>, label: 'Sobre mí' , href: '#sobre-mi' },
  { icon: <FaBriefcase size={30}/>, label: 'Experiencia', href: '#experiencia'  },
  { icon: <FaGraduationCap  size={30}/>, label: 'Educación', href: '#educacion'  },
  { icon: <FaTools size={30}/>, label: 'Skills', href: '#skills'  },
  { icon: <FaGlobe  size={30}/>, label: 'Proyectos' , href: '#proyectos'},
  { icon: <FaEnvelope size={30}/>, label: 'Contacto', href: '#contacto' }
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
  
    const toggleSidebar = () => setIsOpen(!isOpen)
  
    return (
        <aside className={`fixed top-0 left-0 z-50 bg-secondary-default dark:bg-gray-900 shadow-md h-screen ${isOpen ? 'w-64' : 'w-20'} flex flex-col justify-between transition-all duration-300`}>
        
        {/* Botón para abrir/cerrar */}
        <div className={`absolute top-4 ${isOpen ? 'left-60' : 'left-16'} bg-secondary-dark text-white rounded-full p-1 cursor-pointer z-50`} onClick={toggleSidebar}>
          <span className="text-sm font-orbitron">{isOpen ? '◀' : '▶'}</span>
        </div>
  
        {/* Imagen y nombre */}
        <div className="mb-6 text-center bg-secondary-dark rounded-b-[56px] p-4">
          <img src={logo} alt="Foto" className={`rounded-full border-white border-4 mx-auto ${isOpen ? 'w-24 h-24' : 'w-10 h-10'}`} />
          {isOpen && <h1 className="text-xl font-bold mt-2 text-white mb-3 font-orbitron">Ing. Zoy Eder</h1>}
        </div>
  
        {/* Menú de navegación */}
        <nav className="space-y-4 p-4">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="flex items-center gap-3 text-primary-fondo dark:text-white hover:text-secondary-dark border-b-2 border-secondary-light pb-2">
              {link.icon}
              {isOpen && <span className='font-rajdhani font-bold text-xl'>{link.label}</span>}
            </a>
          ))}
        </nav>
  
        {/* Redes sociales */}
        <div className={`flex ${isOpen ? 'justify-center' : 'justify-center'} gap-4 text-gray-500 mt-6 mb-6`}>
          <a href="https://www.linkedin.com/in/ederzoy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaLinkedin size={isOpen ? 30 : 10} />
          </a>
          <a href="https://github.com/ederzoy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
            <FaGithub size={isOpen ? 30 : 10} />
          </a>
          <a href="https://www.instagram.com/ederzoy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={isOpen ? 30 : 10} />
          </a>
        </div>
      </aside>
    )
  }
