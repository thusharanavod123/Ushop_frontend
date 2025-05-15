import React from 'react';
import styles from './MenuItem.module.css';


const MenuItem = ({ type, link, label }: {
  type: string, link: string, label: string
}) => {
  return (
    <a href={link} className={`${type == 'hamburger' ? 'block' : ''} text-gray-700 hover:text-green-600 px-3 py-2 text-base font-bold`}>{label}</a>
  );
};

export default MenuItem;
