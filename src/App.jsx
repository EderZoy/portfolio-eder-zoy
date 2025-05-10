import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Contact from './sections/Contact'
import ExperienciaLaboral from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

export default function App() {
  return (
    <div className="flex">
      <Sidebar /> {/* Sidebar SIEMPRE visible */}
      <div className="flex-1">
        <Hero /> 
        <ExperienciaLaboral />        
        <Education /> 
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}