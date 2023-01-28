import axios from 'axios';
import { baseUrl } from './baseUrl';

export const getProductsList = async () => {
  const url = `${baseUrl}/api/product`;
  return await axios.get(url)
    .then(data => { 
      return data.data;
    })
    .catch((error)=> {
      return null
    });
};
