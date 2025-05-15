import React from 'react';
import styles from './ProgressItem.module.css';


const ProgressItem = ({label, number}:{label:string, number:string}) => {
  return (
    <>
      <span className="flex items-center text-white justify-center w-10 h-10 bg-gray-400 rounded-full lg:h-12 lg:w-12 shrink-0 client-active">
        <h4>
          {number}
        </h4>
      </span>
      <h3 className="leading-tight client-active-txt font-bold">{label}</h3>
    </>
  );
};

export default ProgressItem;
