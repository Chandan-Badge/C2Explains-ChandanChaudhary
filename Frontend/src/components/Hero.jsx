import React from 'react';

function Hero() {
  return (
    <div className='text-[#fff] flex flex-col items-center justify-center gap-3'>

      <p className='border border-[#b6bee5]/50 text-[#b6bee5] bg-[#181e33] py-1 px-3 rounded-full flex items-center justify-center'>
        🎉 Introducing our latest Development Projects. 
        <a href="#" className='text-blue-500 flex px-1'>Show more
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-blue-500 pt-1' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg>
        </a> 
      </p>

      <h1 className='text-7xl font-bold text-center'>UIStack</h1>
      <p className='text-4xl font-bold text-center '>Ultimate Destination for Frontend Developer's</p>
      <p className='text-gray-400 text-base text-center max-w-[50vw]'>Accelerate your web development workflow, whether you're building sleek dashboards, dynamic landing pages, or scalable web applications, our components are built with accessibility, and modern design standards in mind.</p>

      {/* <div>
        <button></button>
        <button></button>
      </div> */}
    </div>
  )
}

export default Hero;
