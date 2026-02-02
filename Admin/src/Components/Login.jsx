import axios from "axios";
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from "react-toastify";

function Login({ setToken }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backendUrl + "/api/user/admin", ({ email, password }));
      console.log(response);

      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Successful");
      }
      else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='border border-white/60 shadow-md rounded-md px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-[#b6bee5]'>Admin <span className='text-gray-200'>Panel</span></h1>

        <form action="" onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
          <div className='mb-3 min-w-72 flex flex-col gap-1'>
            <p className='text-sm font-medium text-gray-300'>Email Address: </p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded w-full px-3 py-2 bg-gray-900 border border-gray-500 outline-none' type="email" placeholder='Email' required />
          </div>

          <div className='mb-3 min-w-72 flex flex-col gap-1'>
            <p className='text-sm font-medium text-gray-300'>Password: </p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded w-full px-3 py-2 bg-gray-900 border border-gray-500 outline-none' type="password" placeholder='Password' required />
          </div>

          <button className='pt-2 mb-2 w-full py-2 px-4 font-medium bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 transition-all duration-200 ease-in-out'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login;
