import React from 'react';

const ItemCard = (props) => {
  const { product } = props;
  return (
    <div>
      <img src={product.imgUrl} alt={product.model} />
      <p>{product.model}</p>
      <p>{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ItemCard;
