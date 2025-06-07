import {React, useContext} from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';


const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className='text-gray-400 cursor-pointer'>
            <div className='overflow-hidden w-36 md:w-56 h-36 md:h-56 flex items-center'>
                <img src={image[0]} alt="" className='hover:scale-110 transition-all ease-in-out' />
            </div>

            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}

export default ProductItem;
