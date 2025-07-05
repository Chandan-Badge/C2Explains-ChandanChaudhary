import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-2xl sm:text-4xl'>
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />

        <p className='text-center m-auto text-xs sm:text-sm md:text-base text-gray-200'>
          Here you can explore our latest products.
        </p>
      </div>

      {/* Rendring products */}
      <div className='flex flex-wrap justify-evenly gap-14 gap-y-6 px-10 sm:px-20 md:px-28'>
        {
          latestProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }

      </div>
    </div>
  )
}

export default LatestCollection;
