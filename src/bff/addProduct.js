import axios from 'axios';
import { baseUrl } from './baseUrl';

export const addProduct = async (productId, colorCode, storageCode) => {
  const url = `${baseUrl}/api/product/${productId}`;
  return await axios.post(url, {
    id: productId,
    colorCode: colorCode,
    storageCode: storageCode
  })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
};

