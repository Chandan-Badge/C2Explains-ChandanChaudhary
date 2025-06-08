import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title';
import { ShopContext } from '../context/shopContext';
import ProductItem from '../components/ProductItem';

function Collection() {

    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);

    const [filterProducts, setfilterProducts] = useState([]);

    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
      setfilterProducts(products);
    })

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mt-16 text-[#fff] pl-64'>

      {/* Filter option */}
      <div className='min-w-40'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 font-bold'>FILTER</p>
        {/* Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-start font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-300'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"All"} /> All
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Button"} /> Button
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Card"} /> Card
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Loaders"} /> Loaders
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Radio_Buttons"} /> Radio Buttons
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Checkbox"} /> Checkbox
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Input"} /> Input
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Switch"} /> Switch
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Form"} /> Form
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Tooltip"} /> Tooltip
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Background"} /> Background
            </p>

          </div>

        </div>

        {/* Sub-Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-start font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-300'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Button"} /> Paid
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Card"} /> Free
            </p>

          </div>
        </div>
      </div>
      
      {/* Products */}
      <div className='flex-1 pr-8'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* Product sort */}
          <select className='border-2 border-gray-500 text-gray-200 text-sm px-2 bg-transparent'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* All Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 my-12'>

          {
            filterProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }

        </div>

      </div>
    </div>
  )
}

export default Collection;
