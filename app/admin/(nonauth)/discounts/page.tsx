'use client'
import NoItems from '@/components/admin/NoItems';
import IconLink from '@/components/ui/IconLink';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Discounts() {
    const router = useRouter()

    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto py-5 px-6 bg-white">

                <div className="flex justify-between">
                    <h5 className='text-gray-700 px-3 py-2 font-bold text-xl'>Discounts</h5>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <IconLink link='/admin/discounts/create' label='Add New' isRounded={true} iconName='fa-plus' />
                    </div>
                </div>
                {/* <NoItems /> */}

                {/* table */}
                <div className="relative overflow-x-auto mt-6">
                    <div className='min-table-width'>

                        <div className="font-extrabold text-base flex min px-6 py-2.5 bg-gray-50 overflow-x-auto sm:shrink-0">
                            <div className='w-4/12 px-4'>
                                Discount Name
                            </div>
                            <div className='w-3/12 px-4'>
                                Offer

                            </div>
                            <div className='w-2/12 px-4'>
                                Status

                            </div>
                            <div className='w-3/12 px-4'>
                                Discount Code

                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-4/12 px-4'>
                                <a href="javascript:;" className='text-blue-700 hover:underline text-base'>Black Friday</a>
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Rs. 700.00
                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                <button type="button" className="font-status border-gray-400 bg-gray-400 font-bold items-center px-4 text-white">
                                    Pending
                                </button>

                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                <i className="fa-regular fa-file"></i> BLKFRIDAY

                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-4/12 px-4'>
                                <a href="javascript:;" className='text-blue-700 hover:underline text-base'>Black Friday</a>
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Rs. 700.00
                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                <button type="button" className="font-status border-gray-400 bg-gray-400 font-bold items-center px-4 text-white">
                                    Pending
                                </button>

                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                <i className="fa-regular fa-file"></i> BLKFRIDAY

                            </div>
                        </div>
                        <div className="mt-2 font-normal flex px-6 py-2.5 border shadow-md my-2">
                            <div className='w-4/12 px-4'>
                                <a href="javascript:;" className='text-blue-700 hover:underline text-base'>Black Friday</a>
                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                Rs. 700.00
                            </div>
                            <div className='w-2/12 px-4 self-center'>
                                <button type="button" className="font-status border-green-400 bg-green-400 font-bold items-center px-4 text-white">
                                    Active
                                </button>

                            </div>
                            <div className='w-3/12 px-4 self-center'>
                                <i className="fa-regular fa-file"></i> BLKFRIDAY

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}