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
      <h3 className='text-4xl font-bold'>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (
            <div key={index} className='flex justify-between mt-10'>
              {/* <img src={assets} alt="" /> */}

              <div>

                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {

                      return <p key={index}> {item.name} x {item.quantity} </p>

                    } else {
                      return <p key={index}> {item.name} x {item.quantity}, </p>
                    }
                  })}
                </div>
                {/* <p> {order.firstName + " " + order.lastName} </p> */}
              </div>

              <div>
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: { order.payment ? "Done" : "Pending"}</p>
                <p>Date: {new Date(order.date).toLocaleDateString() }</p>
              </div>

              <p> {currency} {order.amount} </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders;
