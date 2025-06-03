import React from 'react';
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';

function SidebarMenu() {
  return (
    <div className='text-white flex justify-start'>
      <div className='gap-2 md:gap-6 sm:flex hidden flex-col text-sm md:text-base'>
        <NavLink to="/" className='flex justify-start items-center gap-6'>
          <div class="menu w-1 h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
          <p className=''>Home</p>
          {/* <hr className='menu w-2/3 border-none bg-[#26ffe3] h-1 opacity-0 rotate-90' /> */}
        </NavLink>

        <NavLink to="/collection" className='flex justify-start items-center gap-6'>
            <div class="menu w-1 h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Collection</p>
            {/* <hr className='menu w-2/3 border-none bg-[#26ffe3] h-[1.5px] opacity-0' /> */}
        </NavLink>

        <NavLink to="/About" className='flex justify-start items-center gap-6'>
            <div class="menu w-1 h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
          <p>About</p>
          {/* <hr className='menu w-2/3 border-none bg-[#26ffe3] h-[1.5px] opacity-0' /> */}
        </NavLink>

        <NavLink to="/Contact" className='flex justify-start items-center gap-6'>
            <div class="menu w-1 h-11 border-none bg-[#26ffe3] opacity-0 rounded-e"></div>
            <p>Contact</p>
          {/* <hr className='menu w-2/3 border-none bg-[#26ffe3] h-[1.5px] opacity-0' /> */}
        </NavLink>

        {/* <button className='rounded-full py-1 md:py-1.5 px-2 md:px-3 border border-[#fff]/50 text-xs md:text-sm'>Admin Panel</button> */}
      </div>
    </div>
  )
}

export default SidebarMenu;
