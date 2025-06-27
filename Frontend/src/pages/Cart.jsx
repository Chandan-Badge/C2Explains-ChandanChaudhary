import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext';
import Title from "../components/Title.jsx";
import { products } from '../assets/assets.js';

function Cart() {

  const {product, currency, cartItems} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  
  useEffect(() => {
    const tempData = [];

    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        tempData.push({
          _id: item,
          quantity: cartItems[item]
        })
      }
    }

    // console.log(tempData);
    setCartData(tempData);
  }, [cartData]);

  return (
    <div className=' pt-14'>
      
      <div className='text-2xl mb-4'>
        <Title text1={"Your"} text2={"Cart"}/>
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b text-gray-300 grid grid-cols-4 items-center gap-4'> 
                <div className='flex gap-6 items-start'>
                  <img src={productData.image} alt="" className='w-20' />

                  <div>
                    <p className='text-lg font-medium' >{productData.name}</p>
                  </div>

                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cart;
