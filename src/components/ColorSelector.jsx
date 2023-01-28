import React from 'react';

const ColorSelector = (props) => {
  const { colorList, selectedColor, setSelectedColor } = props;

  return (
    <div>
      <p className='font-bold'>Elige un color:</p>
      <div className='flex mt-2'>
        {
          colorList.map((c, i) => {
            let bgColor = 'bg-white';
            if(c.name === selectedColor.name) bgColor = 'bg-amber-300'
            return(
              <div key={`${c.code}-00${i}`} className={`py-2 px-4 rounded-lg mr-2 cursor-pointer ${bgColor}`} onClick={(e)=>{setSelectedColor(c);}}>
                <p className='font-bold font-roboto text-stone-900'>{c.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ColorSelector;