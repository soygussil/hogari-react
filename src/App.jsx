import React from 'react'
import NavBar from './components/NavBar'
const style={
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#f5f5f5] to-[#d1d5db]`,
}
const App = () => {
  return (
    <div className={style.bg}>
      <NavBar/>
    </div>
    
  )
}

export default App