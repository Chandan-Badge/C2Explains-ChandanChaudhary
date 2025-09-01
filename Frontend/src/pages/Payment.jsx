import React, { useContext } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/shopContext';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Payment() {

  const [method, setMethod] = useState('POS');
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.email;

    setFormData(data => ({...data, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      
      let orderItems = [];

      // for(const items in cartItems) {
      //   for(const item in cartItems[items]) {
          
      //     if(cartItems[items][item] > 0) {
      //       const itemInfo = structuredClone(products.find(product => product._id === items));

      //       if(itemInfo) {
      //         itemInfo.quantity = cartItems[items][item];
      //         orderItems.push(itemInfo);
              
      //       }
      //     }
      //   }
      // }

      for (const productId in cartItems) {
        if (cartItems[productId] > 0) {
          const itemInfo = structuredClone(products.find(product => product._id === productId));
          if (itemInfo) {
            itemInfo.quantity = cartItems[productId];
            orderItems.push(itemInfo);
          }
        }
      }

      // console.log(orderItems);

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount()
      }

      // if (!backendUrl || typeof backendUrl !== "string") {
      //   throw new Error("Invalid backendUrl: " + backendUrl);
      // }
      const response = await axios.post(backendUrl + "/api/orders/stripe", orderData, {headers: {token}});
      console.log(response.data);

      if(response.data.success) {
        setCartItems({});
        navigate("/orders");

      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex gap-4 pt-5 sm:pt-14 min-h-[80vh] mt-6 md:mt-10 ml-0 sm:ml-36 md:ml-56 px-4 sm:px-8'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-2xl sm:text-3xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name="firstName" value={formData.firstName} type="text" className='border border-gray-300 bg-gray-900 rounded py-1.5 px-3.5 w-full text-white' placeholder='First name' required />
          <input onChange={onChangeHandler} name="lastName" value={formData.lastName} type="text" className='border border-gray-300 bg-gray-900 rounded py-1.5 px-3.5 w-full text-white' placeholder='Last name' required />
        </div>
        
        <input onChange={onChangeHandler} name="email" value={formData.email} type="email" className='border border-gray-300 bg-gray-900 rounded py-1.5 px-3.5 w-full text-white' placeholder='enter email' required />

        <div className='mt-4 min-w-80 text-white text-2xl sm:text-3xl'>
          <CartTotal />
        </div>

        <div className='w-full mt-4 text-center'>
          <button  type='submit' className='font-medium text-sm bg-gray-800 hover:bg-gray-900 text-white border border-gray-700 px-16 py-3 transition-all duration-200 ease-in-out'>Complete Purchase</button>
        </div>
      </div>
      
    </form>
  )
}

export default Payment;
