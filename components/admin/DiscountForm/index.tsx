import React from 'react';
import styles from './DiscountForm.module.css';
import ImageCrop from '../ImageCrop';
import FormInput from '@/components/ui/FormInput';
import Btn from '@/components/ui/Btn';


const DiscountForm = () => {
  const handleCroppedImage = (croppedImage: any) => {
    // Handle the cropped image here, e.g., upload it to a server
  };
  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto py-5 px-6 bg-white">

        <div className="flex justify-between pb-4 border-b">
          <h5 className='text-gray-700 px-3 py-2 font-bold text-xl'>Create Discount</h5>
          <select id="status" className="h-10 py-0 border-btn font-bold focus:ring-transparent border-0 active:ring-transparent focus:border-green-500">
            <option className='bg-white text-green-600' selected value="Active">Active</option>
            <option className='bg-white text-green-600' value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="md:flex gap-8">
          <div className="col-span-full mx-auto md:w-4/12 mt-6  max-sm:px-4">
            <div className="md:shrink-0 w-full">
              <FormInput label='Discount Name' isRequired={true} name='discount-name' placeholder='Ex -: Black friday' id='discount-name' />
            </div>
            <div className="md:shrink-0 w-full mt-4">
              <FormInput label='Applies to' isRequired={false} name='apply' placeholder='Search and select' id='apply' />
            </div>
            <div className="mt-2 font-normal flex px-1 py-2.5 border shadow-md my-2">
              <div className='w-1/6 px-4 self-center'>
                <img className='self-center' src="/images/item.png" alt="" />
              </div>
              <div className='w-4/6 px-4'>

                <div className='w-full px-4 self-center text-lg'>
                  Lorem ipsum
                </div>
                <div className='w-full px-4 self-center font-normal'>
                  Rs. 10

                </div>
              </div>
              <div className="w-1/6 px-4 self-center text-right">
                <i className="fa-regular fa-circle-xmark text-xl text-gray-700"></i>
              </div>
            </div>
          </div>
          <div className="col-span-full mx-auto md:w-4/12 mt-6  max-sm:px-4">
            <div className="md:shrink-0 w-full">
              <FormInput label='Discount Code' isRequired={true} name='discount-code' placeholder='Ex -: Black friday' id='discount-code' />
            </div>
            <div className="md:shrink-0 w-full mt-4">
              <FormInput label='Start Date' isRequired={false} name='start-date' placeholder='December, 4,2023' id='start-date' />
            </div>
            <div className="md:shrink-0 w-full mt-4">
              <FormInput label='End Date' isRequired={false} name='end-date' placeholder='December, 4,2023' id='end-date' />
            </div>
          </div>
          <div className="col-span-full mx-auto md:w-4/12 mt-6  max-sm:px-4">
            <div className='bg-gray-100 mt-3 mx-auto p-6 rounded md:max-lg:text-xs'>
              <div>
                <div className="inline-flex" role="group">
                  <button type="button" className="rounded-r-none px-4 py-1 font-medium brder-btn hover:text-white">
                    Percentage
                  </button>
                  <button type="button" className="md:max-lg:px-2 md:max-lg:py-2 rounded-l-none bg-custom-green font-bold items-center px-4 py-1 text-white">
                    Fixed amount
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex">
                  <input type="text" disabled className='w-[50px] rounded-md rounded-r-none border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' value='Rs. ' />
                  <input type="number" id='dicount' name='discount-code' placeholder='' className='rounded-l-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pb-4 mt-12  max-sm:px-4">
          <Btn label='Save' type='success' />
          <Btn label='Delete' type='del' />
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
