import React from 'react';
import styles from './FormGroupInput.module.css';


const FormGroupInput = ({ label, subLabel, isRequired, name, placeholder, id, leftWidth }: {
  label: string, subLabel: string, isRequired: boolean, name: string, placeholder: string, id: string, leftWidth:string
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block font-normal leading-6 text-gray-700"
      >
        {label} <small className={`${isRequired ? 'text-red-500' : 'text-gray-700'}`}>{isRequired ? '*Required' : '(Optional)'}</small>
      </label>
      <div className="mt-2">
        <div className="flex">
          <input type="text" className={`w-[${leftWidth}] block border-r-0 rounded-md rounded-r-none border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1`} disabled value={subLabel} />
          <input type="text" id={id} name={name} placeholder={placeholder} className={'rounded-l-none w-full px-2 block rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1'} />
        </div>
      </div>
    </>
  );
};

export default FormGroupInput;
