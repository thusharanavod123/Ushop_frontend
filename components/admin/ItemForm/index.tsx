import React, { useState } from 'react';
import styles from './ItemForm.module.css';
import ImageCrop from '../ImageCrop';
import ConfirmDelete from '../ConfirmDelete';
import Btn from '@/components/ui/Btn';
import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import FormTextArea from '@/components/ui/FormTextArea';
import TrashIcon from '@/components/ui/TrashIcon';


const ItemForm = () => {
  const [isOpenDel, setIsOpenDel] = useState(false);

  const deleteItem = () => {
    setIsOpenDel(true);
  };

  const handleClose = () => {
    setIsOpenDel(false);
  };

  const visibilityOptions = ["Visible", "Not Visible"];

  const availabilityOptions = ["Available", "Not Available"];

  const unitOptions = ["Unit One", "Unit Two"];

  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto py-5 px-6 bg-white">

        <div className="flex justify-between pb-4 border-b">
          <h5 className='text-gray-700 px-3 py-2 font-bold text-xl'>Create Item</h5>
          <div className="flex gap-3">
            <Btn label='Submit Item' type='success' />
            <Btn label='Delete' type='del' />
          </div>
        </div>
        <div className="col-span-full mx-auto w-full mt-6">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-3/5 lg:pr-2 md:pr-0 md:max-lg:pr-2">
              <FormInput label='Product Name' isRequired={true} name='product-name' placeholder='Saman Handy Craft' id='product-name' />
            </div>
            <div className="md:shrink-0 md:w-1/5 lg:pl-2 md:pl-0 md:max-lg:pl-2">
              <FormSelect label='Visibility' id='visibility' options={visibilityOptions} />
            </div>
            <div className="md:shrink-0 md:w-1/5 lg:pl-2 md:pl-0 md:max-lg:pl-2">
              <FormSelect label='Availability' id='availability' options={availabilityOptions} />
            </div>
          </div>
        </div>
        <div className="col-span-full mx-auto w-full mt-6">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-1/3 lg:pr-2 md:pr-0 md:max-lg:pr-2">
              <FormInput label='Categories' isRequired={true} name='product-cat' placeholder='Search or Create Categories' id='product-cat' isSublink={true} />
            </div>
            <div className="md:shrink-0 md:w-1/3 lg:pl-2 md:pl-0 md:max-lg:pl-2">
              <FormInput label='Price' isRequired={true} name='product-price' placeholder='Enter After the Discounted Price' id='product-price' />
            </div>
            <div className="md:shrink-0 md:w-1/3 lg:pl-2 md:pl-0 md:max-lg:pl-2">
              <FormInput label='Original Price' isRequired={false} name='product-original-price' placeholder='Enter Before the Discounted Price' id='product-original-price' />

            </div>
          </div>
        </div>
        <div className="col-span-full mx-auto w-full mt-6">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-1/3 lg:pr-2 md:pr-0 md:max-lg:pr-2">
              <FormInput label='Weight, volume, or count' isRequired={true} name='product-count' placeholder='Count' id='product-count' />
            </div>
            <div className="md:shrink-0 md:w-1/3 lg:pl-2 md:pl-0 md:max-lg:pl-2">
              <FormSelect label='Unit' id='unit' options={unitOptions} isRequired={true} />
            </div>

          </div>
        </div>
        <div className="col-span-full mx-auto w-full mt-6">
          <div className="md:flex">
            <div className="md:shrink-0 md:w-full">
              <FormTextArea label='Description' id='description' placeholder='Write a short description'/>
            </div>

          </div>
        </div>
        <h5 className='text-gray-700 px-3 py-2 font-bold text-base mt-6 pl-0'>Images (10/10)</h5>
        <div className="col-span-full flex gap-x-6 mt-2 mx-auto w-full">
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>

            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg></button>
            <img src="/images/rectangle.png" alt="" />
          </div>
          <div className={styles.rel_pos}>
            <button className={styles.absolut_pos + ' border-0 text-black'}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg></button>
            <img src="/images/rectangle.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        {/* <ImageCrop src="/images/logo.png" onCrop={handleCroppedImage} /> */}
      </div>
      {/* Main modal */}
      <div id="categoryModal" tabIndex={-1} aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-none shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="border-b border-gray-300 dark:border-gray-600 flex items-center justify-between md:p-5 p-4 rounded-t">
              <h3 className="text-base font-bold text-gray-700 dark:text-white">
                Categories
              </h3>
              <button type="button"
                className="border-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="categoryModal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <div className="flex gap-3 justify-between w-full">

                <div className="w-full">
                  <input type="text" id='store-name' name='store-name' placeholder='Search' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
                </div>

              </div>
              <div className="relative overflow-x-auto mt-6">
                <table className="mb-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-base">
                        Category name
                      </th>
                      <th scope="col" className="px-6 py-3 text-base">
                        Number of Products
                      </th>
                      <th scope="col" className="px-6 py-3 text-base">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="px-6 py-1 text-gray-700 whitespace-nowrap dark:text-white">
                        Fruits
                      </td>
                      <td className="px-6 py-1 text-center">
                        25
                      </td>
                      <td className="px-6 py-1 text-center">
                        <TrashIcon/>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="px-6 py-1 text-gray-700 whitespace-nowrap dark:text-white">
                        Vegetables
                      </td>
                      <td className="px-6 py-1 text-center">
                        10
                      </td>
                      <td className="px-6 py-1 text-center">
                        <TrashIcon/>
                      </td>
                    </tr><tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="px-6 py-1 text-gray-700 whitespace-nowrap dark:text-white">
                        Sweets
                      </td>
                      <td className="px-6 py-1 text-center">
                        5
                      </td>
                      <td className="px-6 py-1 text-center">
                        <TrashIcon/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ConfirmDelete open={isOpenDel} onClose={handleClose} />
    </div>
  );
};

export default ItemForm;
