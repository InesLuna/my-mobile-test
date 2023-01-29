import React from 'react';
import magnifying from '../icons/magnifying.png'

const SearchInput = (props) => {

  const { handleChange } = props;

  return (
    <div className='flex justify-end items-end pt-6 '>
      <div className="flex flex-nowrapw-52 rounded-lg bg-white ">
        <input 
          className=" placeholder:text-black block w-full bg-white py-2 pl-2 pr-3 shadow-sm focus:outline-none sm:text-sm rounded-lg" 
          placeholder="Search" 
          type="text" 
          name="search"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="w-10 min-h-full flex items-center justify-center  cursor-pointer border-l-2 m-2 ">
          <img src={magnifying} alt='magnifier' className='h-5' />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
