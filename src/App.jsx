import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Contact from './sections/Contact'
import AboutMe from './sections/AboutMe'
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
        <AboutMe />  
        <ExperienciaLaboral />        
        <Education /> 
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}