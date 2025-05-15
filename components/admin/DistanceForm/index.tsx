import React from 'react';
import styles from './DiscountForm.module.css';
import ImageCrop from '../ImageCrop';
import Btn from '@/components/ui/Btn';
import TrashIcon from '@/components/ui/TrashIcon';


const DistanceForm = () => {
  const handleCroppedImage = (croppedImage: any) => {
    // Handle the cropped image here, e.g., upload it to a server
  };
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto py-1">
        <div className="col-span-full mt-0 w-2/3 sm:max-md:w-full">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-7/12 lg:pr-2 md:pr-0 md:max-lg:pr-2">
              <div className="mt-2">
                <input type="text" id='discount-name' name='discount-name' placeholder='ex-: 1km or 1km - 5km' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
              </div>
            </div>
            <div className="md:shrink-0 md:w-3/12 lg:pr-2 md:pr-0 md:max-lg:pr-2">
              <div className="mt-2">
                <input type="text" id='discount-code' name='discount-code' placeholder='Price' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
              </div>
            </div>
            <div className="lg:pr-2 md:max-lg:pr-2 md:pr-0 md:shrink-0 md:w-2/12 self-end ">
              <div className="mt-2">
                <Btn label='Add' type='success' size='sm'/>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto mt-6">
          <table className="mb-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center px-6 py-3 text-base font-extrabold	">
                  Distance
                </th>
                <th scope="col" className="text-center px-6 py-3 text-base font-extrabold	">
                  Price(Rs)
                </th>
                <th scope="col" className="w-12 text-center px-6 py-3 text-base font-extrabold	">

                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="text-center px-6 py-1 text-gray-700 whitespace-nowrap text-base">
                  Not specified
                </td>
                <td className="text-center px-6 py-1 text-center text-base">
                  0
                </td>
                <td className="text-center px-6 py-1 text-center text-base">
                  <TrashIcon/>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="text-center px-6 py-1 text-gray-700 whitespace-nowrap text-base">
                  Not specified
                </td>
                <td className="text-center px-6 py-1 text-center text-base">
                  0
                </td>
                <td className="text-center px-6 py-1 text-center text-base">
                  <TrashIcon/>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="text-center px-6 py-1 text-gray-700 whitespace-nowrap text-base">
                  Not specified
                </td>
                <td className="text-center px-6 py-1 text-center text-base">
                  0
                </td>
                <td className="text-center px-6 py-1 text-center text-base">
                  <TrashIcon/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DistanceForm;
