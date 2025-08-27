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
import Navbar from "./components/Navbar";
import SidebarMenu from './components/Sidebar-Menu';
import Projects from './pages/Projects';
import Quizes from './pages/Quizes';
import Services from './pages/Services';
import SourceCode from './pages/SourceCode';
import StackImages from './pages/StackImages';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

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
