import React, { useEffect, useState } from 'react';
import axios from "axios";
import { backendUrl, currency } from "../App.jsx";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

function Orders({ token }) {

  const [orders, setOrders] = useState([]);

  const fetchAllData = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(backendUrl + "/api/orders/list", {}, { headers: { token } });
      console.log(response.data);

      if (response.data.success) {
        setOrders(response.data.orders);

      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [token])

  return (
    <div>
      {/* <p>Orders page</p> */}
      <h3 className='text-3xl font-bold text-[#b6bee5] mb-2'>Order Page</h3>

      <div>
        <div className='grid grid-cols-[3fr_2fr_1fr_1.5fr] text-sm font-semibold bg-gray-800/80 items-center py-2 px-4 border border-gray-400/80'>
          <p className=''>Product</p>
          <p className=''>Product Details</p>
          <p>Price</p>
          <p className='text-center'>Status</p>
        </div>

        {
          orders.map((order, index) => (
            <div key={index} className='grid grid-cols-[3fr_2fr_1fr_1.5fr] items-center mt-2 border border-white/30 py-2 px-4'>
              {/* <img src={assets} alt="" /> */}

              <div>

                <div className='flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-14' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/></svg>

                  <div className='flex flex-col'>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {

                        return <p key={index}> {item.name} x {item.quantity} </p>

                      } else {
                        return <p key={index}> {item.name} x {item.quantity}, </p>
                      }
                    })}
                  </div>
                </div>
                {/* <p> {order.firstName + " " + order.lastName} </p> */}
              </div>

              <div className=''>
                <p className='text-[#b6bee5]'>Items: <span className='text-[#fff]'> {order.items.length} </span> </p>
                <p className='text-[#b6bee5]'>Method: <span className='text-[#fff]'> {order.paymentMethod} </span> </p>
                <p className='text-[#b6bee5]'>Payment: <span className='text-[#fff]'> { order.payment ? "Done" : "Pending"} </span> </p>
                <p className='text-[#b6bee5]'>Date: <span className='text-[#fff]'> {new Date(order.date).toLocaleDateString() } </span> </p>
              </div>

              <p> {currency} {order.amount} </p>

              <div>
                <select className='bg-[#0d1224] border border-gray-500 p-2'>
                  <option value="">- Select -</option>
                  <option value="Payment Successful">Payment Successful</option>
                  <option value="Transaction Failed">Transaction Failed</option>
                </select>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders;
