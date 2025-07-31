import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from "./Title.jsx";
import ProductItem from './ProductItem.jsx';

function ReletedProducts({category, subCategory}) {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if(products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0, 4));
        }
    }, [products])

  return (
    <div className='flex flex-col bg-[#181e33]/50 border border-[#b6bee5]/50 rounded-lg mt-12 w-[100%] px-8 sm:px-10 py-8 justify-start items-start'>
        <div className='text-xl sm:text-2xl'>
            <Title text1={"Related"} text2={"Product"} />
        </div>

        <div className='flex flex-wrap justify-evenly gap-14 xl:gap-20 gap-y-6 px-2 sm:px-5 mt-2 mb-4'>
            {
                related.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default ReletedProducts;
