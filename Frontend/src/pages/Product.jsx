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
    <div>
      <img src={image} alt="" className='w-40 mt-32 ml-80' />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;
