import React from 'react';

const GoTopButton = (props) => {
  const { showButton } = props;
      
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button 
      onClick={(e) =>{
        e.preventDefault();
        handleClick();
      }}
      className={`bg-amber-500 rounded-full w-20 h-20 text-stone-900 font-black ${showButton} fixed bottom-10 right-10`}
    >
      Go Top!
    </button>
  );
};

export default GoTopButton;
