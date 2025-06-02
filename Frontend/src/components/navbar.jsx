import React from 'react';
import {assets} from "../assets/assets.js";
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='px-10 py-3 text-[#fff] flex justify-between items-center'>
      
      <img src={assets.logo} alt="" className='w-20 h-20' />

      <div className='flex gap-6 items-center justify-center'>
        <NavLink to="/" className='flex gap-1 items-center flex-col'>
          <p>Home</p>
          <hr className='w-2/3 border-none bg-gray-200 h-[1.5px] hidden' />
        </NavLink>

        <NavLink to="/collection" className='flex gap-1 items-center flex-col'>
          <p>Collection</p>
          <hr className='w-2/3 border-none bg-gray-200 h-[1.5px] hidden' />
        </NavLink>

        <NavLink to="/About" className='flex gap-1 items-center flex-col'>
          <p>About</p>
          <hr className='w-2/3 border-none bg-gray-200 h-[1.5px] hidden' />
        </NavLink>

        <NavLink to="/Contact" className='flex gap-1 items-center flex-col'>
          <p>Contact</p>
          <hr className='w-2/3 border-none bg-gray-200 h-[1.5px] hidden' />
        </NavLink>

        <button className='rounded-full py-1.5 px-3 border border-[#fff]/50 text-sm'>Admin Panel</button>
      </div>

      <div className='flex gap-6 items-center justify-center'>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </button>
        <button>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar;
