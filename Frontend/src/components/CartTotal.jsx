import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title';

function CartTotal() {

    const {currency, getCartAmount} = useContext(ShopContext);
    

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal:</p>
          <p>{currency} {getCartAmount()}</p>
        </div>
        <hr />

        <div className='flex justify-between'>
          <p>GST(6%):</p>
          <p>{(getCartAmount() * 0.06)}</p>
        </div>
        <hr />

        <div className='flex justify-between'>
          <p>Total:</p>
          <p>{currency} {getCartAmount() + (getCartAmount() * 0.06)}</p>
        </div>
        <hr />        
      </div>
    </div>
  )
}

export default CartTotal;
