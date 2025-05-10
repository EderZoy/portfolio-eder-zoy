import skills from '../data/skills.json';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';

const getIconComponent = (iconName) => {
  return FaIcons[iconName] || SiIcons[iconName] || MdIcons[iconName] || null;
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-12 px-6 md:px-20 bg-secondary-fondo dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold mb-12 text-center text-secondary-dark font-orbitron">Skills</h2>
      <div className="ml-40 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {Object.entries(skills).map(([category, items]) => (
          category !== 'Soft Skills' ? (
            <div className=' bg-primary-fondo p-4 rounded-xl' key={category}>
              <h3 className="text-xl font-semibold mb-4 text-secondary-dark">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {items.map((item, i) => {
                  const IconComponent = getIconComponent(item.icon);
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded shadow text-sm m-1"
                    >
                      {IconComponent && <IconComponent className="text-secondary-dark text-lg" />}
                      <span className='font-rajdhani font-bold'>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null
        ))}
      </div>

      {/* Soft Skills */}
      <div className="ml-40 mt-16 w-full max-w-6xl bg-primary-fondo p-4 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-secondary-dark">Soft Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills['Soft Skills'].map((skill, i) => (
            <span
              key={i}
              className="bg-white dark:bg-gray-800 px-4 py-2 rounded shadow text-sm m-1 font-rajdhani font-bold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
