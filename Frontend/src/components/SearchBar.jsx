import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';

function SearchBar() {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

  return showSearch ? (
    <div className='z-[11] fixed w-[50%] text-center top-0 left-1/2 -translate-x-1/2 flex justify-center'>
      <div className='inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 rounded-full w-2/3 sm:w-1/2'>
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='flex-1 outline-none bg-inherit text-sm' 
        type="text" 
        placeholder='Search' />

        <svg xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      </div>

        <svg onClick={() => setShowSearch(false)} xmlns="http://www.w3.org/2000/svg" className='w-5' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </div>
  ) : null
}

export default SearchBar;
