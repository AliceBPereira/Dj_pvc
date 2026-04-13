import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Regions from './components/Regions'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Regions />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Daniel Junior PVC Solutions. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
