import React from 'react';
import styles from './Share.module.css';


const Share = () => {
  return (
    <div className='gap-4 justify-center sm:flex my-2'>
      <div>
        <button className='border-0 facebook text-white text-xs font-medium px-4 py-1'>
          <i className="fa-brands fa-facebook-f"></i>&nbsp; Share
        </button>
      </div>
      <div>
        <button className='border-0 whatsapp text-white text-xs font-medium px-2 py-1'>
          <i className="fa-brands fa-whatsapp"></i> &nbsp; WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Share;
