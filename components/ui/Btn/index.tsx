import React from 'react';
import styles from './Btn.module.css';


const Btn = ({label, type, size }:
  {label:string, type:string, size?:string}) => {
  return (
    <button type="button" className={` ${type==='success'?'bg-custom-green':'bg-custom-red border-0'} ${size=='sm'?' py-1':' py-2'} font-bold items-center px-4 text-white`}>
      {label}
    </button>
  );
};

export default Btn;
