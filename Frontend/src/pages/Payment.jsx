import React, { useContext } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/shopContext';

function Payment() {

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex  gap-4 pt-5 sm:pt-14 min-h-[80vh] mt-6 md:mt-10 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-2xl sm:text-3xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 bg-gray-900 rounded py-1.5 px-3.5 w-full' placeholder='First name' />
          <input type="text" className='border border-gray-300 bg-gray-900 rounded py-1.5 px-3.5 w-full' placeholder='Last name' />
        </div>
        
        <input type="email" className='border border-gray-300 bg-gray-900 rounded py-1.5 px-3.5 w-full' placeholder='enter email' />

        <div className='mt-4 min-w-80 text-white text-2xl sm:text-3xl'>
          <CartTotal />
        </div>

        <div className='w-full mt-4 text-center'>
          <button onClick={() => navigate("/orders")} className='font-medium text-sm bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 px-16 py-3 transition-all duration-200 ease-in-out'>Complete Purchase</button>
        </div>
      </div>
      
    </div>
  )
}

export default Payment;
