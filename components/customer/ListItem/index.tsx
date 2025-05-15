import React from 'react';
import styles from './ListItem.module.css';
import Item from '../Item';


const ListItem = ({imageUrl, title, discountPrice, price, qty, desc, index}:{imageUrl:string, title:string, discountPrice:string, price:string, qty:string, desc:string, index:number}) => {
  return (
    <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow max-sm:mx-auto">
      <a href="#">
        <img className="rounded-t-lg w-full" src={imageUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 font-medium	text-sm text-gray-800">{title}</h5>
        </a>
        <div className='flex gap-3 mb-1'>
          <p className='text-custom-green font-bold text-xs'>{discountPrice}</p>
          <p className='line-through font-normal font-9 text-gray-700'>{price}</p>
        </div>
        <p className='font-bold text-xs text-gray-700'>{qty}</p>
        <div className='flex gap-2 text-gray-800'>
          <p className='font-normal font-10'>{desc}</p>
          <a className='font-normal font-10 text-blue-600 underline' data-modal-target={`item_modal-${index}`} data-modal-toggle={`item_modal-${index}`} href="javascript:;">See More...</a>
        </div>
        <div className='mt-3'>
          <p className='text-xs font-normal	text-gray-800 mb-1'>Quantity</p>
          <div className="w-full">
            <div className='flex'>
              <button className='font-bold bg-custom-green-cat px-3 rounded-r-none text-white'>-</button>
              <div className="flex">
                <input type="text" value="Unit" className={`bg-gray-100 font-bold w-[55px] block border-r-0 rounded-md rounded-r-none rounded-l-none border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1`} disabled />
                <input type="text" name='qty' placeholder='0' className={'bg-gray-100 rounded-l-none w-full px-2 block rounded-md rounded-r-none border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1'} />
              </div>
              <button className='font-bold bg-custom-green-cat px-3 rounded-l-none text-white'>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Item index={index}/>
    </>
  );
};

export default ListItem;
