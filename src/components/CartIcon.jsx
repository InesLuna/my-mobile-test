import React, { useState, useEffect } from 'react';
import cart from '../icons/shopping-cart.png';

const CartIcon = () => {

  return (
    <div className='flex items-center'>
      <p className='text-2xl' >XX</p>
      <img src={cart} alt='shopping cart' className='w-8'/>
    </div>
  );
};

export default CartIcon;