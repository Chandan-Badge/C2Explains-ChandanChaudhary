import React from 'react';
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';

function SidebarMenu() {
  return (
      <div className='h-[90vh]  hidden sm:flex justify-between flex-col text-sm md:text-base text-white fixed w-max pr-7 md:pr-8 lg:pr-10 py-4 bottom-0 border-r border-r-[#b6bee5]/50'>
        <NavLink to="/" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
          <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
          <p className=''>Home</p>
          {/* <hr className='menu w-2/3 border-none bg-[#26ffe3] h-1 opacity-0 rotate-90' /> */}
        </NavLink>

        <NavLink to="/collection" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Collection</p>
        </NavLink>

        <NavLink to="/projects" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Projects</p>
        </NavLink>

        <NavLink to="/quizes" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Quizes</p>
        </NavLink>

        <NavLink to="/source-code" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Source Code</p>
        </NavLink>

        <NavLink to="/stack-images" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p className='relative'>Stack images <span className='bg-[#6225e6] hover:bg-[#fbc638] text-[#fff] font-semibold rotate-12 hover:text-[#000] rounded-full text-[8px] md:text-[10px] px-2 py-0 absolute -right-5 -top-4 transition-all ease-in-out duration-500'>new</span></p>
        </NavLink>

        <NavLink to="/about" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>About</p>
        </NavLink>

        <NavLink to="/services" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Services</p>
        </NavLink>

        <NavLink to="/contact" className='sidebar-menu flex justify-start items-center gap-3 lg:gap-6'>
            <div className="menu w-[3px] h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Contact</p>
        </NavLink>

      </div>
  )
}

export default SidebarMenu;
