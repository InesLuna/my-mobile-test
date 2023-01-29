import React from 'react';
import Icon from './Icon';
import CartIcon from './CartIcon';
import Breadcrum from './Breadcrum';
import SearchInput from './SearchInput';

const Header = (props) => {
  const { generalView, handleChange } = props;
  return (
    <>
      <div className='shadow-xl flex justify-between py-5 px-6 md:px-10 bg-white'>
        <Icon/>
        <CartIcon/>
      </div>
      <div className='flex flex-wrap items-center justify-between p-6 md:p-16'>
        <Breadcrum generalView/>
        {
          generalView ? <SearchInput handleChange={handleChange}/> : null
        }
        
      </div>
    </>
    
  );
};

export default Header;
