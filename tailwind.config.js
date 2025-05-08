/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
            primary: {
              light: '#93c5fd',   // celeste claro
              DEFAULT: '#3b82f6', // azul
              dark: '#1e3a8a',    // azul oscuro
              fondo: '#0B243B',
            },
            secondary: {
              light: '#f3f4f6',   // gris claro
              default: '#DCDCDC', // gris medio
              dark: '#708090',    // gris oscuro
              fondo: '#343E48',
            },
          },
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            orbitron: ['Orbitron', 'sans-serif'],
            rajdhani: ['Rajdhani', 'sans-serif'],
            mono: ['Space Mono', 'monospace'],
          },
        },
      },
    plugins: [],
  }
  