import experiencia from '../data/experience.json'

export default function ExperienciaLaboral() {
  return (
    <main id="experiencia" className="ml-54 min-h-screen flex flex-col items-center justify-start py-6 px-6 md:px-20 bg-secondary-fondo dark:bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-dark font-orbitron text-center">
        Experiencia Laboral
      </h2>

      <div className="w-full max-w-5xl mt-2">
        <div className="border-l-4 border-secondary-dark pl-6">
          {experiencia.map((item, index) => (
            <div key={index} className="mb-10 relative">
              {/* Punto de la línea de tiempo */}
              <div className="absolute -left-3 top-1 w-6 h-6 bg-secondary-dark rounded-full border-4 border-white dark:border-gray-900" />

              {/* Contenido */}
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300">
                    <p className="text-xs text-gray-700 font-bold font-mono bg-primary-light p-2 inline-block rounded-lg"> {item.fecha}</p>
                    <h3 className="text-2xl font-bold text-secondary-dark font-rajdhani">{item.rol}</h3>
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 font-rajdhani">{item.empresa}</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 font-roboto">
                            {item.actividades.map((actividad, i) => (
                                <li key={i}>{actividad}.</li>
                            ))}
                    </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
