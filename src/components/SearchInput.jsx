import React from 'react';
import magnifying from '../../public/icons/magnifying.png'

export const SearchInput = (props) => {

  const { handleChange } = props;

  return (
    <div className='flex justify-end items-end md:pr-20 pt-6'>
      <div className="flex flex-nowrap border-2 border-slate-300 w-52 rounded-lg ">
        <input 
          className=" placeholder:text-black block bg-white w-full  py-2 pl-2 pr-3 shadow-sm focus:outline-none sm:text-sm" 
          placeholder="Search" 
          type="text" 
          name="search"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="w-10 min-h-full flex items-center justify-center  cursor-pointer border-slate-300 border-l-2 m-2 ">
          <img src={magnifying} alt='magnifier' className='h-5' />
        </div>
      </div>
    </div>
  );
};
