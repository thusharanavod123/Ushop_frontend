'use client'
import { useEffect } from "react"
import { Chart } from 'chart.js/auto';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import ReportCard from "@/components/ui/ReportCard";

export default function Reporting() {
    useEffect(() => {
        const dateRangePickerEl = document.getElementById('dateRangePicker');
        new DateRangePicker(dateRangePickerEl, {
            // options
        });
        const ctxCat = (document as any).getElementById('categoryChart').getContext('2d') as any;
        const catChart = new Chart(ctxCat, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [10, 20, 15, 5, 50],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                        ],
                    },
                ],
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            },
            options: {
                plugins: {
                },
            },
        });
        const ctxAvailable = (document as any).getElementById('availabilityChart').getContext('2d') as any;
        const availableChart = new Chart(ctxAvailable, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [10, 20, 15, 5, 50],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                        ],
                    },
                ],
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            },
            options: {
                plugins: {

                },
            },
        });
        return () => {
            availableChart.destroy();
            catChart.destroy();
        };
    }, []);

    return (
        <div className="w-full bg-gray-100">
            <div className="container mx-auto py-5 px-6 bg-white">

                <div className="flex justify-between border-b">
                    <h5 className='text-gray-700 px-3 py-2 font-bold text-xl'>Reporting</h5>
                </div>

                <div className="mt-6">
                    <div date-rangepicker id="dateRangePicker" className="flex items-center">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input name="start" type="text" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1 ps-10 rounded-r-none sm:md-max:ps-5" placeholder="Select date start" />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input name="end" type="text" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1 ps-10 rounded-l-none sm:md-max:ps-5" placeholder="Select date end" />
                        </div>
                    </div>
                    <div className='col-span-full'>
                        <div className="flex flex-wrap">
                            <div className='w-full pr-6 my-6 sm:w-1/2 md:w-2/4 lg:w-1/4'>
                                <ReportCard label="Pending Orders" total="20,000.00" count="25" type="pending" />
                            </div>
                            <div className='w-full pr-6 my-6 sm:w-1/2 md:w-2/4 lg:w-1/4'>
                                <ReportCard label="Confirmed Orders" total="20,000.00" count="25" type="confirm" />

                            </div>
                            <div className='w-full pr-6 my-6 sm:w-1/2 md:w-2/4 lg:w-1/4'>
                                <ReportCard label="Delivered Orders" total="20,000.00" count="25" type="delivered" />
                            </div>
                            <div className='w-full pr-6 my-6 sm:w-1/2 md:w-2/4 lg:w-1/4'>
                                <ReportCard label="Canceled Orders" total="20,000.00" count="25" type="canceled" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full'>
                        <div className="flex flex-wrap">
                            <div className='w-full pr-4 my-6 md:w-full lg:w-1/3'>
                                <div className="bg-white border border-gray-200 py-2 rounded-md shadow w-full">
                                    <div className="flex justify-between border-b">
                                        <div className='grid'>
                                            <p className='text-lg text-grey-700 font-bold ps-8 mb-2'>Categories</p>
                                        </div>
                                    </div>
                                    <canvas id='categoryChart'></canvas>
                                </div>
                            </div>
                            <div className='w-full pr-4 my-6 md:w-full lg:w-1/3'>
                                <div className="bg-white border border-gray-200 py-2 rounded-md shadow w-full">
                                    <div className="flex justify-between border-b">
                                        <div className='grid'>
                                            <p className='text-lg text-grey-700 font-bold ps-8 mb-2'>Availability</p>
                                        </div>
                                    </div>
                                    <canvas id='availabilityChart'></canvas>
                                </div>
                            </div>
                            <div className='w-full pr-4 my-6 md:w-full lg:w-1/3'>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}