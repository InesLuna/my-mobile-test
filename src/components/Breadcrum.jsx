import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Breadcrum = (props) => {

  const { generalView, errorView } = props;
  const actualProductState = (state) => state.detailList.actualProduct;
  const actualProduct = useSelector(actualProductState);

  return (
    <div>
      <Link to='/' className='font-roboto cursor-pointer'>Home</Link>
      {
        !generalView ?( 
          <>
            {
              errorView ? <p className='font-roboto cursor-pointer'>Error</p> : (
                <>
                  {
                    actualProduct ? <Link to={`detail/${actualProduct?.id}`} className='font-roboto cursor-pointer'>/{actualProduct?.model}</Link> : null
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