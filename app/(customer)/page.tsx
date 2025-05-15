'use client';

import BtmCart from '@/components/customer/BtmCart';
import Carousell from '@/components/customer/Carousell';
import ListItem from '@/components/customer/ListItem';
import ProgressBar from '@/components/customer/ProgressBar'
import Share from '@/components/customer/Share'

export default function Home() {
  const categories = [{ label: 'All', status: 'active' }, { label: 'Lorem ipsum dolor sit', status: 'inactive' }, { label: 'Dolor', status: 'inactive' }, { label: 'Lorem', status: 'inactive' }, { label: 'Sit', status: 'inactive' }];
  const items = [
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
    { image: '/images/customer_item.png', name: 'Lorem ipsum', price: 'Rs. 3,000.00', discountPrice: 'Rs. 3,250.00', qty: '150G', description: 'Lorem ipsum dolor sit amet.' },
  ];

  return (
    <div className='mx-4 mb-95'>
      <div className="pb-4 w-full bg-white border border-gray-200 rounded">
        <div className='relative'>
          <div>
            <img className="w-full" src="/images/banner.png" alt="" />
          </div>
          <div className="w-1/6 absolute store-card">
            <img className="w-full" src="/images/store_logo.png" alt="" />
          </div>
        </div>
        <div className='w-full text-center mt-24 px-8'>
          <h5 className='text-4xl font-bold text-gray-700'>Lorem ipsum</h5>
          <p className='text-base font-normal	text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus in urna in vehicula. Nulla ut ipsum ac nulla feugiat hendrerit at non sem. Praesent sit amet placerat metus. Praesent fringilla massa sit amet mattis auctor.
          </p>
          <Share />
          <h5 className='text-2xl font-medium mt-2 text-gray-700'>Hotline</h5>
          <div className='flex justify-center text-green-600 font-bold text-lg'>
            <i className="fa-solid fa-square-phone self-center mr-2"></i>
            <p className='self-center'>
              xxxxxxxxxx
            </p>
            <p className='self-center'>
              /
            </p>
            <p className='self-center'>
              xxxxxxxxxx
            </p>
          </div>
          <p className='text-xs font-bold'>
            Address: {'Lorem ipsum'}
          </p>
        </div>
      </div>
      <div className="px-8 mx-auto">
        <div className='pt-8 pb-8 border-b-2'>
          <ProgressBar />
        </div>
        <div className="flex mt-8 mb-4">
          <h5 className='text-gray-700 py-2 font-medium text-2xl'>Items (7)</h5>
        </div>
        <Carousell items={categories} />
        <div className='mt-4'>

          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              items.map((item, index) => (
                <ListItem imageUrl={item.image} title={item.name} discountPrice={item.discountPrice} price={item.price} qty={item.qty} desc={item.description} index={index} />
              ))
            }

          </div>
          <BtmCart total='Rs.3000.00' qty='2' />
        </div>
      </div>
      
    </div>
  )
}
