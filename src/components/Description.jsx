import React from 'react';

const LiItem = (props) => {
  const { label, info } = props;
  return(
    <li className='font-roboto text-stone-800'><span className='font-bold'>{label}</span>{info} </li>
  );
};

const Description = (props) => {
  const { productInfo } = props;

  const camarasInfo = (productInfo) => {
    let primaryCameraString = '';
    let secondaryCameraString = '';

    if(productInfo.primaryCamera) {
      if(typeof productInfo.primaryCamera === 'string') {
        primaryCameraString = productInfo.primaryCamera;
      } else {
        primaryCameraString = productInfo.primaryCamera.join(', ');
      }
    }

    if(productInfo.secondaryCmera) {
      if(typeof productInfo.secondaryCmera === 'string') {
        secondaryCameraString = productInfo.secondaryCmera;
      } else {
        secondaryCameraString = productInfo.secondaryCmera.join(', ');
      }
    }

    return `Cámara principal con ${primaryCameraString}. Cámara secundaria con ${secondaryCameraString}`
  };

  return (
    <div className='pb-6'>
      <p className='font-roboto font-bold text-4xl text-amber-400 mt-10 md:mt-0'>{productInfo.model}</p>
      <p className='font-roboto text-lg font-bold text-stone-800 mt-1 mb-5'>{productInfo.brand}</p>
      <ul className='pb-3'>
        <LiItem label='Sistema operativo: ' info={productInfo.os} />
        <LiItem label='RAM: ' info={productInfo.ram} />
        <LiItem label='CPU: ' info={productInfo.cpu} />
        <LiItem label='Bateria: ' info={productInfo.battery} />
        <LiItem label='Camaras: ' info={camarasInfo(productInfo)} />
        <LiItem label='Resolución de pantalla: ' info={productInfo.displayResolution} />
        <LiItem label='Dimensiones: ' info={productInfo.dimentions} />
        <LiItem label='Peso: ' info={productInfo.weight} />
      </ul>
      <p className='font-roboto text-2xl text-stone-800 font-bold'>Precio: <span className='text-teal-600'>{productInfo.price}€</span> </p>
    </div>
  );
};

export default Description;
