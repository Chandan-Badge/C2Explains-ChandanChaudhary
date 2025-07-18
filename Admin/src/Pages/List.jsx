import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

function List({ token }) {

  const [list, setList] = useState([]);

  // display the list
  const fetchList = async () => {
    try {
      
      const response = await axios.get(backendUrl + '/api/product/list');
      // console.log(response.data);

      if(response.data.success) {
        setList(response.data.products);
        // console.log(response.data.products);
      }
      else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // remove item
  const removeProduct = async (id) => {
    try {
      
      const response = await axios.post(backendUrl + "/api/product/remove", { id }, { headers:{token}});

      if(response.data.success) {
        toast.success(response.data.message);
        await fetchList();

      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2 font-bold text-2xl'>All Product List</p>
      <div className='flex flex-col gap-2'>

        {/* Product title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] text-sm font-semibold bg-gray-800/50 items-center py-2 px-4 border border-gray-400/80'>
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className='text-center'>Action</p>
        </div>

        {/* Product list */}
        {
          list.map((item, index) => (
            <div key={index} className='min-h-14 grid grid-cols-[1fr_3fr_1fr_1fr_1fr] text-sm font-semibold items-center py-2 px-4 gap-2 border border-gray-400/50'>
              <img src={item.image[0]} className='w-12' alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency} {item.price}</p>
              <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg text-red-800'>X</p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default List;
