import React, { useState, useEffect } from 'react';
import { getProductsList } from '../bff/getProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { listAdd } from '../reducer/listSlice';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import GoTopButton from '../components/GoTopButton';
import Breadcrum from '../components/Breadcrum';
import SearchInput from '../components/SearchInput';

const GeneralView = () => {

  const dispatch = useDispatch();
  const productiListSelector = (state) => state.list.value;
  const productList = useSelector(productiListSelector);

  const [ filterProductList, setFilterProductList ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ showButton, setShowButton ] = useState(false);

  const dataList = async () => {
    await getProductsList().then((data) => {
      dispatch(listAdd([...data]));
    });
  };

  useEffect(()=> {
    if(productList.length <= 0 ) dataList();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  useEffect(()=> {
    setFilterProductList(filterList(inputValue));
  }, [productList, inputValue]);

  const filterList = (text) => {
    let list = productList;
    const lowerText = text.toLowerCase();
    if (lowerText !== '') {
      list = productList.filter((p) => {
        return p.model.toLowerCase().includes(lowerText) || p.brand.toLowerCase().includes(lowerText);
      });
    }
    return list;
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 1000) {
      setShowButton('block');
    } else {
      setShowButton('hidden');
    }
  };


  return ( 
    <div className='bg-stone-50 min-h-screen'>
      <Header generalView handleChange={handleChange}/>
      
      <div className='flex flex-wrap justify-center px-6 md:px-16'>
        {
          filterProductList.map((p) =>  <ItemCard key={p.id} product={p} /> )
        }
      </div>
      
      {
        showButton ? <GoTopButton showButton={showButton}/> : null
      }
    </div>
  )
};

export default GeneralView;
