import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Content from './components/Content/Content'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Content />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
