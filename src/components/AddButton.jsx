import React from 'react';

const AddButton = () => {
  return (
    <div className='md:w-fit py-2 px-4 rounded-lg mr-2 cursor-pointer bg-teal-500 border-2 border-transparent hover:border-2 hover:border-stone-900 text-center' onClick={(e)=>{console.log(e);}}>
      <p className='font-bold font-roboto text-stone-900'>Añadir al carrito</p>
    </div>
  );
};

export default AddButton;
