import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

function List() {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      
      const response = await axios.get(backendUrl + '/api/product/list');
      console.log(response.data);

      if(response.data.success) {
        setList(response.data.products);
      }
      else {
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
    <div>
      <p className='mb-2 font-bold text-2xl'>All Product List</p>
      <div className='flex flex-col gap-2'>

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] text-sm font-semibold bg-gray-800/50 items-center py-2 px-4 border border-gray-400'>
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

      </div>
    </div>
  )
}

export default List;
