import axios from 'axios';
import { baseUrl } from './baseUrl';

export const getProductsDetail = async (productId) => {
  const url = `${baseUrl}/api/product/${productId}`;
  return await axios.get(url)
    .then(data => { 
      return data.data;
    })
    .catch((error)=> {
      return null
    });
};
