import React, { useState } from 'react';
import { assets } from '../assets/assets.js';
import axios from "axios";
import { backendUrl } from "../App.jsx";
import { toast } from 'react-toastify';

function Add({token}) {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Button");
  const [subCategory, setSubCategory] = useState("Frontend");
  const [type, setType] = useState("Free");
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("type", type);
      formData.append("bestSeller", bestSeller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers: {token}});
      // console.log(response.data);

      if(response.data.success) {
        toast.success(response.data.message);

        setName("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

        setPrice("");
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4'>
      <h1 className='text-4xl mb-2 font-bold text-[#c586a5]'>Add Product</h1>
      <div>
        <p className='font-medium mb-2'>Upload Image</p>

        <div className='flex gap-5'>
          <label htmlFor="image1">
            <img src={!image1 ? assets.uploadFile : URL.createObjectURL(image1)} className='w-14' alt="" />
            {/* <svg xmlns="http://www.w3.org/2000/svg" className='w-14' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg> */}
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img src={!image2 ? assets.uploadFile : URL.createObjectURL(image2)} className='w-14' alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img src={!image3 ? assets.uploadFile : URL.createObjectURL(image3)} className='w-14' alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img src={!image4 ? assets.uploadFile : URL.createObjectURL(image4)} className='w-14' alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name:</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='rounded w-[500px] px-3 py-2 bg-gray-900 border border-gray-500  focus-within:outline-[#c586a5]' type="text" placeholder='type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description:</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='rounded w-[500px] px-3 py-2 bg-gray-900 border border-gray-500 focus-within:outline-[#c586a5]' rows={4} type="text" placeholder='write about content here' required ></textarea>
      </div>

      <div className='flex gap-3 sm:gap-10 w-full flex-col md:flex-row'>

        <div className=''>
          <p className='mb-2'>Product category:</p>
          <select name="" id="" onChange={(e) => setCategory(e.target.value)} className='bg-gray-900 border border-gray-500 rounded w-32 px-2 py-2'>
            <option value="">Button</option>
            <option value="">Card</option>
            <option value="">Loader</option>
            <option value="">Radio Button</option>
            <option value="">Checkbox</option>
            <option value="">Input</option>
            <option value="">Switch</option>
            <option value="">Form</option>
            <option value="">Tooltip</option>
            <option value="">Background</option>
          </select>
        </div>

        <div className=''>
          <p className='mb-2'>Sub category:</p>
          <select name="" id="" onChange={(e) => setSubCategory(e.target.value)} className='bg-gray-900 border border-gray-500 rounded w-32 px-2 py-2'>
            <option value="">Frontend</option>
            <option value="">Backend</option>
          </select>
        </div>

        <div className=''>
          <p className='mb-2'>Product type:</p>
          <select name="" id="" onChange={(e) => setType(e.target.value)} className='bg-gray-900 border border-gray-500 rounded w-32 px-2 py-2'>
            <option value="">Free</option>
            <option value="">Paid</option>
          </select>
        </div>

        <div className=''>
          <p className='mb-2'>Product Price:</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='rounded px-3 py-2 bg-gray-900 border border-gray-500  focus-within:outline-[#c586a5]' type="number" placeholder='enter amount' required />
        </div>

      </div>

      <div className='w-full flex gap-2 mt-2'>
        <input onChange={(e) => setBestSeller(prev => !prev)} checked={bestSeller} className='' type="checkbox" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">Add to best seller</label>
      </div>

      <button type="submit" className='font-medium text-sm sm:text-base bg-gray-800 hover:bg-gray-900 border border-gray-700 py-3 px-20 mt-4 transition-all duration-300 ease-in-out'>ADD</button>
    </form>
  )
}

export default Add;
