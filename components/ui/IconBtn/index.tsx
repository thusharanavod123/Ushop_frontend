import React from 'react';
import styles from './IconBtn.module.css';


const IconBtn = ({label, iconName}:{label:string, iconName:string}) => {
  return (
    <button className='w-auto px-4 py-2 rounded-md bg-custom-green text-white font-bold mt-2'><i className={`fa-solid ${iconName}`}></i> {label}</button>
  );
};

export default IconBtn;
