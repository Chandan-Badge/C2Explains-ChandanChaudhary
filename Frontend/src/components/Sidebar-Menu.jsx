import React from 'react';
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';

function SidebarMenu() {
  return (
      <div className='h-[90vh] gap-2 md:gap-6 hidden sm:flex justify-start flex-col text-sm md:text-base text-white fixed w-max pr-8 py-[22px] bottom-0 border-r border-r-[#b6bee5]/50'>
        <NavLink to="/" className='flex justify-start items-center gap-6'>
          <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
          <p className=''>Home</p>
          {/* <hr className='menu w-2/3 border-none bg-[#26ffe3] h-1 opacity-0 rotate-90' /> */}
        </NavLink>

        <NavLink to="/collection" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Collection</p>
        </NavLink>

        <NavLink to="/projects" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Projects</p>
        </NavLink>

        <NavLink to="/quizes" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Quizes</p>
        </NavLink>

        <NavLink to="/source-code" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Source Code</p>
        </NavLink>

        <NavLink to="/stack-images" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Stack images <span className='bg-gray-700 rounded-full text-[8px] px-2 py-1'>new</span></p>
        </NavLink>

        <NavLink to="/about" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
          <p>About</p>
        </NavLink>

        <NavLink to="/services" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
          <p>Services</p>
        </NavLink>

        <NavLink to="/contact" className='flex justify-start items-center gap-6'>
            <div class="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Contact</p>
        </NavLink>

      </div>
  )
}

export default SidebarMenu;
