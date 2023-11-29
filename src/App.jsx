import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import ParticlesComponent from './components/ParticlesComponent'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Resume from './components/Resume'

function App() {
  

  return (
    <div className='flex flex-col overflow-hidden'>
    <Navbar />
    <AboutMe />
    <Portfolio/>
    <Contacts/>
    <Resume/>
    <Footer/>
  </div>
  )
}

export default App
