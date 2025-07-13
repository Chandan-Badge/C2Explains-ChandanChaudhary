import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-r-gray-600'>
      <div className='admin-sidebar flex flex-col gap-4 pt-6 pl-[20%] text-base'>

        <NavLink to={"/add"} className="flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l">
          <p>Add Items</p>
        </NavLink>

        <NavLink to={"/list"} className="flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l">
          <p>List Items</p>
        </NavLink>

        <NavLink to={"/orders"} className="flex items-center gap-3 border border-gray-500 border-r-0 px-3 py-2 rounded-l">
          <p>Orders</p>
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar;
