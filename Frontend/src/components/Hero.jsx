import React from 'react';

function Hero() {
  return (
    <div className='text-[#fff] flex flex-col items-center justify-center gap-4 mt-32 md:mt-40'>

      <div className='border border-[#b6bee5]/50 text-[#b6bee5] bg-[#181e33] text-xs md:text-sm py-1.5 px-4 rounded-full flex items-center justify-center group'>
        <p>🎉 Introducing our latest Development Projects.</p>
        <a href="https://stackgallery-chandanchaudhary.netlify.app" target='_black' className='text-blue-500 flex pl-1 text-center'>Show more
          <svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-blue-500 ml-1' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg>
        </a> 
      </div>

      {/* <h1 className='text-7xl font-bold text-center'><span className='text-[#26ffe3]'>UI</span>Stack</h1> */}
      <h2 className='text-4xl lg:text-5xl font-bold text-center max-w-[80%]'>Ultimate Destination for Software Developer's</h2>
      <p className='text-gray-400 text-base text-center max-w-[60vw] sm:max-w-[50vw]'>Accelerate your web development workflow, whether you're building sleek dashboards, dynamic landing pages, or scalable web applications, our components are built with accessibility, and modern design standards in mind.</p>

      <div className='flex justify-center items-center gap-4 md:gap-8 lg:gap-20 mt-6 lg:mt-10 text-sm sm:text-base'>
        <button className='border border-[#b6bee5]/50 hover:border-[#26ffe3] text-[#b6bee5] hover:text-gray-200 bg-[#181e33] py-2 px-6 md:px-8 lg:px-16 rounded-full flex items-center gap-1 md:gap-3 group'>
          Browse Components
          <svg xmlns="http://www.w3.org/2000/svg" className='w-3 fill-[#b6bee5] group-hover:fill-gray-200 pt-[2px]' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
        <button className='border border-[#b6bee5]/50 hover:border-[#26ffe3] text-[#b6bee5] hover:text-gray-200 bg-[#181e33] py-2 px-6 md:px-8 lg:px-16 rounded-full flex items-center gap-1 md:gap-3 group'>
          Browse Templates
          <svg xmlns="http://www.w3.org/2000/svg" className='w-3 fill-[#b6bee5] group-hover:fill-gray-200 pt-[2px]' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
      </div>

      <ul className="flex flex-wrap gap-6 md:gap-4 lg:gap-8 mt-4 md:mt-10 text-[#333] dark:text-[#fff]">
          
          <li className="overflow-x-visible relative w-10 md:w-16 h-12 md:h-[72px] overflow-y-clip group text-center flex items-center justify-center">
              <div className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full transition-all duration-150 absolute top-0 group-hover:origin-top text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#fff] group-hover:fill-[#7cdfff] dark:group-hover:fill-[#7cdfff]" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 text-[10px] md:text-xs text-center text-[#fff] whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:bottom-0">
                  React.js
              </div>
          </li>

          <li className="overflow-x-visible relative w-10 md:w-16 h-12 md:h-[72px] overflow-y-clip group text-center flex items-center justify-center">
              <div className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full transition-all duration-150 absolute top-0 group-hover:origin-top text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-max fill-[#fff] group-hover:fill-[#ff3737]" viewBox="0 0 128 128"><path d="M74.6 96.7c1 0 1.9-.8 1.9-1.9s-.9-1.8-1.9-1.8H50.4c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9h24.2zM83.9 100.4H41.1c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9H84c1 0 1.9-.8 1.9-1.9s-.9-1.9-2-1.9zM20.6 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zM37.3 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S39.4 24 37.3 24zM54.1 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S56.2 24 54.1 24z"></path><path d="M7.5 7.2V119h111.8V7.2H7.5zm3.7 3.8h104.4v18.6H11.2V11zm104.4 104.3H11.2v-82h104.4v82z"></path><path d="M47.5 81.4l1.7 1.4c.1 0 .1.1.2.1.4.3.7.5 1.1.7.2.1.5.3.7.4.4.2.7.4 1.1.6.3.2.6.3.9.5.3.1.6.3.9.4.6.3 1.3.5 1.9.7.2.1.5.1.7.2.5.1 1 .3 1.5.4.3.1.5.1.8.2.5.1 1 .2 1.5.2.2 0 .5.1.7.1.7.1 1.5.1 2.2.1s1.5 0 2.2-.1c.2 0 .5-.1.7-.1.5-.1 1-.1 1.5-.2.3 0 .5-.1.8-.1.5-.1 1-.2 1.5-.4.2-.1.4-.1.7-.2.6-.2 1.3-.4 1.9-.7.3-.1.6-.3.9-.4.3-.2.7-.3 1-.5.4-.2.7-.4 1-.6.2-.1.5-.3.7-.4.4-.2.7-.5 1.1-.7.1 0 .1-.1.2-.1l1.9-1.4-.1-.1c5.1-4.4 8.3-10.9 8.3-18.2C87.7 49.8 76.8 39 63.5 39S39.2 49.8 39.2 63.1c0 7.3 3.2 13.8 8.3 18.3zM58.4 83c-.7-.2-1.5-.4-2.2-.7-.1 0-.2-.1-.2-.1-.7-.3-1.5-.6-2.2-1l4.5-2.5c1.4-.8 2.3-2.2 2.3-3.8v-3.1l-.4-.5s-1.5-1.8-2.1-4.3l-.2-.9-.6-.4.1-2.8.6-.6v-4.9c0-.1-.1-1.4.8-2.5.9-1 2.5-1.5 4.8-1.5s3.9.5 4.8 1.5c1 1.1.8 2.4.8 2.5v4.1l.1.9.6.6v2.7c0 .1-.1.1-.1.1l-.9.3-.3.9c-.4 1.3-1 2.5-1.8 3.5-.2.2-.3.5-.5.6l-.5.5V75c0 1.6.9 3.1 2.4 3.9l4.8 2.4h-.1c-.7.3-1.3.6-2 .9-.1 0-.2.1-.3.1-.7.3-1.4.5-2.2.7-3.4.8-6.7.8-10 0 .1 0 0 0 0 0zm5-40.4c11.3 0 20.5 9.2 20.5 20.5 0 6.4-2.9 12.1-7.5 15.8-.1-.1-.2-.1-.3-.2l-6.5-3.2c-.2-.1-.3-.3-.3-.5v-1.9c.1-.1.2-.2.3-.4.8-1.1 1.5-2.4 2-3.8 1.1-.7 1.8-1.9 1.8-3.3v-2.7c0-.8-.2-1.5-.7-2.2v-3.1c.1-.7.1-3.1-1.7-5.2-1.6-1.8-4.2-2.8-7.6-2.8s-6 .9-7.6 2.8C54 54.5 54 57 54.1 57.6v3.1c-.4.6-.7 1.4-.7 2.2v2.7c0 1 .4 2 1.1 2.7.6 2.1 1.6 3.8 2.2 4.6V75c0 .2-.1.4-.3.5l-6 3.3c-.1 0-.1.1-.2.1-4.5-3.8-7.4-9.4-7.4-15.8.1-11.3 9.3-20.5 20.6-20.5z"></path></svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 text-[10px] md:text-xs text-center text-[#fff] whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:bottom-0">
                UI/UX
              </div>
          </li>

          <li className="overflow-x-visible relative w-10 md:w-16 h-12 md:h-[72px] overflow-y-clip group text-center flex items-center justify-center">
              <div className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full transition-all duration-150 absolute top-0 group-hover:origin-top text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#fff] group-hover:fill-[#f06629]" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 text-[10px] md:text-xs text-center text-[#fff] whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:bottom-0">
                  HTML5
              </div>
          </li>

          <li className="overflow-x-visible relative w-10 md:w-16 h-12 md:h-[72px] overflow-y-clip group text-center flex items-center justify-center">
              <div className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full transition-all duration-150 absolute top-0 group-hover:origin-top text-white">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#fff] group-hover:fill-[#32aadd]" viewBox="0 0 448 512"><path d="M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z"/></svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#fff] group-hover:fill-[#306af1]" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 text-[10px] md:text-xs text-center text-[#fff] whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:bottom-0">
                  CSS3
              </div>
          </li>

          <li className="overflow-x-visible relative w-10 md:w-16 h-12 md:h-[72px] overflow-y-clip group text-center flex items-center justify-center">
              <div className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full transition-all duration-150 absolute top-0 group-hover:origin-top text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#fff] group-hover:fill-[#f0db4e]" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 text-[10px] md:text-xs text-center text-[#fff] whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:bottom-0">
                  Javascript
              </div>
          </li>

          <li className="overflow-x-visible relative w-10 md:w-16 h-12 md:h-[72px] overflow-y-clip group text-center flex items-center justify-center">
              <div className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full transition-all duration-150 absolute top-0 group-hover:origin-top text-white">
                  <svg role="img" viewBox="0 0 24 24" className="fill-[#fff] group-hover:fill-[#4eb1b7]" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 text-[10px] md:text-xs text-center text-[#fff] whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:bottom-0">
                  Tailwind css
              </div>
          </li>

          <li className="overflow-x-visible relative w-10 md:w-16 h-12 md:h-[72px] overflow-y-clip group text-center flex items-center justify-center">
              <div className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full transition-all duration-150 absolute top-0 group-hover:origin-top text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#fff] group-hover:fill-[#8e19ff]" viewBox="0 0 576 512"><path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"/></svg>
              </div>
              <div className="absolute -bottom-10 left-1/2 text-[10px] md:text-xs text-center text-[#fff] whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:bottom-0">
                  Bootstrap
              </div>
          </li>

      </ul>
    </div>
  )
}

export default Hero;
