import { useEffect, useState } from 'react';
import sobreMiData from '../data/about.json'

export default function SobreMi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(sobreMiData); // Cargar los datos desde el JSON
  }, []);

  if (!data) return <div>Cargando...</div>;

    // Función para convertir \n en <br />
    const parseDescription = (text) => {
        return text.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ));
      };

  return (
    <main id="sobre-mi" className="ml-54 min-h-screen flex items-center justify-center px-6 md:px-20 bg-primary-fondo dark:bg-gray-900">
       <div className="max-w-5xl w-full flex flex-col gap-12">
        
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda */}
        <div className="space-y-6 text-gray-800 dark:text-gray-200">
            <h2 className="mt-4 text-5xl font-bold text-center text-primary-light font-orbitron dark:text-white">Sobre mí</h2>
            <p className="text-secondary-light font-roboto text-xl text-justify"> {parseDescription(sobreMiData.descripcion)}</p>
        </div>

        {/* Columna derecha */}
        <div className="space-y-8">
          <div className="bg-secondary-light dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-green-500 font-semibold font-rajdhani text-xl text-justify"> "{parseDescription(sobreMiData.fraseInspiradora)}"</p>
          </div>

          {/* Habilidades blandas */}
          <div className="bg-secondary-light dark:bg-gray-800 p-6 rounded-lg shadow-md">
            
          </div>
        </div>
      </div>

      </div>
    </main>
  );
}
