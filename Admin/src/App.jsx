import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import List from './Pages/List';
import Orders from './Pages/Orders';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Add />} />
          {/* <Route path='/add' element={<Add />} /> */}
          <Route path='/list' element={<List />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
