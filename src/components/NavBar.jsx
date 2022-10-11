import React,{useState} from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/Ai'
import { FiLogIn } from 'react-icons/fi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {MdLocationCity} from 'react-icons/md'


const NavBar = () => {
  const [nav,setNav]=useState(false)
  const [logo,setLogo]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
    setLogo(!logo)
  }
  return (

    <div className='flex sticky top-0 w-full justify-between items-center h-32 px-4 backdrop-blur-sm  bg-white/70  z-10 rounded-b-md'>
      <a href="/">
      {/* <div className={logo?'hidden':'block flex'}> */}
      <div className={logo?'hidden':' block'}>
        <MdLocationCity size={40} className='logo text-sky-800'  />
        <h1 className='text-amber-400 drop-shadow  '>H<span className='uppercase text-sky-800 '>ogari.</span></h1>
      </div>
      </a>

      <ul className='hidden md:flex '>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contáctanos</li>
        <li>Acerca de nosotros</li>
      </ul>
      <div>
        <ul className='hidden md:flex'>
          <li className='flex'>Iniciar Sesión </li>
          <li className='flex  bg-[#03364D] hover:bg-[#BF6900] text-white rounded-xl px-8'>Únete <FiLogIn size={20} className='ml-1 mt-1' /> </li>
        </ul>
      </div>


{/* Botón hamburguesa */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav? <AiOutlineClose className='text-black' size={20}/>:<HiOutlineMenuAlt4 size={20} />}
        
      </div>
    {/* Menú de mobil */}
      <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col':'absolute left-[-100%]'}>
        <ul>
          <div className=' flex justify-center'>
          <MdLocationCity className='logo text-sky-800'  />
        <h1 className='text-amber-400 drop-shadow '>H<span className='uppercase text-sky-800 '>ogari.</span></h1>
          </div>
          <li className='border-b'>Inicio</li>
          <li className='border-b'>Productos</li>
          <li className='border-b'>Contáctanos</li>
          <li className='border-b'>Acerca de nosotros</li>
          <div className='flex flex-col'>
            <button className='my-2'>Iniciar Sesión</button>
            <button className='my-2'>Únete</button>
          </div>
            <div className="flex s my-6">
              <FaFacebook className='icon' />
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaPinterest className='icon' />
              <FaInstagram className='icon' />
            </div>

        </ul>
      </div>


    </div>
  )
}

export default NavBar