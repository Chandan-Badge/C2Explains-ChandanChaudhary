import React from 'react'
import logo from "../assets/c2-logo.png";
import { Link } from "react-router-dom";

function Footer() {
    
      const scrollUp = () => {
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          })
      }

    return (

      <footer className="bottom-0 w-full mt-10 flex justify-center sm:justify-end pl-0 sm:pl-24 lg:pl-16 xl:pl-8">
        <div className="w-[90%] sm:w-[85%] py-3 md:py-2 pr-2 md:pr-8">
            <div className="flex items-end justify-between">

                <div onClick={scrollUp} className="not-show-pop backtop relative group w-20 sm:w-24 flex items-start justify-start mb-2 sm:mb-0 rtl:space-x-reverse">

                    {/* <!-- Popup --> */}
                    <span className="invisible group-hover:visible text-gray-900 group-hover:flex bg-[#26ffe3] absolute top-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded w-max items-center gap-1 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-1 group-hover:-top-9 ease-jump duration-200">Back to top
                    </span>

                    <img src={logo} className="w-full" alt="Logo" />
                </div>

                <div className="not-show-bottom flex flex-wrap items-center justify-around text-sm font-medium mb-1 text-gray-300 dark:text-gray-400 gap-4 md:gap-6 gap-y-2">
                
                    <Link onClick={scrollUp} to={"/profile"} className="about-foot hover:text-[#26ffe3] border-b-2 hover:border-[#26ffe3] border-transparent transition-all ease-linear duration-[400ms] delay-75">About</Link>
                
                    <a href={"https://drive.google.com/file/d/1JwvzMMMnfaVjcqLk1Ei8RnqDI8pG4pTk/view?usp=sharing"} target="_blank" className="resume-foot hover:text-[#26ffe3] border-b-2 hover:border-[#26ffe3] border-transparent transition-all ease-linear duration-[400ms] delay-75">Resume</a>
                
                    <button type="button" className="project-foot hover:text-[#26ffe3] border-b-2 hover:border-[#26ffe3] border-transparent transition-all ease-linear duration-[400ms] delay-75">Privacy Policy</button>
                
                    <button type="button" className="services-foot hover:text-[#26ffe3] border-b-2 hover:border-[#26ffe3] border-transparent transition-all ease-linear duration-[400ms] delay-75">Services</button>

                    <button type="button" className="connect-foot hover:text-[#26ffe3] border-b-2 hover:border-[#26ffe3] border-transparent transition-all ease-linear duration-[400ms] delay-75">Connect</button>
                
                </div>
            </div>
        
          <hr className="not-show-pop my-2 sm:mx-auto border-gray-700" />
          
          <div className="sm:flex sm:items-center sm:justify-between py-0 md:py-2">
              <span className="not-show-top text-xs md:text-sm sm:text-center text-gray-300 dark:text-gray-400">© 2024-25 <a href="https://chandanchaudhary-portfolio.netlify.app/" className="hover:underline">Chandan Chaudhary</a>. All Rights Reserved.
              </span>

              <div className="not-show-top flex mt-4 sm:justify-center items-center sm:mt-0 gap-1">
                  <a href="https://www.linkedin.com/in/chandan--chaudhary/" target="_blank" className="text-gray-300 dark:text-gray-400 hover:text-[#26ffe3] hover:scale-110 transition-all duration-500 ease-in-out">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path
                          fill="currentColor"
                          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                      <span className="sr-only">Linkedin</span>
                  </a>
                  <a href="https://github.com/iamchandanchaudhary" target="_blank" className="text-gray-300 dark:text-gray-400 hover:text-[#26ffe3] ms-5 hover:scale-110 transition-all duration-500 ease-in-out">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path
                      fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                      <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://www.instagram.com/_.chandan_chaudhary/?hl=en" target="_blank" className="text-gray-300 dark:text-gray-400 hover:text-[#26ffe3] ms-5 hover:scale-110 transition-all duration-500 ease-in-out">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                      <span className="sr-only">Instagram</span>
                  </a>
                  <a href="mailto:chandanchaudhary533@gmail.com" target="_blank" className="text-gray-300 dark:text-gray-400 hover:text-[#26ffe3] ms-5 hover:scale-110 transition-all duration-500 ease-in-out">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                          fill="currentColor"
                          d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                      <span className="sr-only">Gmail</span>
                  </a>
                  <a href="https://www.youtube.com/@c2explains" target="_blank" className="text-gray-300 dark:text-gray-400 hover:text-[#26ffe3] ms-5 hover:scale-110 transition-all duration-500 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 576 512">
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                    </svg>
                      <span className="sr-only">YouTube</span>
                  </a>
              </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;