import React from 'react';
import Icon from './Icon';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <div className='shadow-xl flex justify-between py-5 px-10'>
      <Icon/>
      <CartIcon/>
    </div>
  );
};

export default Header;
