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
    <div className='mt-32 md:mt-36 sm:ml-32 md:ml-56 px-8'>
      
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
                    <div className='flex gap-5 mt-2 items-center'>
                      <p>{currency}{productData.price}</p>
                    </div>
                  </div>

                </div>

                <div className='flex gap-5 items-center'>
                  <input type="number" min={1} defaultValue={item.quantity} className='border-10 max-w-20 px-1 sm:px-2 py-1 bg-slate-600' />
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 sm:w-7 h-5 sm:h-7 fill-[#e3e3e3] cursor-pointer`} viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
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
