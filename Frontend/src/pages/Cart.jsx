import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from "../components/Title.jsx";
import { products } from '../assets/assets.js';
import CartTotal from '../components/CartTotal.jsx';

function Cart() {

  const {product, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  
  useEffect(() => {
  const tempData = [];

  for(const item in cartItems) {
    if(cartItems[item] > 0) {
      const productExists = products.find((product) => product._id === item);
      if (productExists) {
        tempData.push({
          _id: item,
          quantity: cartItems[item]
        });
      }
    }
  }

    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className='mt-24 md:mt-28 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8 min-h-[65vh]'>
      
      <div className='text-2xl sm:text-4xl mb-4 border-b-2 border-[#b6bee5]/50'>
        <Title text1={"Your"} text2={"Cart"}/>
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            if (!productData) return null; // Skip if product not found

            return (
              <div key={index} className='py-4 border-b border-[#b6bee5]/50 text-gray-300 items-center gap-4 flex justify-between px-3 sm:px-4'> 
                <div className='flex gap-3 sm:gap-6 items-center '>
                  <img src={productData.image} alt="" className='w-20' />

                  <div>
                    <p className='text-base md:text-lg font-medium' >{productData.name}</p>
                    <div className='text-sm md:text-base flex gap-5 mt-2 items-center'>
                      <p>{currency}{productData.price}</p>
                    </div>
                  </div>

                </div>

                <div className='flex gap-3 sm:gap-5 items-center'>
                  <div className='relative flex items-center justify-center'>
                    <input 
                      onChange={(e) => e.target.value === "" || e.target.value === 0 ? null : updateQuantity(item._id, Number(e.target.value))}
                      type="number" 
                      min={1} 
                      defaultValue={item.quantity} 
                      className='border-10 max-w-14 pl-3 px-1 py-1 bg-[#0d1224] rounded border border-[#b6bee5]/50' />

                    <div className='flex flex-col gap-0 justify-around items-center absolute top-0 right-0.5 pointer-events-none bg-none'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-5 relative bottom-0 fill-[#e3e3e3] hover:fill-[#fff]' viewBox="0 -960 960 960"><path d="m280-400 200-200 200 200H280Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-5 relative -top-1.5 fill-[#e3e3e3] hover:fill-[#fff]' viewBox="0 -960 960 960"><path d="M480-360 280-560h400L480-360Z"/></svg>
                    </div>
                  </div>

                  {/* Delete btn */}
                  <div className='p-1.5 sm:p-2 rounded-full hover:bg-[#181e33] cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(38,255,226,0.1)] active:scale-95'>
                    <svg 
                      onClick={() => updateQuantity(item._id, 0)} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-6 sm:w-7 h-6 sm:h-7 fill-[#a52a2a] hover:fill-[#f00] cursor-pointer transition-all duration-300`} 
                      viewBox="0 -960 960 960" 
                      fill="#e3e3e3">
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

        <div className='flex justify-end my-20 text-[#fff]'>
          <div className='w-full sm:w-[450px] text-2xl'>
            <CartTotal />

            <div className='w-full text-center'>
              <button onClick={() => navigate("/payment")} className='font-medium text-sm bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 py-3 my-8 px-8 transition-all duration-300 ease-in-out'>Proceed to Payment</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart;
