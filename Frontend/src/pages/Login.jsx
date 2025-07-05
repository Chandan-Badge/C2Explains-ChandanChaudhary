import React, { useState } from 'react';

function Login() {

  const [currentState, setCurrentState] = useState("Sign up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  
  return (
    <div className='min-h-[80vh] mt-24 md:mt-28 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8'>
      <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-200'>
        <div className='inline-flex items-center gap-2 mb-2 mt-4'>
          <h1 className='text-3xl'>{currentState}</h1>
          <hr className='border-none h-[1.5px] w-8 bg-gray-300' />
        </div>

        {currentState === "Login" ? "" : <input type="text" className='w-full px-3 py-2 border border-gray-300 bg-gray-900 rounded' placeholder='Name' required />}
        <input type="email" className='w-full px-3 py-2 border border-gray-300 bg-gray-900 rounded' placeholder='Email' required />
        <input type="password" className='w-full px-3 py-2 border border-gray-300 bg-gray-900 rounded' placeholder='Password' required />

        <div className='w-full flex justify-between text-sm -mt-2'>
          <p className='cursor-pointer text-gray-300 hover:text-gray-100'>Forget your password?</p>

          {
            currentState === "Login" 
            ? <p className='cursor-pointer text-gray-300 hover:text-gray-100' onClick={() => setCurrentState("Sign up")}>Create account</p>
            : <p className='cursor-pointer text-gray-300 hover:text-gray-100' onClick={() => setCurrentState("Login")}>Login Here</p>
          }
        </div>

        <button className='w-full bg-white hover:bg-gray-200 text-black px-16 py-3 text-base'>{currentState}</button>
      </form>
    </div>
  )
}

export default Login;
