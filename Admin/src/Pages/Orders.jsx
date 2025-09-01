import React, { useEffect, useState } from 'react';
import axios from "axios";
import { backendUrl } from "../App.jsx";
import { toast } from 'react-toastify';

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
      
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [token])

  return (
    <div>
      <p>Orders page</p>
    </div>
  )
}

export default Orders;
