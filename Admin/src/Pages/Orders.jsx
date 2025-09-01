import React, { useEffect, useState } from 'react';
import axios from "axios";
import { backendUrl } from "../App.jsx";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

function Orders({ token }) {

  const [orders, setOrders] = useState([]);

  const fetchAllData = async () => {
    if(!token) {
      return null;
    }

    try {
      const response = await axios.post(backendUrl + "/api/orders/list", {}, {headers: {token}});
      // console.log(response.data);

      if(response.data.success) {
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
      <h3>Order Page1</h3>
      <div>
        {
          orders.map((order, index) => {
            <div key={index}>
              {/* <img src={assets} alt="" /> */}
              <div>
                {order.items.map((item, index) => {
                  if(index === order.items.length - 1) {

                    return <p key={index}> {item.name} x {item.quantity} </p>

                  } else {
                    return <p key={index}> {item.name} x {item.quantity}, </p>
                  }
                })}
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Orders;
