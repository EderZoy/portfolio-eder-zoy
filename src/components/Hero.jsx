import data from '../data/about.json'
import fotoPerfil from '../assets/fotoperfil.jpg'
import cv from '../assets/EderZoy_CV2025.pdf'

export default function Hero() {
  return (
    <main id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-8 bg-primary-fondo dark:bg-gray-800">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center md:gap-12 gap-6">

        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-mono font-bold">Hola, soy</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-300 dark:text-white font-orbitron">{data.name}</h1>
          <h3 className="text-xl sm:text-2xl text-green-600 font-semibold font-rajdhani mt-2">{data.role}</h3>
          <p className="text-gray-400 dark:text-gray-300 mt-4 font-roboto text-base sm:text-lg">{data.description}</p>
          
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <a href={cv} download className="mb-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-lg sm:text-xl font-rajdhani font-bold">
              Descargar CV
            </a>
            <a href="#contacto" className="mb-4 sm:ml-7 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-lg sm:text-xl font-rajdhani font-bold">
              Contactame
            </a>
          </div>

          <p className="text-gray-400 dark:text-gray-300 mt-4 font-roboto text-base sm:text-lg mb-6">{data.descripcion}</p>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center md:w-1/3 w-full">
          <img
            src={fotoPerfil}
            alt="Perfil"
            className="rounded-full w-48 sm:w-64 md:w-80 h-auto object-cover shadow-lg border-4 border-secondary-dark"
          />
        </div>
      </div>
    </main>
  );
}

