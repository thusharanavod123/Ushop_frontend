'use client'
import { useRouter } from 'next/navigation'
import NoItems from '@/components/admin/NoItems';
import Link from 'next/link';
import styles from './orders.module.css';
import { orderFilters, sorts } from '@/libs/shared/constants';
import Search from '@/components/ui/Search';

export default function Orders() {
    
    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto py-5 px-6 bg-white">

                <div className="flex justify-between">
                    <h5 className='text-gray-700 px-3 py-2 font-bold text-xl'>Orders (0)</h5>
                </div>

                <div className="mt-6">
                    <Search filterByOrder={orderFilters} sortBy={sorts}/>
                </div>
                {/* <NoItems /> */}

                {/* table */}
                <div className="relative overflow-x-auto mt-6">
                    <div className='min-table-width'>

                        <div className="font-extrabold text-base flex min px-6 py-2.5 bg-gray-50 overflow-x-auto sm:shrink-0">
                            <div className='w-1/12 px-4 '>
                                #
                            </div>
                            <div className='w-4/12 px-4'>
                                Customer Name
                            </div>
                            <div className='w-3/12 px-4'>
                                Amount

                            </div>
                            <div className='w-2/12 px-4'>
                                Status

                            </div>
                            <div className='w-2/12 px-4'>
                                Placed Date

                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-1/12 px-4'>
                                #
                            </div>
                            <div className='w-4/12 px-4'>
                                <a href="/admin/orders/order" className='text-blue-700 hover:underline text-base'>Lorem ipsum</a>
                            </div>
                            <div className='w-3/12 px-4'>
                                Rs. 700.00

                            </div>
                            <div className='w-2/12 px-4'>
                                <button type="button" className="font-status border-gray-400 bg-gray-400 font-bold items-center px-4 text-white">
                                    Pending
                                </button>

                            </div>
                            <div className='w-2/12 px-4'>
                                12/12/2023

                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-1/12 px-4'>
                                #
                            </div>
                            <div className='w-4/12 px-4'>
                                <a href="/admin/orders/order" className='text-blue-700 hover:underline text-base'>Lorem ipsum</a>
                            </div>
                            <div className='w-3/12 px-4'>
                                Rs. 700.00

                            </div>
                            <div className='w-2/12 px-4'>
                                <button type="button" className="font-status border-gray-400 bg-gray-400 font-bold items-center px-4 text-white">
                                    Pending
                                </button>

                            </div>
                            <div className='w-2/12 px-4'>
                                12/12/2023

                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-1/12 px-4'>
                                #
                            </div>
                            <div className='w-4/12 px-4'>
                                <a href="/admin/orders/order" className='text-blue-700 hover:underline text-base'>Lorem ipsum</a>
                            </div>
                            <div className='w-3/12 px-4'>
                                Rs. 700.00

                            </div>
                            <div className='w-2/12 px-4'>
                                <button type="button" className="font-status border-gray-400 bg-gray-400 font-bold items-center px-4 text-white">
                                    Pending
                                </button>

                            </div>
                            <div className='w-2/12 px-4'>
                                12/12/2023

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}