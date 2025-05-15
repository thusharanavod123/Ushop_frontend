import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <div className='flex justify-center py-6 border-t-2'>
        <p className='text-sm '>Powered by <small className='text-sm font-bold'>Ushop</small></p>
    </div>
  );
};

export default Footer;
