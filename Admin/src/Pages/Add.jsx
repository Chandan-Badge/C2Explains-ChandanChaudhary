import React from 'react';
import { assets } from '../assets/assets.js';

function Add() {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <h1 className='text-4xl mb-4 font-bold'>Add Product</h1>
      <div>
        <p className='font-medium mb-2'>Upload Image</p>

        <div className='flex gap-5'>
          <label htmlFor="image1">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-14' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
            <input type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-14' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
            <input type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-14' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
            <input type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-14' viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div>
        <p>Product name:</p>
        <input type="text" placeholder='type here' />
      </div>

    </form>
  )
}

export default Add;
