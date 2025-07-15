import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import List from './Pages/List';
import Orders from './Pages/Orders';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';

function App() {

  const [token, setToken] = useState("");

  return (
    <div className='text-white min-h-screen'>

      {token === "" 
      ? <Login /> 
      : <>
        <Navbar />

        <div className='flex w-full'>
          <Sidebar />

          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-base'>
            <Routes>
              {/* <Route path='/' element={<Add />} /> */}
              <Route path='/add' element={<Add />} />
              <Route path='/list' element={<List />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
          </div>
        </div>

      </>
      }

    </div>
  )
}

export default App;
