import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import cart from '../icons/shopping-cart.png';

const CartIcon = () => {
  const actualCartQuantityState = (state) => state.cart.quantity;
  const actualCartQuantity = useSelector(actualCartQuantityState);

  return (
    <div className='flex items-center'>
      {
        actualCartQuantity ? <p className='text-2xl' >{actualCartQuantity}</p> : null
      }
      <img src={cart} alt='shopping cart' className='w-8'/>
    </div>
  );
};

export default CartIcon;