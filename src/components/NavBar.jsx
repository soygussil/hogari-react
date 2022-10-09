import React from 'react'
import {
  FaReact, FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram
} from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineClose } from 'react-icons/Ai'
import { FiLogIn } from 'react-icons/fi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'


const NavBar = () => {

  return (

    <div className='flex justify-between items-center h-20 px-4  bg-neutral-200 rounded-2xl'>
      <div className="flex">
        <FaReact className='logo' />
        <h1>Hogari.</h1>
      </div>
      <ul className='hidden md:flex '>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contáctanos</li>
        <li>Acerca de nosotros</li>
      </ul>
      <div>
        <ul className='hidden md:flex'>
          <li className='flex'>Iniciar Sesión <AiOutlineUserAdd size={20} className=' ml-1' /> </li>
          <li className='flex'>Únete <FiLogIn size={20} className='ml-1' /> </li>
        </ul>
      </div>


{/* Botón hamburguesa */}
      <div className="md:hidden">
        <HiOutlineMenuAlt4 size={20} />
      </div>
    {/* Menú de mobil */}
      <div className='absolute left-0'>
        <ul>
          <FaReact className='logo' />
          <h1>Hogari.</h1>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contáctanos</li>
          <li>Acerca de nosotros</li>
          <div>
            <button>Iniciar Sesión</button>
            <button>Únete</button>
            <div className="">
              <FaFacebook className='icon' />
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaPinterest className='icon' />
              <FaInstagram className='icon' />
            </div>
          </div>
        </ul>
      </div>


    </div>
  )
}

export default NavBar