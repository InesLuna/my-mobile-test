import React from 'react';
import { Link } from "react-router-dom";


const Icon = () => {
  return (
    <Link to='/' className='font-roboto text-2xl text-stone-800'>my<span className='font-anton text-stone-800 text-4xl'>M</span><span className='font-anton text-4xl text-amber-400'>t</span></Link>
  );
};

export default Icon;
