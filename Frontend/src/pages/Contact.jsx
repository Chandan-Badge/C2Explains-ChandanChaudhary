import React from 'react';
import Title from "../components/Title.jsx";
import Coder from "../assets/coder.png";

function Contact() {
  return (
    <div className='min-h-[80vh] mt-24 md:mt-28 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8'>
      <div className='text-2xl sm:text-3xl'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between mt-10 mx-auto px-8 gap-12">
      {/* <h2 class="not-show-pop text-2xl sm:text-4xl text-center relative z-10 font-bold px-4 py-2 w-max mx-auto mt-14 text-[#0f6dbf] dark:bg-[#0b0d14] bg-[#fff] border-2 rounded border-[#0f6dbf]">Let's Talk?</h2> */}

        <div class="w-[60%] lg:max-w-[30vw] h-max">
          <img src={Coder} alt="connect" class="w-max" />
        </div>

        <div class="not-show-pop-slow w-full max-w-[600px] flex justify-center">
          <form class="w-[80%] sm:w-full" name="contactUS" netlify>
            
            {/* <!-- <form class="max-w-md mx-auto"> --> */}
              <p class="dark:text-[#0f6dbf] text-[#0f6dbf] mb-5 dark:hover:text-[#fff] transition-all duration-300 ease-in-out">New projects, freelance inquiry or even a coffee.</p>

              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#0f6dbf] text-gray-900 dark:focus:border-[#0f6dbf] border-gray-300 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                  <label for="name" class="peer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#0f6dbf] dark:peer-focus:text-[#0f6dbf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name *</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#0f6dbf] text-gray-900 dark:focus:border-[#0f6dbf] border-gray-300 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                  <label for="email" class="peer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#0f6dbf] dark:peer-focus:text-[#0f6dbf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address *</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="subject" id="subject" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#0f6dbf] text-gray-900 dark:focus:border-[#0f6dbf] border-gray-300 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                  <label for="subject" class="peer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#0f6dbf] dark:peer-focus:text-[#0f6dbf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject *</label>
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <textarea name="massage" id="massage" rows="8" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 focus:border-[#0f6dbf] text-gray-900 dark:focus:border-[#0f6dbf] border-gray-300 focus:outline-none focus:ring-0 peer"></textarea>
                <label for="textarea" class="ppeer-focus:font-medium absolute text-sm dark:text-gray-400 text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#0f6dbf] dark:peer-focus:text-[#0f6dbf] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Massage *</label>
            </div>

            {/* <!-- Button --> */}
            <button type="submit" class="w-full text-white bg-[#0f6dbf] hover:bg-[#0f6dbfd8] focus:ring-2 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">Send Massage</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact;
