import React from 'react';
import styles from './NoItems.module.css';


const NoItems = () => {
  return (
    <div className='grid justify-center mt-6 p-6 text-center w-full'>
      <div>
      <img className='mx-auto' src="/images/no_items.png" alt="" />
      </div>
      <p className='mt-4 text-gray-700'>You haven't added any items yet.</p>
      <p className='text-gray-700'>Please click the 'Add Now' button to add a new item.</p>
      <div className='mt-4'>
      <button type="button"
        className="mt-3 items-center px-4 py-2 text-white font-bold bg-custom-green">
        Add Now
      </button>
      </div>
    </div>
  );
};

export default NoItems;
