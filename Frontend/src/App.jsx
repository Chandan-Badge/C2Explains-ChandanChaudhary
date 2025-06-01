import React from 'react';

import {Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Card from './pages/Card';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Collection from './pages/Collection';

function App() {
  return (
    <div>

        <Router>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/card' element={<Card/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/collection' element={<Collection/>} />
        </Router>

    </div>
  )
}

export default App;
