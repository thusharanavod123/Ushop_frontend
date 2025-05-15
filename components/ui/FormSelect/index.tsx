import React from 'react';
import styles from './FormSelect.module.css';


const FormSelect = ({ label, options, id, isRequired }: {
  label: string, options: any[], id: string, isRequired?:boolean
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block font-normal leading-6 text-gray-700">
        {label} {isRequired ?<small className='text-red-500'>*Required</small>:<small>(Optional)</small> }
      </label>
      <div className="mt-2">
        <select id={id} className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1">
          {options.map((item, index) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FormSelect;
