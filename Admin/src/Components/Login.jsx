import React from 'react'

function Login() {
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='border border-white/60 shadow-md rounded-md px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-[#b6bee5]'>Admin <span className='text-gray-200'>Panel</span></h1>

        <form action="" className='flex flex-col gap-4'>
          <div className='mb-3 min-w-72 flex flex-col gap-1'>
            <p className='text-sm font-medium text-gray-300'>Email Address: </p>
            <input className='rounded w-full px-3 py-2 bg-gray-900 border border-gray-500 outline-none' type="email" />
          </div>

          <div className='mb-3 min-w-72 flex flex-col gap-1'>
            <p className='text-sm font-medium text-gray-300'>Password: </p>
            <input className='rounded w-full px-3 py-2 bg-gray-900 border border-gray-500 outline-none' type="email" />
          </div>

          <button className='pt-2 mb-2 w-full py-2 px-4 font-medium bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 transition-all duration-200 ease-in-out'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login;
