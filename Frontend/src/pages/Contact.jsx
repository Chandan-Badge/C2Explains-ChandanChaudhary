import React from 'react';
import Title from "../components/Title.jsx";
import Coder from "../assets/coder2.png";

function Contact() {
  return (
    <div className='min-h-[80vh] mt-24 md:mt-28 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8'>
      <div className='text-2xl sm:text-3xl'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 mx-auto px-8 gap-12">
      {/* <h2 className="not-show-pop text-2xl sm:text-4xl text-center relative z-10 font-bold px-4 py-2 w-max mx-auto mt-14 text-[#b6bee5] dark:bg-[#0b0d14] bg-[#fff] border-2 rounded border-[#b6bee5]">Let's Talk?</h2> */}

        <div className="w-[60%] lg:max-w-[30vw] h-max">
          <img src={Coder} alt="connect" className="w-max" />
        </div>

        <div class="not-show-pop-slow w-full max-w-[600px] flex justify-center">
          <form className="w-[80%] sm:w-full" name="contactUS" netlify>

              <p className="dark:text-[#b6bee5] text-[#b6bee5] mb-5 dark:hover:text-[#fff] transition-all duration-300 ease-in-out">New projects, freelance inquiry or even a coffee.</p>

              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#b6bee5] text-gray-900 dark:focus:border-[#b6bee5] border-gray-300 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                  <label for="name" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#b6bee5] dark:peer-focus:text-[#b6bee5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name *</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#b6bee5] text-gray-900 dark:focus:border-[#b6bee5] border-gray-300 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                  <label for="email" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#b6bee5] dark:peer-focus:text-[#b6bee5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address *</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#b6bee5] text-gray-900 dark:focus:border-[#b6bee5] border-gray-300 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                  <label for="subject" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#b6bee5] dark:peer-focus:text-[#b6bee5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject *</label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <textarea name="massage" id="massage" rows="8" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#b6bee5] text-gray-900 dark:focus:border-[#b6bee5] border-gray-300 focus:outline-none focus:ring-0 peer"></textarea>
                <label for="textarea" className="ppeer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#b6bee5] dark:peer-focus:text-[#b6bee5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Massage *</label>
            </div>

            {/* <!-- Button --> */}
            <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">Send Massage</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact;
