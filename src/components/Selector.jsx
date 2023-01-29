import React from 'react'

const Selector = (props) => {
  const { list, selectedItem, setSelectedItem, label, marginRight } = props;

  return (
    <div className={`${marginRight} mb-6`} >
      <p className='font-bold'>{label}</p>
      <div className='flex mt-2'>
        {
          list.map((c, i) => {
            let bgColor = 'bg-white';
            if(c.name === selectedItem.name) bgColor = 'bg-amber-300'
            return(
              <div key={`${c.code}-00${i}`} className={`py-2 px-4 rounded-lg mr-2 cursor-pointer ${bgColor} border-2 border-transparent hover:border-2 hover:border-amber-300`} onClick={(e)=>{setSelectedItem(c);}}>
                <p className='font-bold font-roboto text-stone-900'>{c.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Selector;
