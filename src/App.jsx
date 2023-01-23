import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Experience from './pages/Studies'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Studies from './pages/Studies'
import Projects from './pages/Projects'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Home2/>
        <AboutMe/>
        <Studies/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App