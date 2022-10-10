import React from 'react'
import { AiOutlineSearch } from 'react-icons/Ai'
import fondo from '../assets/img/living2.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen '>
        <img className='w-full h-full object-cover md:brightness-50' src={fondo} alt="Departament" />
        <div className='md:absolute text-black top-0 w-full h-full flex flex-col justify-center text-center lg:text-white p-4'>
            <h1>Hogari</h1>
            <h2>Una nueva vida a un solo click</h2>
            
            <form action="" className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
            rounded-xl text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-[Roboto] focus:outline-none' type="text" name="" id="" placeholder='¿Que deseas buscar?' />
                </div>
                <div>
                <button><AiOutlineSearch size={20} className='icon' style={{color:'#ffff'}} /></button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Hero