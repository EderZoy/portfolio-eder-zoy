import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectsData from "../data/projects.json";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const total = projectsData.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  const getVisibleProjects = () => {
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;
    return [projectsData[prevIndex], projectsData[current], projectsData[nextIndex]];
  };

  return (
    <main id="proyectos" className="flex flex-col items-center bg-secondary-fondo min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-20 mt-6 text-secondary-dark font-orbitron text-center">
        Proyectos
      </h2>
      <div className="relative w-full max-w-6xl overflow-hidden">
        {/* Botones centrados verticalmente */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-10 text-secondary-dark"
        >
          <ChevronLeft size={50} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-10 text-secondary-dark"
        >
          <ChevronRight size={50} />
        </button>

        <div className="flex justify-center gap-6">
          {getVisibleProjects().map((proj, idx) => (
            <div
              key={proj.titulo}
              className={`transition-all duration-500 rounded-xl shadow-lg overflow-hidden w-[340px] h-[500px] bg-white p-4 flex flex-col items-center justify-between text-center transform ${
                idx === 1
                  ? "scale-100 border-4 border-primary"
                  : "scale-90 opacity-70"
              }`}
            >
              <img
                src={proj.imagen}
                alt={proj.titulo}
                className="w-full h-48 object-cover rounded"
              />
              <div>
                <h3 className="text-2xl font-semibold mt-4 font-rajdhani">{proj.titulo}</h3>
                <p className="text-md mt-2 font-inter">{proj.descripcion}</p>
                <ul className="flex flex-wrap justify-center gap-2 text-xs font-bold mt-3">
                  {proj.tecnologias.map((tec) => (
                    <li key={tec} className="bg-gray-200 px-2 py-1 rounded font-mono">
                      {tec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
