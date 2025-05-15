import React, { useState } from 'react';
import styles from './PaymentForm.module.css';
import ImageCrop from '../ImageCrop';
import BankTransferForm from '../BankTransferForm';
import ToggleBtn from '@/components/ui/ToggleBtn';


const PaymentForm = () => {
  const [isBankTransfer, setIsBankTransfer] = useState(false);

  const changeBankTransfer:any = ()=>{
    setIsBankTransfer(!isBankTransfer);
  }

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto py-5">

        <div className='col-span-full'>
          <div className="md:flex gap-3 ">
            <div className='w-1/2 md:shrink-0 sm:max-md:w-full max-sm:w-full sm:max-md:mr-0  max-sm:mr-0'>
              <div className="w-full p-6 bg-white border border-gray-200 rounded-md shadow">
                <div className="flex justify-between">
                  <p className='text-sm	font-medium	'>Cash on Delivery</p>
                  <ToggleBtn/>
                  {/* <label className="cursor-pointer inline-flex items-center relative">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                  </label> */}
                </div>
              </div>
            </div>
            <div className='w-1/2 md:shrink-0 sm:max-md:w-full max-sm:w-full sm:max-md:ml-0 max-sm:mt-6 sm:max-md:mt-6 max-sm:mt-6 max-sm:ml-0'>
              <div className={`w-full p-6 bg-white border border-gray-200 rounded-md shadow trans ${isBankTransfer?'max-trans':''}`}>
                <div className="flex justify-between">
                  <p className='text-sm	font-medium	'>Bank Transfer</p>
                  <ToggleBtn/>
                  {/* <label className="cursor-pointer inline-flex items-center relative">
                    <input type="checkbox" value="" onClick={() => setIsBankTransfer(!isBankTransfer)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                  </label> */}
                </div>
                {isBankTransfer && 
                  <div className='slide-in-top'>
                    <BankTransferForm/>
                  </div>
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
