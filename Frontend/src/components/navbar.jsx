import React, { useState } from 'react';
import {assets} from "../assets/assets.js";
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';

function Navbar() {

  const [visible, setVisible] = useState(false);

  return (
    <div className='px-6 md:px-10 py-5 h-[10vh] bg-[#0d1224] text-[#fff] flex justify-between items-center border-b border-b-[#b6bee5]/50 fixed top-0 w-full z-10'>
      
      <Link to="/"><img src={assets.logo} alt="" className='w-32 md:w-44' /></Link>

      {/* <div className='gap-2 md:gap-6 items-center justify-center sm:flex hidden text-sm md:text-base'>
        <NavLink to="/" className='flex gap-1 items-center flex-col'>
          <p className=''>Home</p>
          <hr className='w-2/3 border-none bg-[#26ffe3] h-[1.5px] opacity-0' />
        </NavLink>

        <NavLink to="/collection" className='flex gap-1 items-center flex-col'>
          <p>Collection</p>
          <hr className='w-2/3 border-none bg-[#26ffe3] h-[1.5px] opacity-0' />
        </NavLink>

        <NavLink to="/About" className='flex gap-1 items-center flex-col'>
          <p>About</p>
          <hr className='w-2/3 border-none bg-[#26ffe3] h-[1.5px] opacity-0' />
        </NavLink>

        <NavLink to="/Contact" className='flex gap-1 items-center flex-col'>
          <p>Contact</p>
          <hr className='w-2/3 border-none bg-[#26ffe3] h-[1.5px] opacity-0' />
        </NavLink>

        <button className='rounded-full py-1 md:py-1.5 px-2 md:px-3 border border-[#fff]/50 text-xs md:text-sm'>Admin Panel</button>
      </div> */}

      <div className='flex gap-6 sm:gap-10 items-center justify-center'>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 sm:w-8 h-7 sm:h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </button>

        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-sun w-6 h-6 sm:w-7 sm:h-7 text-[#e3e3e3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>

          <svg className='w-7 sm:w-8 h-7 sm:h-8 fill-[#e3e3e3] hidden' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path></svg>
        </button>

        <Link to="/cart" className='relative'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 sm:w-8 h-7 sm:h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>

          <p className='absolute -right-[2px] -bottom-[2px] w-4 text-center landing-4 text-black bg-white aspect-square rounded-full text-[8px] flex justify-center items-center'>10</p>
        </Link>

        <button className='group relative'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 sm:w-8 h-7 sm:h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
          
          <div className='group-hover:block hidden dropdown-menu -right-5 pt-4 absolute'>
            <div className='bg-[#0d1224] text-gray-300 rounded border border-[#fff] flex flex-col gap-2 w-36 px-3 py-4'>
              <p className='cursor-pointer hover:text-[#fff] hover:bg-gray-700 px-4 py-1 rounded'>My Profile</p>
              <p className='cursor-pointer hover:text-[#fff] hover:bg-gray-700 px-4 py-1 rounded'>Orders</p>
              <p className='cursor-pointer text-red-500 hover:text-[#fff] hover:bg-red-700 px-4 py-1 rounded'>Logout</p>
            </div>
          </div>

        </button>

        <svg 
          onClick={() => setVisible(true)} 
          xmlns="http://www.w3.org/2000/svg" 
          className='w-8 h-8 block sm:hidden cursor-pointer' 
          viewBox="0 -960 960 960" 
          fill="#e3e3e3">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>

      </div>

      {/* Menu option for small screen */}
      <div className={`fixed top-0 bottom-0 right-0 flex flex-col overflow-hidden py-2 bg-[#0d1224] transition-all ${visible ? "w-full" : "w-0"}`}>
        <div onClick={() => setVisible(false)} className='w-full px-4 py-3 flex items-center cursor-pointer border-b border-gray-400'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          <p className='-left-10'>Back</p>
        </div>

        <NavLink to="/" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p className=''>Home</p>
        </NavLink>

        <NavLink to="/collection" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>Collection</p>
        </NavLink>

        <NavLink to="/projects" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>Projects</p>
        </NavLink>

        <NavLink to="/quizes" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>Quizes</p>
        </NavLink>

        <NavLink to="/source-code" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>Source Code</p>
        </NavLink>

        <NavLink to="/stack-images" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>Stack images</p>
        </NavLink>

        <NavLink to="/about" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>About</p>
        </NavLink>

        <NavLink to="/services" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>Services</p>
        </NavLink>

        <NavLink to="/contact" onClick={() => setVisible(false)} className='sidebar-menu-mobile w-full px-6 py-3 flex items-center cursor-pointer border-b border-gray-400 hover:bg-slate-200 hover:text-[#111]'>
          <p>Contact</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Navbar;
