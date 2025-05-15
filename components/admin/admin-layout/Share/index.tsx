import React from 'react';
import styles from './Share.module.css';


const Share = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex gap-4 justify-center">
          <p className='text-gray-700 text-sm self-center'>Share Store : </p>
          <img
                className="h-8 w-auto"
                src="/images/facebook.png"
                alt="Your Company"
              />
            <img
                className="h-8 w-auto"
                src="/images/whatsapp.png"
                alt="Your Company"
              />
        </div>
      </div>
      </nav>
  );
};

export default Share;
