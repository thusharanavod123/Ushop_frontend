import React from 'react';
import styles from './Item.module.css';
import ItemCarousel from '../ItemCarousel';


const Item = ({ index }: { index: number }) => {
  const items = ['/images/customer_item.png', '/images/customer_item.png', '/images/customer_item.png'];
  return (
    <div id={`item_modal-${index}`} tabIndex={-1} aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <button type="button"
              className="text-sm border-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide={`item_modal-${index}`}>
              <i className="fa-solid fa-xmark"></i>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-6 space-y-4">
            <ItemCarousel items={items} />
            <div className="flex mt-3 justify-between">
              <h5 className='text-2xl font-medium text-gray-800'>Lorem ipsum <small className='text-xs bg-gray-200 px-3 rounded'>Fruit</small></h5>
              <a href="javascript:;" className='text-sm self-end'><i className="fa-solid fa-share-nodes"></i></a>
            </div>
            <div className="mt-4">
              <p className='text-gray-600 font-normal text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus in urna in vehicula. Nulla ut ipsum ac nulla feugiat hendrerit at non sem. Praesent sit amet placerat metus. Praesent fringilla massa sit amet mattis auctor.
              </p>
            </div>
            <div className="mt-6 flex justify-between">
              <p className='text-gray-700 font-medium text-base'>
                Price
              </p>
              <h5 className='text-lg font-medium font-gray-700'>
                Rs 3000.00 &nbsp;
                <small className='line-through text-base font-normal text-gray-700'>Rs 3200.00</small>
              </h5>
            </div>
            <div className="mt-6 flex justify-between">
              <p className='text-gray-700 font-medium text-base'>
              Quantity
              </p>
              <div className='flex'>
              <button className='font-bold bg-white px-3 rounded-r-none text-gray-700 border-1 border-r-0 border-gray-700'>-</button>
              <div className="flex">
                <input type="text" name='qty' placeholder='0' className={'block border-0 border-gray-700 border-l-0 border-r-0 focus-visible:border-1 focus-visible:outline-0 focus:ring-green-400 focus:ring-inset px-2 py-1.5 ring-1 ring-gray-700 ring-inset rounded-l-none rounded-md rounded-r-none shadow-sm sm:leading-6 sm:text-sm text-gray-700 w-full ring-l-0 ring-r-0'} />
              </div>
              <button className='font-bold bg-white px-3 rounded-l-none text-gray-700 border-1 border-l-0 border-gray-700'>+</button>
            </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button data-modal-hide={`item_modal-${index}`} type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              I accept
            </button>
            <button data-modal-hide={`item_modal-${index}`} type="button"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
