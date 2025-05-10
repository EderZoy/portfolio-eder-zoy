import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import data from '../data/contact.json'

export default function Contact() {
  return (
    <main id="contacto" className="ml-54 min-h-screen flex items-center justify-center px-6 md:px-20 bg-primary-fondo dark:bg-gray-900">
      <div className="max-w-5xl w-full flex flex-col gap-12">
        <h2 className="text-5xl font-bold text-center text-primary-light font-orbitron dark:text-white">Contacto</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna izquierda */}
          <div className="space-y-6 text-gray-800 dark:text-gray-200">
            <h3 className="text-4xl font-semibold text-green-300 font-mono">¡Hablemos!</h3>
            <p className='text-secondary-light font-roboto text-lg'>
              {data.mensaje}
            </p>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-secondary-dark" size={25}/>
              <span className='text-secondary-light font-roboto text-lg'>{data.ubicacion}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-secondary-dark" size={25}/>
              <span className='text-secondary-light font-roboto text-lg'>{data.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-secondary-dark" size={25}/>
              <span className='text-secondary-light font-roboto text-lg'>{data.telefono}</span>
            </div>

            {/* Redes sociales */}
                    <div className={`flex gap-4 text-gray-500 mt-6 mb-6`}>
                      <a href="https://www.linkedin.com/in/ederzoy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                        <FaLinkedin size={30} />
                      </a>
                      <a href="https://github.com/ederzoy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
                        <FaGithub size={30} />
                      </a>
                    </div>
          </div>

          {/* Columna derecha - Formulario */}
          <form className="space-y-6 bg-secondary-light p-6 rounded-lg shadow-md dark:bg-gray-800">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-dark"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-dark"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-dark"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-dark"
            ></textarea>
            <button
              type="submit"
              className="bg-secondary-dark text-white px-6 py-3 rounded-md hover:bg-secondary-default transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
