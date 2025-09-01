import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import List from './Pages/List';
import Orders from './Pages/Orders';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

import { ToastContainer, toast } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹";

function App() {

  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className='text-white min-h-screen'>
      <ToastContainer />

      {token === "" 
      ? <Login setToken={setToken} /> 
      : <>
        <Navbar setToken={setToken} />

        <div className='flex w-full'>
          <Sidebar />

          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-base'>
            <Routes>
              {/* <Route path='/' element={<Add />} /> */}
              <Route path='/add' element={<Add token={token} />} />
              <Route path='/list' element={<List token={token} />} />
              <Route path='/orders' element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>

      </>
      }

    </div>
  )
}

export default App;
