import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext';

function Cart() {

  const {product, currency, cartItem} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  
  useEffect(() => {

  }, [cartData]);

  return (
    <div>
      
    </div>
  )
}

export default Cart;
