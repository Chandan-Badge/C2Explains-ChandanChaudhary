import React from 'react';
import {Router, Route, Routes} from 'react-router-dom';

import "./App.css";

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Navbar from './components/navbar';
import SidebarMenu from './components/Sidebar-Menu';

function App() {
  return (
    <div className='font-[poppins]'>

        <Navbar />
        <SidebarMenu />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/collection' element={<Collection/>} />
        </Routes>

    </div>
  )
}

export default App;
