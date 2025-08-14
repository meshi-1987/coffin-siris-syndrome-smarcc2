import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Home from './pages/Home.jsx'
import Donate from './pages/Donate.jsx'
import Articles from './pages/Articles.jsx'
import Experts from './pages/Experts.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
