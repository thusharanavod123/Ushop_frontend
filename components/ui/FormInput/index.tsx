import React from 'react';
import styles from './FormInput.module.css';


const FormInput = ({ label, isRequired, name, placeholder, id, isSublink }: {
  label: string, isRequired: boolean, name: string, placeholder: string, id: string, isSublink?: boolean
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block font-normal leading-6 text-gray-700"
      >
        {label} <small className={`${isRequired ? 'text-red-500' : 'text-gray-700'}`}>{isRequired ? '*Required' : '(Optional)'}</small>
        {
          isSublink &&
          <small className='ml-2'>
            <a href="javascript:;" data-modal-target="categoryModal" data-modal-toggle="categoryModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Manage Categories</a>
          </small>
        }
      </label>
      <div className="mt-2">
        <input type="text" id={id} name={name} placeholder={placeholder} className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 focus-visible:outline-0 focus-visible:border-1' />
      </div>
    </>
  );
};

export default FormInput;
