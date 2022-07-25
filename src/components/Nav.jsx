import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";

function Nav() {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav id='nav' className='top-3 w-max left-1/2 -translate-x-1/2 z-20 fixed py-2 flex flex-row items-center justify-center gap-2 text-indigo-900 bg-black-rgba dark:bg-white-rgba px-3 rounded-3xl backdrop-blur-lg lg:top-1/2 lg:-translate-y-1/2 lg:left-10 lg:flex-col'>
        <a  href="#hero" className={(activeNav === '#hero' ? 'active' : '') + ' bg-transparent text-2xl p-1 rounded-full hover:bg-slate-400'}
            onClick={() => setActiveNav('#hero')}    
        ><AiOutlineHome /></a>        
        <a href="#services" className={(activeNav == '#services' ? 'active' : '') + ' bg-transparent text-2xl p-1 rounded-full hover:bg-slate-400'}
            onClick={() => setActiveNav('#services')}
        ><RiServiceFill /></a>        
        <a href="#works" className={(activeNav == '#works' ? 'active' : '') + ' bg-transparent text-2xl p-1 rounded-full hover:bg-slate-400'}
            onClick={() => setActiveNav('#works')}
        ><MdWorkOutline /></a>        
        <a href="#about" className={(activeNav == '#about' ? 'active' : '') + ' bg-transparent text-2xl p-1 rounded-full hover:bg-slate-400'}
            onClick={() => setActiveNav('#about')}
        ><CgProfile /></a>        
        <a href="#contact" className={(activeNav == '#contact' ? 'active' : '') + ' bg-transparent text-2xl p-1 rounded-full hover:bg-slate-400'}
            onClick={() => setActiveNav('#contact')}
        ><MdOutlineContactPhone /></a>        
    </nav>
  )
}

export default Nav