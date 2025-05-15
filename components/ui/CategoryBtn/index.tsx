import React from 'react';
import styles from './CategoryBtn.module.css';


const CategoryBtn = ({label, status}:{label:string, status:string}) => {
  return (
    <button type="button" className={` ${status==='active'?'bg-custom-green-cat text-white':'bg-custom-green-cat-border'} text-sm font-normal items-center py-1.5 px-4`}>
      {label}
    </button>
  );
};

export default CategoryBtn;
