import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Breadcrum = (props) => {

  const { generalView } = props;
  const actualProductState = (state) => state.detailList.actualProduct;
  const actualProduct = useSelector(actualProductState);

  useEffect(()=> {
    console.log(actualProduct, 'actualPoduct')
  }, []);

  return (
    <div>
      <Link to='/' className='font-roboto cursor-pointer'>Home</Link>
      {
        !generalView ? <Link to={`detail/${actualProduct.id}`} className='font-roboto cursor-pointer'>/{actualProduct.model}</Link> : null
      }
      
    </div>
  )
}

export default Breadcrum