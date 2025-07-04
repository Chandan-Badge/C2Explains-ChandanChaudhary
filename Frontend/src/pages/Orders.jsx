import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';

function Orders() {

  const {products, currency} = useContext(ShopContext);

  return (
    <div className='min-h-[80vh] mt-20 md:mt-24 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8'>
      
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-b text-gray-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-4 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                  <p className='text-base sm:text-lg font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-300'>
                    <p className='text-base'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                  </div>

                  <p className='mt-2'>Data: <span className='text-gray-400'>04/06/2025</span></p>
                </div>
              </div>

              <div>
                <button className='text-sm bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 border border-gray-500 transition-all duration-200 ease-in-out'>View Details</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders;
