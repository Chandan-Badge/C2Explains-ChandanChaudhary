import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const verifyPayment = async () => {
        try {

            if(!token) {
                return null;
            }

            const response = await axios.post(backendUrl + "/api/order/verifystripe", {}, {headers: {token}});
        } catch (error) {
            
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [token]);

  return (
    <div>
      
    </div>
  )
}

export default Verify
