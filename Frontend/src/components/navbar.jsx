import React from 'react';
import {assets} from "../assets/assets.js";

function Navbar() {
  return (
    <div className='bg-pink-500 w-full h-screen'>
      
      <img src={assets.logo} alt="" className='w-20 h-20' />
    </div>
  )
}

export default Navbar;
