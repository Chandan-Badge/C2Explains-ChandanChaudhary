import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';

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
    }, [])

  return (
    <div className='flex bg-[#181e33]/50 border border-[#b6bee5]/50 rounded-lg mt-12 w-[100%] px-12 py-4 justify-center'>
        <h1 className='text-3xl font-bold'>Related Products</h1>
    </div>
  )
}

export default ReletedProducts;
