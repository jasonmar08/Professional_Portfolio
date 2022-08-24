import NavBar from './components/NavBar'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import ProjectCard from './components/ProjectCard'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Projects/:ProjectId" element={<ProjectCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
