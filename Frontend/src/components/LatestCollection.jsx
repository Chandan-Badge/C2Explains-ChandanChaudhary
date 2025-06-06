import React, { useContext } from 'react';
import { ShopContext } from '../contex/shopContext';
import Title from './Title';

function LatestCollection() {

  const { products } = useContext(ShopContext);

  // const [latest]

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'></div>
      <Title text1={"LATEST"} text2={"COLLECTIONS"} />

      <p className='text-center m-auto text-xs sm:text-sm md:text-base text-gray-200'>
        Here you can explore our latest products.
      </p>
    </div>
  )
}

export default LatestCollection;
