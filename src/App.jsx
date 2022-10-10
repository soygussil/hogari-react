import React from 'react'
import Ciudades from './components/Ciudades'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
const style={
  bg: `h-screen w-screen bg-gradient-to-r from-[#f5f5f5] to-[#d1d5db]`,
}
const App = () => {
  return (
    <div className={style.bg}>
      <NavBar/>
      <Hero/>
      <Ciudades/>
    </div>
    
  )
}

export default App