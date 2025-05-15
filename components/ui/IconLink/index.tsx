import React from 'react';
import styles from './IconLink.module.css';


const IconLink = ({link, label, iconName, isRounded=true}:{link:string, label:string, iconName:string, isRounded:boolean}) => {
  return (
    <a href={link} className={`rounded-md bg-custom-green font-bold items-center px-4 py-2 ${isRounded?' ':'rounded-r-none'} text-white`}>
      <i className={`fa-solid ${iconName}`}></i> {label}
    </ a>
  );
};

export default IconLink;
