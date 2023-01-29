import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Breadcrum = (props) => {

  const { generalView, errorView } = props;
  const actualProductState = (state) => state.detailList.actualProduct;
  const actualProduct = useSelector(actualProductState);

  return (
    <div>
      <Link to='/' className='font-roboto text-xl font-bold cursor-pointer'>Home</Link>
      {
        !generalView ?( 
          <>
            {
              errorView ? <Link to='/' className='font-roboto text-xl font-bold cursor-pointer'><span className='text-amber-500'>/</span>Error</Link> : (
                <>
                  {
                    actualProduct ? <Link to={`detail/${actualProduct?.id}`} className='font-roboto text-xl font-bold cursor-pointer'><span className='text-amber-500'>/</span>{actualProduct?.model}</Link> : null
                  }
                </>
              )
            }
          </>
        ): null
      }
    </div>
  );
};

export default Breadcrum;