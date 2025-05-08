import data from '../data/about.json'
import fotoPerfil from '../assets/fotoperfil.jpg'
import cv from '../assets/EderZoy_CV2025.pdf'

export default function Hero() {
  return (
    <main id="inicio" className="ml-54 min-h-screen flex items-center justify-center px-8 bg-primary-fondo dark:bg-gray-800">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl text-gray-600 dark:text-gray-300 font-mono font-bold">Hola, soy</h2>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-300 dark:text-white font-orbitron">{data.name}</h1>
          <h3 className="text-2xl text-green-600 font-semibold font-rajdhani mt-2">{data.role}</h3>
          <p className="text-gray-400 dark:text-gray-300 mt-4 font-roboto text-xl">{data.description}</p>
          <a href={cv} download className="mt-6 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-2xl font-rajdhani font-bold">
            Descargar CV
          </a>
        </div>
        <div className="flex">
          <img src={fotoPerfil} alt="Perfil" className="rounded-full w-80 h-90 object-cover shadow-lg border-4 border-secondary-dark" />
        </div>
      </div>
    </main>
  )
}
