import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/shopContext';
import axios from 'axios';

function Login() {

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    // toast.success("Login successful");
    event.preventDefault();

    try {
      if (currentState == "Sign up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        // console.log(response.data);

        if (response.data.success) {
          toast.success("Login successful");

          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }

      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });

        if (response.data.success) {
          toast.success("Login successful");

          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          console.log(response.data);

        } else {
          toast.error(response.data.message);
        }
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token])

  return (
    <div className='min-h-[80vh] mt-24 md:mt-28 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8'>
      <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-200'>
        <div className='inline-flex items-center gap-2 mb-2 mt-4'>
          <h1 className='text-3xl'>{currentState}</h1>
          <hr className='border-none h-[1.5px] w-8 bg-gray-300' />
        </div>

        {currentState === "Login" ? "" : <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-300 bg-gray-900 rounded' placeholder='Name' required />}
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-300 bg-gray-900 rounded' placeholder='Email' required />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-300 bg-gray-900 rounded' placeholder='Password' required />

        <div className='w-full flex justify-between text-sm -mt-2'>
          <p className='cursor-pointer text-gray-300 hover:text-gray-100'>Forget your password?</p>

          {
            currentState === "Login"
              ? <p className='cursor-pointer text-gray-300 hover:text-gray-100' onClick={() => setCurrentState("Sign up")}>Create account</p>
              : <p className='cursor-pointer text-gray-300 hover:text-gray-100' onClick={() => setCurrentState("Login")}>Login Here</p>
          }
        </div>

        <button className='w-full font-medium bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 px-16 py-3 text-base mt-2 transition-all duration-200 ease-in-out'>{currentState}</button>
      </form>
    </div>
  )
}

export default Login;
