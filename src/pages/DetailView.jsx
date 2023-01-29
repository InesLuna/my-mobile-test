import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { detailIdsAdd, detailAdd, loadingSet, detailSetActualProduct } from '../reducer/detailSlice';
import { cartAdd, cartCounter } from '../reducer/cartSlice';
import { getProductDetails } from '../bff/getProductDetails';
import { addProduct } from '../bff/addProduct';
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
  const actualProductDetailsListState = (state) => state.detailList.detailList;
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
      dispatch(detailSetActualProduct(data));
      dispatch(detailIdsAdd(data.id));
      setSelectedColor(data.options.colors[0]);
      setSelectedStorage(data.options.storages[0]);
    }
  };

  useEffect(()=>{
    if(productIdsList.includes(actualProductId)){ 
      const aux = productDetailsList.filter((p) => p.id === `${actualProductId}`);
      console.log(aux)
      dispatch(detailSetActualProduct(aux[0]));    
    } else {
      dataDetails(actualProductId)
    }  
  }, [actualProductId]);

  const handleClick = async (e) => {
    e.preventDefault();
    const aux = {
      id: actualProduct.id,
      colorCode: selectedColor.code,
      storageCode: selectedStorage.code
    };
    const productQuantity = await addProduct(aux);
    if(productQuantity) {
      dispatch(cartAdd(JSON.stringify(productQuantity)));
    }
    dispatch(cartCounter());
  }

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
                  {
                    selectedColor && selectedStorage ? (
                      <div className='flex flex-col md:flex-row md:items-center'>
                        <Selector selectedItem={selectedColor} setSelectedItem={setSelectedColor} list={actualProduct?.options.colors} label='Elige un color:' marginRight='mr-10'/>
                        <Selector selectedItem={selectedStorage} setSelectedItem={setSelectedStorage} list={actualProduct?.options.storages} label='Elige el almacenamiento:' />
                      </div>
                    ) : null
                  }
                  <AddButton handleClick={handleClick}/>
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
