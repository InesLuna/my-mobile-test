import React, { useState, useEffect } from 'react';
import { getProductsList } from '../bff/getProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { listAdd } from '../reducer/listSlice';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';

const GeneralView = () => {

  const dispatch = useDispatch();
  const productiListSelector = (state) => state.list.value;
  const productList = useSelector(productiListSelector);

  const [ filterProductList, setFilterProductList ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');

  const dataList = async () => {
    await getProductsList().then((data) => {
      dispatch(listAdd([...data]));
    });
  };

  useEffect(()=> {
    dataList();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  useEffect(()=> {
    setFilterProductList(filterList(inputValue));
    console.log(productList);
  }, [productList, inputValue]);

  const filterList = (text) => {
    let list = productList;
    if (text !== '') {
      list = productList.filter((p) => {
        return p.model.includes(text) || p.brand.includes(text);
      });
    }
    return list;
  };

  const handleChange = (e) => {
    //setInputValue(e.target.value);
  };
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
  
    if (scrollTop + clientHeight >= scrollHeight) {
      //dispatch(increment(count));
    }

    if (scrollTop > 1000) {
      //setShowButton('block');
    } else {
      //setShowButton('hidden');
    }
  };


  return ( 
    <div className=''>
      <Header/>
      {
        filterProductList.map((p) =>  <ItemCard key={p.id} product={p} /> )
      }
    </div>
  )
};

export default GeneralView;
