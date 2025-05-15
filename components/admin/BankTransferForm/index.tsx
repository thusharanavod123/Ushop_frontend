import React from 'react';
import styles from './BankTransferForm.module.css';


const BankTransferForm = () => {
  return (
    <div className='mt-6'>
      <div className="w-full">
        <label htmlFor="store-name" className="block text-base font-light leading-6 text-gray-700">
          Name of the bank <small className='text-red-500'>*Required</small>
        </label>
        <div className="mt-2">
          <input type="text" id='store-name' name='store-name' placeholder='Bank of Ceylon' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
        </div>
      </div>
      <div className="w-full mt-5">
        <label htmlFor="store-name" className="block text-base font-light leading-6 text-gray-700">
          Branch <small className='text-red-500'>*Required</small>
        </label>
        <div className="mt-2">
          <input type="text" id='store-name' name='store-name' placeholder='Nugegoda' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
        </div>
      </div>
      <div className="w-full mt-5">
        <label htmlFor="store-name" className="block text-base font-light leading-6 text-gray-700">
          Account No. <small className='text-red-500'>*Required</small>
        </label>
        <div className="mt-2">
          <input type="text" id='store-name' name='store-name' placeholder='xxxx-xxxx-xxxx' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
        </div>
      </div>
      <div className="w-full mt-5">
        <label htmlFor="store-name" className="block text-base font-light leading-6 text-gray-700">
          Beneficiary Name <small className='text-red-500'>*Required</small>
        </label>
        <div className="mt-2">
          <input type="text" id='store-name' name='store-name' placeholder='Account holder name' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
        </div>
      </div>
    </div>
  );
};

export default BankTransferForm;
