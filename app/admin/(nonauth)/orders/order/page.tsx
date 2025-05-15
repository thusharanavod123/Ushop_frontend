'use client'
import NoItems from '@/components/admin/NoItems';
import BreadCrumb from '@/components/admin/admin-layout/BreadCrumb';
import Link from 'next/link';

export default function Order() {
    return (
        <div className="w-full bg-gray-100">
            <BreadCrumb linkString='Orders' linkOne='orders' linkTwo='Order'/>
            <div className="container mx-auto py-5 px-6 bg-white mb-10">

                <div className="flex justify-between border-b py-2.5 px-8">
                    <h5 className='text-gray-700 pr-3 py-2 font-bold text-xl'>#624</h5>
                    <a href="javascript:;" className='class="font-medium hover:underline self-center text-blue-600'>Download</a>
                </div>
                <div className='px-8'>
                    <div className="flex justify-between py-2.5">
                        <h5 className='text-gray-700 pr-3 py-2 font-bold text-base'>Order Details</h5>
                        <select id="status" className="py-0 border-btn font-bold focus:ring-transparent border-0 active:ring-transparent focus:border-green-500">
                            <option className='bg-white text-green-600' selected value="Pending">Pending</option>
                            <option className='bg-white text-green-600' value="Confirmed">Confirmed</option>
                            <option className='bg-white text-green-600' value="Delivered">Delivered</option>
                            <option className='bg-white text-green-600' value="Cancelled">Cancelled</option>
                        </select>
                    </div>

                    <div className="border border-1 border-gray-400 rounded-lg">
                        <div className="py-8 px-12">
                            <div className="flex justify-between py-2.5 px-8">
                                <h5 className='text-gray-700 pr-3 py-2 font-bold text-base'>Payment : Cash on Delivery</h5>
                                <div className="grid">
                                    <h5 className='text-gray-700 font-bold text-base'>
                                        Placed Date : 22/12/2023
                                    </h5>
                                    <h5 className='text-gray-700 font-bold text-base'>
                                        Time : 22:12
                                    </h5>
                                </div>
                            </div>
                            <div className="relative overflow-x-auto mt-6">
                                <table className="mb-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-base">
                                                Quantity
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-base">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-base">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-base">
                                                Sub Total
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-base">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="text-base px-6 py-1 text-gray-700 whitespace-nowrap dark:text-white">
                                                1
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Orange
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Rs. 100
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Rs. 100
                                            </td>
                                            <td className="text-xl	 px-6 py-1">
                                                <button className='border-0 text-gray-700'>
                                                    <i className="fa-regular fa-circle-xmark"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="text-base px-6 py-1 text-gray-700 whitespace-nowrap dark:text-white">
                                                1
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Orange
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Rs. 100
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Rs. 100
                                            </td>
                                            <td className="text-xl	 px-6 py-1">
                                                <button className='border-0 text-gray-700'>
                                                    <i className="fa-regular fa-circle-xmark"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="text-base px-6 py-1 text-gray-700 whitespace-nowrap dark:text-white">
                                                1
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Orange
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Rs. 100
                                            </td>
                                            <td className="text-base px-6 py-1">
                                                Rs. 100
                                            </td>
                                            <td className="text-xl px-6 py-1">
                                                <button className='border-0 text-gray-700'>
                                                    <i className="fa-regular fa-circle-xmark"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex">
                                <div className="ml-auto w-1/2">

                                    <div className="relative overflow-x-auto mt-6 ">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <tbody>
                                                <tr className="bg-white dark:bg-gray-800">
                                                    <td scope="row" className="font-extrabold text-right text-base px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white">
                                                        Sub Total
                                                    </td>
                                                    <td className="text-gray-900 font-extrabold text-right text-base px-6 py-1">
                                                        Rs.750.00
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-800">
                                                    <td scope="row" className="font-extrabold text-right text-base px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white">
                                                        Discount
                                                    </td>
                                                    <td className="text-gray-900 font-extrabold text-right text-base px-6 py-1">
                                                        Rs.100.00
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-800">
                                                    <td scope="row" className="font-extrabold text-right py-1 text-base px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                        Delivery Charge
                                                    </td>
                                                    <td className="text-gray-900 font-extrabold text-right text-base px-6 py-1">
                                                        Rs.150.00
                                                    </td>
                                                </tr>

                                            </tbody>
                                            <tfoot>
                                                <tr className="font-semibold text-gray-900 dark:text-white">
                                                    <td scope="row" className="text-right font-extrabold px-6 py-3 text-3xl">Total</td>
                                                    <td className="text-right font-extrabold px-6 py-3 text-3xl">Rs.800.00</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-between py-2.5 mt-6">
                        <h5 className='text-gray-700 pr-3 py-2 font-bold text-base'>Customer Details</h5>
                    </div>

                    <div className="border border-1 border-gray-400 rounded-lg mb-12">
                        <div className="py-8 px-12">
                            <div className="flex">
                                <div className="ml-auto w-full">

                                    <div className="relative overflow-x-auto ">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <tbody>
                                                <tr className="border-b bg-white dark:bg-gray-800">
                                                    <td scope="row" className="py-2 font-extrabold text-right text-base px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white">
                                                        Contact Name :
                                                    </td>
                                                    <td className="text-gray-900 font-normal text-left text-base px-6 py-1">
                                                        Chathuranga Pathum
                                                    </td>
                                                    <td className='w-40'></td>
                                                </tr>
                                                <tr className="border-b bg-white dark:bg-gray-800">
                                                    <td scope="row" className="py-2 font-extrabold text-right text-base px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white">
                                                        Contact No. :
                                                    </td>
                                                    <td className="text-gray-900 font-normal text-left text-base px-6 py-1">
                                                    077-1524618
                                                    </td>
                                                    <td className='w-40'></td>
                                                </tr>
                                                <tr className="border-b bg-white dark:bg-gray-800">
                                                    <td scope="row" className="font-extrabold text-right py-1 text-base px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                        Delivery address :
                                                    </td>
                                                    <td className="text-gray-900 font-normal text-left text-base px-6 py-1">
                                                    No 234 Bandarawela By Pass Rd, Bandarawela
                                                    </td>
                                                    <td className='w-40'></td>
                                                </tr>
                                                <tr className="border-b bg-white dark:bg-gray-800">
                                                    <td scope="row" className="font-extrabold text-right py-1 text-base px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                                        Comment :
                                                    </td>
                                                    <td className="text-gray-900 font-normal text-left text-base px-6 py-1">
                                                    Half of the price has been paid
                                                    </td>
                                                    <td className='w-40'></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}