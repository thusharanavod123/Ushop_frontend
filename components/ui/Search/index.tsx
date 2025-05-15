import React from 'react';
import styles from './Search.module.css';
import FilterItem from '../FilterItem';
import SortItem from '../SortItem';

function FilterByFn({ items }: { items: any[] }) {
  return items.map((item, index) =>
  (
    <FilterItem label={item.label} id={item.id} />
  )
  )
};

const Search = ({ filterByOrder, filterByItems, sortBy }: {
  filterByOrder?: any[], filterByItems?: any, sortBy: any[]
}) => {

  return (
    <div className="flex gap-3 justify-between w-full">

      <div className="w-full">
        <input type="text" id='store-name' name='store-name' placeholder='Search' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
      </div>
      <div className='flex gap-3'>

        <div className="w-125">

          <button id="dropdownAvailCheckboxButton" data-dropdown-toggle="dropdownAvailability" className="w-full h-fit text-center inline-flex items-center px-4 py-1 font-bold brder-btn hover:text-white" type="button">Filter By <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
          {/* Dropdown menu*/}
          <div id="dropdownAvailability" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownAvailCheckboxButton">
              {
                filterByOrder && filterByOrder.length > 0 ?
                  <>
                    <li>
                      <div className='flex justify-between'>
                        <p className='text-sm font-medium'>Status</p>
                      </div>
                    </li>
                    <FilterByFn items={filterByOrder as any[]} />
                  </>
                  :
                  filterByItems && filterByItems.available && filterByItems.available.length > 0
                  &&
                  <>
                    <li>
                      <div className='flex justify-between'>
                        <p className='text-sm font-medium'>Availability</p>
                        <p className='text-sm font-medium'>-</p>
                      </div>
                    </li>
                    <FilterByFn items={(filterByItems as any).available as any[]} />
                    <li>
                      <div className='flex justify-between'>
                        <p className='text-sm font-medium'>categories</p>
                        <p className='text-sm font-medium'>+</p>
                      </div>
                    </li>
                    <FilterByFn items={(filterByItems as any).category as any[]} />

                  </>
              }
            </ul>
          </div>
        </div>
        <div className="w-125">

          <button id="dropdownSortButton" data-dropdown-toggle="dropdownSort" className="w-full h-fit text-center inline-flex items-center px-4 py-1 font-bold brder-btn hover:text-white" type="button">Sort By <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
          {/* Dropdown menu*/}
          <div id="dropdownSort" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSortButton">
              {
                sortBy.map((item, index) => (
                  <SortItem name={item.label} />
                ))
              }

            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Search;
