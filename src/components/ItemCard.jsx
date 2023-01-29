import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { detailSetActualId } from '../reducer/detailSlice';

const ItemCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(detailSetActualId(product.id));
  };

  return (
    <Link to={`detail/${product.id}`} className='bg-white rounded-lg p-6 md:p-10 mx-3 my-3 md:my-8 w-64 flex flex-col' onClick={()=>handleClick()}>
      <img src={product.imgUrl} alt={product.model} />
      <p className='font-roboto font-bold text-xl text-stone-900 mt-6'>{product.model}</p>
      <p className='font-roboto text-lg text-stone-800 mt-3'>{product.brand}</p>
      <p className='font-roboto text-lg text-teal-800'><span className='font-bold'>Price:</span> {product.price}€</p>
    </Link>
  );
};

export default ItemCard;
