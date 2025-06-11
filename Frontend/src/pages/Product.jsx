import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

function Product() {

  const { productId } = useParams();
  // console.log(productId);
  
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId) {
        setProductData(item);
        // console.log(item);

        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='mt-28 w-full flex justify-end px-24 text-[#fff]'>
      <div className='w-[85%] bg-[#181e33] flex flex-col border border-[#b6bee5]/50 rounded-lg'>
        <div className='flex justify-start items-start gap-10 h-[90vh] px-10 py-16'>

          {/* Product Image */}
          <div className='h-[90%] w-[45%] bg-[#0d1224] rounded-xl flex justify-center items-center'>
            <img src={image} alt="" />
          </div>

          {/* Product Info */}
          <div className='h-[80%] w-[50%] flex flex-col gap-3 pr-5'>
            <h1 className='text-5xl font-bold'>{productData.name}</h1>
            <p className='text-base font-normal text-[#b6bee5]'>{productData.description}</p>
            <h2 className='text-2xl font-medium'>Price: ₹{productData.price} <span className='text-[#6b7280] text-xl'>(Free)</span></h2>
          </div>

        </div>

        {/* Related Product */}
        <div className='flex'>

        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;