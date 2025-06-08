import {React, useEffect, useState, useContext} from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 4));
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className='m-auto text-xs sm:text-sm md:text-base text-gray-300'>Here you can explore our best selling products.</p>

            </div>

            {/* Rendring best products */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 gap-y-6'>
                {
                bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
                }

            </div>
        
        </div>
    )
}

export default BestSeller;
