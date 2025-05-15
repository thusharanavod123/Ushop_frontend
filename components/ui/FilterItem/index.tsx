import React from 'react';
import styles from './FilterItem.module.css';


const FilterItem = ({label, id}:{
  label:string, id:string
}) => {
  return (
    <li className='ml-6'>
      <div className="flex items-center">
        <input id={id} type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label htmlFor={id} className="ms-2 text-sm text-gray-900 dark:text-gray-300">{label}</label>
      </div>
    </li>
  );
};

export default FilterItem;
