import axios from 'axios';
import { baseUrl } from './baseUrl';

export const addProduct = async (product) => {
  const url = `${baseUrl}/api/cart`;
 
  return await axios.post(url, product)
    .then((response) => {
      return response
    }, (error) => {
      console.log(error);
    });
};

