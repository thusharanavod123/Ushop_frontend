import React from 'react';
import styles from './SortItem.module.css';


const SortItem = ({name}:{name:string}) => {
  return (
    <li>
      <a href="#" className="hover:text-white block px-4 py-2 brder-btn dark:hover:bg-gray-600 dark:hover:text-white">{name}</a>
    </li>
  );
};

export default SortItem;
