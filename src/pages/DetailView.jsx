import React, { useState, useEffect } from 'react';
import { detailIdsAdd, detailAdd, detailReplace } from '../reducer/detailSlice';
import { Link } from "react-router-dom";
import { getProductDetails } from '../bff/getProductDetails';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Breadcrum from '../components/Breadcrum';
import Description from '../components/Description';
import ColorSelector from '../components/ColorSelector';


const DetailView = () => {
  const dispatch = useDispatch();
  const actualProductIdState = (state) => state.detailList.actualId;
  const actualProductId = useSelector(actualProductIdState);
  const actualProductIdsListState = (state) => state.detailList.detailIds;
  const productIdsList = useSelector(actualProductIdsListState);
  const actualProductDetailsListState = (state) => state.detailList.detailIds;
  const productDetailsList = useSelector(actualProductDetailsListState);
  const [ productInfo, setProductInfo ] = useState(null);
  const [ selectedColor, setSelectedColor ] = useState(null);

  const dataDetails = async (num) => {
    const data = await getProductDetails(num);
    if(data) {
      console.log(data.options.colors, 'data')
      dispatch(detailAdd(data));
      dispatch(detailIdsAdd(actualProductId));
      setProductInfo(data);
      setSelectedColor(data.options.colors[0]);
    }
  };

  useEffect(()=>{
    // dataDetails(actualProductId)
    if(productIdsList.includes(actualProductId)){ 
      const aux = productDetailsList.filter((o) => o.id === `${actualProductId}`);
      const auxDate = Number(Date());
      if(aux.timestamp - auxDate !== 86400000) {
        setProductInfo(aux[0]);
      } else {
        dispatch(detailReplace(aux[0]));
      }
        
    } else {
      dataDetails(actualProductId)
    }  
  }, [actualProductId]);

  return (
    <div className='bg-stone-100 min-h-screen'>
      <Header/>
      <div>
        <Breadcrum/>
      </div>
      {
        productInfo ? (
          <div className='flex justify-center p-6'>
            <img src={productInfo.imgUrl} alt={productInfo.model} className='m-16'/>
            <Description productInfo={productInfo} />
            <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} colorList={productInfo.options.colors} />
          </div>
        ) : (
          <div>
            Parece que ha habido un error, vuelve a <Link to='/'>la página principal</Link>
          </div>
        )
      }
      
    </div>
  );
};

export default DetailView;
