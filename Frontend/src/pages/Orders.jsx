import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext.jsx';
import Title from '../components/Title.jsx';
import axios from 'axios';

function Orders() {

  const {backendUrl, token, currency} = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {

      if(!token) {
        return null;
      }

        const response = await axios.post(backendUrl + "/api/orders/userorders", {}, {headers: {token}});
        // console.log(response.data);
        
        if(response.data.success) {
          let allOrdersItem = [];

          response.data.orders.map((order) => {
            order.items.map((item) => {
              item['status'] = order.status
              item['payment'] = order.payment
              item['paymentMethod'] = order.paymentMethod
              item['date'] = order.date
              allOrdersItem.push(item);
            })
          })

          setOrderData(allOrdersItem.reverse());
          
        }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    loadOrderData();
  }, [token])

  return (
    <div className='min-h-[80vh] mt-24 md:mt-24 ml-0 sm:ml-40 md:ml-48 px-6 sm:px-8'>
      
      <div className='text-2xl sm:text-3xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-b text-gray-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-center gap-4 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                  <p className='text-base sm:text-lg font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-sm text-gray-300'>
                    <p className=''>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                  </div>

                  <p className='mt-2'>Data: <span className='text-gray-400'>04/06/2025</span></p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <span className='min-w-2 h-2 rounded-full bg-green-500'></span>
                <p className='text-sm md:text-base'>Success</p>
              </div>

              <button className='w-max font-medium text-sm bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 px-8 py-3 transition-all duration-200 ease-in-out'>View Details</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders;
