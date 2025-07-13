import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-r-gray-600'>
      <div className='admin-sidebar flex flex-col gap-4 pt-6 pl-[20%] text-base'>

        <NavLink to={"/add"} className="flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          <p>Add Items</p>
        </NavLink>

        <NavLink to={"/list"} className="flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg>
          <p>List Items</p>
        </NavLink>

        <NavLink to={"/orders"} className="flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l">
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          <p>Orders</p>
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar;
