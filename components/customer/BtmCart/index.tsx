import React from 'react';
import styles from './BtmCart.module.css';


const BtmCart = ({ qty, total }: { qty: string, total: string }) => {
  return (
    <div className="bottom-cart fixed flex justify-center left-0 w-full z-20">
      <div className="inline-flex rounded-lg shadow-2xl	" role="group">
        <button type="button" className="bg-custom-green-cat px-6 max-sm:px-2 py-3 text-xl font-medium text-white rounded-r-none border-0 rounded-lg">
          <small className='rounded-full px-2 py-1 bg-white text-gray-700'>{qty}</small>&nbsp;Items
        </button>
        <button type="button" className="bg-custom-green-cat px-6 max-sm:px-2 py-3 text-xl font-medium text-white rounded-none border-0">
          <i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart
        </button>
        <button type="button" className="bg-custom-green-cat px-6 max-sm:px-2 py-3 text-xl font-medium text-white rounded-l-none border-0 rounded-lg">
          {total}
        </button>
      </div>
    </div>
  );
};

export default BtmCart;
