import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaXTwitter, FaLinkedin, FaBars, FaXmark} from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
  const [isMenuon, setIsmenuon] = useState(false);
  const [isModalopen, setIsModalopen] = useState(false);

  const toggleMenu = ()=>{
    setIsmenuon(!isMenuon);
  }
  const navItems = [
    {path:'/', link:"Home"},
    {path:'/about', link:"About"},
    {path:'/blogs', link:"Blogs"},
    {path:'/services', link:"Services"},
    {path:'/contacts', link:"Contacts"}
  ]


  const openModal = ()=>{
    setIsModalopen(true);
  }
  const closeModal = ()=>{
    setIsModalopen(false);
  }

  return (
   <header className='bg-black text-white fixed top-0 right-0 left-0'>

    {/*large devices*/}
    <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>

      <a href="/" className='text-xl font-bold text-white'>Victor<span className='text-orange-600'>BS</span></a>

      <ul className='md:flex gap-12 text-lg hidden'>
        {
          navItems.map(({path, link}) => <li className='text-white' key={path}>
            <NavLink to={path}>{link}</NavLink>
          </li>)
        }
      </ul>

      <div className='text-white lg:flex gap-4 items-center hidden'>
        <a href="/" className='hover:text-orange-600'><FaGithub></FaGithub></a>
        <a href="/" className='hover:text-orange-600'><FaXTwitter></FaXTwitter></a>
        <a href="/" className='hover:text-orange-600'><FaLinkedin></FaLinkedin></a>
        <button onClick={openModal} className='bg-orange-600 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-600 transition-all duration-200 ease-in'>Log In</button>
      </div>

      <Modal isOpen = {isModalopen} onClose={closeModal}></Modal>

      <div className='md:hidden'>
        <button onClick={toggleMenu} className='cursor-pointer'>
          { isMenuon ? <FaXmark className='w-5 h-5'></FaXmark> :<FaBars className='w-5 h-5'></FaBars>}</button>
      </div>

    </nav>
    {/* Menu on mobile*/}
    <div>
    <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuon ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}>
        {
          navItems.map(({path, link}) => <li className='text-black' key={path}>
            <NavLink className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
              } onClick={toggleMenu} to={path}>{link}</NavLink>
          </li>)
        }
      </ul>
    </div>
   </header>
  )
}

export default Navbar