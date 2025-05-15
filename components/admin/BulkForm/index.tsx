import React from 'react';
import styles from './BulkForm.module.css';
import IconBtn from '@/components/ui/IconBtn';


const BulkForm = () => {
  return (
    <div className="container mx-auto py-5 px-6 bg-white mb-10">

      <div className="flex justify-between border-b py-2.5 px-8">
        <h5 className='text-gray-700 pr-3 py-2 font-bold text-xl'>Create Items in Bulk</h5>
        <a href="javascript:;" className='class="font-medium hover:underline self-center text-blue-600'>Download</a>
      </div>
      <div className='bg-gray-100 px-8 mt-8'>

        <div className="border-b grid justify-center px-8 py-2.5">
          <h5 className='text-gray-700 pr-3 py-2 font-bold text-xl'>Upload Excel Sheet</h5>
          <IconBtn label='Choose Excel Sheet' iconName='fa-upload' />
        </div>
      </div>
    </div>
  );
};

export default BulkForm;
