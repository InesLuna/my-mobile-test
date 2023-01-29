import React, { useState, useEffect } from 'react';
import { detailIdsAdd, detailAdd, loadingSet, detailSetActualProduct } from '../reducer/detailSlice';
import { Link } from "react-router-dom";
import { getProductDetails } from '../bff/getProductDetails';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
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
  const actualProductState = (state) => state.detailList.actualProduct;
  const actualProduct = useSelector(actualProductState);
  const actualLoadingState = (state) => state.detailList.loading;
  const loading = useSelector(actualLoadingState);
  const [ selectedColor, setSelectedColor ] = useState(null);
  const [ selectedStorage, setSelectedStorage ] = useState(null);

  const dataDetails = async (num) => {
    dispatch(loadingSet(true));
    const data = await getProductDetails(num);
    if(data) {
      dispatch(loadingSet(false));
      dispatch(detailAdd(data));
      dispatch(detailIdsAdd(num));
      dispatch(detailSetActualProduct(data));
      setSelectedColor(data.options.colors[0]);
      setSelectedStorage(data.options.storages[0]);
    }
  };

  useEffect(()=>{
    if(productIdsList.includes(actualProductId)){ 
      const aux = productDetailsList.filter((p) => p.id === `${actualProductId}`);
      dispatch(detailSetActualProduct(aux[0]));    
    } else {
      dataDetails(actualProductId)
    }  
  }, [actualProductId]);

  return (

    <div className='bg-stone-50 min-h-screen'>
      <Header detailView />
      {
        loading ? <Loading/> : (
          <>
            { actualProduct ? (
              <section className='flex flex-col md:flex-row justify-center p-6 items-center pb-10'>
                <img src={actualProduct.imgUrl} alt={actualProduct.model} className='md:mr-16 h-fit'/>
                <div>
                  <Description productInfo={actualProduct} />
                  <div className='flex flex-col md:flex-row md:items-center'>
                    <Selector selectedItem={selectedColor} setSelectedItem={setSelectedColor} list={actualProduct?.options.colors} label='Elige un color:' marginRight='mr-10'/>
                    <Selector selectedItem={selectedStorage} setSelectedItem={setSelectedStorage} list={actualProduct?.options.storages} label='Elige el almacenamiento:' />
                  </div>
                  <AddButton/>
                </div>
              </section>
            ) : (
              <div className='flex flex-col md:flex-row justify-center p-6 items-center pb-10'>
                Parece que ha habido un error, vuelve a <Link to='/'>la página principal</Link>
              </div>
            )}
          </>
        )
      } 
    </div>
  );
};

export default DetailView;
