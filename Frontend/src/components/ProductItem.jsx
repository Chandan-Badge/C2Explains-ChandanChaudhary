import { React, useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';


const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className='text-gray-400 cursor-pointer'>
            <div className='overflow-hidden w-32 lg:w-[12vw] h-32 lg:h-[12vw] flex items-center justify-center'>
                <img src={image[0]} alt="" className='hover:scale-110 transition-all ease-in-out' />
            </div>

            <p className='pt-3 pb-1 text-sm text-white'>{name}</p>
            <p className='text-sm font-medium'>{price == 0 ? "Free" : `${currency} ${price}`}</p>
        </Link>
    )
}

export default ProductItem;
