import React from 'react';
import styles from './ProgressBar.module.css';
import ProgressItem from '@/components/ui/ProgressItem';


const ProgressBar = () => {
  return (


    <ol className="flex items-center w-full">
      <li className="after:border-4 after:border-b after:border-gray-400 after:content-[''] after:h-1 after:inline-block after:w-full flex items-center w-full mt-m-5">
        <div className="grid lg:w-[48px] md:w-10 sm:w-[40px] max-sm:w-[40px]">
          <ProgressItem label='Items' number='1' />
        </div>
      </li>
      <li className="after:border-4 after:border-b after:border-gray-400 after:content-[''] after:h-1 after:inline-block after:w-full flex items-center w-full mt-m-5">
        <div className="grid lg:w-[48px] md:w-10 sm:w-[40px] max-sm:w-[40px]">
          <ProgressItem label='Review' number='2' />

        </div>
      </li>
      <li className="flex items-center">
        <div className="grid">
          <ProgressItem label='Submit' number='3' />

        </div>
      </li>
    </ol>

  );
};

export default ProgressBar;
