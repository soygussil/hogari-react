import React from 'react'
import casa from '../assets/img/casa.jpg'
import { Fade } from "react-awesome-reveal";
const CambiaVida = () => {
  return (
    
  <div className="container mx-auto">
            <p className='text-center py-2 text-5xl font-bold'>
            Cambia tu vida
           </p>
    <div className="md:flex flex-row">

        <div className="basis-2/4">
            <p>
            <Fade direction='left' delay={100}>
            <img className='rounded-xl' src={casa} alt="casa" />
            </Fade>
            </p>
            </div>
        <div className="basis-1/1 p-3">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ullam maxime ad, minima provident voluptate optio doloremque saepe necessitatibus voluptates impedit! Beatae cupiditate amet ullam dignissimos? Maxime recusandae reprehenderit eaque.
            </p>
        </div>
    </div>
  </div>
  )
}

export default CambiaVida