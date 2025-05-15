'use client'
import NoItems from '@/components/admin/NoItems';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { itemFilters, sorts } from '@/libs/shared/constants';
import Search from '@/components/ui/Search';
import IconLink from '@/components/ui/IconLink';
import ToggleBtn from '@/components/ui/ToggleBtn';
import TrashIcon from '@/components/ui/TrashIcon';

export default function ManageItems() {
    const router = useRouter()

    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto py-5 px-6 bg-white">

                <div className="flex justify-between">
                    <h5 className='text-gray-700 px-3 py-2 font-bold text-xl'>Items (0)</h5>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <IconLink link='/admin/manage-items/create' label='Add Item' isRounded={false} iconName='fa-plus' />
                        <button type="button" id="dropdownBulkButton" data-dropdown-toggle="dropdownBulk" className="bg-custom-green font-bold items-center px-4 py-2 rounded-l-none text-white">
                            <i className="fa-solid fa-angle-down"></i>
                        </button>
                        {/* Dropdown menu*/}
                        <div id="dropdownBulk" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBulkButton">
                                <li>
                                    <a href="/admin/manage-items/bulk" className="hover:text-white block px-4 py-2 brder-btn dark:hover:bg-gray-600 dark:hover:text-white">Add Item in bulk</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <Search filterByItems={itemFilters} sortBy={sorts} />
                </div>
                {/* <NoItems /> */}

                {/* table */}
                <div className="relative overflow-x-auto mt-6">
                    <div className='min-table-width'>

                        <div className="font-extrabold text-base flex min px-6 py-2.5 bg-gray-50 overflow-x-auto sm:shrink-0">
                            <div className='w-1/12 px-4 '>

                            </div>
                            <div className='w-3/12 px-4'>
                                Name
                            </div>
                            <div className='w-3/12 px-4'>
                                Price

                            </div>
                            <div className='w-2/12 px-4'>
                                Visibility

                            </div>
                            <div className='w-2/12 px-4'>
                                In Stock/ Out of Stock

                            </div>
                            <div className='w-1/12 px-4'>

                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-1/12 px-4'>
                                <img className='self-center' src="/images/item.png" alt="" />
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Lorem ipsum
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Rs. 10

                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                Visible

                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                <ToggleBtn />
                            </div>
                            <div className="w-1/12 px-4 self-center">
                                <TrashIcon/>
                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-1/12 px-4'>
                                <img className='self-center' src="/images/item.png" alt="" />
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Lorem ipsum
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Rs. 10

                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                Visible

                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                <ToggleBtn />
                            </div>
                            <div className="w-1/12 px-4 self-center">
                                <TrashIcon/>
                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-1/12 px-4'>
                                <img className='self-center' src="/images/item.png" alt="" />
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Lorem ipsum
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Rs. 10

                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                Visible

                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                <ToggleBtn />
                            </div>
                            <div className="w-1/12 px-4 self-center">
                                <TrashIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}