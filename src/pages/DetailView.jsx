import React, { useState, useEffect } from 'react';
import { detailIdsAdd, detailAdd, detailReplace } from '../reducer/detailSlice';
import { Link } from "react-router-dom";
import { getProductDetails } from '../bff/getProductDetails';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Breadcrum from '../components/Breadcrum';
import Description from '../components/Description';
import AddButton from '../components/AddButton';
import Selector from '../components/Selector';


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
  const [ selectedStorage, setSelectedStorage ] = useState(null);

  const dataDetails = async (num) => {
    const data = await getProductDetails(num);
    if(data) {
      console.log(data.options, 'data')
      dispatch(detailAdd(data));
      dispatch(detailIdsAdd(actualProductId));
      setProductInfo(data);
      setSelectedColor(data.options.colors[0]);
      setSelectedStorage(data.options.storages[0]);
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
          <section className='flex justify-center p-6 items-center'>
            <img src={productInfo.imgUrl} alt={productInfo.model} className='mr-16 h-fit'/>
            <div>
              <Description productInfo={productInfo} />
              <div className='flex items-center'>
                <Selector selectedItem={selectedColor} setSelectedItem={setSelectedColor} list={productInfo.options.colors} label='Elige un color:' marginRight='mr-10'/>
                <Selector selectedItem={selectedStorage} setSelectedItem={setSelectedStorage} list={productInfo.options.storages} label='Elige el almacenamiento:' />
              </div>
              <AddButton/>
            </div>
          </section>
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
