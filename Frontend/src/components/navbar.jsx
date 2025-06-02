import React from 'react';
import {assets} from "../assets/assets.js";

function Navbar() {
  return (
    <div className='px-10 py-4 text-[#fff] flex justify-between'>
      
      <img src={assets.logo} alt="" className='w-16 h-16' />

      <div className='flex gap-5'>
        <button>Home</button>
        <button>Collection</button>
        <button>About</button>
        <button>Contact</button>
        <button>Admin Panel</button>
      </div>

      <div className='flex gap-5'>
        <button>Search</button>
        <button>Cart</button>
        <button>Profile</button>
      </div>
    </div>
  )
}

export default Navbar;
