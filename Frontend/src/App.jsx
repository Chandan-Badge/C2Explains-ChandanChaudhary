import React from 'react';
import {Router, Route, Routes} from 'react-router-dom';

import "./App.css";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Payment from './pages/Payment.jsx';
import Orders from './pages/Orders.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact.jsx';
import Collection from './pages/Collection.jsx';
import Navbar from "./components/Navbar.jsx";
import SidebarMenu from './components/Sidebar-Menu.jsx';
import Projects from './pages/Projects.jsx';
import Quizes from './pages/Quizes.jsx';
import Services from './pages/Services.jsx';
import SourceCode from './pages/SourceCode.jsx';
import StackImages from './pages/StackImages.jsx';
import Footer from './components/Footer.jsx';
import SearchBar from './components/SearchBar.jsx';

import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='font-[poppins]'>

        <ToastContainer />
        <Navbar />
        {/* <SearchBar /> */}
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
          <Route path='/projects' element={<Projects/>} />
          <Route path='/quizes' element={<Quizes/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/source-code' element={<SourceCode/>} />
          <Route path='/stack-images' element={<StackImages/>} />
        </Routes>

        <Footer />

    </div>
  )
}

export default App;
