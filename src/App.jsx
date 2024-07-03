import './App.css'
// import Connect from './components/Connect'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio1 from './components/Portfolio1'
import Portfolio2 from './components/Portfolio2'
import { Routes, Route } from 'react-router-dom'
import Skills from './components/Skills'
import Test from './components/Test'
import Contact from './components/Contact'

function App() {


  return (
    <>
      <Navbar />
      {/* <Socials/> */}
      <Hero />
      <Portfolio1 />
      <Portfolio2 />
      <About />
      <Skills />
      <Contact/>
      <Footer />
      {/* <Connect /> */}
    </>
  )
}

export default App
