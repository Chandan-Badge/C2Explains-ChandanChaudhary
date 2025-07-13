import React from 'react';
import { assets } from "../assets/assets.js";

function Navbar() {
  return (
    <div className='px-4 sm:px-6 md:px-10 py-5 h-[10vh] flex justify-between items-center border-b border-b-[#b6bee5]/50 top-0 w-full z-10'>
      <img src={assets.colorLogo} className='w-32 md:w-44' alt="" />
      <button className='font-medium text-sm sm:text-base bg-gray-800 hover:bg-gray-900 border border-gray-700 py-2 px-5 transition-all duration-300 ease-in-out'>Log out</button>
    </div>
  )
}

export default Navbar;
